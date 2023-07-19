import Slider from 'react-slick';
import banner from '../assets/banner.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Introduction() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    nextArrow: <></>,
    prevArrow: <></>,
    cssEase: 'linear',
  };

  return (
    <div
      className={`font-normal h-[26rem] bg-center bg-cover w-full text-base text-center mt-10 mb-20 rounded-3xl xl:container mx-auto animate-bounce`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className='flex items-center h-full px-3'>
        <div className='w-full sm:w-4/5 max-w-[38rem] h-fit  relative overflow-hidden pb-6 text-center text-gray-50 '>
          <Slider  {...settings}>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='text-4xl sm:text-6xl'>
                Acesse todas
                <br />
                as informações
              </h3>
              <p className='text-base sm:text-2xl'>do seu negócio de onde estiver</p>
            </div>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='text-4xl sm:text-6xl'>
                Gestão e controle
                <br />
                de ponta a ponta
              </h3>
              <p className='text-base sm:text-2xl'>
                para levar o seu estabelecimento a outro nível
              </p>
            </div>
            <div className='flex justify-center items-center flex-col h-full'>
              <h3 className='text-4xl sm:text-6xl'>
                Um sistema completo
                <br />
              </h3>
              <p className='text-base sm:text-2xl'>e descomplicando para a gestão do seu negócio</p>
            </div>
          </Slider>
        </div>
        <div />
      </div>
    </div>
  );
}
