export function Card(props) {
  return (
    <div className="flex  mt-9 flex-col gap-10 w-[390px] h-[230px]  ">
      <img src={props.image} alt="" className="w-130px h-130px" />
      <div className="flex gap-4 flex-col">
        <div className=""> 
            <img src="props.image2" alt=""className="w-30px h-30px" />
             <p className="text-1xl" style={{ backgroundColor: props.color }}>
          {props.text}{" "}
        </p></div>
      
        <p className="text-gray-500 flex gap-3 items-center">
          MVz ツ{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-patch-check-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
          </svg>
        </p>
        <p className="text-gray-600">7.9M views • 2 years ago</p>
      </div>
    </div>
  );
}
