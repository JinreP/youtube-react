export function Balloon(props) {
  return (
    <div
      className="flex flex-col absolute animate-bounce items-center justify-center"
      style={{ top: props.top, left: props.left }}
    >
      <div
        className="border-0 relative rounded-[45px] bg-pink-400 w-[100px]  h-[100px]"
        style={{ backgroundColor: props.color }}
      />
      <p className="absolute  bottom-40">{props.num}</p>

      <div className="w-[3px]  h-[100px] bg-black border-solid" />
    </div>
  );
}
