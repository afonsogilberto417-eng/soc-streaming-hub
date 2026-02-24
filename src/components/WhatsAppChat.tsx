import { motion } from "framer-motion";

interface Message {
  from: "client" | "atendimento";
  text: string;
  time: string;
}

interface ChatProps {
  name: string;
  avatar?: string;
  messages: Message[];
}

const WhatsAppChat = ({ name, avatar, messages }: ChatProps) => {
  return (
    <div className="relative mx-auto" style={{ width: 340 }}>
      {/* Phone Frame - iPhone style */}
      <div className="rounded-[3rem] border-[4px] border-[#1a1a1a] bg-[#000] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]">
        {/* Notch */}
        <div className="bg-[#000] flex justify-center pt-2 pb-0">
          <div className="w-28 h-6 bg-[#1a1a1a] rounded-b-2xl" />
        </div>

        {/* Status bar */}
        <div className="bg-[#075e54] flex items-center justify-between px-5 pt-1 pb-1">
          <span className="text-white text-[12px] font-semibold">12:30</span>
          <div className="flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M2 22h20V2z" opacity="0.3"/><path d="M2 22h20V2zm18-2H4V4.8L20 20z"/></svg>
            <svg width="18" height="12" viewBox="0 0 28 14" fill="white"><rect x="0" y="1" width="22" height="12" rx="2.5" ry="2.5" stroke="white" strokeWidth="1.2" fill="none"/><rect x="2" y="3" width="16" height="8" rx="1" fill="white"/><path d="M24 5v4a2 2 0 000-4z"/></svg>
          </div>
        </div>

        {/* WhatsApp Header */}
        <div className="bg-[#075e54] px-3 py-2.5 flex items-center gap-2.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          <div className="w-10 h-10 rounded-full bg-[#dfe5e7] flex items-center justify-center overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <svg width="24" height="24" viewBox="0 0 212 212" fill="#ccc">
                <path d="M106 0C47.5 0 0 47.5 0 106s47.5 106 106 106 106-47.5 106-106S164.5 0 106 0zm0 28c17.1 0 31 13.9 31 31s-13.9 31-31 31-31-13.9-31-31 13.9-31 31-31zm0 150c-26.5 0-49.9-13.5-63.6-34 .3-21.1 42.4-32.6 63.6-32.6s63.3 11.5 63.6 32.6C155.9 164.5 132.5 178 106 178z" fill="#ccc"/>
              </svg>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-[15px] font-medium truncate">{name}</p>
            <p className="text-[#a8d8cc] text-[12px]">online</p>
          </div>
          <div className="flex items-center gap-5 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </div>
        </div>

        {/* Chat Area - WhatsApp wallpaper */}
        <div
          className="px-3 py-4 space-y-2 overflow-y-auto"
          style={{
            background: "#e5ddd5",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3Cpattern id='bg' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M30 5c1.5 0 2.5 1 2.5 2.5S31.5 10 30 10s-2.5-1-2.5-2.5S28.5 5 30 5z' fill='%23c9bfb0' opacity='0.15'/%3E%3Cpath d='M10 25c1 0 2 .8 2 2s-1 2-2 2-2-.8-2-2 1-2 2-2z' fill='%23c9bfb0' opacity='0.12'/%3E%3Cpath d='M50 35c1.2 0 2 1 2 2s-.8 2-2 2-2-1-2-2 .8-2 2-2z' fill='%23c9bfb0' opacity='0.12'/%3E%3Cpath d='M25 45l3-2 3 2-1-3.5 3-2h-3.5L28.5 36l-1 3.5H24l3 2z' fill='%23c9bfb0' opacity='0.08'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='400' fill='%23e5ddd5'/%3E%3Crect width='400' height='400' fill='url(%23bg)'/%3E%3C/svg%3E")`,
            minHeight: 380,
            maxHeight: 380,
          }}
        >
          {/* Date chip */}
          <div className="flex justify-center mb-2">
            <span className="bg-[#d9f2fa] text-[#4a9cc2] text-[11px] px-3 py-1 rounded-lg shadow-sm font-medium">
              HOJE
            </span>
          </div>

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === "atendimento" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[82%] rounded-lg px-3 py-2 text-[13px] leading-[1.45] relative shadow-sm ${
                  msg.from === "client"
                    ? "bg-white text-[#303030] rounded-tl-none"
                    : "bg-[#dcf8c6] text-[#303030] rounded-tr-none"
                }`}
              >
                {/* Tail */}
                {msg.from === "client" && i === 0 && (
                  <div className="absolute -left-2 top-0 w-0 h-0 border-t-[8px] border-t-white border-r-[8px] border-r-transparent" />
                )}
                {msg.from === "atendimento" && (
                  <div className="absolute -right-2 top-0 w-0 h-0 border-t-[8px] border-t-[#dcf8c6] border-l-[8px] border-l-transparent" />
                )}

                {msg.from === "client" && (
                  <p className="text-[#35cd96] text-[12px] font-semibold mb-0.5">~ {name}</p>
                )}
                {msg.from === "atendimento" && (
                  <p className="text-[#6cb4ee] text-[12px] font-semibold mb-0.5">SocialFlix Suporte</p>
                )}
                <p className="whitespace-pre-line">{msg.text}</p>
                <span className="text-[10px] text-[#999] float-right mt-1 ml-2 flex items-center gap-0.5">
                  {msg.time}
                  {msg.from === "atendimento" && (
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="#4fc3f7">
                      <path d="M11.071.653a.457.457 0 00-.304-.102.493.493 0 00-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 00-.336-.148.457.457 0 00-.343.151.544.544 0 00-.14.366c0 .134.047.248.14.341l2.737 2.592a.48.48 0 00.343.141.457.457 0 00.343-.151l6.536-8.07a.504.504 0 00.14-.35.457.457 0 00-.14-.312z"/>
                      <path d="M14.071.653a.457.457 0 00-.304-.102.493.493 0 00-.381.178l-6.19 7.636-1.2-1.136-.849 1.047 1.713 1.618a.48.48 0 00.343.141.457.457 0 00.343-.151l6.536-8.07a.504.504 0 00.14-.35.457.457 0 00-.14-.312z" opacity=".7"/>
                    </svg>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="bg-[#f0f0f0] px-2.5 py-2 flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-4 py-2.5 text-[14px] text-[#999] flex items-center gap-3 shadow-sm">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#919191" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill="#919191" stroke="none"/><circle cx="15" cy="10" r="1" fill="#919191" stroke="none"/></svg>
            <span className="flex-1">Mensagem</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#919191" strokeWidth="1.8"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" strokeLinecap="round"/></svg>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#919191" strokeWidth="1.8"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
          </div>
          <div className="w-11 h-11 rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0 shadow-sm">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
          </div>
        </div>

        {/* Home indicator */}
        <div className="bg-[#f0f0f0] h-5 flex items-center justify-center pb-1">
          <div className="w-28 h-1 bg-[#333] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
