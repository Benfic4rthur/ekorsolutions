/* eslint-disable react/prop-types */
export const Card = ({ src = '', Name, Subtitle }) => (
  <div className='h-80 w-64 flex-shrink-0 rounded-md py-6 flex gap-4 flex-col items-center'>
    <div className='h-64 w-64 overflow-hidden rounded-2xl'>
      <img
        className='object-center object-cover	w-full h-full hover:-translate-y-1 duration-300 rounded-2xl'
        src={src}
        alt='Imagem do Serviço'
      />
    </div>

    <div className='text-center flex  flex-col'>
      <h3 className='capitalize font-medium text-xl text-gray-900 whitespace-nowrap'>{Name}</h3>

      <p className='capitalize font-medium text-sm text-gray-900 whitespace-nowrap'>{Subtitle}</p>
    </div>
  </div>
);
