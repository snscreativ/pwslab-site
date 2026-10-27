const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
function load(file, mocks = {}) {
  const output = ts.transpileModule(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', output)(name => {
    if (name in mocks) return mocks[name];
    throw new Error(`Unexpected import: ${name}`);
  }, module, module.exports);
  return module.exports;
}
const rules = load('lib/site-banners.ts');
test('JST date-only start/end, optional boundaries, exact timestamps', () => {
  const start = rules.bannerDate('2026-10-27');
  const end = rules.bannerDate('2026-10-27', true);
  assert.equal(start, Date.parse('2026-10-26T15:00:00Z'));
  assert.equal(end, Date.parse('2026-10-27T15:00:00Z'));
  assert.equal(rules.bannerDate(undefined), null);
  assert.equal(rules.bannerDate('2026-10-27T12:00:00+09:00'), Date.parse('2026-10-27T03:00:00Z'));
  assert.equal(rules.isBannerActive({ startsAt: start, endsAt: end }, start - 1), false);
  assert.equal(rules.isBannerActive({ startsAt: start, endsAt: end }, start), true);
  assert.equal(rules.isBannerActive({ startsAt: start, endsAt: end }, end - 1), true);
  assert.equal(rules.isBannerActive({ startsAt: start, endsAt: end }, end), false);
  assert.equal(rules.isBannerActive({ startsAt: null, endsAt: null }, start), true);
  assert.equal(rules.isBannerActive({ startsAt: null, endsAt: end }, end), false);
  assert.equal(rules.isBannerActive({ startsAt: start, endsAt: null }, start), true);
  assert.throws(() => rules.bannerDate('invalid'));
});
test('banner pagination, URL priority, file fallback, ordering and invalid links', async () => {
  const oldToken = process.env.NOTION_TOKEN;
  const oldSource = process.env.NOTION_EVENT_BANNERS_DATA_SOURCE_ID;
  process.env.NOTION_TOKEN = 'test'; process.env.NOTION_EVENT_BANNERS_DATA_SOURCE_ID = 'test';
  const row = (id, url, order, link = 'https://example.com') => ({ id, properties: {
    Title: { title: [{ plain_text: id }] }, ImageUrl: { url },
    ImageFile: { files: [{ file: { url: 'https://example.com/file.png', expiry_time: 'expiry' } }] },
    LinkUrl: { url: link }, SortOrder: { number: order }
  } });
  let calls = 0;
  const api = load('lib/notion-banners.ts', {
    './site-banners': rules,
    '@notionhq/client': { Client: class { dataSources = { query: async options => {
      assert.equal(options.filter.property, 'Enabled');
      assert.equal(options.filter.checkbox.equals, true);
      calls++;
      if (calls === 1) return { results: [row('a', 'https://example.com/priority.png', 2)], has_more: true, next_cursor: 'next' };
      assert.equal(options.start_cursor, 'next');
      return { results: [row('b', '', 1), row('c', '', null), row('d', '', 0, 'javascript:alert(1)')], has_more: false };
    } }; } }
  });
  try {
    const result = await api.getSiteBanners();
    assert.deepEqual(result.map(b => b.id), ['b', 'a', 'c']);
    assert.equal(result[0].expiresAt, 'expiry');
    assert.equal(result[1].imageUrl, 'https://example.com/priority.png');
    assert.equal(result[1].expiresAt, '');
    assert.equal(calls, 2);
  } finally {
    if (oldToken === undefined) delete process.env.NOTION_TOKEN; else process.env.NOTION_TOKEN = oldToken;
    if (oldSource === undefined) delete process.env.NOTION_EVENT_BANNERS_DATA_SOURCE_ID; else process.env.NOTION_EVENT_BANNERS_DATA_SOURCE_ID = oldSource;
  }
});
test('image refresh cannot retrieve unpublished pages or unrelated blocks', async () => {
  let blockCalls = 0;
  const api = load('app/api/notion-image/route.ts', {
    '@/lib/notion': {
      getKnowledgeArticleBySlug: async slug => slug === 'public' ? { id: 'page', eyecatchUrl: 'https://example.com/cover.png', eyecatchExpiresAt: '' } : null,
      getNewsBySlug: async () => null,
      getNotionBlocks: async () => { blockCalls++; return [{ id: 'allowed', type: 'image', image: { file: { url: 'https://example.com/new.png', expiry_time: 'expiry' } } }]; }
    },
    '@/lib/notion-banners': { getSiteBanners: async () => [] },
    '@/lib/site-banners': rules
  });
  const call = query => api.GET(new Request('https://example.com/api/notion-image?' + query));
  assert.equal((await call('kind=knowledge&slug=private&block=allowed')).status, 404);
  assert.equal(blockCalls, 0);
  assert.equal((await call('kind=knowledge&slug=public&block=private')).status, 404);
  const response = await call('kind=knowledge&slug=public&block=allowed');
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
  assert.equal((await response.json()).url, 'https://example.com/new.png');
  assert.equal((await call('kind=banner&id=disabled')).status, 404);
});
