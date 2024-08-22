import { useState } from "react";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
    </main>
  );
}

export default App;
