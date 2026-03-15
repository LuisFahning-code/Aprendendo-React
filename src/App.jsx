import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import TransparencyCard from "./components/TransparencyCard";
import ChatArea from "./components/ChatArea";
import MessageInput from "./components/MessageInput";

function App() {
  // Estado que guarda todas as mensagens. Começa com a mensagem inicial da IA.
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Sou a persona digital do mandato. Como posso te ajudar a conhecer mais sobre nossas propostas hoje?",
      sender: "bot",
    },
  ]);

  // Função chamada quando o utilizador envia uma mensagem
  const handleSendMessage = (text) => {
    // 1. Adiciona a mensagem do utilizador à lista
    const newUserMessage = { id: Date.now(), text: text, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    // 2. Simula a resposta da IA (Aqui o membro 2 vai integrar a API depois!)
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Mensagem recebida! O colega responsável pela API vai ligar a inteligência artificial aqui em breve.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000); // Demora 1 segundo a responder
  };

  return (
    <div className="h-screen bg-white flex flex-col font-sans max-w-md mx-auto shadow-2xl relative overflow-hidden">
      <Header />

      <main className="flex-1 overflow-y-auto pb-4">
        <Profile />
        <TransparencyCard />

        {/* Passamos as mensagens para o ChatArea renderizar */}
        <ChatArea messages={messages} />
      </main>

      {/* Passamos a função de enviar para o MessageInput */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
