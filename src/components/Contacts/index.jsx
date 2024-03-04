import { useEffect, useState } from 'react';
import { MdEmail, MdWhatsapp } from 'react-icons/md';

const number = '51991640517';
const messageBomDia = 'Bom dia! Gostaria de fazer um orçamento em um projeto!';
const messageBoaTarde = 'Boa tarde! Gostaria de fazer um orçamento em um projeto!';
const messageBoaNoite = 'Boa noite! Gostaria de fazer um orçamento em um projeto!';
const now = new Date();
const currentHour = now.getHours();

export function Contacts() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const contactsElement = document.querySelector('.contacts');
      if (contactsElement) {
        const contactsPosition = contactsElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (contactsPosition.top < windowHeight) {
          setShowAnimation(true);
          setTitulo('- Contato');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.title = `Ekor Solutions ${titulo}`;
  }, [titulo]);

  let message = '';
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
        className={`w-full flex flex-col gap-10 xl:container mx-auto rounded-md pt-10 pb-10 contacts ${
          showAnimation ? 'animate-showing' : ''
        }`}
      >
        <h2 className='text-center text-4xl font-bold'>Contato</h2>
        <div className='flex flex-col items-center justify-evenly gap-10  px-3 md:flex-row mb:gap-5'>
          <div className=' max-w-[33.125rem] w-full flex flex-col gap-8'>
            <h2 className='text-3xl sm:text-4xl md:text-[2.5rem] text-[hsl(226,57%,5%)] leading-tight lin font-bold'>
              Transforme sua ideia em realidade!
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
                Contate-nos por e-mail
              </a>
              <a
                className='bg-[hsl(138,78%,25%)] whitespace-nowrap rounded-lg text-[1.375rem] flex gap-2 items-center justify-center p-3 hover:transform hover:scale-110 hover:bg-[hsl(138,58%,19%)] duration-500 text-white'
                href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
                title={'fale Conosco pelo Whatsapp'}
                target=' _blank'
              >
                <MdWhatsapp />
                Chame pelo whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
