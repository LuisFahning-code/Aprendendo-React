import fotoCandidato from "../assets/fotoCandidato.jpg"; // ou a imagem web que estava usando

export default function Profile() {
  return (
    // Reduzimos o padding-top de pt-8 para pt-4
    <div className="flex flex-col items-center pt-4 pb-3 px-4">
      <div className="relative mb-3">
        {/* Reduzimos de 88px para 72px */}
        <img
          src={fotoCandidato}
          alt="Foto do Candidato"
          className="w-[72px] h-[72px] rounded-full object-cover border border-gray-200 shadow-sm"
        />
        <div className="absolute bottom-0 right-0 w-[18px] h-[18px] bg-[#10b981] border-[2px] border-white rounded-full"></div>
      </div>

      <h2 className="text-[18px] font-bold text-gray-900 mb-1">
        Gabinete Digital
      </h2>
      <p className="text-[13px] text-gray-500 text-center leading-snug px-6">
        Representação oficial baseada em dados reais do mandato.
      </p>
    </div>
  );
}
