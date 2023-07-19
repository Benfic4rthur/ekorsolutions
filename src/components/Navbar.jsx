import logo from '../../public/icone.png';
import titulo from '../../public/titulo.png';

export default function Navbar() {
  return (
    <>
      <div className='flex justify-center z-10'>
        <header className='flex bg-[#003a7a] items-center justify-between p-5 h-[60px] drop-shadow-lg w-2/4 fixed top-2 rounded-2xl'>
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
            <ul className='list-none flex gap-[min(4rem_,_4vw)]'>
              <li className='cursor-pointer hover:translate-y-1 duration-300'>Inicio</li>
              <li className='cursor-pointer hover:translate-y-1 duration-300'>Produtos</li>
              <li className='cursor-pointer hover:translate-y-1 duration-300'>Serviços</li>
              <li className='cursor-pointer hover:translate-y-1 duration-300'>Contato</li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

