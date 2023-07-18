import gabriel from '../assets/gabriel.jpeg';
export default function Gabriel() {
    return (
        <div className='flex items-center justify-center flex-col bg-slate-700 w-1/3 p-5 rounded-lg'>
            <div>
                <img src={gabriel} className='rounded-s-full rounded-r-full grayscale' style={{ height: '200px' }}></img>
            </div>
            <h1>Gabriel</h1>
            <h1 className='text-lg'>Desenvolvedor FrontEnd</h1>
        </div>
    );
}
