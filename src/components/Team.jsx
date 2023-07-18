import Arthur from "./Arthur";
import Elias from "./Elias";
import Gabriel from "./Gabriel";
import Joao from "./Joao";
import Natasha from "./Natasha";

export default function Team() {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-center font-bold text-3xl">Conheça nossa equipe</h1>
      <div className="mt-10 flex items-center justify-center gap-2">
        <Arthur />
        <Natasha />
        <Joao />
        <Gabriel />
        <Elias />
      </div>
    </div>
  );
}
