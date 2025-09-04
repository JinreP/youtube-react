import { Balloon } from "../../components/Game";

export default function Home() {
  return (
    <div className="flex gap-5 w-full h-screen  justify-center items-center">
      {" "}
      <Balloon backgroundColor="bg-red-400"  />
      <Balloon />
      <Balloon />
      <Balloon />
      <Balloon />
    </div>
  );
}
