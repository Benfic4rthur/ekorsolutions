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
      <div id='Contatos'>
        <div className='text-center text-4xl font-bold mb-10'>Contato</div>
        <div className='flex items-center justify-center gap-20 mb-10'>
          <div>
            <div className='text-3xl font-bold mb-10'>
              Entre em contato <br />
              Conosco
            </div>
            <p>
              Entre em contato com Ekor Solutions,
              <br />
              queremos tirar suas dúvidas, ouvir suas <br />
              críticas e sugestões.
            </p>
          </div>
          <div className='flex flex-col gap-4 mt-24'>
            <div className='flex items-center gap-2'>
              <MdEmail />
              <p>ekor.solutions@gmail.com</p>
            </div>
            <a
              className='bg-[#003A7A] rounded-lg flex items-center justify-center p-3 hover:bg-[#304FE7] duration-500 text-white'
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
