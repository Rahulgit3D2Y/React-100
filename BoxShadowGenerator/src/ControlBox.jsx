import { useState, useEffect } from "react";
import "./ControlBox.css";

function ControlBox({ id, updateShadow }) {
  const [shadowModel, setShadowModel] = useState({
    x: 0,
    y: 0,
    blur: 10,
    spread: 0,
    color: "#000000",
    inset: false,
  });

  const updateShadowModel = (prop, val) => {
    setShadowModel((prev) => ({ ...prev, [prop]: val }));
  };

  useEffect(() => {
    updateShadow(shadowModel, id);
  }, [shadowModel, id, updateShadow]);

  return (
    <div className="control-box">
      {/* X Offset */}
      <label>
        X Offset: {shadowModel.x}px
        <input
          type="range"
          min="-100"
          max="100"
          value={shadowModel.x}
          onChange={(e) => updateShadowModel("x", parseInt(e.target.value))}
        />
      </label>

      {/* Y Offset */}
      <label>
        Y Offset: {shadowModel.y}px
        <input
          type="range"
          min="-100"
          max="100"
          value={shadowModel.y}
          onChange={(e) => updateShadowModel("y", parseInt(e.target.value))}
        />
      </label>

      {/* Blur */}
      <label>
        Blur: {shadowModel.blur}px
        <input
          type="range"
          min="0"
          max="100"
          value={shadowModel.blur}
          onChange={(e) => updateShadowModel("blur", parseInt(e.target.value))}
        />
      </label>

      {/* Spread */}
      <label>
        Spread: {shadowModel.spread}px
        <input
          type="range"
          min="-50"
          max="50"
          value={shadowModel.spread}
          onChange={(e) =>
            updateShadowModel("spread", parseInt(e.target.value))
          }
        />
      </label>

      {/* Color */}
      <label>
        Color:
        <input
          type="color"
          value={shadowModel.color}
          onChange={(e) => updateShadowModel("color", e.target.value)}
        />
      </label>

      {/* Inset */}
      <label>
        Inset:
        <input
          type="checkbox"
          checked={shadowModel.inset}
          onChange={(e) => updateShadowModel("inset", e.target.checked)}
        />
      </label>
    </div>
  );
}

export default ControlBox;
