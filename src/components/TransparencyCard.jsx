export default function TransparencyCard() {
  return (
    // Reduzimos p-4 para p-3 e mb-6 para mb-4
    <div className="mx-4 mb-4 bg-[#f0f7ff] border border-[#d6e8ff] rounded-xl p-3 flex gap-3 shadow-sm">
      <div className="text-blue-600 shrink-0">
        {/* Ícone um pouco menor */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div>
        <h3 className="text-[15px] font-bold text-blue-900 mb-0.5">
          Aviso de Transparência
        </h3>
        <p className="text-[13px] text-blue-800/90 leading-snug">
          Esta é uma persona digital interativa baseada nas propostas e
          histórico do mandato.
        </p>
      </div>
    </div>
  );
}
