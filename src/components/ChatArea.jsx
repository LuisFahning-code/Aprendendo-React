export default function ChatArea({ messages }) {
  return (
    <div className="px-4 flex flex-col gap-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : ""}`}
        >
          {msg.sender === "bot" && (
            <div className="w-8 h-8 rounded-full bg-[#edf2f7] shrink-0 flex items-center justify-center text-blue-600">
              {/* Adicionei um ícone de robozinho simples no lugar das letras "VP" para ficar igual ao design */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.256a4.52 4.52 0 012.75 1.442V5.25a.75.75 0 011.5 0v2.5a4.5 4.5 0 011.5 4v1.5a.75.75 0 01-.75.75H18v2.25a2.25 2.25 0 01-2.25 2.25h-7.5A2.25 2.25 0 016 16.25V14h-.75a.75.75 0 01-.75-.75v-1.5a4.5 4.5 0 011.5-4v-2.5a.75.75 0 011.5 0v1.448a4.52 4.52 0 012.75-1.442V3a.75.75 0 01.75-.75zm-2.25 10.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm5.625-1.125a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0z" />
              </svg>
            </div>
          )}

          {/* Mudança de cor: bg-[#1d4ed8] para o user */}
          <div
            className={`p-3 max-w-[85%] text-[15px] leading-snug ${
              msg.sender === "user"
                ? "bg-[#1d4ed8] text-white rounded-2xl rounded-tr-none"
                : "bg-gray-100 text-gray-800 rounded-2xl rounded-tl-none"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {messages.length === 1 && (
        <div className="flex flex-col gap-2 mt-2">
          {/* Mudança de cor nos botões de atalho */}
          <button className="bg-white border border-[#1d4ed8] text-[#1d4ed8] rounded-full py-2 px-4 text-sm font-medium hover:bg-blue-50 transition-colors text-left w-fit shadow-sm">
            Quais são as principais propostas?
          </button>
          <button className="bg-white border border-[#1d4ed8] text-[#1d4ed8] rounded-full py-2 px-4 text-sm font-medium hover:bg-blue-50 transition-colors text-left w-fit shadow-sm">
            Ver histórico de projetos
          </button>
        </div>
      )}
    </div>
  );
}
