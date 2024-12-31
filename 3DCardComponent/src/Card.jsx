import { useRef } from "react";
import "./styles.css";
const Card = () => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const difficulityRef = useRef(null);
  const startButtonRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const rotateX = y * 30;
    const rotateY = x * 30;

    card.style.transform =
      "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    card.style.transition = "none";

    titleRef.current.style.transform = "translateZ(150px)";
    imageRef.current.style.transform = "translateZ(200px) rotateZ(-45deg)";
    descriptionRef.current.style.transform = "translateZ(125px)";
    difficulityRef.current.style.transform = "translateZ(100px)";
    startButtonRef.current.style.transform = "translateZ(75px)";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transition = "transform 0.5s";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    titleRef.current.style.transform = "translateZ(0px)";
    imageRef.current.style.transform = "translateZ(0px)";
    descriptionRef.current.style.transform = "translateZ(0px)";
    difficulityRef.current.style.transform = "translateZ(0px)";
    startButtonRef.current.style.transform = "translateZ(0px)";
  };

  return (
    <div
      className="card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sneaker-image" ref={imageRef}>
        <div className="circle"></div>
        <img src="https://via.placeholder.com/150" alt="react pic" />
      </div>
      <div className="info">
        <h1 className="title">React</h1>
        <p className="description">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="difficulty-buttons" ref={difficulityRef}>
        <button>Easy</button>
        <button>Advanced</button>
        <button>Hard</button>
        <button>Pro</button>
      </div>
      <div className="start-button" ref={startButtonRef}>
        <button>Start</button>
      </div>
    </div>
  );
};

export default Card;
