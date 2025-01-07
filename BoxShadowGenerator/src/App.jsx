import { useState } from "react";
import ControlBox from "./ControlBox";
import "./styles.css";
const App = () => {
  const [shadows, setShadows] = useState([""]);
  const [controls, setControls] = useState([{}]);

  const updateShadow = (shadowObj, id) => {
    const newShadows = [...shadows];
    newShadows[id] = `${shadowObj.x}px ${shadowObj.y}px ${shadowObj.blur}px ${
      shadowObj.spread
    }px ${shadowObj.color}${shadowObj.inset ? " inset" : ""}`;
    setShadows(newShadows);
  };

  const addShadow = () => {
    setControls([...controls, {}]);
    setShadows([...shadows, ""]);
  };
  const undoAddLayer = () => {
    if (controls.length > 1) {
      const newControls = [...controls];
      const newShadows = [...shadows];
      newControls.pop();
      newShadows.pop();
      setControls(newControls);
      setShadows(newShadows);
    }
  };
  return (
    <div className="App">
      <div className="preview-box" style={{ boxShadow: shadows.join(", ") }}>
        <p>BOx Shadow Preview</p>
      </div>
      <div className="control-panel">
        {controls.map((_, index) => (
          <ControlBox key={index} id={index} updateShadow={updateShadow} />
        ))}

        <button onClick={addShadow}>add layer</button>
        <button onClick={undoAddLayer}>undo layer</button>
      </div>
    </div>
  );
};

export default App;
