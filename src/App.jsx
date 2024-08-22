import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}

export default App;
