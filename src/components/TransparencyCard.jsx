export default function TransparencyCard() {
  return (
    // Container principal do card com fundo azul claro e bordas arredondadas
    <div className="mx-4 mb-6 bg-[#f0f7ff] border border-[#d6e8ff] rounded-2xl p-4 flex gap-3 shadow-sm">
      {/* Ícone de Informação */}
      <div className="text-blue-600 mt-0.5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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

      {/* Textos */}
      <div>
        <h3 className="text-[16px] font-bold text-blue-900 mb-1">
          Aviso de Transparência
        </h3>
        <p className="text-[14px] text-blue-800/90 leading-snug">
          Esta é uma persona digital interativa baseada nas propostas e
          histórico do mandato do candidato.
        </p>
      </div>
    </div>
  );
}
