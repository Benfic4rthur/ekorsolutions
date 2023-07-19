import notebook from '../assets/wpp.jpg';

export default function Section() {
  const divStyle = {
    backgroundImage: `url(${notebook})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh', // Define a altura da div como 100% da altura da tela
    width: '100%', // Define a largura da div como 100% da largura da tela
  };

  return (
    <>
      <div className='font-normal text-base text-center mt-10 mb-10' style={divStyle}>
      </div>
    </>
  );
}
