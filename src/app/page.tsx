import BookNow from "../components/BookNow";
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

        <footer className="py-10 text-center text-zinc-600 text-sm">
          © 2024 DG Barbearia e Açaiteria - Todos os direitos reservados.
        </footer>
      </div>

      <Sidebar />
    </main>
  );
}
