import mediaverse from '../assets/mediaverse.mp4';
import logomediaverse from '../assets/logomediaverse.png';
import logomytopacademy from '../assets/logomytopacademy.png';
import mytopacademy from '../assets/mytopacademy.jpg';
import { ProductCardLeft, ProductCardRight } from './ProductCard';

export function Products() {
  return (
    <section className='bg-slate-800 grid place-items-center h-max'>
      <div className='py-12 px-3 w-full xl:container mx-auto flex flex-col gap-10' id='Products'>
        <h2 className='text-4xl text-center font-bold text-slate-50'>Nossos Produtos</h2>
        <div className='flex flex-col gap-6'>
          <ProductCardLeft
            description='Potencialize seu negócio com nossa plataforma de streaming especializada em treinamentos corporativos, cursos online e aluguel de vídeos sob demanda. Compartilhe conteúdo eficiente de forma envolvente para colaboradores, clientes e estudantes. Descubra recursos personalizáveis e intuitivos que revolucionarão sua maneira de compartilhar conhecimento.'
            title='MediaVerse - Treinamentos Empresariais Multimídia'
            src={mediaverse}
            img={logomediaverse}
            link='https://mediaverse.vercel.app/'
          />
          <ProductCardRight
            description='Descubra o poder da educação sob medida com a My TopAcademy! Explore um mundo de conhecimento através de cursos online envolventes e práticos, liderados por especialistas renomados. Aprenda no seu próprio ritmo, alcance suas metas acadêmicas e profissionais, e trilhe o caminho para o sucesso com a My TopAcademy.'
            title='My TopAcademy - Sua plataforma de Educação Online'
            src={mytopacademy}
            img={logomytopacademy}
            link='https://mytopacademy.com/'
          />
        </div>
      </div>
    </section>
  );
}
