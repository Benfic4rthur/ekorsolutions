/* eslint-disable react/prop-types */
export const ProductCard = ({ title, description, src }) => (
  <div className='w-full grid grid-cols-2 gap-[3%] p-2 order-2'>
    <div className='aspect-video bg-black/30 rounded-xl overflow-hidden'>
      <video
        src={src}
        autoPlay
        loop
        muted
        className='object-center object-cover min-w-full min-h-full'
      />
    </div>
    <div className='h-full flex-col gap-3 flex justify-center'>
      <h3 className='text-3xl text-slate-50'>{title}</h3>
      <p className='font-medium text-lg text-slate-50'>{description}</p>
    </div>
  </div>
);

export const ProductCardLeft = ({ title, description, src }) => (
  <div className='w-full grid grid-cols-2 gap-[3%] p-2 order-2 '>
    <div className='aspect-video bg-black/30 rounded-xl overflow-hidden animate-showing'>
      <video
        src={src}
        autoPlay
        loop
        muted
        className='object-center object-cover min-w-full min-h-full'
      />
    </div>
    <div className='h-full flex-col gap-3 flex justify-center animate-showingReverse'>
      <h3 className='text-3xl text-slate-50'>{title}</h3>
      <p className='font-medium text-lg text-slate-50'>{description}</p>
    </div>
  </div>
);

export const ProductCardRight = ({ title, description, src }) => (
  <div className='w-full grid grid-cols-2 gap-[3%] p-2 order-2'>
    <div className='h-full flex-col gap-3 flex justify-center animate-showing'>
      <h3 className='text-3xl text-slate-50'>{title}</h3>
      <p className='font-medium text-lg text-slate-50'>{description}</p>
    </div>
    <div className='aspect-video bg-black/30 rounded-xl overflow-hidden animate-showingReverse'>
      <img
        src={src}
        className='object-center object-cover	min-w-full min-h-full left-0 right-0'
      />
    </div>
  </div>
);
