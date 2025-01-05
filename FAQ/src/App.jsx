import { useEffect, useState } from "react";
import data from "./data";
import Question from "./components/Questions";
import "./components/index.css";

const App = () => {
  const [questions] = useState(data);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeSet = () => {
    setTheme((prevValue) => (prevValue === "light" ? "dark" : "light"));
  };

  return (
    <main>
      <div className="container">
        <section className="info">
          <h3>Questions and Answers</h3>
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              info={question.info}
            />
          ))}
        </section>
        <button onClick={themeSet} className="theme-toggle-btn">
          Toggle Theme
        </button>
      </div>
    </main>
  );
};

export default App;
