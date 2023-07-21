/* eslint-disable react/prop-types */

export const Card = ({ src = '', Name, Subtitle }) => (
  <div className='h-72 w-[15.1rem] flex-shrink-0 rounded-md bg-slate-900/[.35] py-6 flex gap-4 flex-col items-center'>
    <div className='bg-black/30 h-40 w-40 rounded-full overflow-hidden shadow-md'>
      <img
        className='object-center object-cover	w-full h-full grayscale hover:transform hover:scale-110 duration-500'
        src={src}
        alt='imagen do integrante da equipe'
      />
    </div>

    <div className='text-center flex  flex-col'>
      <h3 className='capitalize text-slate-50 font-medium text-xl whitespace-nowrap'>{Name}</h3>

      <p className='text-base capitalize text-slate-100'>{Subtitle}</p>
    </div>
  </div>
);
