import { useEffect } from 'react';
import { MdEmail, MdWhatsapp } from 'react-icons/md';

const number = '5551991640517'; // Número de telefone do WhatsApp
const messageBomDia = 'Bom dia! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de bom dia
const messageBoaTarde = 'Boa tarde! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de boa tarde
const messageBoaNoite = 'Boa noite! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de boa noite
const now = new Date();
const currentHour = now.getHours();
export function Contacts() {
  let message = ''; // Inicialize a mensagem vazia

  // Define a mensagem com base na hora do dia
  if (currentHour >= 0 && currentHour < 12) {
    message = messageBomDia;
  } else if (currentHour >= 12 && currentHour < 18) {
    message = messageBoaTarde;
  } else {
    message = messageBoaNoite;
  }
  
  return (
    <>
      <div
        id='Contatos'
        className='animate-showing w-full flex flex-col gap-10 xl:container mx-auto rounded-md pt-10 pb-10'
      >
        <h2 className='text-center text-4xl font-bold '>Contato</h2>
        <div className='flex flex-col items-center justify-evenly gap-10  px-3 md:flex-row mb:gap-5'>
          <div className=' max-w-[33.125rem] w-full flex flex-col gap-8'>
            <h2 className='text-3xl sm:text-4xl md:text-[2.5rem] text-[hsl(226,57%,5%)] leading-tight lin font-bold'>
              Transforme Sua Ideia em Realidade!
            </h2>
            <p className='text-[1.3rem] leading-snug'>
              Transforme suas ideias em aplicativos personalizados de sucesso! Contate-nos hoje
              mesmo e tenha uma equipe dedicada ao seu projeto.
            </p>
          </div>
          <div className='flex flex-row justify-center gap-4 max-w-[33.125rem] w-full'>
            <div className='flex flex-col gap-4 w-min '>
              <a
                className='bg-slate-950/20 whitespace-nowrap rounded-lg text-[1.375rem] flex gap-2 items-center justify-center p-3 hover:transform hover:scale-110 hover:bg-[rgb(78,80,92)] duration-500 text-white'
                href='mailto:ekor.solutions@gmail.com'
                title={'fale Conosco pelo e-mail'}
                target=' _blank'
              >
                <MdEmail />
                Entrar em contato
              </a>
              <a
                className='bg-[hsl(138,78%,25%)] whitespace-nowrap rounded-lg text-[1.375rem] flex gap-2 items-center justify-center p-3 hover:transform hover:scale-110 hover:bg-[hsl(138,58%,19%)] duration-500 text-white'
                href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
                title={'fale Conosco pelo Whatsapp'}
                target=' _blank'
              >
                <MdWhatsapp />
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
