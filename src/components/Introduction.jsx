import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import banner from '../assets/banner.jpg';
import iphone from '../assets/iphone.jpg';

export function Introduction() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    nextArrow: <></>,
    prevArrow: <></>,
    cssEase: 'linear',
  };

  return (
    <div
      id='init'
      className={`font-normal h-[43rem] bg-center bg-cover lg:w-full text-base text-center mt-10 mb-20 rounded-3xl xl:container mx-auto animate-bounce`}
      style={{ backgroundImage: `url(${window.innerWidth > 768 ? banner : iphone})` }}
    >
      <div className='flex items-center h-full px-3 justify-center '>
        <div className='h-[18rem] xs:max-w-[13rem] tamanhodapica ml-3 md:w-[40em] lg:ml-0 lg:mr-1 lg:max-w-[47.35rem] items-center relative overflow-hidden text-center text-white '>
          <Slider {...settings}>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='tmobile text-5xl flexCenter'>
                Suporte Especializado
                <br />e humanizado
              </h3>
              <p className='text-3xl pmobile'>
                Um suporte especializado e dedicado para impulsionar o sucesso do seu negócio
              </p>
            </div>

            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='tmobile text-5xl flexCenter'>
                Site personalizado
                <br />
                conforme necessidade
              </h3>
              <p className='text-3xl pmobile'>
                Transformamos suas ideias em realidade, <br />
                criando sites e aplicações web personalizadas <br />
                que refletem a essência do seu negócio
              </p>
            </div>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='tmobile text-5xl flexCenter'>
                Design criativo
                <br />e funcional
              </h3>
              <p className='text-3xl pmobile'>
                Projetos de design criativos e inovadores
                <br />
                criando experiencias unicas para nossos clientes
              </p>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <h3 className='tmobile text-5xl flexCenter'>Assinatura digital</h3>
              <p className='text-3xl pmobile'>
                Segurança e confiabilidade para sua empresa em transações online
              </p>
            </div>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='tmobile text-5xl flexCenter'>
                Engenharia voltada
                <br />
                para o futuro
              </h3>
              <p className='text-3xl pmobile'>
                Projetos de engenharia precisos e baseados em modelagem matemática, garantindo
                resultados confiáveis e eficientes
              </p>
            </div>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='tmobile text-5xl flexCenter'>
                Consultoria Especializada
                <br />
              </h3>
              <p className='text-3xl pmobile'>
                Consultoria voltada as plataformas .jus e a novos desenvolvedores com dificuldade em
                areas sensíveis
              </p>
            </div>
          </Slider>
        </div>
        <div />
      </div>
    </div>
  );
}
