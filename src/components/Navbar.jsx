import logo from "../../public/icone.png";
export default function Navbar() {
  return (
    <>
      <header className='flex bg-[#353E69] items-center justify-around h-20 shadow'>
      <a href="/"><img src={logo} className="rounded-xl w-8" alt="Logo" /> </a>
        <nav>
          <ul className='list-none flex gap-[min(4rem_,_4vw)]'>
            <li>Inicio</li>
            <li>Produtos</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
