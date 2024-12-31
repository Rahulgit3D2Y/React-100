import { useState } from "react";
import "./styles.css";

const Bmi = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2));
    if (calculatedBmi < 18.5) {
      setMessage("Underweight");
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      setMessage("Normal weight");
    } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
      setMessage("Overweight");
    } else {
      setMessage("Obesity");
    }
  };

  return (
    <div className="bmi">
      <form onSubmit={calcBmi}>
        <label htmlFor="weight">
          Weight (kg):
          <input
            type="number"
            name="weight"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label htmlFor="height">
          Height (cm):
          <input
            type="number"
            name="height"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label htmlFor="bmi">
          BMI:
          <input type="text" name="bmi" id="bmi" value={bmi} readOnly />
        </label>
        <label htmlFor="message">
          Message:
          <textarea name="message" id="message" value={message} readOnly />
        </label>
        <button type="submit">Calculate BMI</button>
      </form>
    </div>
  );
};

export default Bmi;
