import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);

    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer transition duration-300 ${className}`}
    >
      {theme === "light" ? (
        <MdOutlineDarkMode className="text-yellow-400" />
      ) : (
        <MdOutlineLightMode className="text-orange-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
