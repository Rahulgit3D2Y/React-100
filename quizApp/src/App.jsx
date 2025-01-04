import React, { useState } from "react";
import questions from "./questions";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setShowResults(false);
  };

  return (
    <div className="app">
      {showResults ? (
        <div className="results-section">
          <h1>Quiz Completed!</h1>
          <p>Your Score: {score}</p>
          <p>Correct Answers: {correctAnswers}</p>
          <p>Incorrect Answers: {incorrectAnswers}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h1>Quiz</h1>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-options">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
