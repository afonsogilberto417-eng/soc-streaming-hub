import { motion } from "framer-motion";

interface Message {
  from: "client" | "atendimento";
  text: string;
  time: string;
}

interface ChatProps {
  name: string;
  city: string;
  messages: Message[];
  badge?: "tv" | "notebook";
}

const WhatsAppChat = ({ name, city, messages, badge }: ChatProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border/30 bg-[#0b141a]">
      {/* WhatsApp Header */}
      <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#2a3942] flex items-center justify-center text-[#8696a0] text-sm font-bold">
          {name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#e9edef] text-sm font-medium truncate">{name}</p>
          <p className="text-[#8696a0] text-xs truncate">{city}</p>
        </div>
        <div className="flex items-center gap-4 text-[#aebac1]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
      </div>

      {/* Badge */}
      {badge && (
        <div className="absolute top-3 right-14 z-10">
          <span className="bg-primary/90 text-primary-foreground text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
            {badge === "tv" ? "📺 TV ao fundo" : "💻 Notebook ao fundo"}
          </span>
        </div>
      )}

      {/* Chat Area */}
      <div
        className="px-3 py-4 space-y-2 min-h-[220px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='p' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='%23ffffff' stroke-opacity='0.03' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='200' fill='%23060d11'/%3E%3Crect width='200' height='200' fill='url(%23p)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "atendimento" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2 text-[13px] leading-relaxed relative ${
                msg.from === "client"
                  ? "bg-[#1f2c34] text-[#e9edef]"
                  : "bg-[#005c4b] text-[#e9edef]"
              }`}
            >
              {msg.from === "client" && (
                <p className="text-[#25d366] text-[11px] font-semibold mb-0.5">{name}</p>
              )}
              {msg.from === "atendimento" && (
                <p className="text-[#53bdeb] text-[11px] font-semibold mb-0.5">SocialFlix</p>
              )}
              <p className="whitespace-pre-line">{msg.text}</p>
              <span className="text-[10px] text-[#8696a0] float-right mt-1 ml-2 flex items-center gap-0.5">
                {msg.time}
                {msg.from === "atendimento" && (
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="#53bdeb">
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
      <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-2">
        <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-[13px] text-[#8696a0]">
          Mensagem
        </div>
        <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
