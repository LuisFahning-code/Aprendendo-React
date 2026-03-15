import { useState, useRef } from "react";

export default function MessageInput({ onSendMessage }) {
  const [inputValue, setInputValue] = useState("");

  // Referências para "conectar" os ícones visuais aos inputs de arquivo invisíveis
  const attachRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  // Função que é chamada quando o usuário seleciona um arquivo/tira foto
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Cria uma mensagem simulando o envio do anexo no chat
      let tipo = "📎 Anexo";
      if (file.type.startsWith("image/")) tipo = "📷 Imagem";
      if (file.type.startsWith("video/")) tipo = "🎥 Vídeo";

      onSendMessage(`${tipo}: ${file.name}`);
      e.target.value = null; // Limpa o input para poder enviar o mesmo arquivo novamente
    }
  };

  // Função que pega o GPS do usuário
  const handleLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lng = position.coords.longitude.toFixed(4);
          onSendMessage(`📍 Localização enviada: ${lat}, ${lng}`);
        },
        () => {
          alert(
            "Não foi possível acessar a localização. Verifique as permissões do seu navegador.",
          );
        },
      );
    } else {
      alert("Seu navegador não suporta geolocalização.");
    }
  };

  return (
    <div className="border-t border-gray-100 bg-white p-3 sticky bottom-0">
      {/* Inputs originais do HTML escondidos (hidden) */}
      <input
        type="file"
        ref={attachRef}
        className="hidden"
        onChange={handleFileChange}
      />
      {/* O atributo capture="environment" força o celular a abrir a câmera traseira em vez da galeria! */}
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={cameraRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        type="file"
        accept="video/*"
        capture="environment"
        ref={videoRef}
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex items-center gap-5 px-2 mb-3 text-[#64748b]">
        {/* Adicionando onClick para acionar os inputs invisíveis */}
        <button
          type="button"
          onClick={() => attachRef.current.click()}
          className="hover:text-blue-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => cameraRef.current.click()}
          className="hover:text-blue-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[22px] h-[22px]"
          >
            <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
            <path
              fillRule="evenodd"
              d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => videoRef.current.click()}
          className="hover:text-blue-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[26px] h-[26px]"
          >
            <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
          </svg>
        </button>

        <div className="w-[1px] h-6 bg-gray-200 ml-1"></div>

        {/* Adicionando onClick para o GPS */}
        <button
          type="button"
          onClick={handleLocationClick}
          className="hover:text-blue-700 transition-colors ml-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-4 pr-12 text-[15px] focus:border-blue-700 focus:bg-white focus:ring-1 focus:ring-blue-700 outline-none transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 p-2 bg-[#1d4ed8] text-white rounded-full hover:bg-blue-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform -rotate-45 ml-0.5 mb-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
