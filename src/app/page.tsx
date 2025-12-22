import Hero from "../components/Hero";
import { Sidebar } from "../components/sideBar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 flex overflow-x-hidden">
      <Sidebar />

      <div className="flex-1 transition-all pr-20">
        <Hero />

        <section className="p-10 h-screen"></section>

        <section className="p-10 h-screen bg-zinc-900"></section>
      </div>
    </main>
  );
}
