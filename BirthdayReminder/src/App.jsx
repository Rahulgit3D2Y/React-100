import { useState } from "react";
import List from "./List";
import BirthdayLogic from "./BirthdayLogic";
import people from "./data"; // Import the updated data
import "./index.css";

const App = () => {
  const [peopleData, setPeopleData] = useState(people);

  const clearBirthdays = () => setPeopleData([]);

  return (
    <div className="app">
      <section className="birthday-section">
        <h1>{`${BirthdayLogic(peopleData).length} Birthdays Today`}</h1>
        <List people={BirthdayLogic(peopleData)} />
        <button onClick={clearBirthdays} className="clear-button">
          Clear All
        </button>
      </section>
    </div>
  );
};

export default App;
