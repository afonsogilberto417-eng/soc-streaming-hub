import { motion } from "framer-motion";

interface Message {
  from: "client" | "atendimento";
  text: string;
  time: string;
}

interface ChatProps {
  name: string;
  messages: Message[];
}

const WhatsAppChat = ({ name, messages }: ChatProps) => {
  return (
    <div className="relative mx-auto" style={{ maxWidth: 280 }}>
      {/* Phone Frame */}
      <div className="rounded-[2.2rem] border-[3px] border-[#2a2a2a] bg-[#000] overflow-hidden shadow-2xl">
        {/* Status bar */}
        <div className="bg-[#1f2c34] flex items-center justify-between px-5 pt-2 pb-1">
          <span className="text-white text-[11px] font-medium">12:30</span>
          <div className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
          </div>
        </div>

        {/* WhatsApp Header */}
        <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#aebac1"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          <div className="w-8 h-8 rounded-full bg-[#2a3942] flex items-center justify-center text-[#8696a0] text-xs font-bold">
            {name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#e9edef] text-[13px] font-medium truncate">{name}</p>
          </div>
          <div className="flex items-center gap-3 text-[#aebac1]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </div>
        </div>

        {/* Chat Area - WhatsApp classic beige/cream */}
        <div
          className="px-2.5 py-3 space-y-1.5"
          style={{
            background: "#ecd8be",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='p' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M10 0L20 10L10 20L0 10Z' fill='none' stroke='%23d4c4a8' stroke-width='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='%23ecd8be'/%3E%3Crect width='100' height='100' fill='url(%23p)'/%3E%3C/svg%3E")`,
            minHeight: 260,
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === "atendimento" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[88%] rounded-lg px-2.5 py-1.5 text-[11.5px] leading-[1.4] relative shadow-sm ${
                  msg.from === "client"
                    ? "bg-white text-[#303030]"
                    : "bg-[#d9fdd3] text-[#303030]"
                }`}
              >
                {msg.from === "client" && (
                  <p className="text-[#1fa855] text-[10px] font-semibold mb-0.5">{name}</p>
                )}
                {msg.from === "atendimento" && (
                  <p className="text-[#53bdeb] text-[10px] font-semibold mb-0.5">SocialFlix</p>
                )}
                <p className="whitespace-pre-line">{msg.text}</p>
                <span className="text-[9px] text-[#667781] float-right mt-0.5 ml-1.5 flex items-center gap-0.5">
                  {msg.time}
                  {msg.from === "atendimento" && (
                    <svg width="13" height="9" viewBox="0 0 16 11" fill="#53bdeb">
                      <path d="M11.071.653a.457.457 0 00-.304-.102.493.493 0 00-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 00-.336-.148.457.457 0 00-.343.151.544.544 0 00-.14.366c0 .134.047.248.14.341l2.737 2.592a.48.48 0 00.343.141.457.457 0 00.343-.151l6.536-8.07a.504.504 0 00.14-.35.457.457 0 00-.14-.312z"/>
                      <path d="M14.071.653a.457.457 0 00-.304-.102.493.493 0 00-.381.178l-6.19 7.636-1.2-1.136-.849 1.047 1.713 1.618a.48.48 0 00.343.141.457.457 0 00.343-.151l6.536-8.07a.504.504 0 00.14-.35.457.457 0 00-.14-.312z" opacity=".5"/>
                    </svg>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="bg-[#ecd8be] px-2 py-1.5 flex items-center gap-1.5">
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[11px] text-[#667781] flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#8696a0"><circle cx="12" cy="12" r="10" fill="none" stroke="#8696a0" strokeWidth="2"/><path d="M8 14s1.5 2 4 2 4-2 4-2" fill="none" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="10" r="1.2"/><circle cx="15" cy="10" r="1.2"/></svg>
            <span>Mensagem</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
          </div>
        </div>

        {/* Bottom bar (home indicator) */}
        <div className="bg-[#000] h-4 flex items-center justify-center">
          <div className="w-24 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
