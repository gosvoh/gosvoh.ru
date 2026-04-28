import SiteBackdrop from "@/components/SiteBackdrop";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

function App() {
  return (
    <div className="relative isolate min-h-full overflow-hidden bg-bg-base font-sans text-fg">
      <SiteBackdrop />
      <div className="relative z-[2] mx-auto max-w-[1280px] p-[clamp(20px,4vw,56px)]">
        <TopBar />
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Contact />
        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
