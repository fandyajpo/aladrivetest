import Partner from "public/partner.png";
import Image from "next/image";
import BackNav from "components/footer/backNav";
import { useRouter } from "next/router";

const WaittingRequest = () => {
  const router = useRouter();
  return (
    <div>
      <div className="pb-44 p-4 space-y-2">
        <button
          className="border space-y-2 p-2 rounded-message w-full"
          onClick={() => router.push("batal-partneran", "batal-partneran")}
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-row item w-full gap-2">
              <div>
                <Image src={Partner} />
              </div>
              <div>
                <p className="text-md font-bold text-custom-black">
                  KONTOo;yltrefl
                </p>
                <div className="flex flex-row items-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 1.20538C4.3428 1.20538 3 2.54278 3 4.19938C3 7.06378 6 10.7994 6 10.7994C6 10.7994 9 7.06318 9 4.19938C9 2.54338 7.6572 1.20538 6 1.20538ZM6 5.85598C5.57035 5.85598 5.1583 5.68531 4.85449 5.3815C4.55068 5.07769 4.38 4.66563 4.38 4.23598C4.38 3.80633 4.55068 3.39428 4.85449 3.09047C5.1583 2.78666 5.57035 2.61598 6 2.61598C6.42965 2.61598 6.8417 2.78666 7.14551 3.09047C7.44932 3.39428 7.62 3.80633 7.62 4.23598C7.62 4.66563 7.44932 5.07769 7.14551 5.3815C6.8417 5.68531 6.42965 5.85598 6 5.85598Z"
                      fill="#F5A934"
                    />
                  </svg>
                  <p className="text-s ">Teuku umar barat</p>
                </div>
              </div>
            </div>
            <div>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16.5" r="16" fill="#E6E7E8" />
                <path
                  d="M11.5538 15.0938L12.2569 10.5H8.6L7.072 14.4375C7.02489 14.5775 7 14.7228 7 14.875C7 15.841 8.02222 16.625 9.28533 16.625C10.4498 16.625 11.4124 15.9565 11.5538 15.0938ZM15 16.625C16.2622 16.625 17.2853 15.841 17.2853 14.875C17.2853 14.8391 17.2827 14.8033 17.2809 14.7691L16.8284 10.5H13.1716L12.7182 14.7656C12.7164 14.8015 12.7147 14.8374 12.7147 14.875C12.7147 15.841 13.7378 16.625 15 16.625ZM19.4444 17.5402V21H10.5556V17.5455C10.1662 17.6838 9.73778 17.7625 9.28533 17.7625C9.112 17.7625 8.944 17.7424 8.77778 17.7196V23.275C8.77778 23.9488 9.33689 24.5 10.0204 24.5H19.9778C20.6622 24.5 21.2222 23.9479 21.2222 23.275V17.7205C21.0542 17.7459 20.8846 17.7602 20.7147 17.7634C20.2812 17.7629 19.8513 17.6874 19.4444 17.5402ZM22.9289 14.4375L21.3991 10.5H17.7431L18.4453 15.0868C18.5822 15.953 19.5449 16.625 20.7147 16.625C21.9769 16.625 23 15.841 23 14.875C23 14.7228 22.9751 14.5775 22.9289 14.4375Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.5 5.5C23.8222 5.5 24.0833 5.76116 24.0833 6.08332V8.41668H26.4167C26.7388 8.41668 27 8.67784 27 9C27 9.32216 26.7388 9.58332 26.4167 9.58332H24.0833V11.9167C24.0833 12.2388 23.8222 12.5 23.5 12.5C23.1778 12.5 22.9167 12.2388 22.9167 11.9167V9.58332H20.5833C20.2612 9.58332 20 9.32216 20 9C20 8.67784 20.2612 8.41668 20.5833 8.41668H22.9167V6.08332C22.9167 5.76116 23.1778 5.5 23.5 5.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row pl-12 space-x-2">
            <div className="bg-custom-layer">
              <p className="text-1xs p-1">KONTOwpgd</p>
            </div>
            <div className="bg-custom-layer">
              <p className="text-1xs p-1">ANIJIGn</p>
            </div>
            <div className="bg-custom-layer w-auto">
              <p className="text-1xs p-1">kxwneirh</p>
            </div>
          </div>
          <div className="flex flex-row justify-between pl-12">
            <p className="text-s font-bold">2-5 Km</p>
            <p className="text-s font-bold">Rp8.000/Km</p>
          </div>
        </button>
        <button className="border space-y-2 p-2 rounded-message w-full">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row item w-full gap-2">
              <div>
                <Image src={Partner} />
              </div>
              <div>
                <p className="text-md font-bold text-custom-black">
                  KONTOo;yltrefl
                </p>
                <div className="flex flex-row items-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 1.20538C4.3428 1.20538 3 2.54278 3 4.19938C3 7.06378 6 10.7994 6 10.7994C6 10.7994 9 7.06318 9 4.19938C9 2.54338 7.6572 1.20538 6 1.20538ZM6 5.85598C5.57035 5.85598 5.1583 5.68531 4.85449 5.3815C4.55068 5.07769 4.38 4.66563 4.38 4.23598C4.38 3.80633 4.55068 3.39428 4.85449 3.09047C5.1583 2.78666 5.57035 2.61598 6 2.61598C6.42965 2.61598 6.8417 2.78666 7.14551 3.09047C7.44932 3.39428 7.62 3.80633 7.62 4.23598C7.62 4.66563 7.44932 5.07769 7.14551 5.3815C6.8417 5.68531 6.42965 5.85598 6 5.85598Z"
                      fill="#F5A934"
                    />
                  </svg>
                  <p className="text-s ">Teuku umar barat</p>
                </div>
              </div>
            </div>
            <div>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16.5" r="16" fill="#E6E7E8" />
                <path
                  d="M11.5538 15.0938L12.2569 10.5H8.6L7.072 14.4375C7.02489 14.5775 7 14.7228 7 14.875C7 15.841 8.02222 16.625 9.28533 16.625C10.4498 16.625 11.4124 15.9565 11.5538 15.0938ZM15 16.625C16.2622 16.625 17.2853 15.841 17.2853 14.875C17.2853 14.8391 17.2827 14.8033 17.2809 14.7691L16.8284 10.5H13.1716L12.7182 14.7656C12.7164 14.8015 12.7147 14.8374 12.7147 14.875C12.7147 15.841 13.7378 16.625 15 16.625ZM19.4444 17.5402V21H10.5556V17.5455C10.1662 17.6838 9.73778 17.7625 9.28533 17.7625C9.112 17.7625 8.944 17.7424 8.77778 17.7196V23.275C8.77778 23.9488 9.33689 24.5 10.0204 24.5H19.9778C20.6622 24.5 21.2222 23.9479 21.2222 23.275V17.7205C21.0542 17.7459 20.8846 17.7602 20.7147 17.7634C20.2812 17.7629 19.8513 17.6874 19.4444 17.5402ZM22.9289 14.4375L21.3991 10.5H17.7431L18.4453 15.0868C18.5822 15.953 19.5449 16.625 20.7147 16.625C21.9769 16.625 23 15.841 23 14.875C23 14.7228 22.9751 14.5775 22.9289 14.4375Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.5 5.5C23.8222 5.5 24.0833 5.76116 24.0833 6.08332V8.41668H26.4167C26.7388 8.41668 27 8.67784 27 9C27 9.32216 26.7388 9.58332 26.4167 9.58332H24.0833V11.9167C24.0833 12.2388 23.8222 12.5 23.5 12.5C23.1778 12.5 22.9167 12.2388 22.9167 11.9167V9.58332H20.5833C20.2612 9.58332 20 9.32216 20 9C20 8.67784 20.2612 8.41668 20.5833 8.41668H22.9167V6.08332C22.9167 5.76116 23.1778 5.5 23.5 5.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row pl-12 space-x-2">
            <div className="bg-custom-layer">
              <p className="text-1xs p-1">KONTOwpgd</p>
            </div>
            <div className="bg-custom-layer">
              <p className="text-1xs p-1">ANIJIGn</p>
            </div>
            <div className="bg-custom-layer w-auto">
              <p className="text-1xs p-1">kxwneirh</p>
            </div>
          </div>
          <div className="flex flex-row justify-between pl-12">
            <p className="text-s font-bold">2-5 Km</p>
            <p className="text-s font-bold">Rp8.000/Km</p>
          </div>
        </button>
      </div>
      <BackNav
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
              d="M23.4667 14.9347H10.816L14.688 10.284C14.8691 10.0662 14.9562 9.78534 14.9302 9.50328C14.9042 9.22123 14.7672 8.96106 14.5493 8.78C14.3315 8.59895 14.0507 8.51184 13.7686 8.53785C13.4866 8.56385 13.2264 8.70084 13.0453 8.91867L7.71201 15.3187C7.67613 15.3696 7.64404 15.4231 7.61601 15.4787C7.61601 15.532 7.61601 15.564 7.54134 15.6173C7.49299 15.7396 7.46768 15.8698 7.46667 16.0013C7.46768 16.1328 7.49299 16.263 7.54134 16.3853C7.54134 16.4387 7.54134 16.4707 7.61601 16.524C7.64404 16.5796 7.67613 16.6331 7.71201 16.684L13.0453 23.084C13.1456 23.2044 13.2712 23.3012 13.4132 23.3676C13.5551 23.434 13.71 23.4683 13.8667 23.468C14.1159 23.4685 14.3574 23.3817 14.5493 23.2227C14.6574 23.1331 14.7466 23.0231 14.8121 22.899C14.8775 22.7749 14.9178 22.6391 14.9307 22.4994C14.9436 22.3597 14.9288 22.2189 14.8871 22.0849C14.8455 21.9509 14.7778 21.8265 14.688 21.7187L10.816 17.068H23.4667C23.7496 17.068 24.0209 16.9556 24.2209 16.7556C24.421 16.5555 24.5333 16.2842 24.5333 16.0013C24.5333 15.7184 24.421 15.4471 24.2209 15.2471C24.0209 15.047 23.7496 14.9347 23.4667 14.9347Z"
              fill="#414141"
            />
          </svg>
        }
        title="Menunggu Persetujuan"
      />
    </div>
  );
};

export default WaittingRequest;
