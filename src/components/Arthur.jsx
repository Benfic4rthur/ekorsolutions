import arthur from '../assets/arthur.jpg';

export default function Arthur() {
    return (
        <div className='flex items-center justify-center flex-col bg-slate-700 w-1/3 p-5 rounded-lg'>
            <div>
                <img
                    src={arthur}
                    className='rounded-s-full rounded-r-full grayscale'
                    style={{ height: '200px', width: '200px' }}
                />
            </div>
            <h1>Arthur</h1>
            <h1 className='text-lg'>Desenvolvedor FullStack</h1>
        </div>
    );
}
