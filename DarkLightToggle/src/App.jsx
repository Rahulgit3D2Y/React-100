import { useState, useEffect } from "react";
import Article from "./Article";

const App = () => {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.documentElement.className = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  return (
    <div>
      <nav className="nav-center">
        <h1>overReacting</h1>
        <button className="btn" onClick={toggleTheme}>
          Toggle
        </button>
      </nav>
      <div className="nav-center">
        <Article />
      </div>
    </div>
  );
};

export default App;
