import Keyboard from "components/footer/customKeyboard";
import BackNavigation from "components/footer/backNav";
import { useRouter } from "next/router";
import { useSpring, animated } from "react-spring";
import { useState, useEffect, useRef } from "react";
const PinPenarikan = () => {
  const previous = useRef();
  const [otpPin, setOtpPin] = useState("");
  const [proses, setProses] = useState("");
  previous.current = otpPin;
  const otpData = [otpPin];
  useEffect(() => {
    console.log("PREVIOUS PIN", previous.current);
    console.log("PIN", otpPin);
    console.log("JUMLAH PIN", otpData);
  }, [otpPin, previous]);

  const router = useRouter();
  const PROSES = useSpring({
    to: {
      y: proses ? 0 : 1000,
    },
  });

  return (
    <>
      <div className="space-y-12 py-12 pb-96">
        <div className="flex flex-col items-center justify-center">
          <p className="text-md font-bold">Pin Verifikasi</p>
          <p className="text-md">Masukan pin untuk perubahan</p>
        </div>

        <div className="flex flex-row items-center justify-center gap-x-6">
          <div
            className={`${
              otpData[0].length > 0
                ? "bg-custom-blue h-6 w-6"
                : "bg-blue-400 h-4 w-4"
            } rounded-full duration-500`}
          />
          <div
            className={`${
              otpData[0].length > 1
                ? "bg-custom-blue h-6 w-6"
                : "bg-blue-400 h-4 w-4"
            } rounded-full duration-500`}
          />
          <div
            className={`${
              otpData[0].length > 2
                ? "bg-custom-blue h-6 w-6"
                : "bg-blue-400 h-4 w-4"
            } rounded-full duration-500`}
          />
          <div
            className={`${
              otpData[0].length > 3
                ? "bg-custom-blue h-6 w-6"
                : "bg-blue-400 h-4 w-4"
            } rounded-full duration-500`}
          />
          <div
            className={`${
              otpData[0].length > 4
                ? "bg-custom-blue h-6 w-6"
                : "bg-blue-400 h-4 w-4"
            } rounded-full duration-500`}
          />
          <div
            className={`${
              otpData[0].length > 5
                ? "bg-custom-blue h-6 w-6"
                : "bg-blue-400 h-4 w-4"
            } rounded-full duration-500`}
          />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <button onClick={() => router.push("reset-pin-otp")}>
            <svg
              width="96"
              height="24"
              viewBox="0 0 96 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="96"
                height="24"
                rx="12"
                fill="#4391EF"
                fillOpacity="0.1"
              />
              <path
                d="M22.4981 7.939L22.4981 17L26.8531 17V16.038L23.6811 16.038L23.6811 7.939L22.4981 7.939ZM34.4274 9.876L33.2444 9.876L33.2444 13.789C33.2444 15.323 32.4254 16.077 31.2034 16.077C30.0074 16.077 29.2144 15.336 29.2144 13.893L29.2144 9.876L28.0444 9.876L28.0444 14.049C28.0444 16.09 29.3314 17.104 30.9694 17.104C31.9184 17.104 32.7894 16.688 33.2444 15.947L33.2444 17H34.4274L34.4274 9.876ZM37.6078 11.189V9.876L36.4248 9.876L36.4248 20.38L37.6078 20.38V15.687C38.0498 16.415 38.9728 17.117 40.2728 17.117C42.1838 17.117 43.6528 15.622 43.6528 13.412C43.6528 11.189 42.1838 9.759 40.2728 9.759C38.9728 9.759 38.0368 10.435 37.6078 11.189ZM42.4438 13.412C42.4438 15.089 41.3388 16.077 40.0258 16.077C38.7388 16.077 37.6078 15.102 37.6078 13.425C37.6078 11.774 38.7388 10.786 40.0258 10.786C41.3388 10.786 42.4438 11.735 42.4438 13.412ZM44.768 13.412C44.768 15.622 46.237 17.117 48.135 17.117C49.448 17.117 50.371 16.441 50.8 15.674V17L51.996 17L51.996 9.876L50.8 9.876V11.176C50.384 10.435 49.474 9.759 48.148 9.759C46.237 9.759 44.768 11.189 44.768 13.412ZM50.8 13.425C50.8 15.102 49.682 16.077 48.382 16.077C47.082 16.077 45.977 15.089 45.977 13.412C45.977 11.735 47.082 10.786 48.382 10.786C49.682 10.786 50.8 11.774 50.8 13.425ZM58.644 12.242V8.914L60.386 8.914C61.738 8.914 62.31 9.538 62.31 10.591C62.31 11.605 61.738 12.242 60.386 12.242L58.644 12.242ZM63.519 10.591C63.519 9.109 62.518 7.939 60.386 7.939L57.461 7.939L57.461 17H58.644L58.644 13.217L60.386 13.217C62.635 13.217 63.519 11.969 63.519 10.591ZM64.9893 17L66.1723 17L66.1723 9.876L64.9893 9.876L64.9893 17ZM65.6003 8.719C66.0293 8.719 66.3803 8.368 66.3803 7.913C66.3803 7.458 66.0293 7.107 65.6003 7.107C65.1453 7.107 64.7943 7.458 64.7943 7.913C64.7943 8.368 65.1453 8.719 65.6003 8.719ZM73.4015 17H74.5715V12.801C74.5715 10.76 73.3105 9.746 71.6595 9.746C70.6975 9.746 69.8395 10.149 69.3715 10.89V9.876H68.1885L68.1885 17L69.3715 17V13.061C69.3715 11.527 70.2035 10.773 71.4125 10.773C72.6085 10.773 73.4015 11.514 73.4015 12.97V17Z"
                fill="#056BE5"
              />
            </svg>
          </button>
        </div>
      </div>
      <Keyboard
        position={"bottom-0"}
        one={() => setOtpPin(previous.current + "1")}
        two={() => setOtpPin(previous.current + "2")}
        three={() => setOtpPin(previous.current + "3")}
        four={() => setOtpPin(previous.current + "4")}
        five={() => setOtpPin(previous.current + "5")}
        six={() => setOtpPin(previous.current + "6")}
        seven={() => setOtpPin(previous.current + "7")}
        eight={() => setOtpPin(previous.current + "8")}
        nine={() => setOtpPin(previous.current + "9")}
        zero={() => setOtpPin(previous.current + "0")}
        del={() => setOtpPin(otpData[0].substring(0, otpData[0].length - 1))}
        disableKeyboard={otpData[0].length > 5}
        disableDelete={otpData[0].length < 1}
      />
      <BackNavigation
        title={"Konfirmasi Pin"}
        leftButton={
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#414141" fillOpacity="0.1" />
            <path
              d="M23.4667 14.9347H10.816L14.688 10.284C14.8691 10.0662 14.9562 9.78534 14.9302 9.50328C14.9042 9.22123 14.7672 8.96106 14.5493 8.78C14.3315 8.59895 14.0507 8.51184 13.7686 8.53785C13.4866 8.56385 13.2264 8.70084 13.0453 8.91867L7.71201 15.3187C7.67613 15.3696 7.64404 15.4231 7.61601 15.4787C7.61601 15.532 7.61601 15.564 7.54134 15.6173C7.49299 15.7396 7.46768 15.8698 7.46667 16.0013C7.46768 16.1328 7.49299 16.263 7.54134 16.3853C7.54134 16.4387 7.54134 16.4707 7.61601 16.524C7.64404 16.5796 7.67613 16.6331 7.71201 16.684L13.0453 23.084C13.1456 23.2044 13.2712 23.3012 13.4132 23.3676C13.5551 23.434 13.71 23.4683 13.8667 23.468C14.1159 23.4685 14.3574 23.3817 14.5493 23.2227C14.6574 23.1331 14.7466 23.0231 14.8121 22.899C14.8775 22.7749 14.9178 22.6391 14.9307 22.4994C14.9436 22.3597 14.9288 22.2189 14.8871 22.0849C14.8455 21.9509 14.7778 21.8265 14.688 21.7187L10.816 17.068H23.4667C23.7496 17.068 24.0209 16.9556 24.2209 16.7556C24.421 16.5555 24.5333 16.2842 24.5333 16.0013C24.5333 15.7184 24.421 15.4471 24.2209 15.2471C24.0209 15.047 23.7496 14.9347 23.4667 14.9347Z"
              fill="#414141"
            />
          </svg>
        }
        leftAction={() => router.back()}
        bottomButton={"Ok"}
        bottomAction={() =>
          router.push("loading-ubah-rekening", "loading-ubah-rekening")
        }
        block={otpData[0].length !== 6}
        classButton={
          otpData[0].length > 5
            ? "bg-custom-blue text-white"
            : "bg-custom-btnGray text-white"
        }
        position={"bottom-60"}
      />
    </>
  );
};

export default PinPenarikan;
