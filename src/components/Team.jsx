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
      <div className='flex justify-center items-center px-3'>
        <div className='mt-10 w-auto flex overflow-x-scroll mx-auto gap-2'>
          <Card Name={'Arthur'} Subtitle={'FullStack developer'} src={arthur} />
          <Card Name={'joao'} Subtitle={'back-end developer'} src={joao} />
          <Card Name={'gabriel'} Subtitle={'front-end developer'} src={gabriel} />
          <Card Name={'elias'} Subtitle={'QA'} src={elias} />
          <Card Name={'natacha'} Subtitle={'Designer/Marketing'} src={natacha} />
          <Card Name={'nilson'} Subtitle={'Engenharia/Matematica'} src={nilson} />
        </div>
      </div>
    </div>
  );
}
