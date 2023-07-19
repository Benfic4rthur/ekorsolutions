import { Footer } from './components/Footer';
import { Introduction } from './components/Introduction';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Team } from './components/Team';

// #003A7A
// #304FE7
// #BEC9F7

export default function App() {
  return (
    <div className='bg-[#BEC9F7] text-gray-50 min-h-screen w-full h-full grid grid-rows-layout grid-cols-1'>
      <Navbar />
      <main className=' h-full text-gray-950 text-2xl max-w-full'>
        <Introduction />
        <Services />
        <Products />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
