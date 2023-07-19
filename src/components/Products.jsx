// import { Element } from 'react-scroll';
import mediaverse from '../assets/mediaverse.mp4';
// import { Card1 } from './Card1';
// import { Card2 } from './Card2';
import { ProductCardLeft, ProductCardRight } from './ProductCard';

export function Products() {
  return (
    <section className='bg-slate-800 grid place-items-center'>
      <div className='py-12 w-full xl:container mx-auto' id='Products'>
        <h2 className='text-4xl text-center font-bold text-slate-50 mb-20 mt-10'>
          Nossos Produtos
        </h2>
        <div className='flex flex-col gap-5'>
          <ProductCardLeft
            description='Aprimore o seu negócio com a nossa plataforma de streaming de vídeos especializada em treinamentos corporativos, cursos online e aluguel de vídeos sob demanda. Disponibilize conteúdo de forma eficiente e envolvente para seus colaboradores, clientes e estudantes. Descubra os recursos personalizáveis e intuitivos que transformarão a maneira como você compartilha conhecimento. Experimente hoje mesmo e aproveite todos os benefícios da nossa plataforma.'
            title='MediaVerse'
            src={mediaverse}
          />
          <ProductCardRight
            description='Descubra o nosso aplicativo de petshop completo! Agende facilmente horários para serviços, como banho e tosa, venda produtos e acompanhe as últimas novidades da sua loja favorita. Com recursos intuitivos, você pode gerenciar seu petshop de forma eficiente, oferecer conveniência aos clientes e aumentar suas vendas. Experimente nosso app e simplifique a vida dos amantes de animais. Acesse agora e aproveite todos os benefícios que temos a oferecer.'
            title='E-Pet'
            src={mediaverse}
          />
        </div>
      </div>
    </section>
  );
}
