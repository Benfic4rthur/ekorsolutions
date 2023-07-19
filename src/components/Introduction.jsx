import banner from '../assets/banner.jpg';

export default function Section() {
  const divStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh', // Define a altura da div como 100% da altura da tela
    width: '100%', // Define a largura da div como 100% da largura da tela
  };

  return (
    <>
      <div
        className='font-normal text-base text-center mt-10 mb-20 rounded-3xl'
        style={divStyle}
      ></div>
    </>
  );
}
