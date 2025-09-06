import { Card } from "../components/Card";
import { Nav } from "../components/Nav";
import { Menu } from "../components/Menu";
import { Shorts } from "../components/Shorts";

export default function Home() {
  return (
    <div className="box w-full min-h-screen pt-32">
      <Nav
        speedLogo="./img/speed-logo.jpg"
        huxn="./img/huxn.jpg"
        tushig="./img/tushig.jpg"
        mftv="./img/mf-tv.jpg"
        saudio="./img/saudio.jpg"
        randomlogo="./img/random-logo.jpg"
        neo="./img/neo.jpg"
      />
      <Menu />
      <div className="flex gap-5 justify-center items-center mt-0 ml-60 px-4">
        {" "}
        <Card
          image="./img/Thumbnail.jpg"
          text="How it feels to get DESTROYED by The Mongolz in CS2"
        />
        <Card
          image="./img/thumbnail2.avif"
          text="НОЁН IZ-ЫН БАГТАЙ ХИЙСЭН ШИРҮҮХЭН ТУЛААН
"
        />
        <Card
          image="./img/thumbnail3.avif"
          text="ХӨГЖИЛДӨЖ ХАНАЛАА !!!

"
        />
        <Card
          image="./img/video.jpg"
          text="YoungSub Fight Club

"
        />
      </div>
      <div className="flex gap-5 justify-center items-center mt-30 ml-0 md:ml-60 px-4">
        {" "}
        <Card
          image="./img/Thumbnail.jpg"
          text="How it feels to get DESTROYED by The Mongolz in CS2"
        />
        <Card
          image="./img/thumbnail2.avif"
          text="НОЁН IZ-ЫН БАГТАЙ ХИЙСЭН ШИРҮҮХЭН ТУЛААН
"
        />
        <Card
          image="./img/thumbnail3.avif"
          text="ХӨГЖИЛДӨЖ ХАНАЛАА !!!

"
        />
        <Card
          image="./img/video.jpg"
          text="YoungSub Fight Club

"
        />
      </div>{" "}
      <div className="flex flex-col gap-5 relative items-center   justify-center ">
        <div className="flex items-center absolute top-45 left-4 md:left-60">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35"
            height="35"
            viewBox="0 0 48 48"
          >
            <path
              fill="#ff3d00"
              d="M29.103,2.631c4.217-2.198,9.438-0.597,11.658,3.577c2.22,4.173,0.6,9.337-3.617,11.534l-3.468,1.823	c2.987,0.109,5.836,1.75,7.328,4.555c2.22,4.173,0.604,9.337-3.617,11.534L18.897,45.37c-4.217,2.198-9.438,0.597-11.658-3.577	s-0.6-9.337,3.617-11.534l3.468-1.823c-2.987-0.109-5.836-1.75-7.328-4.555c-2.22-4.173-0.6-9.337,3.617-11.534	C10.612,12.346,29.103,2.631,29.103,2.631z M19.122,17.12l11.192,6.91l-11.192,6.877C19.122,30.907,19.122,17.12,19.122,17.12z"
            ></path>
            <path
              fill="#fff"
              d="M19.122,17.12v13.787l11.192-6.877L19.122,17.12z"
            ></path>
          </svg>{" "}
          <h1 className="text-3xl">Shorts</h1>
        </div>

        <div className="flex gap-7 overflow-x-auto overflow-y-hidden ml-160 mt-30 pr-10 pb-4">
          <Shorts
            short="./img/short.avif"
            text="    These guys have it so easy 😂  "
            texth5="5.5M views"
          />

          <Shorts
            short="./img/short2.avif"
            text="    I FLASHED S1MPLE IN FPL!!!  "
            texth5="5.5M views"
          />

          <Shorts
            short="./img/short3.avif"
            text="    This crispy pork belly is so fragrant! #asmr #delicious #eat  "
            texth5="12.5M views"
          />
          <Shorts
            short="./img/short4.avif"
            text="    Harder the better  "
            texth5="2M views"
          />

          <Shorts
            short="./img/short5.avif"
            text="   Sugar Daddy 😎 "
            texth5="16M views"
          />

          <Shorts
            short="./img/short4.avif"
            text="    Harder the better  "
            texth5="2M views"
          />
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center  ml-60 mt-0">
        {" "}
        <Card
          image="./img/Thumbnail.jpg"
          text="How it feels to get DESTROYED by The Mongolz in CS2"
        />
        <Card
          image="./img/thumbnail2.avif"
          text="НОЁН IZ-ЫН БАГТАЙ ХИЙСЭН ШИРҮҮХЭН ТУЛААН
"
        />
        <Card
          image="./img/thumbnail3.avif"
          text="ХӨГЖИЛДӨЖ ХАНАЛАА !!!

"
        />
        <Card
          image="./img/video.jpg"
          text="YoungSub Fight Club

"
        />
      </div>{" "}
      <div className="flex gap-2 justify-center items-center mt-30 ml-60">
        {" "}
        <Card
          image="./img/Thumbnail.jpg"
          text="How it feels to get DESTROYED by The Mongolz in CS2"
        />
        <Card
          image="./img/thumbnail2.avif"
          text="НОЁН IZ-ЫН БАГТАЙ ХИЙСЭН ШИРҮҮХЭН ТУЛААН
"
        />
        <Card
          image="./img/thumbnail3.avif"
          text="ХӨГЖИЛДӨЖ ХАНАЛАА !!!

"
        />
        <Card
          image="./img/video.jpg"
          text="YoungSub Fight Club

"
        />
      </div>{" "}
      <div className="flex gap-2 justify-center items-center  ml-60 mt-30">
        {" "}
        <Card
          image="./img/Thumbnail.jpg"
          text="How it feels to get DESTROYED by The Mongolz in CS2"
        />
        <Card
          image="./img/thumbnail2.avif"
          text="НОЁН IZ-ЫН БАГТАЙ ХИЙСЭН ШИРҮҮХЭН ТУЛААН
"
        />
        <Card
          image="./img/thumbnail3.avif"
          text="ХӨГЖИЛДӨЖ ХАНАЛАА !!!

"
        />
        <Card
          image="./img/video.jpg"
          text="YoungSub Fight Club

"
        />
      </div>{" "}
    </div>
  );
}
