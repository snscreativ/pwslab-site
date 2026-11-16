# 人物画像の肩補完

## 経営者（追加）

保存先: `public/images/pw1/経営者-shoulders.webp`。組み込みimage_genで直近の添付画像を編集。

プロンプト: Use case: identity-preserve. Edit target: the most recently attached single portrait of a Japanese male business owner in a brown blazer and white crew-neck shirt with pocket square. Outpaint left and right to restore BOTH full shoulders and outer upper arm contours naturally. Preserve same identity, face, facial hair, hairstyle, expression, slightly angled pose, brown jacket, white shirt, pocket square and photographic lighting. Head to mid torso portrait. Both shoulders completely inside canvas with generous transparent margins on left, right and above hair. Real alpha transparency, no checkerboard or background. No text or watermark. Only extend missing shoulders and adjust framing.

使用: 組み込み image_gen ツール（CLI・追加パッケージなし）。

元の9名のWebPをそれぞれ編集対象とし、補完版を `public/images/pw1/*-shoulders.webp` に保存。元画像は保存したまま、PersonImageから補完版を参照する。

共通プロンプト:
Use case: identity-preserve. Edit target: supplied individual business portrait. Outpaint left and right to restore BOTH full shoulders and outer upper-arm contours in their existing clothing. Keep same person, facial features, hair, expression, gender, clothing colors, shirt/tie/accessories, lighting and realistic photography. Head to mid torso portrait, generous transparent margins above hair and both sides, complete shoulders safely inside canvas. Actual alpha transparency, no checker pattern, no background, no text, no watermark. Change only framing and extend missing shoulders naturally.

先生用プロンプト:
Use case: identity-preserve. Edit target: attached Japanese male accountant portrait. Outpaint the left and right to restore both complete shoulders and upper arms naturally in his existing navy suit. Preserve the exact same face, hairstyle, expression, tie, shirt, lighting, photographic style. Portrait from head to mid torso, both outer shoulder contours entirely visible with generous transparent margin on both sides and above hair. Do not crop shoulders. Actual transparent background, no checker pattern, no text or labels. Do not change identity.

生成画像の肩の収まりを目視確認。WebP変換後の9点でalphaチャンネルを確認。生成処理による顔・衣服の微細な差異はありうるため、プレビューでの最終確認が必要。
