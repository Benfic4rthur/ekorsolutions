import certificado from '../assets/certificado.jpg';
import consultoria from '../assets/consultoria.jpg';
import design from '../assets/design.jpg';
import engenharia from '../assets/engenharia.jpg';
import suporte from '../assets/suporte.jpg';
import sites from '../assets/sites.jpg';
import { Card } from './ServicesCard/Card';
import Icon from '@mdi/react';
import { mdiArrowRightBoldCircle } from '@mdi/js';

export function Services() {
  return (
    <section className=' w-full xl:container mx-auto py-10' id='Services'>
      <h2 className='text-center font-bold text-4xl'>Nossos Serviços</h2>
      <div className='flex justify-center items-center px-3'>
        <div className=' w-auto flex overflow-x-auto mx-auto gap-3  pb-1'>
          <Card
            Name={'Sites e Aplicações'}
            Subtitle={'Sites e Aplicações web personalizadas'}
            src={sites}
          />
          <Card Name={'Suporte'} Subtitle={'Suporte Terceirizado'} src={suporte} />
          <Card Name={'Design'} Subtitle={'Projetos de Design'} src={design} />
          <Card Name={'Consultoria'} Subtitle={'Consultoria .Jus e para Devs'} src={consultoria} />
          <Card
            Name={'Certificação'}
            Subtitle={'Emissão de Certificado Digital'}
            src={certificado}
          />
          <Card
            Name={'Engenharia'}
            Subtitle={'Engenharia e modelagem matematica'}
            src={engenharia}
          />
        </div>
      </div>
      <div className='flex lg:hidden animate-showing'>
        <p className='text-sm pt-[1.35rem] ml-5 '>Arraste para o lado</p>{' '}
        <Icon path={mdiArrowRightBoldCircle} size={1} className='mt-5 ml-5 animate-bounceX' />
      </div>
    </section>
  );
}
