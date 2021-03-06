import { Avatar } from "@mui/material";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Image from "next/image";
import UserMessage from "public/profile.png";
import { useRouter } from "next/router";

const ChatDriver = () => {
  const router = useRouter();
  const [openMedia, setOpenMedia] = useState(false);
  const Camera = useSpring({
    to: {
      scale: openMedia ? 1 : 0,
    },
  });
  const Opened = useSpring({
    to: {
      height: openMedia ? 100 : 0,
    },
  });
  const Rotate = useSpring({
    to: {
      rotate: openMedia ? 45 : 0,
    },
  });
  return (
    <div className="w-full h-full pb-28">
      <div className="key relative z-10">
        <div className="w-full fixed top-0 bg-custom-bg bg-opacity-70 backdrop-filter backdrop-blur-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div>
                <button onClick={() => router.back()}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="16"
                      fill="#414141"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M23.4667 14.9345H10.816L14.688 10.2839C14.8691 10.066 14.9562 9.78521 14.9302 9.50315C14.9042 9.2211 14.7672 8.96093 14.5493 8.77987C14.3315 8.59882 14.0507 8.51171 13.7686 8.53772C13.4866 8.56372 13.2264 8.70071 13.0453 8.91854L7.71201 15.3185C7.67613 15.3694 7.64404 15.4229 7.61601 15.4785C7.61601 15.5319 7.61601 15.5639 7.54134 15.6172C7.49299 15.7395 7.46768 15.8697 7.46667 16.0012C7.46768 16.1327 7.49299 16.2629 7.54134 16.3852C7.54134 16.4385 7.54134 16.4705 7.61601 16.5239C7.64404 16.5795 7.67613 16.633 7.71201 16.6839L13.0453 23.0839C13.1456 23.2043 13.2712 23.3011 13.4132 23.3675C13.5551 23.4339 13.71 23.4681 13.8667 23.4679C14.1159 23.4684 14.3574 23.3816 14.5493 23.2225C14.6574 23.133 14.7466 23.023 14.8121 22.8989C14.8775 22.7748 14.9178 22.639 14.9307 22.4993C14.9436 22.3596 14.9288 22.2187 14.8871 22.0847C14.8455 21.9508 14.7778 21.8263 14.688 21.7185L10.816 17.0679H23.4667C23.7496 17.0679 24.0209 16.9555 24.2209 16.7555C24.421 16.5554 24.5333 16.2841 24.5333 16.0012C24.5333 15.7183 24.421 15.447 24.2209 15.247C24.0209 15.0469 23.7496 14.9345 23.4667 14.9345Z"
                      fill="#414141"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-x-2">
                <div>
                  <Avatar>FA</Avatar>
                </div>
                <div>
                  <p>Fandy</p>
                </div>
              </div>
            </div>
            <div>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1365_8293)">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      transform="rotate(90 12 12)"
                      fill="#FC4041"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#FC4041"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1365_8293">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 24) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* DIRECT MESSAGE */}
      <div className="pt-24 px-4 w-auto space-y-4">
        <div className="flex flex-row gap-x-3 w-auto">
          <div className="flex-none">
            <Image src={UserMessage} />
          </div>
          <div className="flex flex-col space-y-2 pr-24">
            <div className="bg-custom-bg border rounded-r-message w-fit">
              <p className="text-s p-2 break-words w-fit">
                Lorem ipsum dolor sit
              </p>
            </div>
            <div className="bg-custom-bg border rounded-r-message">
              <p className="text-s p-2 break-words w-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend in sed pellentesque nulla. Dignissim eget et facilisi
                massa lectus elit, nisi. Volutpat sem orci vitae felis tortor.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-3 w-auto">
          <div className="flex flex-col space-y-2 pl-24 float-right">
            <div className="bg-custom-red bg-opacity-10 border rounded-l-message w-fit">
              <p className="text-s p-2 break-words w-fit">
                Lorem ipsum dolor sit
              </p>
            </div>

            <div className="bg-custom-red bg-opacity-10 border rounded-l-message">
              <p className="text-s p-2 break-words w-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend in sed pellentesque nulla. Dignissim eget et facilisi
                massa lectus elit, nisi. Volutpat sem orci vitae felis tortor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="key relative z-10">
        <div className="w-full fixed bottom-0 bg-custom-bg bg-opacity-70 backdrop-filter backdrop-blur-2xl">
          <div className="w-full p-4">
            <div className="w-full flex items-center px-4 gap-x-4 pt-2">
              <div className="w-full">
                <textarea
                  className="bg-white w-full h-auto outline-none rounded-lg px-2 overflow-hidden"
                  placeholder="Message..."
                />
              </div>
            </div>
          </div>
          <animated.div style={Opened} className="flex items-center gap-x-2">
            <animated.div style={Camera} className="pl-4 py-4">
              <button onClick={() => router.push("../galery", "../galery")}>
                <svg
                  width="40"
                  height="65"
                  viewBox="0 0 40 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.25"
                    y="0.25"
                    width="39.5"
                    height="39.5"
                    rx="4.75"
                    fill="white"
                  />
                  <path
                    d="M29 27V13C29 11.9 28.1 11 27 11H13C11.9 11 11 11.9 11 13V27C11 28.1 11.9 29 13 29H27C28.1 29 29 28.1 29 27ZM16.5 21.5L19 24.51L22.5 20L27 26H13L16.5 21.5Z"
                    fill="#414141"
                  />
                  <rect
                    x="0.25"
                    y="0.25"
                    width="39.5"
                    height="39.5"
                    rx="4.75"
                    stroke="#D8DEE8"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M5.50255 50.835C2.95455 50.835 0.952555 52.746 0.952555 55.463C0.952555 58.18 2.95455 60.078 5.50255 60.078C7.95955 60.078 9.74056 58.271 9.94855 56.022V55.112H5.07355V56.074H8.68755C8.50555 57.868 7.28356 59.012 5.50255 59.012C3.59155 59.012 2.16155 57.634 2.16155 55.463C2.16155 53.279 3.59155 51.901 5.50255 51.901C6.77656 51.901 7.76456 52.512 8.25855 53.565H9.67556C8.99956 51.823 7.41355 50.835 5.50255 50.835ZM11.0707 56.412C11.0707 58.622 12.5397 60.117 14.4377 60.117C15.7507 60.117 16.6737 59.441 17.1027 58.674V60H18.2987V52.876H17.1027V54.176C16.6867 53.435 15.7767 52.759 14.4507 52.759C12.5397 52.759 11.0707 54.189 11.0707 56.412ZM17.1027 56.425C17.1027 58.102 15.9847 59.077 14.6847 59.077C13.3847 59.077 12.2797 58.089 12.2797 56.412C12.2797 54.735 13.3847 53.786 14.6847 53.786C15.9847 53.786 17.1027 54.774 17.1027 56.425ZM20.2979 60H21.4809V50.38H20.2979V60ZM26.5261 53.76C27.7481 53.76 28.7881 54.527 28.7751 55.918H24.2771C24.4071 54.527 25.3691 53.76 26.5261 53.76ZM29.8541 57.803H28.5801C28.3201 58.57 27.6441 59.116 26.5781 59.116C25.3691 59.116 24.3551 58.323 24.2641 56.88H29.9581C29.9841 56.633 29.9971 56.425 29.9971 56.165C29.9971 54.215 28.6451 52.759 26.5781 52.759C24.4981 52.759 23.0551 54.176 23.0551 56.425C23.0551 58.687 24.5501 60.117 26.5781 60.117C28.3461 60.117 29.4901 59.103 29.8541 57.803ZM32.7416 56.126C32.7416 54.475 33.5996 53.968 34.7306 53.968H35.0426V52.746C33.9116 52.746 33.1446 53.24 32.7416 54.033V52.876H31.5586V60H32.7416V56.126ZM36.4082 60H37.5912V52.876H36.4082V60ZM37.0192 51.719C37.4482 51.719 37.7992 51.368 37.7992 50.913C37.7992 50.458 37.4482 50.107 37.0192 50.107C36.5642 50.107 36.2132 50.458 36.2132 50.913C36.2132 51.368 36.5642 51.719 37.0192 51.719Z"
                    fill="#414141"
                  />
                </svg>
              </button>
            </animated.div>
            <animated.div style={Camera} className="py-4">
              <svg
                width="54"
                height="65"
                viewBox="0 0 54 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="7.25"
                  y="0.25"
                  width="39.5"
                  height="39.5"
                  rx="4.75"
                  fill="white"
                />
                <path
                  d="M26.9998 24.1998C28.7671 24.1998 30.1998 22.7671 30.1998 20.9998C30.1998 19.2325 28.7671 17.7998 26.9998 17.7998C25.2325 17.7998 23.7998 19.2325 23.7998 20.9998C23.7998 22.7671 25.2325 24.1998 26.9998 24.1998Z"
                  fill="#414141"
                />
                <path
                  d="M24 11L22.17 13H19C17.9 13 17 13.9 17 15V27C17 28.1 17.9 29 19 29H35C36.1 29 37 28.1 37 27V15C37 13.9 36.1 13 35 13H31.83L30 11H24ZM27 26C24.24 26 22 23.76 22 21C22 18.24 24.24 16 27 16C29.76 16 32 18.24 32 21C32 23.76 29.76 26 27 26Z"
                  fill="#414141"
                />
                <rect
                  x="7.25"
                  y="0.25"
                  width="39.5"
                  height="39.5"
                  rx="4.75"
                  stroke="#D8DEE8"
                  strokeWidth="0.5"
                />
                <path
                  d="M0.600504 55.463C0.600504 58.18 2.5895 60.078 5.1245 60.078C7.0875 60.078 8.6475 59.103 9.3235 57.361H7.9065C7.4125 58.44 6.4505 59.051 5.1245 59.051C3.2265 59.051 1.8095 57.673 1.8095 55.463C1.8095 53.24 3.2265 51.862 5.1245 51.862C6.4505 51.862 7.4125 52.473 7.9065 53.565H9.3235C8.6475 51.81 7.0875 50.822 5.1245 50.822C2.5895 50.822 0.600504 52.746 0.600504 55.463ZM10.6425 56.412C10.6425 58.622 12.1115 60.117 14.0095 60.117C15.3225 60.117 16.2455 59.441 16.6745 58.674V60H17.8705V52.876H16.6745V54.176C16.2585 53.435 15.3485 52.759 14.0225 52.759C12.1115 52.759 10.6425 54.189 10.6425 56.412ZM16.6745 56.425C16.6745 58.102 15.5565 59.077 14.2565 59.077C12.9565 59.077 11.8515 58.089 11.8515 56.412C11.8515 54.735 12.9565 53.786 14.2565 53.786C15.5565 53.786 16.6745 54.774 16.6745 56.425ZM30.1527 60H31.3227V55.801C31.3227 53.76 30.0617 52.746 28.4367 52.746C27.3447 52.746 26.3307 53.305 25.9147 54.332C25.4467 53.266 24.4717 52.746 23.3017 52.746C22.3657 52.746 21.5207 53.149 21.0527 53.903V52.876H19.8697V60H21.0527V56.074C21.0527 54.54 21.8717 53.773 23.0677 53.773C24.2377 53.773 25.0177 54.514 25.0177 55.97V60H26.1877V56.074C26.1877 54.54 27.0067 53.773 28.2027 53.773C29.3727 53.773 30.1527 54.514 30.1527 55.97V60ZM36.2922 53.76C37.5142 53.76 38.5542 54.527 38.5412 55.918H34.0432C34.1732 54.527 35.1352 53.76 36.2922 53.76ZM39.6202 57.803H38.3462C38.0862 58.57 37.4102 59.116 36.3442 59.116C35.1352 59.116 34.1212 58.323 34.0302 56.88H39.7242C39.7502 56.633 39.7632 56.425 39.7632 56.165C39.7632 54.215 38.4112 52.759 36.3442 52.759C34.2642 52.759 32.8212 54.176 32.8212 56.425C32.8212 58.687 34.3162 60.117 36.3442 60.117C38.1122 60.117 39.2562 59.103 39.6202 57.803ZM42.5077 56.126C42.5077 54.475 43.3657 53.968 44.4967 53.968H44.8087V52.746C43.6777 52.746 42.9107 53.24 42.5077 54.033V52.876H41.3247V60H42.5077V56.126ZM45.7323 56.412C45.7323 58.622 47.2013 60.117 49.0993 60.117C50.4123 60.117 51.3353 59.441 51.7643 58.674V60H52.9603V52.876H51.7643V54.176C51.3483 53.435 50.4383 52.759 49.1123 52.759C47.2013 52.759 45.7323 54.189 45.7323 56.412ZM51.7643 56.425C51.7643 58.102 50.6463 59.077 49.3463 59.077C48.0463 59.077 46.9413 58.089 46.9413 56.412C46.9413 54.735 48.0463 53.786 49.3463 53.786C50.6463 53.786 51.7643 54.774 51.7643 56.425Z"
                  fill="#414141"
                />
              </svg>
            </animated.div>
            <animated.div style={Camera} className="py-4">
              <svg
                width="40"
                height="65"
                viewBox="0 0 40 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  y="0.25"
                  width="39.5"
                  height="39.5"
                  rx="4.75"
                  fill="white"
                />
                <path
                  d="M11 10H13V30H11V10ZM27 10H14V30H27C28.103 30 29 29.103 29 28V12C29 10.897 28.103 10 27 10ZM26 20H17V18H26V20ZM26 16H17V14H26V16Z"
                  fill="#414141"
                />
                <rect
                  x="0.25"
                  y="0.25"
                  width="39.5"
                  height="39.5"
                  rx="4.75"
                  stroke="#D8DEE8"
                  strokeWidth="0.5"
                />
                <path
                  d="M3.05618 60H4.23918V53.279L7.24218 60H8.07418L11.0642 53.292V60H12.2472V51.004H10.9862L7.65818 58.44L4.33018 51.004H3.05618V60ZM17.2824 53.76C18.5044 53.76 19.5444 54.527 19.5314 55.918H15.0334C15.1634 54.527 16.1254 53.76 17.2824 53.76ZM20.6104 57.803H19.3364C19.0764 58.57 18.4004 59.116 17.3344 59.116C16.1254 59.116 15.1114 58.323 15.0204 56.88H20.7144C20.7404 56.633 20.7534 56.425 20.7534 56.165C20.7534 54.215 19.4014 52.759 17.3344 52.759C15.2544 52.759 13.8114 54.176 13.8114 56.425C13.8114 58.687 15.3064 60.117 17.3344 60.117C19.1024 60.117 20.2464 59.103 20.6104 57.803ZM27.528 60H28.698V55.801C28.698 53.76 27.437 52.746 25.786 52.746C24.824 52.746 23.966 53.149 23.498 53.89V52.876H22.315V60H23.498V56.061C23.498 54.527 24.33 53.773 25.539 53.773C26.735 53.773 27.528 54.514 27.528 55.97V60ZM36.9484 52.876H35.7654V56.789C35.7654 58.323 34.9464 59.077 33.7244 59.077C32.5284 59.077 31.7354 58.336 31.7354 56.893V52.876H30.5654V57.049C30.5654 59.09 31.8524 60.104 33.4904 60.104C34.4394 60.104 35.3104 59.688 35.7654 58.947V60H36.9484V52.876Z"
                  fill="#414141"
                />
              </svg>
            </animated.div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default ChatDriver;
