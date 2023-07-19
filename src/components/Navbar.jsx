import logo from '../../public/icone.png';
import titulo from '../../public/titulo.png';

export function Navbar() {
  return (
    <header className='flex bg-[#003a7a] z-10 items-center justify-between p-5 h-16 w-11/12 drop-shadow-lg max-w-3xl fixed top-2 left-1/2 -translate-x-1/2 rounded-2xl'>
      <div className='flex items-center'>
        <a href='/'>
          <img
            src={logo}
            className='rounded-xl w-8 hover:transform hover:scale-125 duration-500'
            alt='Logo'
          />
        </a>
        <img src={titulo} alt='Ekor Solutions' className='w-16 ml-2' />
      </div>
      <nav>
        <ul className='list-none flex gap-[min(3rem_,_3vw)]'>
          <li className='cursor-pointer hover:translate-y-1 duration-300'>Início</li>
          <li className='cursor-pointer hover:translate-y-1 duration-300'>Produtos</li>
          <li className='cursor-pointer hover:translate-y-1 duration-300'>Serviços</li>
          <li className='cursor-pointer hover:translate-y-1 duration-300'>Contato</li>
        </ul>
      </nav>
    </header>
  );
}
