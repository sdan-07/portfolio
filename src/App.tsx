import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Endorsements from "./components/Endorsements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-geist text-on-surface antialiased">
      <Background />
      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col space-y-28 px-6 pb-24 pt-12 md:space-y-36 md:pt-20">
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        {/* <Endorsements /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171f33_1px,transparent_1px),linear-gradient(to_bottom,#171f33_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
    </div>
  );
}