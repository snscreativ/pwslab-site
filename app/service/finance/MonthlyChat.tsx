"use client";

import { useEffect, useRef } from "react";

const participants = [
  {
    name: "経理担当",
    type: "Protein",
    image: "経理担当",
    badge: "pw",
    kind: "protein",
  },
  {
    name: "高橋",
    type: "Silicon Worker",
    image: "経理アシスタント",
    badge: "sw",
    kind: "silicon",
  },
];

const monthlyMessages = [
  {
    person: 0,
    time: "09:15",
    text: "5営業日までに締めたいのに、○○部の証憑がまだ届かなくて……",
  },
  {
    person: 1,
    time: "09:16",
    text: "未回収一覧があれば、対象を特定して回収完了までめげずに追います !!",
    attachment: true,
  },
  { person: 0, time: "09:18", text: "このままだと、月次締めに影響する？" },
  {
    person: 1,
    time: "09:19",
    text: "大口1件が明日までに届かないと影響します。先に共有しますね。",
  },
];

const analysisParticipants = [
  participants[0],
  {
    name: "佐藤",
    type: "Silicon Worker",
    image: "経理分析担当",
    badge: "sw",
    kind: "silicon",
  },
  {
    name: "経理リーダー",
    type: "Protein",
    image: "経理リーダー",
    badge: "pw",
    kind: "protein",
  },
  {
    name: "鈴木",
    type: "Silicon Worker",
    image: "財務予測担当",
    badge: "sw",
    kind: "silicon",
  },
  {
    name: "財務経理部長",
    type: "Protein",
    image: "財務経理部長",
    badge: "pw",
    kind: "protein",
  },
  {
    name: "渡部",
    type: "Silicon Worker",
    image: "経理部長補佐",
    badge: "sw",
    kind: "silicon",
  },
];

const analysisMessages = [
  { person: 0, time: "10:00", text: "今月の月次、締まりました！" },
  {
    person: 1,
    time: "10:01",
    text: "外注費が予算比＋18％です。○○案件が主因と考えられます。",
    attachment: true,
  },
  { person: 2, time: "10:02", text: "その増加は来月も続く？" },
  {
    person: 3,
    time: "10:03",
    text: "来月も続く見込みです。売上見込みも確認できれば、その先への影響も整理できます。",
  },
  {
    person: 4,
    time: "10:04",
    text: "では、今月の経営会議に上げるべき論点を整理しよう。",
  },
  {
    person: 5,
    time: "10:05",
    text: "予実差と今後の影響をまとめて、資料のたたき台を作りますね。",
  },
];

function Portrait({ person }: { person: (typeof participants)[number] }) {
  return (
    <div
      className={`p-fin-chat-window__portrait p-fin-chat-window__portrait--${person.kind}`}
    >
      <img
        src={`/images/finance/${person.image}.webp`}
        alt=""
        width="64"
        height="64"
        loading="lazy"
      />
      <img
        className="p-fin-chat-window__badge"
        src={`/images/finance/${person.badge}-icon.webp`}
        alt={person.type}
        width="24"
        height="24"
        loading="lazy"
      />
    </div>
  );
}

export default function MonthlyChat({
  channel = "月次締め",
}: {
  channel?: "月次締め" | "予実分析";
}) {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chat = chatRef.current;
    if (
      !chat ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const rows = chat.querySelectorAll<HTMLElement>(
      ".p-fin-chat-window__message",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, index) => {
            const row = entry.target as HTMLElement;
            row.style.animationDelay = `${index * 100}ms`;
            row.classList.add("is-visible");
            observer.unobserve(row);
          });
      },
      { threshold: 0.1 },
    );
    rows.forEach((row) => observer.observe(row));
    return () => {
      observer.disconnect();
      rows.forEach((row) => {
        row.classList.remove("is-visible");
        row.style.removeProperty("animation-delay");
      });
    };
  }, [channel]);

  const isAnalysis = channel === "予実分析";
  const messages = isAnalysis ? analysisMessages : monthlyMessages;
  const people = isAnalysis ? analysisParticipants : participants;
  const attachment = isAnalysis
    ? {
        title: "予実差サマリ",
        description: "差異発見 → 将来影響 → 経営判断の材料",
      }
    : {
        title: "未回収証憑一覧",
        description: "未回収の特定 → 影響確認 → 追跡・共有",
      };
  return (
    <div
      ref={chatRef}
      className="p-fin-chat-window"
      aria-label={`財務経理チームの${channel}チャットの構想例`}
    >
      <aside className="p-fin-chat-window__sidebar">
        <div className="p-fin-chat-window__lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <p className="p-fin-chat-window__team">財務経理チーム</p>
        <p className="p-fin-chat-window__label">チャンネル</p>
        <ul className="p-fin-chat-window__channels">
          {["月次締め", "予実分析"].map((name) => (
            <li
              className={name === channel ? "is-active" : undefined}
              key={name}
            >
              # {name}
            </li>
          ))}
        </ul>
      </aside>
      <div className="p-fin-chat-window__main">
        <div className="p-fin-chat-window__bar">
          <span># {channel}</span>
        </div>
        <ol className="p-fin-chat-window__messages">
          {messages.map((message) => {
            const person = people[message.person];
            return (
              <li
                className={`p-fin-chat-window__message p-fin-chat-window__message--${person.kind}`}
                key={message.time}
              >
                <Portrait person={person} />
                <div className="p-fin-chat-window__body">
                  <div className="p-fin-chat-window__byline">
                    {person.name}
                    <span>{message.time}</span>
                  </div>
                  <p className="p-fin-chat-window__text">{message.text}</p>
                  {message.attachment && (
                    <div className="p-fin-chat-window__attachment">
                      <span aria-hidden="true">▦</span>
                      <div>
                        <b>{attachment.title}</b>
                        <p>{attachment.description}</p>
                      </div>
                      <span aria-hidden="true">⋮</span>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
        <div className="p-fin-chat-window__composer" aria-hidden="true">
          <span>＋</span>
          <span>メッセージを入力…</span>
          <span>➤</span>
        </div>
      </div>
    </div>
  );
}
