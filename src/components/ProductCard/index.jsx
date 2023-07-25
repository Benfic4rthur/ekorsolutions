/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export const ProductCard = ({ title, description, src }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.querySelector('.product-card');
      if (cardElement) {
        const cardPosition = cardElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (cardPosition.top < windowHeight) {
          setShowAnimation(true);
        }
      }
    };

    // Adiciona o evento de scroll para monitorar quando o card está visível na tela.
    window.addEventListener('scroll', handleScroll);

    // Remova o evento de scroll quando o componente for desmontado para evitar vazamento de memória.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full grid grid-cols-2 gap-[3%] p-2 order-2 product-card ${
        showAnimation ? 'animate-showing' : ''
      }`}
    >
      <div className='aspect-video bg-black/30 rounded-xl overflow-hidden'>
        <video src={src} autoPlay loop muted className='object-center object-cover min-w-full' />
      </div>
      <div className='h-max flex-col gap-3 flex justify-center'>
        <h3 className='text-3xl text-slate-50 pt-2'>{title}</h3>
        <p className='font-medium text-lg text-slate-50'>{description}</p>
      </div>
    </div>
  );
};

export const ProductCardLeft = ({ title, description, src, link }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.querySelector('.product-card-left');
      if (cardElement) {
        const cardPosition = cardElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (cardPosition.top < windowHeight) {
          setShowAnimation(true);
          setTitulo('- Produtos');
        }
      }
    };

    // Adiciona o evento de scroll para monitorar quando o card está visível na tela.
    window.addEventListener('scroll', handleScroll);

    // Remova o evento de scroll quando o componente for desmontado para evitar vazamento de memória.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.title = `Ekor Solutions ${titulo}`;
  }, [titulo]);

  return (
    <div
      className={`w-full grid grid-rows-[auto, auto] md:grid-cols-2 items-center gap-3 md:gap-[3%] p-2 product-card-left ${
        showAnimation ? 'animate-showing' : ''
      }`}
    >
      <div className='aspect-video bg-black/30 rounded-xl overflow-hidden animate-showing'>
        <video src={src} autoPlay loop muted className='object-center object-cover min-w-full' />
      </div>
      <div className='flex-col gap-3 flex justify-center'>
        <h3 className='text-3xl md:text-4xl text-slate-50 pt-2'>{title}</h3>
        <p className='font-medium text-base lg:text-lg  text-slate-50 pb-4'>{description}</p>
        <a href={link} target=' _blank' style={{ textDecoration: 'none', color: '#fff' }}>
          Veja mais...{' '}
        </a>
        <hr className='lg:hidden animate-showing' />
      </div>
    </div>
  );
};

export const ProductCardRight = ({ title, description, src }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.querySelector('.product-card-right');
      if (cardElement) {
        const cardPosition = cardElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (cardPosition.top < windowHeight) {
          setShowAnimation(true);
        }
      }
    };

    // Adiciona o evento de scroll para monitorar quando o card está visível na tela.
    window.addEventListener('scroll', handleScroll);

    // Remova o evento de scroll quando o componente for desmontado para evitar vazamento de memória.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full grid grid-rows-[auto, auto] md:grid-cols-2 items-center gap-3 md:gap-[3%] p-2 product-card-right ${
        showAnimation ? 'animate-showingReverse' : ''
      }`}
    >
      <div className='aspect-video bg-black/30 rounded-xl overflow-hidden animate-showingReverse'>
        <img src={src} className='object-center object-cover	min-w-full' />
      </div>
      <div className='flex-col gap-3 flex justify-center md:-order-1'>
        <h3 className='text-3xl md:text-4xl text-slate-50'>{title}</h3>
        <p className='font-medium text-base lg:text-lg  text-slate-50'>{description}</p>
      </div>
    </div>
  );
};
