import mediaverse from '../assets/mediaverse.mp4';
import epet from '../assets/epet.jpg';
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
            link='https://mediaverse.vercel.app/'
          />
          <ProductCardRight
            description='Conheça o nosso aplicativo de petshop! Agende serviços, venda produtos e acompanhe as novidades da sua loja favorita. Gerencie seu petshop de forma eficiente, oferecendo conveniência aos clientes e aumentando as vendas. Simplifique a vida dos amantes de animais. Acesse agora e aproveite!'
            title='E-Pet'
            src={epet}
          />
        </div>
      </div>
    </section>
  );
}
