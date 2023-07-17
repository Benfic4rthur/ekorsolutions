export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-around h-20">
        <h1 className="text-3xl">Ekor Solutions</h1>
        <ul className="list-none flex gap-20">
          <li>Inicio</li>
          <li>Produtos</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </nav>
    </>
  );
}
