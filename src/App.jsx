import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Reviews />
      <ContactUs />
    </main>
  );
}

export default App;
