/* eslint-disable react/prop-types */
import{ useState, useEffect } from 'react';

export const Card = ({ src = '', Name, Subtitle }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.querySelector('.card');
      if (cardElement) {
        const cardPosition = cardElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (cardPosition.top < windowHeight) {
          setShowAnimation(true);
          setTitulo('- Serviços');
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
    <div className={`card h-80 w-60 flex-shrink-0 rounded-md py-6 flex gap-4 flex-col items-center ${showAnimation ? 'animate-showing' : ''}`}>
      <div className='h-64 w-56 overflow-hidden rounded-2xl'>
        <img
          className='object-center object-cover w-full h-full hover:-translate-y-2 duration-300 rounded-2xl'
          src={src}
          alt='Imagem do Serviço'
        />
      </div>

      <div className='text-center flex  flex-col'>
        <h3 className='font-medium text-xl text-gray-900 whitespace-nowrap'>{Name}</h3>
        <p className='font-medium text-sm text-gray-900 whitespace-nowrap'>{Subtitle}</p>
      </div>
    </div>
  );
};
