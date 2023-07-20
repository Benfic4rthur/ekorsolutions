import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import banner from '../assets/banner.jpg';

export function Introduction() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    nextArrow: <></>,
    prevArrow: <></>,
    cssEase: 'linear',
  };

  return (
    <div
      id='init'
      className={`font-normal h-[40rem] bg-center bg-cover lg:w-full   text-base text-center mt-10 mb-20 rounded-3xl xl:container mx-auto animate-bounce`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className='flex items-center h-full px-3 lg:ml-[23rem] sm:ml-[5rem]'>
        <div className='w-full sm:w-4/5 max-w-[46.35rem] align-center h-fit relative overflow-hidden lg:pb-32 text-center text-white'>
          <Slider {...settings}>
            <div className='flex justify-center items-center flex-col h-full'>
              <h2 className='text-4xl sm:text-6xl lg:pt-5 sm:pt-0'>
                Assinatura digital
              </h2>
              <p className='text-base sm:text-2xl'>
                Segurança e confiabilidade para sua empresa em transações online
              </p>
            </div>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='text-4xl sm:text-6xl'>
                Suporte Especializado
                <br />e humanizado
              </h3>
              <p className='text-base sm:text-2xl'>
                Um suporte especializado e dedicado para impulsionar o sucesso do seu negócio
              </p>
            </div>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='text-4xl sm:text-6xl'>
                Design criativo
                <br />e funcional
              </h3>
              <p className='text-base sm:text-2xl'>
                Projetos de design criativos e inovadores
                <br />
                criando experiencias unicas para nossos clientes
              </p>
            </div>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='text-4xl sm:text-6xl'>
                Engenharia voltada
                <br />
                para o futuro
              </h3>
              <p className='text-base sm:text-2xl'>
                Projetos de engenharia precisos e baseados em modelagem matemática, garantindo
                resultados confiáveis e eficientes
              </p>
            </div>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='text-4xl sm:text-6xl'>
                Consultoria Especializada
                <br />
              </h3>
              <p className='text-base sm:text-2xl'>
                Consultoria voltada as plataformas .jus e a novos desenvolvedores com dificuldade em areas sensíveis
              </p>
            </div>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='text-4xl sm:text-6xl'>
                Site personalizado
                <br />
                conforme necessidade
              </h3>
              <p className='text-base sm:text-2xl'>
              Transformamos suas ideias em realidade, criando sites e aplicações web personalizadas que refletem a essência do seu negócio
              </p>
            </div>
          </Slider>
        </div>
        <div />
      </div>
    </div>
  );
}
