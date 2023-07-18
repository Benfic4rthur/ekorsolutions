import elias from '../assets/elias.jpg';
export default function Elias() {
  return (
    <div className="flex items-center justify-center flex-col bg-slate-700 w-1/3 p-5 rounded-lg">
      <div><img src={elias} className='rounded-s-full rounded-r-full grayscale' style={{ height: '200px' }}></img></div>
      <h1>Elias</h1>
      <h1 className='text-lg'>QA</h1>
    </div>
  );
}
