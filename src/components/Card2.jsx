import epet from '../assets/epet.jpg';
export function Card2() {
  return (
    <div className='flex items-center justify-center rounded-lg  text-slate-50 h-96'>
        <div className='animate-showing w-1/2 '>
          <h1 className='text-3xl text-slate-50 mb-6 mr-10'>E-Pet</h1>
          <p className='font-medium text-xl text-slate-50 mr-10'>
          Descubra o nosso aplicativo de petshop completo! Agende facilmente horários para serviços,
          como banho e tosa, venda produtos e acompanhe as últimas novidades da sua loja favorita.
          Com recursos intuitivos, você pode gerenciar seu petshop de forma eficiente, oferecer
          conveniência aos clientes e aumentar suas vendas. Experimente nosso app e simplifique a
          vida dos amantes de animais. Acesse agora e aproveite todos os benefícios que temos a
          oferecer.
        </p>
      </div>
      <div className='w-1/2 h-96 bg-slate-900 flex items-center justify-center rounded-lg overflow-hidden animate-showingReverse'>
        <img src={epet} alt=''/>
      </div>
    </div>
  );
}
