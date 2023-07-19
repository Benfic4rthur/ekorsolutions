import mediaverse from '../assets/mediaverse.mp4';
export function Card1() {
  return (
    <div className='mt-10 mb-10 flex items-center'>
      <div className='w-1/2 h-96 bg-slate-900 flex items-center justify-center rounded-lg overflow-hidden animate-showing'>
        <video src={mediaverse} alt='' autoPlay loop muted/>
      </div>
      <div className='h-80 flex items-center justify-center rounded-lg  text-slate-50 w-1/2 h-96'>
        <div className='animate-showingReverse'>
          <h1 className='text-3xl text-slate-50 mb-6 ml-10'>MediaVerse</h1>
          <p className='font-medium text-xl text-slate-50 ml-10'>
            Aprimore o seu negócio com a nossa plataforma de streaming de vídeos especializada em
            treinamentos corporativos, cursos online e aluguel de vídeos sob demanda. Disponibilize
            conteúdo de forma eficiente e envolvente para seus colaboradores, clientes e estudantes.
            Descubra os recursos personalizáveis e intuitivos que transformarão a maneira como você
            compartilha conhecimento. Experimente hoje mesmo e aproveite todos os benefícios da
            nossa plataforma.
          </p>
        </div>
      </div>
    </div>
  );
}
