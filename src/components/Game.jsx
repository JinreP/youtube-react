export function Balloon(props) {
  return (
    <div className="flex flex-col animate-bounce items-center justify-center">
      <div className="border-0 rounded-[45px] bg-pink-400 w-[100px]  h-[100px]" style={{ backgroundColor: props.color }} />

      <div className="w-[3px]  h-[100px] bg-black border-solid" />
    </div>
  );
}
