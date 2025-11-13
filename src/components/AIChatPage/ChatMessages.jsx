export function ChatMessages({ messages, onSelect }) {
  return (
    <div className="flex flex-col gap-3 p-4">
      {messages.map((m, i) => (
        <div
          key={i}
          className={`max-w-[80%] px-4 py-2 rounded-2xl ${
            m.role === "user"
              ? "self-end bg-[#FEE5E0]"
              : "self-start bg-white border border-[#eee]"
          }`}
        >
          {m.role === "assistant" && (
            <div className="text-xs text-gray-400 mb-1">🌿 루티</div>
          )}
          <div>{m.text}</div>
          {m.options && (
            <div className="flex flex-wrap gap-2 mt-2">
              {m.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => onSelect(opt)}
                  className="px-3 py-1 rounded-full text-sm bg-[#FFE9E4] text-[#FF8C7A]"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
