import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent = ({ id }: ParticlesComponentProps) => {
  const [engineLoaded, setEngineLoaded] = useState(false);

  // Detect dark mode
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineLoaded(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: isDark ? "#000000" : "#ffffff" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: ["#ff4d4d", "#4d79ff", "#4dff88", "#ffd24d"] },
        links: { color: "#FFFFFF", distance: 100, enable: true, opacity: 0.3, width: 1 },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 4,
          straight: false,
        },
        number: { density: { enable: true }, value: 270 },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    [isDark]
  );

  return engineLoaded ? <Particles id={id} options={options} /> : null;
};

export default ParticlesComponent;
