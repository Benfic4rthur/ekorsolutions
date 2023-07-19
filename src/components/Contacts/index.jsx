import { MdEmail } from 'react-icons/md';

const faleConosco = 'Fale Conosco';

const number = '5551991640517'; // Número de telefone do WhatsApp
const messageBomDia = 'Bom dia! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de bom dia
const messageBoaTarde = 'Boa tarde! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de boa tarde
const messageBoaNoite = 'Boa noite! Gostaria de fazer um orçamento em um projeto!'; // Texto pré-pronto para a mensagem de boa noite
const now = new Date();
const currentHour = now.getHours();
export function Contacts() {
  let message = ''; // Inicialize a mensagem vazia

  // Define a mensagem com base na hora do dia
  if (currentHour >= 0 && currentHour < 12) {
    message = messageBomDia;
  } else if (currentHour >= 12 && currentHour < 18) {
    message = messageBoaTarde;
  } else {
    message = messageBoaNoite;
  }

  return (
    <>
      <div id='Contatos' className='animate-showing w-full xl:container mx-auto rounded-md bg-slate-900/[.35] py-6 mb-20'>
        <div className='text-center text-4xl font-bold mb-10'>Contato</div>
        <div className='flex items-center justify-center gap-20'>
          <div>
            <div className='text-3xl font-bold mb-10'>Pensando em dar vida para aquele projeto esquecido?</div>
            <p>
              Nós estamos aqui para por a mão na massa e não deixar<br />
              que seu sonho volte para o esquecimento novamente. <br /> </p>
            <p>
              Fale com a gente, vamos fazer o possível para que <br />
              seu projeto ganhe vida e se torne um sucesso. →
            </p>
          </div>
          <div className='flex flex-col gap-4 mt-24'>
            <div className='flex items-center gap-2'>
              <MdEmail />
              <p>ekor.solutions@gmail.com</p>
            </div>
            <a
              className='bg-[#003A7A] rounded-lg flex items-center justify-center p-3 hover:transform hover:scale-110 hover:bg-[#304FE7] duration-500 text-white mb-5'
              href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
              title={faleConosco}
              target=' _blank'
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
