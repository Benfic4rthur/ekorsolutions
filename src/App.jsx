import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <div className="bg-slate-600 text-white">
        <Navbar />
        <div className="h-screen text-2xl w-full xl:container m-auto">
          <h1 className="text-5xl">hello world</h1>
          <Section />
        </div>
        <Footer />
      </div>
    </>
  );
}
