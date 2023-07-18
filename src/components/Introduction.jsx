import notebook from "../assets/notebook.png";

export default function Section() {
  return (
    <>
      <div className="font-normal text-base text-center">
        <h1 className="text-3xl font-bold">Ekor solutions</h1>
        <p>
          Sistemas de agendamentos, finânceiro <br />
          cadastro e estoque
        </p>
        <div className="flex justify-center">
          <img src={notebook} />
        </div>
      </div>
    </>
  );
}
