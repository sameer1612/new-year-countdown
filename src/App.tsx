import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");

  setInterval(() => {
    const now = new Date();
    const newYear = new Date("2026-01-01T00:00:00");
    const diff = newYear.getTime() - now.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  }, 1000);

  return (
    <div className="flex flex-col items-center justify-end h-screen">
      <img
        src="/bg.jpeg"
        alt="background"
        className="absolute opacity-10 hover:opacity-20 h-screen aspect-auto object-cover"
      />
      <div className="mb-24">
        <h2 className="text-4xl">🥳 2026 coming in</h2>
        <h1 className="text-5xl font-monospace mt-4">{time}</h1>
      </div>
    </div>
  );
}

export default App;
