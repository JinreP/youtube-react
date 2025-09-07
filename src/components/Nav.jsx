export function Nav(props) {
  return (
    <nav className="fixed top-0 left-0 right-0 flex gap-10 py-3 bg-black items-center justify-center z-50">
      <svg
        className="absolute left-4 bi bi-list"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
      <div className="icon-container fixed left-4 top-16 flex flex-col pt-7 gap-10 w-[200px] h-screen overflow-y-auto overflow-x-hidden bg-black z-40">
        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          {" "}
          <svg
            className="flex-shrink-0 bi bi-house"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
          </svg>
          <p>Home</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
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
          </svg>
          <p>Shorts</p>
        </div>
        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            {" "}
            <path
              clipRule="evenodd"
              d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z"
              fillRule="evenodd"
            ></path>
          </svg>
          <p>Subscription</p>
        </div>
        <div className="flex items-center rounded-2xl p-2 text-white w-[200px] gap-3">
          <p>You </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          {" "}
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-clock-history"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />{" "}
            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
          </svg>
          <p>History</p>
        </div>
        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-music-note-list"
            viewBox="0 0 16 16"
          >
            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
            <path fillRule="evenodd" d="M12 3v10h-1V3z" />
            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
            <path
              fillRule="evenodd"
              d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <p>Playlist</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-play-btn"
            viewBox="0 0 16 16"
          >
            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <p>Your Videos</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-stopwatch"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
          </svg>
          <p>Watch later</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-hand-thumbs-up"
            viewBox="0 0 16 16"
          >
            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
          </svg>
          <p>Liked videos</p>
        </div>
        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-scissors"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
          </svg>
          <p>Your clips</p>
        </div>

        <div className="flex items-center  rounded-2xl p-2 text-white w-[200px] gap-2">
          <p>Subscriptions</p>
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <img
            src={props.tushig}
            alt=""
            className="w-[20px] h-[20px] border-0 rounded-[40px]"
          />
          <p>Tushig</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <img
            src={props.huxn}
            alt=""
            className="w-[20px] h-[20px] border-0 rounded-[40px]"
          />
          <p>HuXn WebDev</p>
        </div>
        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <img
            src={props.saudio}
            alt=""
            className="w-[20px] h-[20px] border-0 rounded-[40px]"
          />
          <p>SAudio</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <img
            src={props.mftv}
            alt=""
            className="w-[20px] h-[20px] border-0 rounded-[40px]"
          />
          <p>MF tv </p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <img
            src={props.randomlogo}
            alt=""
            className="w-[20px] h-[20px] border-0 rounded-[40px]"
          />
          <p>SpeeduMon</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <img
            src={props.speedLogo}
            alt=""
            className="w-[20px] h-[20px] border-0 rounded-[40px]"
          />
          <p>IShowSpeed</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
            />
          </svg>{" "}
          <p>Show more</p>
        </div>
        <div>
          <p>Explore</p>
        </div>
        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-music-note-beamed"
            viewBox="0 0 16 16"
          >
            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
            <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z" />
            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
          </svg>
          <p>Music</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
            fill="currentColor"
          >
            <path d="M 8.03125 8.4570312 C 7.770375 8.4589063 7.5103125 8.5625312 7.3203125 8.7695312 C 3.3953125 13.041531 1 18.741 1 25 C 1 31.259 3.3953125 36.958469 7.3203125 41.230469 C 7.7003125 41.644469 8.3569063 41.643094 8.7539062 41.246094 L 10.882812 39.117188 C 11.265812 38.734187 11.263391 38.124656 10.900391 37.722656 C 7.8553906 34.352656 6 29.889 6 25 C 6 20.111 7.8553906 15.647344 10.900391 12.277344 C 11.263391 11.875344 11.265813 11.266812 10.882812 10.882812 L 8.7539062 8.7539062 C 8.5554063 8.5554063 8.292125 8.4551562 8.03125 8.4570312 z M 41.96875 8.4570312 C 41.707625 8.4554062 41.444594 8.5554062 41.246094 8.7539062 L 39.115234 10.884766 C 38.732234 11.267766 38.734656 11.875344 39.097656 12.277344 C 42.143656 15.646344 44 20.111 44 25 C 44 29.889 42.144609 34.352656 39.099609 37.722656 C 38.736609 38.124656 38.734188 38.733187 39.117188 39.117188 L 41.246094 41.246094 C 41.643094 41.643094 42.299687 41.643469 42.679688 41.230469 C 46.604687 36.958469 49 31.259 49 25 C 49 18.741 46.604687 13.041531 42.679688 8.7695312 C 42.489688 8.5625312 42.229875 8.4586563 41.96875 8.4570312 z M 35.625 14.837891 C 35.355125 14.824516 35.079594 14.920406 34.871094 15.128906 L 32.740234 17.259766 C 32.381234 17.618766 32.341969 18.196938 32.667969 18.585938 C 34.123969 20.323937 35 22.561 35 25 C 35 27.439 34.123969 29.675109 32.667969 31.412109 C 32.341969 31.801109 32.381234 32.379281 32.740234 32.738281 L 34.871094 34.871094 C 35.288094 35.288094 35.967516 35.250687 36.353516 34.804688 C 38.625516 32.175687 40 28.748 40 25 C 40 21.252 38.625516 17.824312 36.353516 15.195312 C 36.160516 14.972313 35.894875 14.851266 35.625 14.837891 z M 14.375 14.839844 C 14.105125 14.853219 13.839484 14.974266 13.646484 15.197266 C 11.374484 17.825266 10 21.252 10 25 C 10 28.748 11.374484 32.175688 13.646484 34.804688 C 14.032484 35.250687 14.711906 35.288094 15.128906 34.871094 L 17.259766 32.740234 C 17.618766 32.381234 17.658031 31.803062 17.332031 31.414062 C 15.876031 29.676062 15 27.439 15 25 C 15 22.561 15.876031 20.324891 17.332031 18.587891 C 17.658031 18.198891 17.618766 17.620719 17.259766 17.261719 L 15.128906 15.128906 C 14.920406 14.920406 14.644875 14.826469 14.375 14.839844 z M 25 19 C 21.686 19 19 21.686 19 25 C 19 28.314 21.686 31 25 31 C 28.314 31 31 28.314 31 25 C 31 21.686 28.314 19 25 19 z"></path>
          </svg>
          <p>Live</p>
        </div>
        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-controller"
            viewBox="0 0 16 16"
          >
            <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z" />
            <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27" />
          </svg>
          <p>Gaming</p>
        </div>
        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-newspaper"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
            <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
          </svg>
          <p>News</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-trophy"
            viewBox="0 0 16 16"
          >
            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
          </svg>
          <p>Sports</p>
        </div>
        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-lightbulb-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
          </svg>
          <p>Learning</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <img
            src="./img/clothes-hanger.png"
            alt=""
            className="w-[20px] h-[20px] brightness-0 invert"
          />
          <p>Fashion & beauty</p>
        </div>
        <p>More from YouTube</p>
        <div className="flex items-center gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
            style={{ fill: "#FA5252" }}
          >
            <path d="M 25 4.7265625 C 24.309 4.7265625 23.619 4.9047187 23 5.2617188 L 8.90625 13.398438 C 7.66825 14.112438 6.90625 15.434281 6.90625 16.863281 L 6.90625 33.136719 C 6.90625 34.565719 7.66825 35.885609 8.90625 36.599609 L 23 44.738281 C 23.619 45.095281 24.309 45.273438 25 45.273438 C 25.691 45.273438 26.381 45.095281 27 44.738281 L 41.09375 36.601562 C 42.33175 35.887563 43.09375 34.565719 43.09375 33.136719 L 43.09375 16.863281 C 43.09375 15.434281 42.33175 14.112438 41.09375 13.398438 L 27 5.2617188 C 26.381 4.9047188 25.691 4.7265625 25 4.7265625 z M 25 6.7265625 C 25.351 6.7265625 25.696 6.8191406 26 6.9941406 L 40.09375 15.130859 C 40.71075 15.486859 41.09375 16.151281 41.09375 16.863281 L 41.09375 33.136719 C 41.09375 33.848719 40.71075 34.511187 40.09375 34.867188 L 26 43.005859 C 25.696 43.180859 25.351 43.273438 25 43.273438 C 24.649 43.273438 24.304 43.180859 24 43.005859 L 9.90625 34.869141 C 9.28925 34.513141 8.90625 33.848719 8.90625 33.136719 L 8.90625 16.863281 C 8.90625 16.151281 9.28925 15.486859 9.90625 15.130859 L 24 6.9941406 C 24.304 6.8191406 24.649 6.7265625 25 6.7265625 z M 24.625 11.339844 C 24.092521 11.339844 23.560728 11.481615 23.087891 11.763672 L 14.212891 17.064453 C 13.308125 17.605215 12.751953 18.586246 12.751953 19.640625 L 12.751953 30.359375 C 12.751953 31.413754 13.308125 32.394785 14.212891 32.935547 L 23.087891 38.236328 C 24.033566 38.800441 25.218388 38.800441 26.164062 38.236328 L 35.039062 32.935547 C 35.943829 32.394785 36.5 31.413754 36.5 30.359375 L 36.5 19.640625 C 36.5 18.586246 35.943829 17.605215 35.039062 17.064453 L 26.164062 11.763672 C 25.691225 11.481615 25.157479 11.339844 24.625 11.339844 z M 24.625 13.337891 C 24.802255 13.337891 24.979509 13.385525 25.138672 13.480469 L 34.013672 18.78125 C 34.316906 18.962488 34.5 19.287004 34.5 19.640625 L 34.5 30.359375 C 34.5 30.712996 34.316906 31.037512 34.013672 31.21875 L 25.138672 36.519531 C 24.820952 36.709057 24.431271 36.708336 24.113281 36.519531 L 24.111328 36.519531 L 15.238281 31.21875 C 14.935047 31.037512 14.751953 30.712996 14.751953 30.359375 L 14.751953 19.640625 C 14.751953 19.287004 14.935047 18.962488 15.238281 18.78125 L 24.111328 13.480469 C 24.270491 13.385525 24.447745 13.337891 24.625 13.337891 z M 20.75 19 L 20.75 31 L 31 25 L 20.75 19 z"></path>
          </svg>
          <p>Youtube Studio</p>
        </div>

        <div className="flex items-center gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0,0,256,256"
          >
            <g
              fill="#fa5252"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.12,5.12)">
                <path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path>
              </g>
            </g>
          </svg>
          <p>Youtube Kids</p>
        </div>
        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-gear"
            viewBox="0 0 16 16"
          >
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
          </svg>
          <p>Settings</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-flag"
            viewBox="0 0 16 16"
          >
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z" />
          </svg>
          <p>Report History</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-patch-question"
            viewBox="0 0 16 16"
          >
            <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745" />
            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
            <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
          </svg>
          <p>Help</p>
        </div>

        <div className="flex items-center hover:bg-gray-500 rounded-2xl p-2 text-white w-[200px] gap-5">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-exclamation-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
          </svg>
          <p>Send feedback</p>
        </div>
        <div className="mt-6 pt-4">
          <div className="text-sm text-gray-600">
            <div className="mb-2">
              <span className="mr-4">About</span>
              <span className="mr-4">Press</span>
              <span className="mr-4">Copyright</span>
              <span className="mr-4">Contact us</span>
              <span className="mr-4">Creator</span>
              <span className="mr-4">Advertise</span>
              <span className="mr-4">Developers</span>
            </div>
            <div>
              <span className="mr-4">Terms</span>
              <span className="mr-4">Privacy</span>
              <span className="mr-4">Policy & Safety</span>
              <span className="mr-4">How YouTube works</span>
              <span className="mr-4">Test new features</span>
            </div>
          </div>
        </div>
        <h3>© 2025 Google LLC</h3>
      </div>

      <div className="bg-[url(/img/youtube.logo.png)] absolute left-15 bg-contain h-[150px]  bg-no-repeat w-[200px]" />
      <div className="flex gap-2 items-center">
        <div className="ml-10 flex items-center w-[650px] relative h-[40px] rounded-2xl border-2 border-gray-800 bg-black text-2xl px-4">
          <p className="text-white">Search</p>
          <div className="flex items-center justify-center right-0 absolute rounded-r-2xl h-full w-[50px] bg-gray-700 border-l border-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </div>
      </div>

      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-mic"
        viewBox="0 0 16 16"
      >
        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
      </svg>
      <div className="rounded-2xl w-[100px] h-[40px] absolute right-40 flex items-center gap-2 border-2 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
        <p>Create</p>
      </div>
      <svg
        className="absolute right-30"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-bell"
        viewBox="0 0 16 16"
      >
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
      </svg>
      <img
        src="img/logo.jpg"
        alt=""
        className="w-[40px] h-[40px] absolute right-10 rounded-[50px] border-2"
      />
    </nav>
  );
}
