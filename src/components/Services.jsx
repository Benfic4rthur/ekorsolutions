import certificado from '../assets/certificado.jpg';
import consultoria from '../assets/consultoria.jpg';
import design from '../assets/design.jpg';
import engenharia from '../assets/engenharia.jpg';
import suporte from '../assets/suporte.jpg';
import sites from '../assets/sites.jpg';
import { Card } from './ServicesCard/Card';

export function Services() {
  return (
    <section className=' w-full xl:container mx-auto' id='Services'>
      <h1 className='text-center font-bold text-3xl'>Nossos Serviços</h1>
      <div className='flex justify-center items-center px-3'>
        <div className=' w-auto flex overflow-x-auto mx-auto gap-3  pb-1'>
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
            Subtitle={'Consultoria .Jus e para Devs'}
            src={consultoria}
          />
          <Card
            Name={'Sites e Aplicações'}
            Subtitle={'Sites e Aplicações personalizadas'}
            src={sites}
          />
        </div>
      </div>
    </section>
  );
}
