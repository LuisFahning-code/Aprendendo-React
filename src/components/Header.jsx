export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
      {/* Grupo da Esquerda: Botão Voltar + Textos */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-900 transition-colors p-1 -ml-1">
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        <div className="flex flex-col">
          <h1 className="text-[17px] font-bold text-gray-900 leading-tight">
            Voz do Povo
          </h1>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
            <span className="text-xs text-gray-500 font-medium">
              Persona Digital Ativa
            </span>
          </div>
        </div>
      </div>

      {/* Grupo da Direita: Ícone de Info */}
      <button className="text-gray-500 hover:text-gray-700 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </header>
  );
}
