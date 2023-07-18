import natacha from '../assets/natacha.jpg';
export default function Natacha() {
    return (
        <div className='flex items-center justify-center flex-col bg-slate-700 w-1/3 p-5 rounded-lg'>
            <div>
                <img src={natacha} className='rounded-s-full rounded-r-full grayscale' style={{ height: '200px' }}></img>
            </div>
            <h1>Natacha</h1>
            <h1 className='text-lg'>Designer/Marketing</h1>
        </div>
    );
}
