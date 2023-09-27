import { FaPhone, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "+55 11 96214-6755";
  const instagramUsername = "navalha_dourada1";

  return (
    <div className="px-4 py-8 md:px-6 md:py-16 lg:px-8 lg:text-center flex justify-center items-center h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Entre em Contato Conosco</h1>
        <p className="text-base md:text-lg text-[#7D7D7D] mb-8">
          Você pode entrar em contato conosco através das informações abaixo.
          Ficaremos felizes em ajudar!
        </p>
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center lg:justify-center">
            <FaPhone className="text-2xl text-green-500 mr-2" />
            <a
              href={`tel:${phoneNumber}`}
              className="text-base md:text-lg text-[#7D7D7D]"
            >
              {phoneNumber}
            </a>
          </div>
          <div className="flex items-center lg:justify-center">
            <FaInstagram className="text-2xl text-purple-500 mr-2" />
            <a
              href={`https://www.instagram.com/${instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg text-[#7D7D7D]"
            >
              @{instagramUsername}
            </a>
          </div>
          <div className="flex items-center lg:justify-center">
            <a
              href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl text-green-500 mr-2" />
            </a>
            <a
              href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg text-[#7D7D7D]"
            >
              Chame no WhatsApp
            </a>
          </div>
          <div className="flex items-center lg:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <p className="text-base md:text-lg text-[#7D7D7D]">
              Rua Maria Padilha, 76,nova Ponte Alta, Guarulhos SP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
