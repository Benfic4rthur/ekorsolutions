import certificado from '../assets/certificado.jpg';
import suporte from '../assets/suporte.jpg';
import design from '../assets/design.jpg';
import engenharia from '../assets/engenharia.jpg';
import consultoria from '../assets/consultoria.jpg';
import { Card } from './ServicesCard/Card';

export default function Services() {
  return (
    <div className='my-10'>
      <h1 className='text-center font-bold text-3xl'>Nossos Serviços</h1>
      <div className='flex justify-center items-center px-3 mb-20'>
        <div className='mt-10 w-auto flex overflow-x-auto mx-auto gap-2'>
          <Card
            Name={'Certificação'}
            Subtitle={'Emissão de Certificado Digital'}
            src={certificado}
          />
          <Card Name={'Suporte'} Subtitle={'Suporte Terceirizado'} src={suporte} />
          <Card Name={'Design'} Subtitle={'Projetos de Design'} src={design} />
          <Card Name={'Engenharia'} Subtitle={'Projetos de Engenharia'} src={engenharia} />
          <Card
            Name={'Consultoria'}
            Subtitle={'Consultoria .Jus e para Desenvolvedores'}
            src={consultoria}
          />
        </div>
      </div>
    </div>
  );
}
