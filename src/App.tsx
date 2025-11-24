import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Groups } from "@/components/Groups";
import { Coaches } from "@/components/Coaches";
import { Schedule } from "@/components/Schedule";
import { Pricing } from "@/components/Pricing";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Groups />
      <Coaches />
      <Schedule />
      <Pricing />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

