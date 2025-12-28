import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("");
  const [dim, setDim] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const newYear = new Date("2026-01-01T00:00:00");
      const diff = (newYear as unknown as number) - (now as unknown as number);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setDim(true);
    setTimeout(() => setDim(false), 1000);
  };

  return (
    <div className="flex flex-col items-center justify-end h-screen relative">
      <img
        src="/bg.jpeg"
        alt="background"
        onClick={handleClick}
        className={`absolute h-screen w-full object-cover transition-opacity duration-200 ${
          dim ? "opacity-20" : "opacity-10"
        }`}
      />

      <div className="mb-24 relative z-10">
        <h2 className="text-4xl">🥳 2026 coming in</h2>
        <h1 className="text-5xl font-monospace mt-4">{time}</h1>
      </div>
    </div>
  );
}

export default App;
