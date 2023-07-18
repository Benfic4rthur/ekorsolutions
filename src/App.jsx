import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Products from "./components/Products";
import Team from "./components/Team";

// #353E69
// #304FE7
// #BEC9F7

export default function App() {
  return (
    <>
      <div className="bg-[#BEC9F7] text-gray-50 min-h-screen h-full grid grid-rows-layout grid-cols-1">
        <Navbar />
        <section className=" h-full text-gray-950 text-2xl w-full xl:container m-auto">
          <Introduction />
          <Products />
          <Team />
        </section>
        <Footer />
      </div>
    </>
  );
}
