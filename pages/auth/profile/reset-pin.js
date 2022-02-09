import BackNav from "components/footer/backNav";
import { useState } from "react";
import { useRouter } from "next/router";
const TarikSaldo = () => {
  const [pin, setPin] = useState("");
  const [ulangPin, setUlangPin] = useState("");
  const handlePin = (event) => {
    setPin(event.target.value);
  };
  const handleUlangPin = (event) => {
    setUlangPin(event.target.value);
  };
  const router = useRouter();
  return (
    <div>
      <div className="w-full h-full p-4 space-y-2">
        <div>
          <div>
            <p className="text-md font-bold">Pin</p>
            <p className="text-md text-custom-textGray pb-1">
              Pin 6 digit angka.
            </p>
          </div>
          <input
            placeholder="Pin Baru"
            onChange={handlePin}
            value={pin}
            className="w-full p-1 placeholder-custom-textGray bg-custom-layer border outline-none border-custom-border  rounded-message"
          />
        </div>
        <div>
          <div>
            <p className="text-md font-bold">Ulangi</p>
          </div>
          <input
            placeholder="Ulangi Pin"
            onChange={handleUlangPin}
            value={ulangPin}
            className="w-full p-1 placeholder-custom-textGray bg-custom-layer border outline-none border-custom-border  rounded-message"
          />
        </div>
      </div>
      <BackNav
        title={"Reset Pin"}
        bottomButton={"Konfirmasi"}
        bottomAction={() => router.push("/auth", "/auth")}
        leftAction={() => router.back()}
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
              d="M23.4667 14.9347H10.816L14.688 10.284C14.8691 10.0662 14.9562 9.78533 14.9302 9.50328C14.9042 9.22122 14.7672 8.96105 14.5493 8.77999C14.3315 8.59894 14.0507 8.51183 13.7686 8.53784C13.4866 8.56384 13.2264 8.70083 13.0453 8.91866L7.71201 15.3187C7.67613 15.3696 7.64404 15.423 7.61601 15.4787C7.61601 15.532 7.61601 15.564 7.54134 15.6173C7.49299 15.7396 7.46768 15.8698 7.46667 16.0013C7.46768 16.1328 7.49299 16.263 7.54134 16.3853C7.54134 16.4387 7.54134 16.4707 7.61601 16.524C7.64404 16.5796 7.67613 16.6331 7.71201 16.684L13.0453 23.084C13.1456 23.2044 13.2712 23.3012 13.4132 23.3676C13.5551 23.434 13.71 23.4682 13.8667 23.468C14.1159 23.4685 14.3574 23.3817 14.5493 23.2227C14.6574 23.1331 14.7466 23.0231 14.8121 22.899C14.8775 22.7749 14.9178 22.6391 14.9307 22.4994C14.9436 22.3597 14.9288 22.2188 14.8871 22.0849C14.8455 21.9509 14.7778 21.8264 14.688 21.7187L10.816 17.068H23.4667C23.7496 17.068 24.0209 16.9556 24.2209 16.7556C24.421 16.5555 24.5333 16.2842 24.5333 16.0013C24.5333 15.7184 24.421 15.4471 24.2209 15.2471C24.0209 15.047 23.7496 14.9347 23.4667 14.9347Z"
              fill="#414141"
            />
          </svg>
        }
        classButton={
          !pin || !ulangPin
            ? "bg-custom-btnGray text-white"
            : "bg-custom-blue text-white"
        }
      />
    </div>
  );
};

export default TarikSaldo;
