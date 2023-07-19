export const ProductCard = () => (
  <div className='h-80 w-full bg-black/30 flex gap-3 p-2'>
    <div className='h-full w-1/2 bg-black/30 rounded-xl'>
      <img src='' alt='a' className='object-center object-cover	w-full h-full' />
    </div>
    <div className='h-full w-1/2 bg-black/30 flex-col gap-1 flex justify-center'>
      <h3 className='text-2xl'>Lorem ipsum dolor</h3>
      <p className='font-medium text-xl'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim debitis magnam cupiditate
        quos doloremque nobis eaque explicabo quae culpa blanditiis?
      </p>
    </div>
  </div>
);
