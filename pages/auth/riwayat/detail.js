import BackNavigation from "components/footer/backNav";
import HistoryHead from "components/header/historyHead";
import { useRouter } from "next/router";
const Detail = () => {
  const router = useRouter();
  return (
    <>
      <HistoryHead />
      <div className="w-full h-full pt-16 pb-32 px-4">
        <div>
          <p className="text-custom-textGray py-2 text-s">
            ALA. 08:18, 08 Jul{" "}
          </p>
        </div>
        <div className="divide-y space-y-4">
          <div className="w-full space-y-4">
            <div className="flex flex-col items-center gap-y-1 w-full">
              <div className="flex flex-row items-start justify-between gap-x-2 w-full">
                <div>
                  <div className="w-10 h-10 bg-custom-green rounded-full" />
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div>
                    <p className="font-bold text-custom-black text-s">
                      Good Method
                    </p>
                    <p className="text-s font-light">
                      Jl. Teuku Umar Barat, Padangsa....
                    </p>
                  </div>
                  <div className="pt-0.5">
                    <button>
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
                          d="M23.8514 12.463C23.8514 9.746 21.8624 7.835 19.3014 7.835C16.7534 7.835 14.7514 9.746 14.7514 12.463C14.7514 15.18 16.7534 17.091 19.3014 17.091C21.8624 17.091 23.8514 15.18 23.8514 12.463ZM15.9604 12.463C15.9604 10.24 17.3904 8.862 19.3014 8.862C21.2124 8.862 22.6424 10.24 22.6424 12.463C22.6424 14.673 21.2124 16.064 19.3014 16.064C17.3904 16.064 15.9604 14.673 15.9604 12.463ZM26.5961 11.189V9.876H25.4131V20.38H26.5961V15.687C27.0381 16.415 27.9611 17.117 29.2611 17.117C31.1721 17.117 32.6411 15.622 32.6411 13.412C32.6411 11.189 31.1721 9.759 29.2611 9.759C27.9611 9.759 27.0251 10.435 26.5961 11.189ZM31.4321 13.412C31.4321 15.089 30.3271 16.077 29.0141 16.077C27.7271 16.077 26.5961 15.102 26.5961 13.425C26.5961 11.774 27.7271 10.786 29.0141 10.786C30.3271 10.786 31.4321 11.735 31.4321 13.412ZM37.2273 10.76C38.4493 10.76 39.4893 11.527 39.4763 12.918H34.9783C35.1083 11.527 36.0703 10.76 37.2273 10.76ZM40.5553 14.803H39.2813C39.0213 15.57 38.3453 16.116 37.2793 16.116C36.0703 16.116 35.0563 15.323 34.9653 13.88H40.6593C40.6853 13.633 40.6983 13.425 40.6983 13.165C40.6983 11.215 39.3463 9.759 37.2793 9.759C35.1993 9.759 33.7563 11.176 33.7563 13.425C33.7563 15.687 35.2513 17.117 37.2793 17.117C39.0473 17.117 40.1913 16.103 40.5553 14.803ZM47.4728 17H48.6428V12.801C48.6428 10.76 47.3818 9.746 45.7308 9.746C44.7688 9.746 43.9108 10.149 43.4428 10.89V9.876H42.2598V17H43.4428V13.061C43.4428 11.527 44.2748 10.773 45.4838 10.773C46.6798 10.773 47.4728 11.514 47.4728 12.97V17ZM54.041 17H55.224V10.279L58.227 17H59.059L62.049 10.292V17H63.232V8.004H61.971L58.643 15.44L55.315 8.004H54.041V17ZM64.7963 13.412C64.7963 15.622 66.2653 17.117 68.1633 17.117C69.4763 17.117 70.3993 16.441 70.8283 15.674V17H72.0243V9.876H70.8283V11.176C70.4123 10.435 69.5023 9.759 68.1763 9.759C66.2653 9.759 64.7963 11.189 64.7963 13.412ZM70.8283 13.425C70.8283 15.102 69.7103 16.077 68.4103 16.077C67.1103 16.077 66.0053 15.089 66.0053 13.412C66.0053 11.735 67.1103 10.786 68.4103 10.786C69.7103 10.786 70.8283 11.774 70.8283 13.425ZM75.2065 11.189V9.876H74.0235V20.38H75.2065V15.687C75.6485 16.415 76.5715 17.117 77.8715 17.117C79.7825 17.117 81.2515 15.622 81.2515 13.412C81.2515 11.189 79.7825 9.759 77.8715 9.759C76.5715 9.759 75.6355 10.435 75.2065 11.189ZM80.0425 13.412C80.0425 15.089 78.9375 16.077 77.6245 16.077C76.3375 16.077 75.2065 15.102 75.2065 13.425C75.2065 11.774 76.3375 10.786 77.6245 10.786C78.9375 10.786 80.0425 11.735 80.0425 13.412Z"
                          fill="#4391EF"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center left-[1.1rem]">
              <div className="absolute">
                <svg
                  width="2"
                  height="22"
                  viewBox="0 0 2 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="2" height="22" rx="1" fill="#C4C4C4" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col items-center gap-y-1 w-full">
                <div className="flex flex-row items-start justify-between gap-x-2 w-full">
                  <div>
                    <div className="w-10 h-10 bg-custom-blue rounded-full" />
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div>
                      <p className="font-bold text-custom-black text-s">
                        I Made Teja
                      </p>
                      <p className="text-s font-light">
                        Jl. Teuku Umar Barat, Padangsa....
                      </p>
                    </div>
                    <div className="pt-0.5">
                      <button>
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
                            d="M23.8514 12.463C23.8514 9.746 21.8624 7.835 19.3014 7.835C16.7534 7.835 14.7514 9.746 14.7514 12.463C14.7514 15.18 16.7534 17.091 19.3014 17.091C21.8624 17.091 23.8514 15.18 23.8514 12.463ZM15.9604 12.463C15.9604 10.24 17.3904 8.862 19.3014 8.862C21.2124 8.862 22.6424 10.24 22.6424 12.463C22.6424 14.673 21.2124 16.064 19.3014 16.064C17.3904 16.064 15.9604 14.673 15.9604 12.463ZM26.5961 11.189V9.876H25.4131V20.38H26.5961V15.687C27.0381 16.415 27.9611 17.117 29.2611 17.117C31.1721 17.117 32.6411 15.622 32.6411 13.412C32.6411 11.189 31.1721 9.759 29.2611 9.759C27.9611 9.759 27.0251 10.435 26.5961 11.189ZM31.4321 13.412C31.4321 15.089 30.3271 16.077 29.0141 16.077C27.7271 16.077 26.5961 15.102 26.5961 13.425C26.5961 11.774 27.7271 10.786 29.0141 10.786C30.3271 10.786 31.4321 11.735 31.4321 13.412ZM37.2273 10.76C38.4493 10.76 39.4893 11.527 39.4763 12.918H34.9783C35.1083 11.527 36.0703 10.76 37.2273 10.76ZM40.5553 14.803H39.2813C39.0213 15.57 38.3453 16.116 37.2793 16.116C36.0703 16.116 35.0563 15.323 34.9653 13.88H40.6593C40.6853 13.633 40.6983 13.425 40.6983 13.165C40.6983 11.215 39.3463 9.759 37.2793 9.759C35.1993 9.759 33.7563 11.176 33.7563 13.425C33.7563 15.687 35.2513 17.117 37.2793 17.117C39.0473 17.117 40.1913 16.103 40.5553 14.803ZM47.4728 17H48.6428V12.801C48.6428 10.76 47.3818 9.746 45.7308 9.746C44.7688 9.746 43.9108 10.149 43.4428 10.89V9.876H42.2598V17H43.4428V13.061C43.4428 11.527 44.2748 10.773 45.4838 10.773C46.6798 10.773 47.4728 11.514 47.4728 12.97V17ZM54.041 17H55.224V10.279L58.227 17H59.059L62.049 10.292V17H63.232V8.004H61.971L58.643 15.44L55.315 8.004H54.041V17ZM64.7963 13.412C64.7963 15.622 66.2653 17.117 68.1633 17.117C69.4763 17.117 70.3993 16.441 70.8283 15.674V17H72.0243V9.876H70.8283V11.176C70.4123 10.435 69.5023 9.759 68.1763 9.759C66.2653 9.759 64.7963 11.189 64.7963 13.412ZM70.8283 13.425C70.8283 15.102 69.7103 16.077 68.4103 16.077C67.1103 16.077 66.0053 15.089 66.0053 13.412C66.0053 11.735 67.1103 10.786 68.4103 10.786C69.7103 10.786 70.8283 11.774 70.8283 13.425ZM75.2065 11.189V9.876H74.0235V20.38H75.2065V15.687C75.6485 16.415 76.5715 17.117 77.8715 17.117C79.7825 17.117 81.2515 15.622 81.2515 13.412C81.2515 11.189 79.7825 9.759 77.8715 9.759C76.5715 9.759 75.6355 10.435 75.2065 11.189ZM80.0425 13.412C80.0425 15.089 78.9375 16.077 77.6245 16.077C76.3375 16.077 75.2065 15.102 75.2065 13.425C75.2065 11.774 76.3375 10.786 77.6245 10.786C78.9375 10.786 80.0425 11.735 80.0425 13.412Z"
                            fill="#4391EF"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-12">
                <div className="bg-custom-bg border border-custom-border rounded-b-xl rounded-tr-xl p-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eleifend in sed pellentesque nulla. Dignissim eget et
                    facilisi massa lectus elit, nisi. Volutpat sem orci vitae
                    felis tortor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div>
              <p className="text-md text-custom-black font-bold">
                Detail Order
              </p>
            </div>
            <div className="space-y-2">
              <div className="space-y-2">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-s">2</p>
                    </div>
                    <div>
                      <p className="text-s">Soto Ayam</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-white">-</p>
                    </div>
                    <div>
                      <p className="text-s">Ongkir</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-x-4">
                    <div>
                      <p className="text-white">-</p>
                    </div>
                    <div>
                      <p className="text-s">Biaya Layanan</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-s">20.000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 flex flex-row items-center justify-between w-full">
              <div>
                <p className="text-s text-custom-black font-bold">
                  Grand Total
                </p>
              </div>
              <div>
                <p className="text-s text-custom-black font-bold">20.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackNavigation
        title="Detail"
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
              d="M23.4667 14.9348H10.816L14.688 10.2841C14.8691 10.0663 14.9562 9.78545 14.9302 9.5034C14.9042 9.22134 14.7672 8.96117 14.5493 8.78012C14.3315 8.59906 14.0507 8.51196 13.7686 8.53796C13.4866 8.56397 13.2264 8.70095 13.0453 8.91878L7.71201 15.3188C7.67613 15.3697 7.64404 15.4232 7.61601 15.4788C7.61601 15.5321 7.61601 15.5641 7.54134 15.6175C7.49299 15.7398 7.46768 15.8699 7.46667 16.0015C7.46768 16.133 7.49299 16.2631 7.54134 16.3854C7.54134 16.4388 7.54134 16.4708 7.61601 16.5241C7.64404 16.5797 7.67613 16.6332 7.71201 16.6841L13.0453 23.0841C13.1456 23.2045 13.2712 23.3014 13.4132 23.3677C13.5551 23.4341 13.71 23.4684 13.8667 23.4681C14.1159 23.4686 14.3574 23.3818 14.5493 23.2228C14.6574 23.1332 14.7466 23.0233 14.8121 22.8992C14.8775 22.7751 14.9178 22.6393 14.9307 22.4996C14.9436 22.3598 14.9288 22.219 14.8871 22.085C14.8455 21.951 14.7778 21.8266 14.688 21.7188L10.816 17.0681H23.4667C23.7496 17.0681 24.0209 16.9557 24.2209 16.7557C24.421 16.5557 24.5333 16.2843 24.5333 16.0015C24.5333 15.7186 24.421 15.4472 24.2209 15.2472C24.0209 15.0472 23.7496 14.9348 23.4667 14.9348Z"
              fill="#414141"
            />
          </svg>
        }
        leftAction={() => router.back()}
      />
    </>
  );
};

export default Detail;
