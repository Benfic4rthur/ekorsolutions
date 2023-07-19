import arthur from '../assets/arthur.jpg';
import elias from '../assets/elias.jpg';
import gabriel from '../assets/gabriel.jpg';
import joao from '../assets/joao.jpg';
import natacha from '../assets/natacha.jpg';
import nilson from '../assets/nilson.jpg';
import { Card } from './TeamCard/Card';

export function Team() {
  return (
    <div className='my-10'>
      <h1 className='text-center font-bold text-3xl'>Conheça nossa equipe</h1>
      <div className='flex justify-center items-center px-3 mb-20'>
        <div className='mt-10 w-auto flex overflow-x-auto mx-auto gap-2'>
          <Card Name={'Arthur Graff'} Subtitle={'FullStack developer'} src={arthur} />
          <Card Name={'João Lucas'} Subtitle={'back-end developer'} src={joao} />
          <Card Name={'Gabriel Duarte'} Subtitle={'front-end developer'} src={gabriel} />
          <Card Name={'Elias Rosa'} Subtitle={'QA'} src={elias} />
          <Card Name={'Natacha Azevedo'} Subtitle={'Designer/Marketing'} src={natacha} />
          <Card Name={'Nilson Lemos'} Subtitle={'Engenharia/Matematica'} src={nilson} />
        </div>
      </div>
    </div>
  );
}
