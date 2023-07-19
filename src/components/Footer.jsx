import { MdWhatsapp } from 'react-icons/md';
import { LuInstagram } from 'react-icons/lu';
import logo from '../../public/icone.png';

const faleConosco = 'Fale Conosco';
const instagram = 'Instagram';

const number = '51991640517'; // Número de telefone do WhatsApp
const messageBomDia = 'Bom dia! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de bom dia
const messageBoaTarde = 'Boa tarde! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de boa tarde
const messageBoaNoite = 'Boa noite! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de boa noite
const now = new Date();
const year = now.getFullYear();
const currentHour = now.getHours();

let message = ''; // Inicialize a mensagem vazia

// Define a mensagem com base na hora do dia
if (currentHour >= 0 && currentHour < 12) {
  message = messageBomDia;
} else if (currentHour >= 12 && currentHour < 18) {
  message = messageBoaTarde;
} else {
  message = messageBoaNoite;
}

export default function Footer() {
  return (
    <>
      <div className='bg-[#003A7A] h-24 w-full flex justify-between'>
        <div className='flex py-7'>
          <img
            src={logo}
            className='rounded-xl hover:transform hover:scale-125 duration-500 ml-32 h-10 cursor-pointer'
            alt='Logo'
          />
        </div>
        <div className='py-10 text-xs'>
          Ekor Solutions &copy; - Todos os direitos reservados, {year}
        </div>
        <div className='flex'>
          <a
            href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
            title={faleConosco}
          >
            <p className='text-3xl py-8 mr-2 hover:transform hover:scale-125 duration-500'>
              <MdWhatsapp />
            </p>
          </a>
          <a href='https://www.instagram.com/ekor.solutions/' title={instagram}>
            <p className='text-3xl py-8 mr-32 hover:scale-125 duration-500'>
              <LuInstagram />
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
