export default function Navbar() {
  return (
    <>
      <header className='flex bg-[#353E69] items-center justify-around h-20 shadow'>
        <h1 className='text-3xl'>Ekor Solutions</h1>
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
