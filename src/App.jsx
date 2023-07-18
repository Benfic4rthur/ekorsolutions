import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Services from './components/Services';
import { Team } from './components/Team';

// #353E69
// #304FE7
// #BEC9F7


export default function App() {
  return (
    <>
      <div className='bg-[#BEC9F7] text-gray-50 min-h-screen h-full grid grid-rows-layout grid-cols-1'>
        <Navbar />
        <section className=' h-full text-gray-950 text-2xl w-full xl:container m-auto'>
          <Introduction />
          <Products />
          <Services />
          <Team />
        </section>
        <Footer />
      </div>
    </>
  );
}
