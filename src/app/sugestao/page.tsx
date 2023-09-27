"use client";
import { useState } from "react";
import { Form, Input, Textarea } from "./components";

const Suggestion = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [assunto, setAssunto] = useState("");

  const [mensagem, setMensagem] = useState("");

  const handleSendWhatsapp = () => {
    const message = `Olá, meu nome é ${nome}. Meu email é ${email}. Meu whatsapp para contato é ${whatsapp}. 
    Gostaria de dar uma sugestao: 
      - Assunto: ${assunto};
      - Mensagem adicional: ${mensagem}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511959265463?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form>
        <h1 className="text-2xl font-bold mb-4">Sugestão</h1>
        <Input
          type="text"
          label="Nome"
          rule="nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="text"
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="text"
          label="Whatsapp para contato"
          rule="com DDD"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />

        <Input
          type="text"
          label="Assunto"
          rule="Apenas texto"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
        />

        <Textarea
          label="Mensagem adicional"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSendWhatsapp}
            className="bg-green text-black py-2 px-4 rounded-full hover:bg-green-dark focus:outline-none focus:ring focus:ring-green-light focus:ring-opacity-50 bg-white"
          >
            Enviar
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Suggestion;
