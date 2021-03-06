import BackNav from "components/footer/backNav";
import { useState } from "react";
import { useRouter } from "next/router";
const TarikSaldo = () => {
  const [rekening, setRekening] = useState("");
  const [nama, setNama] = useState("");
  const handleRekening = (event) => {
    setRekening(event.target.value);
  };
  const handleNama = (event) => {
    setNama(event.target.value);
  };
  const router = useRouter();
  return (
    <div>
      <div className="w-full h-full p-4 space-y-2">
        <div className="flex flex-row gap-x-2 border rounded-message p-2">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#F3B33D" fillOpacity="0.1" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7.09091C9.28878 7.09091 7.09091 9.28878 7.09091 12C7.09091 14.7112 9.28878 16.9091 12 16.9091C14.7112 16.9091 16.9091 14.7112 16.9091 12C16.9091 9.28878 14.7112 7.09091 12 7.09091ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z"
                fill="#F3B33D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 9.5C11 9.22386 11.4455 9 11.995 9H12.005C12.5545 9 13 9.22386 13 9.5C13 9.77614 12.5545 10 12.005 10H11.995C11.4455 10 11 9.77614 11 9.5Z"
                fill="#F3B33D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 11.5714C10 11.2558 10.3358 11 10.75 11H12.25C12.6642 11 13 11.2558 13 11.5714V14.4286C13 14.7442 12.6642 15 12.25 15C11.8358 15 11.5 14.7442 11.5 14.4286V12.1429H10.75C10.3358 12.1429 10 11.887 10 11.5714Z"
                fill="#F3B33D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 14.5C10 14.2239 10.2985 14 10.6667 14H13.3333C13.7015 14 14 14.2239 14 14.5C14 14.7761 13.7015 15 13.3333 15H10.6667C10.2985 15 10 14.7761 10 14.5Z"
                fill="#F3B33D"
              />
            </svg>
          </div>
          <div className="text-md">
            Pergantian rekening membutuhkan proses verifikasi setidaknya 24jam.
          </div>
        </div>
        <div>
          <div>
            <p className="text-md font-bold">Bank</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full border rounded-message p-2">
            <div className="flex items-center flex-row gap-x-2">
              <div>
                <svg
                  width="82"
                  height="41"
                  viewBox="0 0 82 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="82" height="41" rx="5" fill="#D8DEE8" />
                </svg>
              </div>
              <div>
                <p className="text-s font-bold ">Pilih Bank</p>
              </div>
            </div>
            <div>
              <button onClick={() => router.push("bank-option", "bank-option")}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#F3B33D"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#F3B33D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="text-md font-bold">No. Rekening</p>
          </div>
          <input
            placeholder="Nomor Rekening"
            onChange={handleRekening}
            value={rekening}
            className="w-full p-1 placeholder-custom-textGray bg-custom-layer border outline-none border-custom-border  rounded-message"
          />
        </div>
        <div>
          <div>
            <p className="text-md font-bold">Atas Nama</p>
          </div>
          <input
            placeholder="Atas Nama Bank"
            onChange={handleNama}
            value={nama}
            className="w-full p-1 placeholder-custom-textGray bg-custom-layer border outline-none border-custom-border  rounded-message"
          />
        </div>
      </div>
      <BackNav
        rekening={rekening}
        nama={nama}
        title={"Ubah Rekening"}
        bottomButton={"Konfirmasi"}
        bottomAction={() => router.push("pin-ganti-rekening")}
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
          !nama || !rekening
            ? "bg-custom-btnGray text-white"
            : "bg-custom-blue text-white"
        }
      />
    </div>
  );
};

export default TarikSaldo;
