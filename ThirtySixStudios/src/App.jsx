import Canvas from "./Canvas";
import data from "./data";
export default function App() {
  return (
    <>
      <div className="w-full bg-black">
        {data.map((item, index) => (
          <div key={index}>
            {item.map((canvasdets, index) => (
              <Canvas details={canvasdets} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
