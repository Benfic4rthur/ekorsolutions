import { Link } from 'react-scroll';
import logo from '../../public/icone.png';
import titulo from '../../public/titulo.png';
import { useEffect, useState } from 'react';

const faleConosco = 'Fale Conosco';

const number = '5551991640517'; // Número de telefone do WhatsApp
const messageBomDia = 'Bom dia! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de bom dia
const messageBoaTarde = 'Boa tarde! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de boa tarde
const messageBoaNoite = 'Boa noite! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de boa noite
const now = new Date();
const currentHour = now.getHours();

export function Navbar() {
  const [title, setTitle] = useState('Início');

  useEffect(() => {
    document.title = `Ekor Solutions - ${title}`;
  }, [title]);

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
    <header className='flex bg-[#003a7a] z-10 items-center justify-between p-5 h-16 w-11/12 drop-shadow- max-w-3xl fixed top-2 left-1/2 -translate-x-1/2 rounded-2xl'>
      <div className='flex items-center'>
        <Link to='init' spy={true} smooth={true} offset={-70} duration={500}>
          <img
            src={logo}
            className='rounded-xl w-8 hover:transform hover:scale-125 duration-500 cursor-pointer'
            alt='Logo'
            title='Ekor Solutions'
          />
        </Link>
        <img src={titulo} alt='Ekor Solutions' className='w-16 ml-2' />
      </div>
      <nav>
        <ul className='list-none flex gap-[min(3rem_,_3vw)]'>
          <li className='cursor-pointer hover:translate-y-1 duration-300'>
            <Link
              to='init'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              title='Início'
              onClick={() => setTitle('Início')}
            >
              Início
            </Link>
          </li>
          <li className='cursor-pointer hover:translate-y-1 duration-300'>
            <Link
              to='Products'
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              title='Produtos'
              onClick={() => setTitle('Produtos')}
            >
              Produtos
            </Link>
          </li>
          <li className='cursor-pointer hover:translate-y-1 duration-300'>
            <Link
              to='Services'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              title='Serviços'
              onClick={() => setTitle('Serviços')}
            >
              Serviços
            </Link>
          </li>
          <li className='cursor-pointer hover:translate-y-1 duration-300'>
            <a
              href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
              title={faleConosco}
              target=' _blank'
              onClick={() => setTitle('Contato')}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
