import { Card1 } from './Card1';
import { Card2 } from './Card2';

export function Products() {
  return (
    <section className='bg-slate-800 grid place-items-center'>
      <div className='py-12 w-full xl:container mx-auto'>
        <h2 className='text-3xl text-center font-bold'>Nossos Produtos</h2>
        <Card1 />
        <Card2 />
      </div>
    </section>
  );
}
