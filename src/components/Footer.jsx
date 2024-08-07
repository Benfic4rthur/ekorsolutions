import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
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

export function Footer() {
  return (
    <footer className='bg-[#003A7A] w-full flex  justify-center'>
      <div className='h-24 flex gap-1 justify-between items-center px-[min(3rem_,_3.5%)] w-full xl:container'>
        <div className='flex min-w-[4.25rem] justify-center'>
          <img
            src={logo}
            className='rounded-xl hover:transform hover:scale-125 duration-500 h-10 cursor-pointer'
            alt='Logo'
            title='Ekor Solutions'
          />
        </div>
        <p className='text-xs text-center'>
          Ekor Solutions &copy; - Todos os direitos reservados, {year}
        </p>
        <section className='flex gap-2  w-[4.25rem]'>
          <a
            href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
            title={faleConosco}
            className='text-3xl hover:transform hover:scale-125 duration-500'
            id='whatsapp'
            target=' _blank'
          >
            <BsWhatsapp />
          </a>
          <a
            href='https://www.instagram.com/ekor.solutions/'
            title={instagram}
            target=' _blank'
            className='text-3xl  hover:scale-125 duration-500'
          >
            <BsInstagram />
          </a>
        </section>
      </div>
    </footer>
  );
}
