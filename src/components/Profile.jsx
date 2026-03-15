import fotoCandidato from "../assets/fotoCandidato.jpg";

export default function Profile() {
  return (
    <div className="flex flex-col items-center pt-8 pb-4 px-4">
      {/* Container da Foto com a bolinha verde de status */}
      <div className="relative mb-4">
        <img
          // Link de uma imagem genérica para testarmos o visual.
          // Depois, você pode importar a foto real da pasta assets e colocar aqui!
          src={fotoCandidato}
          alt="Foto do Candidato"
          className="w-[88px] h-[88px] rounded-full object-cover border border-gray-200 shadow-sm"
        />
        {/* Bolinha verde com borda branca para dar o efeito de sobreposição */}
        <div className="absolute bottom-0 right-0 w-[22px] h-[22px] bg-[#10b981] border-[3px] border-white rounded-full"></div>
      </div>

      {/* Textos do Perfil */}
      <h2 className="text-xl font-bold text-gray-900 mb-1.5">
        Gabinete Digital
      </h2>
      <p className="text-[15px] text-gray-500 text-center leading-snug px-6">
        Representação oficial baseada em dados
        <br />
        reais do mandato.
      </p>
    </div>
  );
}
