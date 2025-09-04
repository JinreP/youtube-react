import { Balloon } from "../../components/Game";
const colorTheme = ["red", "blue", "purple", "violet", "black", "orange", "yellow", "green", "pink"];
export default function Home() {
  return (
    <div className="flex gap-5 w-screen h-screen justify-center items-center">
      {colorTheme.map((color) => (
        <Balloon key={color} color={color} />
      ))}
    </div>
  );
}
