import arthur from '../assets/arthur.jpg';
import elias from '../assets/elias.jpg';
import gabriel from '../assets/gabriel.jpg';
import joao from '../assets/joao.jpg';
import natacha from '../assets/natacha.jpg';
import { Card } from './ServicesCard/Card';

export default function Services() {
  return (
    <div className='my-10'>
      <h1 className='text-center font-bold text-3xl'>Nossos Serviços</h1>
      <div className='flex justify-center items-center px-3'>
        <div className='mt-10 w-auto flex overflow-x-auto mx-auto gap-2'>
          <Card Name={'Certificação'} Subtitle={'Emissão de Certificado Digital'} src={arthur} />
          <Card Name={'Suporte'} Subtitle={'Suporte Terceirizado'} src={joao} />
          <Card Name={'Design'} Subtitle={'Projetos de Design'} src={gabriel} />
          <Card Name={'Engenharia'} Subtitle={'Projetos de Engenharia'} src={elias} />
          <Card
            Name={'Consultoria'}
            Subtitle={'Consultoria .Jus e para Desenvolvedores'}
            src={natacha}
          />
        </div>
      </div>
    </div>
  );
}
