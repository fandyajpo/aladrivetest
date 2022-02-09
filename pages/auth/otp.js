import Keyboard from "components/footer/customKeyboard";
import BackNavigation from "components/footer/backNav";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
const OTP = () => {
  const previous = useRef();
  const [otpPin, setOtpPin] = useState("");

  previous.current = otpPin;
  const otpData = [otpPin];
  useEffect(() => {
    console.log("PREVIOUS PIN", previous.current);
    console.log("PIN", otpPin);
    console.log("JUMLAH PIN", otpData);
  }, [otpPin, previous]);

  const router = useRouter();

  return (
    <>
      <div className="space-y-8 py-12 pb-96">
        <div className="flex flex-col items-center justify-center">
          <p className="text-md font-bold">OTP</p>
          <p className="text-md">Masukkan kode OTP yang dikirim ke</p>
          <p className="text-md text-custom-blue">08763775932489</p>
        </div>
        <div className="text-center text-md">02 : 00</div>
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
          <p className="text-md">Tidak menerima Kode?</p>
          <button>
            <svg
              width="156"
              height="32"
              viewBox="0 0 156 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="156"
                height="32"
                rx="16"
                fill="#4391EF"
                fillOpacity="0.1"
              />
              <path
                d="M45.1922 21H47.9092L44.2432 16.346L47.7792 11.874H45.1662L42.1242 15.878V11.874H39.9012V21H42.1242V16.97L45.1922 21ZM48.9657 21H51.1887V13.746H48.9657V21ZM50.0837 12.992C50.8637 12.992 51.3967 12.459 51.3967 11.796C51.3967 11.12 50.8637 10.587 50.0837 10.587C49.2907 10.587 48.7577 11.12 48.7577 11.796C48.7577 12.459 49.2907 12.992 50.0837 12.992ZM55.0227 17.633C55.0227 16.385 55.6337 16.021 56.6867 16.021H57.2977V13.668C56.3227 13.668 55.5297 14.188 55.0227 14.955V13.746H52.7997V21H55.0227V17.633ZM58.3602 21H60.5832V13.746H58.3602V21ZM59.4782 12.992C60.2582 12.992 60.7912 12.459 60.7912 11.796C60.7912 11.12 60.2582 10.587 59.4782 10.587C58.6852 10.587 58.1522 11.12 58.1522 11.796C58.1522 12.459 58.6852 12.992 59.4782 12.992ZM72.1912 21H74.4012V16.762C74.4012 14.812 73.2442 13.668 71.4502 13.668C70.3972 13.668 69.4872 14.253 69.0062 15.02C68.5122 14.149 67.6282 13.668 66.5362 13.668C65.5872 13.668 64.8462 14.071 64.4172 14.656V13.746H62.1942V21H64.4172V17.061C64.4172 16.112 64.9632 15.592 65.8082 15.592C66.6532 15.592 67.1992 16.112 67.1992 17.061V21H69.4092V17.061C69.4092 16.112 69.9552 15.592 70.8002 15.592C71.6452 15.592 72.1912 16.112 72.1912 17.061V21ZM85.8738 13.746H83.6508V17.685C83.6508 18.673 83.1048 19.219 82.2468 19.219C81.4148 19.219 80.8558 18.673 80.8558 17.685V13.746H78.6458V17.984C78.6458 19.921 79.7768 21.078 81.4538 21.078C82.4288 21.078 83.2088 20.636 83.6508 20.012V21H85.8738V13.746ZM87.4706 21H89.6936V11.38H87.4706V21ZM90.8625 17.36C90.8625 19.648 92.2795 21.104 94.0475 21.104C95.1265 21.104 95.8935 20.61 96.2965 19.973V21H98.5195V13.746H96.2965V14.773C95.9065 14.136 95.1395 13.642 94.0605 13.642C92.2795 13.642 90.8625 15.072 90.8625 17.36ZM96.2965 17.373C96.2965 18.53 95.5555 19.167 94.7105 19.167C93.8785 19.167 93.1245 18.517 93.1245 17.36C93.1245 16.203 93.8785 15.579 94.7105 15.579C95.5555 15.579 96.2965 16.216 96.2965 17.373ZM105.133 21H107.343V16.762C107.343 14.812 106.225 13.668 104.548 13.668C103.573 13.668 102.793 14.097 102.351 14.708V13.746H100.128V21H102.351V17.061C102.351 16.073 102.897 15.527 103.742 15.527C104.587 15.527 105.133 16.073 105.133 17.061V21ZM108.446 17.36C108.446 19.648 109.863 21.104 111.644 21.104C112.71 21.104 113.477 20.597 113.88 19.96V20.987C113.88 22.209 113.217 22.651 112.372 22.651C111.605 22.651 111.059 22.3 110.916 21.754H108.719C108.914 23.483 110.318 24.575 112.476 24.575C114.985 24.575 116.103 22.924 116.103 20.987V13.746H113.88V14.773C113.49 14.123 112.71 13.642 111.644 13.642C109.863 13.642 108.446 15.072 108.446 17.36ZM113.88 17.373C113.88 18.53 113.139 19.167 112.294 19.167C111.462 19.167 110.708 18.517 110.708 17.36C110.708 16.203 111.462 15.579 112.294 15.579C113.139 15.579 113.88 16.216 113.88 17.373Z"
                fill="#4391EF"
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
        title={"Verify"}
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
        bottomAction={() => router.push("/auth", "/auth")}
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

export default OTP;
