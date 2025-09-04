export function Balloon(props) {
  return (
    <div className="flex flex-col animate-bounce items-center justify-center">
      <div className="border-2  rounded-[50px] bg-pink-400 w-[100px]  h-[100px]" />

      <div className="w-[3px]  h-[120px] bg-black border-solid" />
    </div>
  );
}
