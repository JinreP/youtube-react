import { Balloon } from "../../components/Game";
const colorTheme = [
  "red",
  "blue",
  "purple",
  "violet",
  "black",
  "orange",
  "yellow",
  "green",
  "pink",
];

function getRandomPosition() {
  const top = Math.floor(Math.random() * 80);
  const left = Math.floor(Math.random() * 80);
  return { top: `${top}%`, left: `${left}%` };
}

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      {colorTheme.map((color, index) => {
        const position = getRandomPosition();
        return (
          <Balloon
            num={index + 1}
            key={index}
            color={color}
            top={position.top}
            left={position.left}
          />
        );
      })}
    </div>
  );
}
