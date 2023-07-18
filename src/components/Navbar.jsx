import logo from "../../public/icone.png";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-center ">
        <header className="flex bg-[#353E69] items-center justify-between p-5 h-20 shadow w-2/4 fixed top-10 rounded-3xl">
          <a href="/">
            <img src={logo} className="rounded-xl w-8" alt="Logo" />
          </a>
          <nav>
            <ul className="list-none flex gap-[min(4rem_,_4vw)]">
              <li>Inicio</li>
              <li>Produtos</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
          </nav>
        </header>
      </div>

      <header className="flex bg-[#353E69] items-center justify-around h-20 shadow">
        <a href="/">
          <img src={logo} className="rounded-xl w-8" alt="Logo" />{" "}
        </a>
        <nav>
          <ul className="list-none flex gap-[min(3rem_,_4vw)]">
            <li className="">Inicio</li>
            <li>Produtos</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
