import { Card1 } from './Card1';
import { Card2 } from './Card2';

export function Products() {
  return (
    <section className='bg-slate-800 grid place-items-center'>
      <div className='py-12 w-full xl:container mx-auto' id='Products'>
        <h2 className='text-4xl text-center font-bold text-slate-50 mb-20 mt-10'>Nossos Produtos</h2>
        <Card1 />
        <Card2 />
      </div>
    </section>
  );
}
