/* 2 Februari 2022 */
import { useRouter } from "next/router";
import Layout from "components/layout/orderLayout";
import SortingDay from "components/footer/historySort";
import { useState, useEffect } from "react";
import BackNav from "components/footer/backNav";

const RiwayatAntar = (props) => {
  const router = useRouter();

  return (
    <div className="w-full h-full">
      <div>
        <div className="w-full">
          <div className="sticky top-0 w-full h-full bg-custom-bg px-4">
            <p className="py-1 font-bold text-custom-black text-s">Hari Ini</p>
          </div>
          <div className="divide-y p-4">
            <div className="py-2">
              <div className="flex gap-x-2 flex-row w-full">
                <div className="flex pb-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                  <div>
                    <svg
                      width="4"
                      height="2"
                      viewBox="0 0 4 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="2"
                        width="2"
                        height="4"
                        rx="1"
                        transform="rotate(-90 0 2)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500"></div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row w-full justify-between items-center">
                    <div>
                      <p className="text-custom-textGray py-2 text-s">
                        ALA. 08:18, 08 Jul
                      </p>
                      <p className="text-s text-custom-black font-bold">3 Km</p>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          router.push("../riwayat/detail", "../riwayat/detail")
                        }
                      >
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
                            fill="#4391EF"
                            fillOpacity="0.1"
                          />
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="#4391EF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-full justify-between">
                    <div>
                      <p className="text-s text-custom-black">Selesai</p>
                    </div>
                    <div>
                      <p className="text-s text-custom-black font-bold">
                        Rp12.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex gap-x-2 flex-row w-full">
                <div className="flex pb-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                  <div>
                    <svg
                      width="4"
                      height="2"
                      viewBox="0 0 4 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="2"
                        width="2"
                        height="4"
                        rx="1"
                        transform="rotate(-90 0 2)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500"></div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row w-full justify-between items-center">
                    <div>
                      <p className="text-custom-textGray py-2 text-s">
                        ALA. 08:18, 08 Jul
                      </p>
                      <p className="text-s text-custom-black font-bold">3 Km</p>
                    </div>
                    <div>
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
                          fill="#4391EF"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="#4391EF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-full justify-between">
                    <div>
                      <p className="text-s text-custom-red">Order Batal</p>
                    </div>
                    <div>
                      <p className="text-s text-custom-black font-bold">
                        Rp12.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="sticky top-0 w-full h-full bg-custom-bg px-4">
            <p className="py-1 font-bold text-custom-black text-s">
              2 Sen, Des 2021
            </p>
          </div>
          <div className="divide-y p-4">
            <div className="py-2">
              <div className="flex gap-x-2 flex-row w-full">
                <div className="flex pb-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                  <div>
                    <svg
                      width="4"
                      height="2"
                      viewBox="0 0 4 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="2"
                        width="2"
                        height="4"
                        rx="1"
                        transform="rotate(-90 0 2)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500"></div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row w-full justify-between items-center">
                    <div>
                      <p className="text-custom-textGray py-2 text-s">
                        ALA. 08:18, 08 Jul
                      </p>
                      <p className="text-s text-custom-black font-bold">3 Km</p>
                    </div>
                    <div>
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
                          fill="#4391EF"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="#4391EF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-full justify-between">
                    <div>
                      <p className="text-s text-custom-black">Selesai</p>
                    </div>
                    <div>
                      <p className="text-s text-custom-black font-bold">
                        Rp12.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex gap-x-2 flex-row w-full">
                <div className="flex pb-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                  <div>
                    <svg
                      width="4"
                      height="2"
                      viewBox="0 0 4 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="2"
                        width="2"
                        height="4"
                        rx="1"
                        transform="rotate(-90 0 2)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500"></div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row w-full justify-between items-center">
                    <div>
                      <p className="text-custom-textGray py-2 text-s">
                        ALA. 08:18, 08 Jul
                      </p>
                      <p className="text-s text-custom-black font-bold">3 Km</p>
                    </div>
                    <div>
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
                          fill="#4391EF"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="#4391EF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-full justify-between">
                    <div>
                      <p className="text-s text-custom-black">Selesai</p>
                    </div>
                    <div>
                      <p className="text-s text-custom-black font-bold">
                        Rp12.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        title="Riwayat Antarmu"
      />
    </div>
  );
};

export default RiwayatAntar;
