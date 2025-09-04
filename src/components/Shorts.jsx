export function Shorts(props) {
  return (
    <div className="mt-30 ">
      <img src={props.short} alt="" className="w-[250px] h-[400px]" />
    {/* <div className="text-white bg-black w-[250px]">
        <div className="rounded-2xl flex items-center gap-2  ">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg> <p>How to get shredded fast?</p> 
        </div>
   
    </div> */}
      <div className=" w-[250px] h-[100px]">      <p className="">{props.text}</p>
      <h5 className="text-gray-500 font-bold">{props.texth5}</h5></div>

    </div>
  );
}
