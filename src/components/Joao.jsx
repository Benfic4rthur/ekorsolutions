import joao from '../assets/joao.jpg';
export default function Joao() {
    return (
        <div className='flex items-center justify-center flex-col bg-slate-700 w-1/3 p-5 rounded-lg'>
            <div>
                <img src={joao} className='rounded-s-full rounded-r-full grayscale' style={{ height: '200px' }}></img>
            </div>
            <h1>João</h1>
            <h1 className='text-lg'>Desenvolvedor BackEnd</h1>
        </div>
    );
}
