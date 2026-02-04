import AdressAutocomplete from "../components/AddressAutocomplete";
import BookNow from "../components/BookNow";
import Equipment from "../components/Equipment";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import HomePage from "../components/HomePage";
import Review from "../components/Review";
import { Sidebar } from "../components/sideBar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <div className="flex-1 pr-20">
        <section id="home">
          <Hero />
          <HomePage />
        </section>

        <section
          id="galeria"
          className=" bg-zinc-950 text-white text-center border-t border-zinc-800"
        >
          <Gallery />
        </section>
        <section
          id="agendamento"
          className="bg-zinc-950 text-white text-center border-t border-zinc-800"
        >
          <BookNow />
        </section>
        <section
          id="comentarios"
          className="py-20 bg-black text-white text-center border-t border-zinc-800"
        >
          <Review />
        </section>
        <section id="equipamentos">
          <Equipment />
        </section>

        <section id="endereco">
          <AdressAutocomplete />
        </section>

        <Footer />
      </div>

      <Sidebar />
    </main>
  );
}
