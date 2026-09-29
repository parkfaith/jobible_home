import About from "@/components/About";
import Archive from "@/components/Archive";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <Archive />
        <About />
      </main>
      <Footer />
    </>
  );
}
