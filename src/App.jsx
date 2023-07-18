import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

// #353E69
// #304FE7
// #BEC9F7

export default function App() {
  return (
    <>
      <div className='bg-[#BEC9F7] text-gray-50 min-h-screen h-full grid grid-rows-layout grid-cols-1'>
        <Navbar />
        <div className=' h-full text-gray-950 text-2xl w-full xl:container m-auto flex justify-center items-center flex-col'>
          <h1 className='text-5xl'>hello world</h1>
          <Section />
        </div>
        <Footer />
      </div>
    </>
  );
}
