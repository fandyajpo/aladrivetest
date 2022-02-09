/* 2 Februari 2022 */
import { useRouter } from "next/router";
import Layout from "components/layout/orderLayout";
import SortingDay from "components/footer/historySort";
import { useState, useEffect } from "react";

const History = (props) => {
  const router = useRouter();
  const [history, setHistory] = useState("ada"); // value belum-ada && ada
  const [search, setSearch] = useState(false);

  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Text : ", text);
    console.log("Search", search);
  }, [text, search]);
  return (
    <div
      className={`${
        history === "belum-ada" ? "w-full h-screen" : "w-full h-full"
      }`}
    >
      {search || text ? (
        <div>
          {text.includes("m") ? (
            <div>
              <div className="w-full">
                <div className="sticky top-0 w-full h-full bg-custom-bg px-4">
                  <p className="py-1 font-bold text-custom-black text-s">
                    Hari Ini
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
                            <p className="text-s text-custom-black font-bold">
                              3 Km
                            </p>
                          </div>
                          <div>
                            <button
                              onClick={() =>
                                router.push("riwayat/detail", "riwayat/detail")
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
                            <p className="text-s text-custom-black font-bold">
                              3 Km
                            </p>
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
                            <p className="text-s text-custom-red">
                              Order Batal
                            </p>
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
                            <p className="text-s text-custom-black font-bold">
                              3 Km
                            </p>
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
                            <p className="text-s text-custom-black font-bold">
                              3 Km
                            </p>
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
              </div>{" "}
            </div>
          ) : text.length > 0 ? (
            <div className="w-full h-screen flex items-center justify-center">
              <p className="text-md">Pencarian tidak ditemukan</p>
            </div>
          ) : (
            <div className="w-full h-screen flex items-center justify-center">
              <p className="text-md">Apa yang kamu cari</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          {history === "ada" ? (
            <div>
              <div className="w-full">
                <div className="sticky top-0 w-full h-full bg-custom-bg px-4">
                  <p className="py-1 font-bold text-custom-black text-s">
                    Hari Ini
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
                            <p className="text-s text-custom-black font-bold">
                              3 Km
                            </p>
                          </div>
                          <div>
                            <button
                              onClick={() =>
                                router.push("riwayat/detail", "riwayat/detail")
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
                            <p className="text-s text-custom-black font-bold">
                              3 Km
                            </p>
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
                            <p className="text-s text-custom-red">
                              Order Batal
                            </p>
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
                            <p className="text-s text-custom-black font-bold">
                              3 Km
                            </p>
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
                            <p className="text-s text-custom-black font-bold">
                              3 Km
                            </p>
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
          ) : (
            <div className="flex items-center justify-center h-screen w-full">
              <svg
                width="343"
                height="332"
                viewBox="0 0 343 332"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M276.958 112.102C276.958 112.102 269.808 40.0324 188.017 66.0792C170.856 71.5533 136.688 15.5956 100.435 40.3544C64.1814 65.1132 90.6742 139.902 123.519 161.894C156.364 183.886 178.495 137.469 206.942 150.35C235.39 163.23 254.482 181.143 268.437 166.545C282.393 151.948 276.958 112.102 276.958 112.102Z"
                  fill="#F4F7FA"
                />
                <path
                  d="M102.743 197.59C92.5088 196.273 79.5336 192.815 74.3222 183.064C73.0848 180.744 71.8387 176.237 74.9679 174.542C77.8282 172.991 81.527 174.629 83.6527 176.648C85.2157 178.132 86.4354 181.445 88.1919 182.493C90.7624 184.026 92.1459 179.844 92.0917 178.116C91.9707 174.255 87.2274 172.675 84.0754 171.837C78.8425 170.446 72.7497 169.251 73.0779 163.35C73.4061 157.449 79.155 153.906 83.5783 156.489C87.2223 158.617 86.7095 163.159 89.1993 165.886C91.4113 168.307 92.1811 164.378 92.0344 162.451C91.713 158.267 88.0382 155.24 85.3335 152.436C82.2755 149.262 78.8973 142.883 82.157 138.691C84.0326 136.279 88.7967 135.714 91.6129 136.121C105.397 138.113 96.2567 155.97 98.7629 157.962C101.269 159.953 103.64 156.467 103.634 151.164C103.628 145.86 104.439 141.95 109.967 143.647C115.495 145.344 116.548 159.196 110.235 164.519C103.922 169.841 110.631 175.649 112.326 171.834C113.549 169.08 114.625 161.87 118.161 161.075C124.053 159.76 123.965 171.802 122.269 174.606C119.892 178.535 114.52 179.388 111.516 182.778C110.644 183.763 108.676 186.202 109.437 187.641C110.504 189.648 113.479 187.501 114.572 186.569C117.029 184.477 120.432 177.368 123.897 182.091C128.173 187.92 121.023 196.561 102.743 197.59Z"
                  fill="#B6C3D1"
                />
                <g className="mix-blend-soft-light" opacity="0.8">
                  <g className="mix-blend-soft-light" opacity="0.8">
                    <path
                      d="M101.268 196.722C101.509 196.722 101.705 196.447 101.709 196.205C101.713 195.996 101.998 174.955 92.8367 149.977C92.7978 149.865 92.7168 149.773 92.6109 149.72C92.505 149.667 92.3825 149.657 92.2697 149.693C92.2155 149.712 92.1655 149.742 92.1228 149.78C92.0801 149.819 92.0455 149.865 92.021 149.917C91.9966 149.969 91.9827 150.026 91.9803 150.083C91.9779 150.14 91.987 150.198 92.007 150.252C101.111 175.073 100.827 195.983 100.827 196.191C100.823 196.435 101.016 196.719 101.261 196.719L101.268 196.722Z"
                      fill="#B6C3D1"
                    />
                  </g>
                </g>
                <path
                  d="M94.5952 196.169C94.9301 193.995 98.9424 193.375 100.557 193.06C101.495 192.876 102.831 192.687 103.311 191.684C103.818 190.63 103.048 189.815 102.062 189.628C100.295 189.295 98.3954 190.456 96.7537 190.985C94.9904 191.553 93.1613 191.821 91.4127 191.037C90.0187 190.411 88.5909 188.925 88.2879 187.362C87.4483 183.033 91.6345 183.283 94.3622 183.891C95.6861 184.186 98.2884 184.408 98.522 182.471C98.7678 180.41 96.238 179.37 94.6738 179.309C92.6296 179.228 90.6173 179.694 88.5921 179.846C86.7636 179.984 84.5971 179.777 84.0913 177.598C83.6998 175.914 84.6149 173.979 85.9351 172.98C88.9904 170.671 93.0168 174.609 96.2786 174.601C97.4316 174.601 99.3351 173.722 99.6541 172.437C99.978 171.13 98.3394 170.25 97.4415 169.774C94.7789 168.361 82.5486 166.553 86.9314 161.084C88.0341 159.707 90.1644 158.55 91.8841 158.502C95.128 158.409 98.7734 160.69 101.272 162.657C105.206 165.751 108.643 170.01 110.876 174.573C115.812 184.657 113.421 191.418 113.421 191.418C111.99 193.862 109.776 196.404 107.336 197.784C104.472 199.402 100.035 200.115 96.9141 198.855C95.9055 198.448 94.388 197.516 94.5952 196.169Z"
                  fill="#97A6B7"
                />
                <path
                  d="M101.76 203.81C101 207.64 121.33 221.81 162.38 229.92C203.43 238.03 238.9 241.57 250.38 233.09C253.58 230.72 244.82 220.45 203.77 212.36C162.72 204.27 102.51 200 101.76 203.81Z"
                  fill="#F4F7FA"
                />
                <path
                  d="M125.26 210.74C137.603 210.74 147.61 200.469 147.61 187.8C147.61 175.131 137.603 164.86 125.26 164.86C112.916 164.86 102.91 175.131 102.91 187.8C102.91 200.469 112.916 210.74 125.26 210.74Z"
                  fill="#263238"
                />
                <path
                  d="M120.35 202.1C126.491 202.1 131.47 195.962 131.47 188.39C131.47 180.818 126.491 174.68 120.35 174.68C114.209 174.68 109.23 180.818 109.23 188.39C109.23 195.962 114.209 202.1 120.35 202.1Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M208.13 194.82C208.13 194.82 195.72 199.63 171.9 196.59C148.08 193.55 148.08 189.49 148.08 189.49C150.946 186.28 154.462 183.717 158.395 181.97C162.327 180.223 166.587 179.334 170.89 179.36C185.33 179.61 208.13 194.82 208.13 194.82Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M156.44 189.24C156.44 189.24 151.12 151.74 143.52 143.38C135.92 135.02 174.43 139.32 174.43 139.32L187.86 189L156.44 189.24Z"
                  fill="#D6DDE8"
                />
                <path
                  d="M150.11 144.14C150.11 144.14 164.05 178.85 157.46 191C150.87 203.15 103.74 187.71 99.6799 181.38C95.6199 175.05 102.47 157.81 109.82 151.22C117.17 144.63 118.44 139.82 118.44 139.82L150.11 144.14Z"
                  fill="#F2F4F8"
                />
                <path
                  d="M206.87 194.06C206.87 194.06 170.13 196.59 159.23 192.53C148.33 188.47 162.78 177.84 183.56 179.87C204.34 181.9 215.48 191.52 215.48 191.52L206.87 194.06Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M204.08 188.23C204.08 188.23 198.51 186.45 196.23 184.3C193.95 182.15 190.4 181.89 186.47 182.53C182.54 183.17 181.91 184.53 181.91 184.53C181.91 184.53 181.02 189.22 182.04 190.74C183.06 192.26 194.71 192.39 199.39 191.88C204.07 191.37 207.12 190.63 204.08 188.23Z"
                  fill="#263238"
                />
                <path
                  d="M170.89 145.66C158.657 146.578 146.369 146.491 134.15 145.4C112.86 143.63 112.61 141.86 114.15 137.55C115.69 133.24 123.78 135.78 128.84 134.55C133.9 133.32 165.08 137.34 165.08 137.34L170.89 145.66Z"
                  fill="#4391EF"
                />
                <path
                  d="M212.28 114.47C212.28 114.47 226.9 119.11 230.16 133.25C232.71 144.25 235.89 165.01 233.16 180C230.43 194.99 211.41 199.57 211.41 199.57L207.41 115.95L212.28 114.47Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M129.33 137.8H156.7V91.6799H129.33V137.8Z"
                  fill="#BBC1CA"
                />
                <path
                  d="M107.79 134.51L129.58 137.8V91.6899H107.79V134.51Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M176.63 118.06L177.63 120.87C177.63 120.87 197.85 123.52 204.63 133.41C211.41 143.3 215.41 177.68 212.63 179.75C209.85 181.82 204.07 181.81 201.57 179.3C199.07 176.79 193.89 148.9 190.94 144.92C187.99 140.94 168.21 135.48 164.52 127.92C160.83 120.36 162.61 119.07 162.61 119.07L176.63 118.06Z"
                  fill="#8C949C"
                />
                <path
                  d="M140.18 117.23C140.18 117.23 137.67 122.83 144.75 135.03C151.83 147.23 167.33 146.15 171.66 149.89C175.99 153.63 176.38 181.17 179.72 183.73C183.06 186.29 189.96 184.73 194.29 183.73C198.62 182.73 186.22 135.13 182.68 129.82C179.14 124.51 167.33 122.74 167.33 122.74L166.54 117.62L140.18 117.23Z"
                  fill="#97A6B7"
                />
                <path
                  d="M193.07 114.68C186.592 118.265 181.586 124.019 178.93 130.93C174.71 142.33 190.46 194.62 198.93 198.21C207.4 201.8 222.44 204.81 225.61 175.47C228.78 146.13 212.31 118.27 206.61 115.53"
                  fill="#F2F4F8"
                />
                <path
                  d="M209.5 111.18L218.96 110.51L227.9 109.87C228.286 109.843 228.664 109.741 229.01 109.568C229.357 109.395 229.666 109.155 229.92 108.862C230.173 108.57 230.367 108.23 230.489 107.862C230.61 107.494 230.658 107.106 230.63 106.72C230.559 105.947 230.191 105.232 229.603 104.725C229.016 104.218 228.255 103.958 227.48 104L209.08 105.31C208.304 105.376 207.583 105.742 207.072 106.33C206.561 106.918 206.298 107.682 206.34 108.46C206.411 109.235 206.781 109.951 207.37 110.459C207.96 110.966 208.723 111.225 209.5 111.18Z"
                  fill="#4391EF"
                />
                <path
                  d="M211.6 105.27C212.416 104.267 213.376 103.391 214.45 102.67C214.804 102.484 215.191 102.37 215.59 102.336C215.988 102.301 216.389 102.347 216.77 102.47C217.455 102.041 218.227 101.772 219.03 101.68C219.302 101.673 219.573 101.722 219.826 101.823C220.079 101.925 220.308 102.077 220.5 102.27C221.05 101.936 221.677 101.75 222.32 101.73C222.746 101.779 223.136 101.99 223.41 102.32C223.713 102.192 224.041 102.13 224.37 102.138C224.7 102.147 225.024 102.226 225.32 102.37C226.32 102.86 228.03 105.47 227.54 107.93C227.05 110.39 224.88 111.03 224.34 110.83C224.191 110.783 224.053 110.707 223.935 110.605C223.816 110.504 223.719 110.38 223.65 110.24C223.65 110.24 222.57 111.62 221.54 111.18L220.54 110.73C220.54 110.73 219.31 111.62 218.54 111.27L217.75 110.93C217.536 111.15 217.273 111.318 216.984 111.42C216.694 111.522 216.385 111.556 216.08 111.52C215.776 111.512 215.479 111.431 215.213 111.285C214.947 111.139 214.72 110.931 214.55 110.68C214.26 110.34 216.09 109.06 215.93 108.37C215 104.44 211.6 105.27 211.6 105.27Z"
                  fill="#FFBE9D"
                />
                <path
                  d="M172.05 67C172.05 67 179.33 66.36 180.51 77.14C181.69 87.92 183.86 87.56 188.38 90.61C191.56 92.76 205.38 93.42 208.38 97.85C211.38 102.28 206.47 108.77 195.84 107.14C185.21 105.51 177.9 103.75 174.51 93.71C171.12 83.67 172.05 67 172.05 67Z"
                  fill="#97A6B7"
                />
                <path
                  d="M175.89 118.5L149.18 119.69C145.4 119.69 137.7 119.52 137.81 115.75C138.19 103.36 138.31 67.6799 141.43 66.3799C145.58 64.6499 152.85 61.1899 152.85 61.1899L165 62.6899C165 62.6899 173 64.6899 174.81 67.8799C175.28 68.7099 175.74 71.7799 176.16 75.8799C176.46 78.8199 176.74 82.2899 176.99 85.8799C177.42 92.0299 177.83 99.4699 178.1 104.8C178.27 108.61 179.72 118.5 175.89 118.5Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M172.25 37.1499C172.25 37.1499 176.02 46.7499 172.77 51.8999C169.52 57.0499 166.94 52.6699 166.94 52.6699L170.28 37.9199L172.25 37.1499Z"
                  fill="#97A6B7"
                />
                <path
                  d="M154.25 54.12L154.08 59.61C154.08 59.61 158.88 63.61 162.02 63.38C165.16 63.15 164.71 62.38 164.71 62.38L164.77 58.55C164.77 58.55 157.22 54.18 154.25 54.12Z"
                  fill="#EB996E"
                />
                <path
                  d="M170.75 52.2C170.41 58.03 167.19 59.44 164.45 60.3C161.71 61.16 156.68 58.69 154.87 55.61C154.779 55.461 154.695 55.3074 154.62 55.15C153.69 53.1612 153.274 50.9711 153.41 48.78C153.41 48.78 153.33 46.84 153.41 44.55C153.49 42.26 153.79 39.64 154.53 38.27C156.02 35.52 160.53 34.87 162.53 34.87C164.53 34.87 168.27 36.32 169.82 38.38C171.37 40.44 170.85 50.48 170.75 52.2Z"
                  fill="#FFBE9D"
                />
                <path
                  d="M153.43 43.9199C152.929 43.9785 152.452 44.1623 152.041 44.4541C151.63 44.746 151.3 45.1366 151.08 45.5899C150.26 47.1799 150.86 50.7799 153.69 51.1699C156.52 51.5599 153.43 43.9199 153.43 43.9199Z"
                  fill="#E1964F"
                />
                <path
                  d="M170.71 39.0799C168.718 39.5636 166.66 39.709 164.62 39.5099C162.566 39.4383 160.519 39.2379 158.49 38.9099C158.706 40.3713 158.537 41.8637 158 43.2399C157.1 45.1699 156.11 44.7399 155.86 46.2399C155.61 47.7399 155.68 48.5499 154.86 48.5099C154.04 48.4699 154.15 45.0999 153.68 44.3699C153.21 43.6399 151.58 44.6899 151.43 45.0399C151.28 45.3899 149.16 39.0399 153.25 36.8299C153.25 36.8299 154.52 33.6999 159.96 33.4599C165.4 33.2199 169.79 35.1599 170.71 39.0799Z"
                  fill="#263238"
                />
                <path
                  d="M154.14 46.45L156.41 49.3899L156.09 49.6399L154.25 47.1399L154.14 46.45Z"
                  fill="#EFF5E1"
                />
                <path
                  d="M173.34 39.09C173.34 44.44 160.6 41.97 158.06 41.42L157.62 41.32C157.62 41.32 157 51.21 155.51 53.55C154.75 54.75 152.41 55.22 150.22 54.24C148.12 53.31 146.16 51.05 145.8 46.88C145.05 38.29 148.25 31 156.42 29.43C164.59 27.86 173.39 30.58 173.34 39.09Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M158.06 41.4199L157.62 41.3199C157.62 41.3199 157 51.2099 155.51 53.5499C154.75 54.7499 152.41 55.2199 150.22 54.2399C150.9 54.3499 152.75 54.5199 153.68 53.0399C154.82 51.2099 156.48 40.6699 156.48 40.6699L158 40.0599L158.06 41.4199Z"
                  fill="#97A6B7"
                />
                <path
                  d="M156.45 40.83C156.464 40.5935 156.543 40.3654 156.677 40.17C156.81 39.9745 156.995 39.819 157.21 39.72C157.94 39.42 165.05 37.62 168.05 37.79C171.05 37.96 174.57 39.25 175.17 40.41C175.77 41.57 168.17 42.68 163.38 42.47C158.59 42.26 156.45 40.83 156.45 40.83Z"
                  fill="#97A6B7"
                />
                <path
                  d="M151.25 44.78C151.25 47.1 150.25 48.98 148.91 48.98C147.57 48.98 146.58 47.1 146.58 44.78C146.58 42.46 147.58 40.58 148.91 40.58C150.24 40.58 151.25 42.46 151.25 44.78Z"
                  fill="#97A6B7"
                />
                <path
                  d="M156.25 39C156.25 39 164.64 34.68 172.49 38.27C171.919 36.6176 170.947 35.133 169.66 33.95C167.81 32.55 164.87 31.38 160.66 33.11C159.47 33.6142 158.434 34.425 157.66 35.4597C156.885 36.4944 156.399 37.716 156.25 39Z"
                  fill="#97A6B7"
                />
                <path
                  d="M176.82 85.9199C171.347 88.1905 165.475 89.3464 159.55 89.32C147.69 89.32 142.4 84.5499 142.4 84.5499L142.34 73.45C142.34 73.45 153.4 80.9199 163.79 80.0499C170.93 79.4599 174.47 77.26 175.99 75.95C176.29 78.89 176.57 82.3599 176.82 85.9199Z"
                  fill="#97A6B7"
                />
                <path
                  d="M224.25 103.45C224.25 103.45 225.36 106.68 224.25 108.34C223.14 110 224.4 109.54 225.04 108.6C225.68 107.66 225.68 105.77 224.25 103.45Z"
                  fill="#EB996E"
                />
                <path
                  d="M221.28 103.63C221.28 103.63 222.39 106.85 221.28 108.52C220.17 110.19 221.43 109.71 222.06 108.78C222.69 107.85 222.71 105.94 221.28 103.63Z"
                  fill="#EB996E"
                />
                <path
                  d="M218.05 104.3C218.05 104.3 219.17 107.52 218.05 109.19C216.93 110.86 218.2 110.39 218.83 109.45C219.46 108.51 219.49 106.61 218.05 104.3Z"
                  fill="#C16A2F"
                />
                <path
                  d="M152.71 61.23L154.03 58.23C154.03 58.23 160.03 62.15 162.23 62.32L162.63 63.32L163.1 62.11C163.1 62.11 164.48 61.76 164.83 61.24C165.18 60.72 165.69 63.61 165.69 63.61C165.69 63.61 165.17 64.82 161.69 64.82C158.21 64.82 152.71 61.23 152.71 61.23Z"
                  fill="#97A6B7"
                />
                <path
                  d="M162.4 64.5799C162.4 64.5799 166.73 103.76 166.4 111.81H167.6C167.6 111.81 166 73.4699 163.1 64.5499L162.4 64.5799Z"
                  fill="#F2F4F8"
                />
                <path
                  d="M176.38 106.9C176.38 106.9 176.48 105.32 173.38 104.14C170.28 102.96 155.57 104.44 151.83 102.67C148.09 100.9 147.7 101.73 146.72 101.53C145.74 101.33 146.42 89.8799 145.83 84.2699C145.24 78.6599 143.47 67.9999 141.8 66.3599C141.8 66.3599 140.21 64.3599 135.6 70.3599C131.91 75.2299 133.83 110.79 141.6 114.19C152.2 118.8 169.1 119.39 172.79 118.36C173.842 118.068 174.789 117.482 175.521 116.67C176.252 115.859 176.738 114.857 176.92 113.78L176.38 106.9Z"
                  fill="#97A6B7"
                />
                <path
                  d="M167.85 111.64C167.877 112.7 168.217 113.728 168.826 114.596C169.435 115.464 170.287 116.133 171.275 116.52C172.262 116.906 173.342 116.992 174.378 116.768C175.415 116.544 176.362 116.019 177.101 115.259C177.841 114.498 178.34 113.537 178.535 112.495C178.731 111.453 178.615 110.376 178.202 109.399C177.789 108.423 177.096 107.59 176.212 107.005C175.328 106.42 174.29 106.108 173.23 106.11C171.784 106.131 170.405 106.725 169.396 107.762C168.387 108.799 167.831 110.194 167.85 111.64Z"
                  fill="#8C949C"
                />
                <path
                  d="M219.18 100.6C219.18 100.6 217.11 95.83 212.58 95.14C209.941 94.816 207.262 95.1495 204.783 96.1108C202.304 97.0721 200.101 98.6314 198.37 100.65C194.73 105.08 184.2 106.45 181.64 108.32C179.08 110.19 180 115.11 183.22 116.19C186.44 117.27 196.7 114.91 200.93 117.08C205.16 119.25 212.78 118.21 216.32 116.73C219.86 115.25 223.21 107.29 219.18 100.6Z"
                  fill="#F2F4F8"
                />
                <path
                  d="M170.63 115.88L178.93 114.88L186.76 113.88C187.119 113.82 187.463 113.688 187.771 113.494C188.08 113.299 188.346 113.045 188.554 112.746C188.763 112.447 188.91 112.109 188.986 111.753C189.063 111.396 189.067 111.028 189 110.67C188.939 109.948 188.594 109.279 188.041 108.811C187.488 108.342 186.772 108.112 186.05 108.17L169.92 110.17C169.208 110.297 168.574 110.7 168.159 111.292C167.743 111.884 167.578 112.617 167.7 113.33C167.723 113.691 167.817 114.043 167.977 114.367C168.137 114.691 168.36 114.98 168.632 115.217C168.905 115.454 169.222 115.635 169.565 115.749C169.908 115.863 170.27 115.907 170.63 115.88Z"
                  fill="#4391EF"
                />
                <path
                  d="M169.79 110.19C170.605 109.183 171.565 108.303 172.64 107.58C173 107.39 173.395 107.275 173.8 107.242C174.206 107.21 174.614 107.26 175 107.39C175.689 106.962 176.464 106.692 177.27 106.6C177.542 106.593 177.813 106.642 178.066 106.743C178.319 106.845 178.548 106.997 178.74 107.19C179.289 106.855 179.917 106.669 180.56 106.65C180.984 106.697 181.372 106.909 181.64 107.24C181.945 107.112 182.274 107.05 182.605 107.059C182.936 107.068 183.262 107.146 183.56 107.29C184.56 107.78 186.27 110.39 185.78 112.85C185.29 115.31 183.12 115.95 182.58 115.75C182.431 115.703 182.293 115.627 182.175 115.525C182.056 115.424 181.959 115.3 181.89 115.16C181.89 115.16 180.81 116.54 179.77 116.09L178.77 115.65C178.77 115.65 177.54 116.54 176.77 116.19L175.99 115.85C175.776 116.07 175.513 116.238 175.224 116.34C174.934 116.442 174.625 116.477 174.32 116.44C174.016 116.432 173.719 116.351 173.453 116.205C173.187 116.059 172.96 115.852 172.79 115.6C172.5 115.26 174.33 113.98 174.17 113.29C173.16 109.36 169.79 110.19 169.79 110.19Z"
                  fill="#FFBE9D"
                />
                <path
                  d="M213.425 113.873C217.709 112.862 220.362 108.57 219.351 104.286C218.34 100.002 214.047 97.3484 209.763 98.3595C205.479 99.3706 202.826 103.663 203.837 107.947C204.848 112.231 209.141 114.884 213.425 113.873Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M223.53 234.29C236.757 234.29 247.48 223.285 247.48 209.71C247.48 196.135 236.757 185.13 223.53 185.13C210.303 185.13 199.58 196.135 199.58 209.71C199.58 223.285 210.303 234.29 223.53 234.29Z"
                  fill="#263238"
                />
                <path
                  d="M218.26 225.04C224.843 225.04 230.18 218.463 230.18 210.35C230.18 202.237 224.843 195.66 218.26 195.66C211.677 195.66 206.34 202.237 206.34 210.35C206.34 218.463 211.677 225.04 218.26 225.04Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M213.58 187.52C213.58 187.52 223.79 215.4 221.03 218.59C218.27 221.78 214.85 221.79 212.73 214.59C210.61 207.39 206.98 191.39 206.98 191.39L213.58 187.52Z"
                  fill="#4391EF"
                />
                <path
                  d="M249.82 200.39C248.789 199.477 247.585 198.783 246.279 198.348C244.973 197.913 243.592 197.747 242.22 197.86C237.53 198.24 237.65 201.4 233.85 201.4C230.05 201.4 229.17 195.07 218.14 193.55C207.11 192.03 204.84 198.24 199.77 199.38C194.7 200.52 198.77 191.9 210.29 185.31C221.81 178.72 234.23 181.51 242.98 187.47C251.73 193.43 254.12 201.28 249.82 200.39Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M207.75 125.64C207.75 125.64 198.89 123.74 196.48 124.64C194.07 125.54 200.79 127.64 195.85 128.18C190.91 128.72 182.67 130.18 182.04 131.48C181.41 132.78 198.13 130.59 199.9 130.21C201.67 129.83 199.9 126.54 199.9 126.54H207.75C208.26 126.53 207.75 125.64 207.75 125.64Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M196.42 188.16C196.42 188.16 182.92 155.29 183.87 145.4C184.82 135.51 185.77 144.26 190.14 160.61C194.51 176.96 200.6 191.2 196.42 188.16Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M182.25 108.58C182.25 108.58 183.36 111.81 182.25 113.47C181.14 115.13 182.39 114.67 183.03 113.73C183.67 112.79 183.68 110.9 182.25 108.58Z"
                  fill="#EB996E"
                />
                <path
                  d="M179.28 108.76C179.28 108.76 180.39 111.98 179.28 113.65C178.17 115.32 179.43 114.85 180.06 113.91C180.69 112.97 180.71 111.07 179.28 108.76Z"
                  fill="#EB996E"
                />
                <path
                  d="M176.05 109.43C176.05 109.43 177.17 112.66 176.05 114.32C174.93 115.98 176.2 115.52 176.83 114.58C177.46 113.64 177.49 111.74 176.05 109.43Z"
                  fill="#EB996E"
                />
                <path
                  d="M111.09 157.31C111.09 157.31 132.24 162.25 133.26 164.03C134.28 165.81 107.16 160.1 111.09 157.31Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M109.69 163C109.69 163 130.85 168 131.86 169.72C132.87 171.44 105.77 165.8 109.69 163Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M108.93 168.46C108.93 168.46 130.09 173.4 131.1 175.18C132.11 176.96 105 171.25 108.93 168.46Z"
                  fill="#CBD0D8"
                />
                <path
                  d="M169.49 46C169.482 46.2088 169.395 46.4069 169.247 46.5537C169.098 46.7005 168.899 46.785 168.69 46.79C168.587 46.794 168.485 46.7778 168.389 46.7423C168.293 46.7067 168.205 46.6526 168.129 46.5829C168.054 46.5133 167.993 46.4295 167.951 46.3363C167.908 46.2431 167.884 46.1424 167.88 46.04C167.885 45.8304 167.971 45.6309 168.12 45.4836C168.27 45.3362 168.47 45.2525 168.68 45.25C168.782 45.246 168.885 45.2622 168.981 45.2977C169.077 45.3333 169.165 45.3874 169.24 45.4571C169.316 45.5267 169.376 45.6105 169.419 45.7037C169.462 45.7968 169.486 45.8975 169.49 46Z"
                  fill="#263238"
                />
                <path
                  d="M170.43 44.94C170.32 45.04 169.73 44.57 168.86 44.55C167.99 44.53 167.35 44.94 167.26 44.84C167.17 44.74 167.33 44.6 167.61 44.41C167.988 44.159 168.436 44.0331 168.89 44.05C169.34 44.0607 169.774 44.2149 170.13 44.49C170.39 44.7 170.48 44.89 170.43 44.94Z"
                  fill="#263238"
                />
                <path
                  d="M161 45.87C160.995 46.0796 160.908 46.279 160.759 46.4264C160.61 46.5737 160.41 46.6574 160.2 46.66C160.098 46.6654 159.996 46.6504 159.9 46.616C159.804 46.5816 159.715 46.5284 159.64 46.4595C159.565 46.3907 159.504 46.3075 159.461 46.2149C159.418 46.1222 159.394 46.022 159.39 45.92C159.395 45.7104 159.481 45.5109 159.631 45.3636C159.78 45.2162 159.98 45.1325 160.19 45.13C160.292 45.1246 160.394 45.1396 160.49 45.174C160.586 45.2084 160.674 45.2616 160.75 45.3304C160.825 45.3993 160.886 45.4825 160.929 45.5751C160.972 45.6677 160.996 45.768 161 45.87Z"
                  fill="#263238"
                />
                <path
                  d="M161.93 44.87C161.82 44.97 161.23 44.5 160.36 44.48C159.49 44.46 158.85 44.87 158.76 44.76C158.67 44.65 158.82 44.53 159.11 44.34C159.486 44.0907 159.931 43.9644 160.383 43.9788C160.834 43.9931 161.27 44.1473 161.63 44.42C161.89 44.63 162 44.82 161.93 44.87Z"
                  fill="#263238"
                />
                <path
                  d="M164.89 51.36C165.348 51.2264 165.823 51.1557 166.3 51.15C166.52 51.15 166.73 51.09 166.77 50.94C166.796 50.7119 166.75 50.4813 166.64 50.28C166.45 49.74 166.25 49.18 166.03 48.59C165.463 47.149 165.015 45.664 164.69 44.15C165.372 45.5417 165.941 46.9864 166.39 48.47C166.59 49.06 166.78 49.63 166.97 50.18C167.097 50.448 167.129 50.7515 167.06 51.04C167.025 51.1171 166.974 51.1857 166.91 51.2409C166.846 51.2962 166.771 51.3369 166.69 51.36C166.564 51.3778 166.436 51.3778 166.31 51.36C165.838 51.4203 165.361 51.4203 164.89 51.36Z"
                  fill="#263238"
                />
                <path
                  d="M164.46 53.44C164.303 53.2266 164.093 53.0575 163.851 52.9489C163.61 52.8402 163.344 52.7959 163.08 52.82C162.888 52.8308 162.7 52.8807 162.528 52.9666C162.356 53.0526 162.204 53.1729 162.08 53.32C161.966 53.4578 161.895 53.6266 161.877 53.8047C161.86 53.9829 161.895 54.1623 161.98 54.32C162.111 54.4819 162.289 54.5988 162.49 54.6544C162.691 54.71 162.904 54.7014 163.1 54.63C163.519 54.4999 163.907 54.2855 164.24 54C164.335 53.9297 164.42 53.8454 164.49 53.75C164.522 53.701 164.539 53.6437 164.539 53.585C164.539 53.5263 164.522 53.469 164.49 53.42"
                  fill="#EB996E"
                />
                <path
                  d="M162.33 51.89C162.47 51.89 162.44 52.82 163.23 53.51C164.02 54.2 165.01 54.12 165.02 54.26C165.03 54.4 164.79 54.43 164.37 54.43C163.819 54.421 163.288 54.2193 162.87 53.86C162.472 53.518 162.224 53.0331 162.18 52.51C162.15 52.11 162.26 51.88 162.33 51.89Z"
                  fill="#263238"
                />
                <path
                  d="M172 143.5C172.333 144.167 172.9 146 172.5 148C172.1 150 172 149.833 172 149.5"
                  stroke="#263238"
                  strokeWidth="0.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M166.5 119L167.5 123C171.5 123.5 179.6 125.2 180 128"
                  stroke="#263238"
                  strokeWidth="0.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M180.5 93.5C181 91.5 182.8 87.9 186 89.5"
                  stroke="#263238"
                  strokeWidth="0.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M156.5 89.5C158.333 89.8333 162.5 90.3 164.5 89.5"
                  stroke="#263238"
                  strokeWidth="0.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M140.976 65.956C141.001 65.9428 141.031 65.9519 141.044 65.9762C141.964 67.6814 143.317 70.6275 144.384 73.9265C145.45 77.2246 146.234 80.8805 146.012 84.0035C146.011 84.031 145.987 84.0518 145.959 84.0498C145.932 84.0479 145.911 84.024 145.913 83.9964C146.133 80.8924 145.354 77.251 144.288 73.9572C143.223 70.6644 141.874 67.7239 140.956 66.0237C140.943 65.9994 140.952 65.9691 140.976 65.956Z"
                  fill="#263238"
                />
                <path
                  d="M146.5 101.5C144.5 102 140.5 103.6 140.5 106"
                  stroke="#263238"
                  strokeWidth="0.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.5198 300.06C21.5198 301.2 20.7098 301.875 19.3598 301.875H16.9448V298.185H19.3148C20.6498 298.185 21.5198 298.905 21.5198 300.06ZM21.2498 295.365C21.2498 296.43 20.5148 297.06 19.2398 297.06H16.9448V293.67H19.2098C20.5448 293.67 21.2498 294.33 21.2498 295.365ZM22.8848 300.195C22.8848 298.905 21.9548 297.81 20.8148 297.615C21.8198 297.285 22.6448 296.52 22.6448 295.2C22.6448 293.745 21.5348 292.545 19.3298 292.545H15.5798V303H19.4798C21.6398 303 22.8848 301.77 22.8848 300.195ZM28.274 295.8C29.684 295.8 30.884 296.685 30.869 298.29H25.679C25.829 296.685 26.939 295.8 28.274 295.8ZM32.114 300.465H30.644C30.344 301.35 29.564 301.98 28.334 301.98C26.939 301.98 25.769 301.065 25.664 299.4H32.234C32.264 299.115 32.279 298.875 32.279 298.575C32.279 296.325 30.719 294.645 28.334 294.645C25.934 294.645 24.269 296.28 24.269 298.875C24.269 301.485 25.994 303.135 28.334 303.135C30.374 303.135 31.694 301.965 32.114 300.465ZM34.0808 303H35.4458V291.9H34.0808V303ZM45.0622 294.78H43.6972V299.295C43.6972 301.065 42.7522 301.935 41.3422 301.935C39.9622 301.935 39.0472 301.08 39.0472 299.415V294.78H37.6972V299.595C37.6972 301.95 39.1822 303.12 41.0722 303.12C42.1672 303.12 43.1722 302.64 43.6972 301.785V303H45.0622V294.78ZM59.2319 303H60.5819V298.155C60.5819 295.8 59.1269 294.63 57.2519 294.63C55.9919 294.63 54.8219 295.275 54.3419 296.46C53.8019 295.23 52.6769 294.63 51.3269 294.63C50.2469 294.63 49.2719 295.095 48.7319 295.965V294.78H47.3669V303H48.7319V298.47C48.7319 296.7 49.6769 295.815 51.0569 295.815C52.4069 295.815 53.3069 296.67 53.3069 298.35V303H54.6569V298.47C54.6569 296.7 55.6019 295.815 56.9819 295.815C58.3319 295.815 59.2319 296.67 59.2319 298.35V303ZM66.31 298.86C66.31 301.41 68.005 303.135 70.195 303.135C71.71 303.135 72.775 302.355 73.27 301.47V303H74.65V294.78H73.27V296.28C72.79 295.425 71.74 294.645 70.21 294.645C68.005 294.645 66.31 296.295 66.31 298.86ZM73.27 298.875C73.27 300.81 71.98 301.935 70.48 301.935C68.98 301.935 67.705 300.795 67.705 298.86C67.705 296.925 68.98 295.83 70.48 295.83C71.98 295.83 73.27 296.97 73.27 298.875ZM76.4468 298.86C76.4468 301.41 78.1418 303.135 80.3468 303.135C81.8468 303.135 82.9118 302.37 83.4068 301.455V303H84.7868V291.9H83.4068V296.25C82.8368 295.305 81.6518 294.645 80.3618 294.645C78.1418 294.645 76.4468 296.295 76.4468 298.86ZM83.4068 298.875C83.4068 300.81 82.1168 301.935 80.6168 301.935C79.1168 301.935 77.8418 300.795 77.8418 298.86C77.8418 296.925 79.1168 295.83 80.6168 295.83C82.1168 295.83 83.4068 296.97 83.4068 298.875ZM86.5835 298.86C86.5835 301.41 88.2785 303.135 90.4685 303.135C91.9835 303.135 93.0485 302.355 93.5435 301.47V303H94.9235V294.78H93.5435V296.28C93.0635 295.425 92.0135 294.645 90.4835 294.645C88.2785 294.645 86.5835 296.295 86.5835 298.86ZM93.5435 298.875C93.5435 300.81 92.2535 301.935 90.7535 301.935C89.2535 301.935 87.9785 300.795 87.9785 298.86C87.9785 296.925 89.2535 295.83 90.7535 295.83C92.2535 295.83 93.5435 296.97 93.5435 298.875ZM102.594 298.53C102.594 296.625 103.584 296.04 104.889 296.04H105.249V294.63C103.944 294.63 103.059 295.2 102.594 296.115V294.78H101.229V303H102.594V298.53ZM106.825 303H108.19V294.78H106.825V303ZM107.53 293.445C108.025 293.445 108.43 293.04 108.43 292.515C108.43 291.99 108.025 291.585 107.53 291.585C107.005 291.585 106.6 291.99 106.6 292.515C106.6 293.04 107.005 293.445 107.53 293.445ZM112.121 303H113.531L115.511 296.475L117.491 303H118.901L121.466 294.78H120.116L118.256 301.695L116.261 294.78H114.866L112.826 301.68L110.936 294.78H109.541L112.121 303ZM122.311 298.86C122.311 301.41 124.006 303.135 126.196 303.135C127.711 303.135 128.776 302.355 129.271 301.47V303H130.651V294.78H129.271V296.28C128.791 295.425 127.741 294.645 126.211 294.645C124.006 294.645 122.311 296.295 122.311 298.86ZM129.271 298.875C129.271 300.81 127.981 301.935 126.481 301.935C124.981 301.935 123.706 300.795 123.706 298.86C123.706 296.925 124.981 295.83 126.481 295.83C127.981 295.83 129.271 296.97 129.271 298.875ZM136.078 301.44L133.498 294.78H131.983L135.298 302.91L133.678 306.87H135.088L140.038 294.78H138.628L136.078 301.44ZM140.9 298.86C140.9 301.41 142.595 303.135 144.785 303.135C146.3 303.135 147.365 302.355 147.86 301.47V303H149.24V294.78H147.86V296.28C147.38 295.425 146.33 294.645 144.8 294.645C142.595 294.645 140.9 296.295 140.9 298.86ZM147.86 298.875C147.86 300.81 146.57 301.935 145.07 301.935C143.57 301.935 142.295 300.795 142.295 298.86C142.295 296.925 143.57 295.83 145.07 295.83C146.57 295.83 147.86 296.97 147.86 298.875ZM151.847 300.75C151.847 302.4 152.672 303 154.127 303H155.357V301.845H154.352C153.512 301.845 153.212 301.56 153.212 300.75V295.905H155.357V294.78H153.212V292.71H151.847V294.78H150.782V295.905H151.847V300.75ZM168.809 298.875C168.809 296.28 166.994 294.645 164.654 294.645C162.329 294.645 160.499 296.28 160.499 298.875C160.499 301.485 162.269 303.135 164.594 303.135C166.934 303.135 168.809 301.485 168.809 298.875ZM161.894 298.875C161.894 296.805 163.199 295.83 164.639 295.83C166.049 295.83 167.414 296.805 167.414 298.875C167.414 300.96 166.019 301.935 164.594 301.935C163.169 301.935 161.894 300.96 161.894 298.875ZM171.969 298.53C171.969 296.625 172.959 296.04 174.264 296.04H174.624V294.63C173.319 294.63 172.434 295.2 171.969 296.115V294.78H170.604V303H171.969V298.53ZM175.69 298.86C175.69 301.41 177.385 303.135 179.59 303.135C181.09 303.135 182.155 302.37 182.65 301.455V303H184.03V291.9H182.65V296.25C182.08 295.305 180.895 294.645 179.605 294.645C177.385 294.645 175.69 296.295 175.69 298.86ZM182.65 298.875C182.65 300.81 181.36 301.935 179.86 301.935C178.36 301.935 177.085 300.795 177.085 298.86C177.085 296.925 178.36 295.83 179.86 295.83C181.36 295.83 182.65 296.97 182.65 298.875ZM189.832 295.8C191.242 295.8 192.442 296.685 192.427 298.29H187.237C187.387 296.685 188.497 295.8 189.832 295.8ZM193.672 300.465H192.202C191.902 301.35 191.122 301.98 189.892 301.98C188.497 301.98 187.327 301.065 187.222 299.4H193.792C193.822 299.115 193.837 298.875 193.837 298.575C193.837 296.325 192.277 294.645 189.892 294.645C187.492 294.645 185.827 296.28 185.827 298.875C185.827 301.485 187.552 303.135 189.892 303.135C191.932 303.135 193.252 301.965 193.672 300.465ZM197.003 298.53C197.003 296.625 197.993 296.04 199.298 296.04H199.658V294.63C198.353 294.63 197.468 295.2 197.003 296.115V294.78H195.638V303H197.003V298.53ZM202.569 302.16C202.569 301.635 202.164 301.23 201.669 301.23C201.144 301.23 200.739 301.635 200.739 302.16C200.739 302.685 201.144 303.09 201.669 303.09C202.164 303.09 202.569 302.685 202.569 302.16ZM207.873 298.86C207.873 301.41 209.568 303.135 211.773 303.135C213.273 303.135 214.338 302.37 214.833 301.455V303H216.213V291.9H214.833V296.25C214.263 295.305 213.078 294.645 211.788 294.645C209.568 294.645 207.873 296.295 207.873 298.86ZM214.833 298.875C214.833 300.81 213.543 301.935 212.043 301.935C210.543 301.935 209.268 300.795 209.268 298.86C209.268 296.925 210.543 295.83 212.043 295.83C213.543 295.83 214.833 296.97 214.833 298.875ZM218.519 303H219.884V294.78H218.519V303ZM219.224 293.445C219.719 293.445 220.124 293.04 220.124 292.515C220.124 291.99 219.719 291.585 219.224 291.585C218.699 291.585 218.294 291.99 218.294 292.515C218.294 293.04 218.699 293.445 219.224 293.445ZM228.121 300.765C228.061 297.825 223.291 298.89 223.291 296.94C223.291 296.28 223.891 295.8 224.896 295.8C225.991 295.8 226.621 296.4 226.681 297.225H228.046C227.956 295.62 226.756 294.645 224.941 294.645C223.111 294.645 221.926 295.68 221.926 296.94C221.926 300 226.786 298.935 226.786 300.765C226.786 301.44 226.186 301.98 225.106 301.98C223.951 301.98 223.246 301.38 223.171 300.585H221.761C221.851 302.085 223.201 303.135 225.121 303.135C226.936 303.135 228.121 302.115 228.121 300.765ZM230.048 303H231.413V294.78H230.048V303ZM230.753 293.445C231.248 293.445 231.653 293.04 231.653 292.515C231.653 291.99 231.248 291.585 230.753 291.585C230.228 291.585 229.823 291.99 229.823 292.515C229.823 293.04 230.228 293.445 230.753 293.445ZM239.754 303H241.104V298.155C241.104 295.8 239.649 294.63 237.744 294.63C236.634 294.63 235.644 295.095 235.104 295.95V294.78H233.739V303H235.104V298.455C235.104 296.685 236.064 295.815 237.459 295.815C238.839 295.815 239.754 296.67 239.754 298.35V303ZM243.334 303H244.699V294.78H243.334V303ZM244.039 293.445C244.534 293.445 244.939 293.04 244.939 292.515C244.939 291.99 244.534 291.585 244.039 291.585C243.514 291.585 243.109 291.99 243.109 292.515C243.109 293.04 243.514 293.445 244.039 293.445ZM251.024 303H252.389V299.37L255.614 303H257.474L253.589 298.875L257.459 294.78H255.554L252.389 298.425V291.9H251.024V303ZM258.234 298.86C258.234 301.41 259.929 303.135 262.119 303.135C263.634 303.135 264.699 302.355 265.194 301.47V303H266.574V294.78H265.194V296.28C264.714 295.425 263.664 294.645 262.134 294.645C259.929 294.645 258.234 296.295 258.234 298.86ZM265.194 298.875C265.194 300.81 263.904 301.935 262.404 301.935C260.904 301.935 259.629 300.795 259.629 298.86C259.629 296.925 260.904 295.83 262.404 295.83C263.904 295.83 265.194 296.97 265.194 298.875ZM280.746 303H282.096V298.155C282.096 295.8 280.641 294.63 278.766 294.63C277.506 294.63 276.336 295.275 275.856 296.46C275.316 295.23 274.191 294.63 272.841 294.63C271.761 294.63 270.786 295.095 270.246 295.965V294.78H268.881V303H270.246V298.47C270.246 296.7 271.191 295.815 272.571 295.815C273.921 295.815 274.821 296.67 274.821 298.35V303H276.171V298.47C276.171 296.7 277.116 295.815 278.496 295.815C279.846 295.815 280.746 296.67 280.746 298.35V303ZM291.625 294.78H290.26V299.295C290.26 301.065 289.315 301.935 287.905 301.935C286.525 301.935 285.61 301.08 285.61 299.415V294.78H284.26V299.595C284.26 301.95 285.745 303.12 287.635 303.12C288.73 303.12 289.735 302.64 290.26 301.785V303H291.625V294.78ZM299.293 296.31V291.9H297.928V303H299.293V301.485C299.803 302.385 300.868 303.135 302.368 303.135C304.573 303.135 306.268 301.41 306.268 298.86C306.268 296.295 304.588 294.645 302.368 294.645C300.913 294.645 299.818 295.395 299.293 296.31ZM304.873 298.86C304.873 300.795 303.598 301.935 302.083 301.935C300.598 301.935 299.293 300.81 299.293 298.875C299.293 296.97 300.598 295.83 302.083 295.83C303.598 295.83 304.873 296.925 304.873 298.86ZM308.065 303H309.43V294.78H308.065V303ZM308.77 293.445C309.265 293.445 309.67 293.04 309.67 292.515C309.67 291.99 309.265 291.585 308.77 291.585C308.245 291.585 307.84 291.99 307.84 292.515C307.84 293.04 308.245 293.445 308.77 293.445ZM317.667 300.765C317.607 297.825 312.837 298.89 312.837 296.94C312.837 296.28 313.437 295.8 314.442 295.8C315.537 295.8 316.167 296.4 316.227 297.225H317.592C317.502 295.62 316.302 294.645 314.487 294.645C312.657 294.645 311.472 295.68 311.472 296.94C311.472 300 316.332 298.935 316.332 300.765C316.332 301.44 315.732 301.98 314.652 301.98C313.497 301.98 312.792 301.38 312.717 300.585H311.307C311.397 302.085 312.747 303.135 314.667 303.135C316.482 303.135 317.667 302.115 317.667 300.765ZM319.083 298.86C319.083 301.41 320.778 303.135 322.968 303.135C324.483 303.135 325.548 302.355 326.043 301.47V303H327.423V294.78H326.043V296.28C325.563 295.425 324.513 294.645 322.983 294.645C320.778 294.645 319.083 296.295 319.083 298.86ZM326.043 298.875C326.043 300.81 324.753 301.935 323.253 301.935C321.753 301.935 320.478 300.795 320.478 298.86C320.478 296.925 321.753 295.83 323.253 295.83C324.753 295.83 326.043 296.97 326.043 298.875ZM71.0461 326H72.4111V314.9H71.0461V326ZM74.7375 326H76.1025V317.78H74.7375V326ZM75.4425 316.445C75.9375 316.445 76.3425 316.04 76.3425 315.515C76.3425 314.99 75.9375 314.585 75.4425 314.585C74.9175 314.585 74.5125 314.99 74.5125 315.515C74.5125 316.04 74.9175 316.445 75.4425 316.445ZM78.4289 326H79.7939V321.455C79.7939 319.685 80.7539 318.815 82.1489 318.815C83.5289 318.815 84.4439 319.67 84.4439 321.35V326H85.7939V321.155C85.7939 318.8 84.3389 317.63 82.5089 317.63C81.3539 317.63 80.3339 318.095 79.7939 318.965V314.9H78.4289V326ZM87.5137 321.86C87.5137 324.41 89.2087 326.135 91.3987 326.135C92.9137 326.135 93.9787 325.355 94.4737 324.47V326H95.8537V317.78H94.4737V319.28C93.9937 318.425 92.9437 317.645 91.4137 317.645C89.2087 317.645 87.5137 319.295 87.5137 321.86ZM94.4737 321.875C94.4737 323.81 93.1837 324.935 91.6837 324.935C90.1837 324.935 88.9087 323.795 88.9087 321.86C88.9087 319.925 90.1837 318.83 91.6837 318.83C93.1837 318.83 94.4737 319.97 94.4737 321.875ZM98.4604 323.75C98.4604 325.4 99.2854 326 100.74 326H101.97V324.845H100.965C100.125 324.845 99.8254 324.56 99.8254 323.75V318.905H101.97V317.78H99.8254V315.71H98.4604V317.78H97.3954V318.905H98.4604V323.75ZM108.988 321.53C108.988 319.625 109.978 319.04 111.283 319.04H111.643V317.63C110.338 317.63 109.453 318.2 108.988 319.115V317.78H107.623V326H108.988V321.53ZM113.219 326H114.584V317.78H113.219V326ZM113.924 316.445C114.419 316.445 114.824 316.04 114.824 315.515C114.824 314.99 114.419 314.585 113.924 314.585C113.399 314.585 112.994 314.99 112.994 315.515C112.994 316.04 113.399 316.445 113.924 316.445ZM118.515 326H119.925L121.905 319.475L123.885 326H125.295L127.86 317.78H126.51L124.65 324.695L122.655 317.78H121.26L119.22 324.68L117.33 317.78H115.935L118.515 326ZM128.705 321.86C128.705 324.41 130.4 326.135 132.59 326.135C134.105 326.135 135.17 325.355 135.665 324.47V326H137.045V317.78H135.665V319.28C135.185 318.425 134.135 317.645 132.605 317.645C130.4 317.645 128.705 319.295 128.705 321.86ZM135.665 321.875C135.665 323.81 134.375 324.935 132.875 324.935C131.375 324.935 130.1 323.795 130.1 321.86C130.1 319.925 131.375 318.83 132.875 318.83C134.375 318.83 135.665 319.97 135.665 321.875ZM142.472 324.44L139.892 317.78H138.377L141.692 325.91L140.072 329.87H141.482L146.432 317.78H145.022L142.472 324.44ZM147.294 321.86C147.294 324.41 148.989 326.135 151.179 326.135C152.694 326.135 153.759 325.355 154.254 324.47V326H155.634V317.78H154.254V319.28C153.774 318.425 152.724 317.645 151.194 317.645C148.989 317.645 147.294 319.295 147.294 321.86ZM154.254 321.875C154.254 323.81 152.964 324.935 151.464 324.935C149.964 324.935 148.689 323.795 148.689 321.86C148.689 319.925 149.964 318.83 151.464 318.83C152.964 318.83 154.254 319.97 154.254 321.875ZM158.241 323.75C158.241 325.4 159.066 326 160.521 326H161.751V324.845H160.746C159.906 324.845 159.606 324.56 159.606 323.75V318.905H161.751V317.78H159.606V315.71H158.241V317.78H157.176V318.905H158.241V323.75ZM175.204 321.875C175.204 319.28 173.389 317.645 171.049 317.645C168.724 317.645 166.894 319.28 166.894 321.875C166.894 324.485 168.664 326.135 170.989 326.135C173.329 326.135 175.204 324.485 175.204 321.875ZM168.289 321.875C168.289 319.805 169.594 318.83 171.034 318.83C172.444 318.83 173.809 319.805 173.809 321.875C173.809 323.96 172.414 324.935 170.989 324.935C169.564 324.935 168.289 323.96 168.289 321.875ZM178.363 321.53C178.363 319.625 179.353 319.04 180.658 319.04H181.018V317.63C179.713 317.63 178.828 318.2 178.363 319.115V317.78H176.998V326H178.363V321.53ZM182.084 321.86C182.084 324.41 183.779 326.135 185.984 326.135C187.484 326.135 188.549 325.37 189.044 324.455V326H190.424V314.9H189.044V319.25C188.474 318.305 187.289 317.645 185.999 317.645C183.779 317.645 182.084 319.295 182.084 321.86ZM189.044 321.875C189.044 323.81 187.754 324.935 186.254 324.935C184.754 324.935 183.479 323.795 183.479 321.86C183.479 319.925 184.754 318.83 186.254 318.83C187.754 318.83 189.044 319.97 189.044 321.875ZM196.226 318.8C197.636 318.8 198.836 319.685 198.821 321.29H193.631C193.781 319.685 194.891 318.8 196.226 318.8ZM200.066 323.465H198.596C198.296 324.35 197.516 324.98 196.286 324.98C194.891 324.98 193.721 324.065 193.616 322.4H200.186C200.216 322.115 200.231 321.875 200.231 321.575C200.231 319.325 198.671 317.645 196.286 317.645C193.886 317.645 192.221 319.28 192.221 321.875C192.221 324.485 193.946 326.135 196.286 326.135C198.326 326.135 199.646 324.965 200.066 323.465ZM203.397 321.53C203.397 319.625 204.387 319.04 205.692 319.04H206.052V317.63C204.747 317.63 203.862 318.2 203.397 319.115V317.78H202.032V326H203.397V321.53ZM207.118 321.86C207.118 324.41 208.813 326.135 211.003 326.135C212.518 326.135 213.583 325.355 214.078 324.47V326H215.458V317.78H214.078V319.28C213.598 318.425 212.548 317.645 211.018 317.645C208.813 317.645 207.118 319.295 207.118 321.86ZM214.078 321.875C214.078 323.81 212.788 324.935 211.288 324.935C209.788 324.935 208.513 323.795 208.513 321.86C208.513 319.925 209.788 318.83 211.288 318.83C212.788 318.83 214.078 319.97 214.078 321.875ZM223.78 326H225.13V321.155C225.13 318.8 223.675 317.63 221.77 317.63C220.66 317.63 219.67 318.095 219.13 318.95V317.78H217.765V326H219.13V321.455C219.13 319.685 220.09 318.815 221.485 318.815C222.865 318.815 223.78 319.67 223.78 321.35V326ZM231.359 326H232.724V322.37L235.949 326H237.809L233.924 321.875L237.794 317.78H235.889L232.724 321.425V314.9H231.359V326ZM238.568 321.86C238.568 324.41 240.263 326.135 242.453 326.135C243.968 326.135 245.033 325.355 245.528 324.47V326H246.908V317.78H245.528V319.28C245.048 318.425 243.998 317.645 242.468 317.645C240.263 317.645 238.568 319.295 238.568 321.86ZM245.528 321.875C245.528 323.81 244.238 324.935 242.738 324.935C241.238 324.935 239.963 323.795 239.963 321.86C239.963 319.925 241.238 318.83 242.738 318.83C244.238 318.83 245.528 319.97 245.528 321.875ZM261.08 326H262.43V321.155C262.43 318.8 260.975 317.63 259.1 317.63C257.84 317.63 256.67 318.275 256.19 319.46C255.65 318.23 254.525 317.63 253.175 317.63C252.095 317.63 251.12 318.095 250.58 318.965V317.78H249.215V326H250.58V321.47C250.58 319.7 251.525 318.815 252.905 318.815C254.255 318.815 255.155 319.67 255.155 321.35V326H256.505V321.47C256.505 319.7 257.45 318.815 258.83 318.815C260.18 318.815 261.08 319.67 261.08 321.35V326ZM271.959 317.78H270.594V322.295C270.594 324.065 269.649 324.935 268.239 324.935C266.859 324.935 265.944 324.08 265.944 322.415V317.78H264.594V322.595C264.594 324.95 266.079 326.12 267.969 326.12C269.064 326.12 270.069 325.64 270.594 324.785V326H271.959V317.78Z"
                  fill="#414141"
                />
              </svg>
            </div>
          )}
        </div>
      )}
      <SortingDay
        text={text}
        setText={setText}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

History.layout = Layout;
export default History;

//DATA
{
  /* <div className="w-full">
<div className="sticky top-0 w-full h-full bg-custom-bg px-4">
  <p className="py-1 font-bold text-custom-black text-s">
    Hari Ini
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
            <p className="text-s text-custom-black font-bold">
              3 Km
            </p>
          </div>
          <div>
            <button
              onClick={() =>
                router.push(
                  "riwayat/detail",
                  "riwayat/detail"
                )
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
            <p className="text-s text-custom-black">
              Selesai
            </p>
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
            <p className="text-s text-custom-black font-bold">
              3 Km
            </p>
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
            <p className="text-s text-custom-red">
              Order Batal
            </p>
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
            <p className="text-s text-custom-black font-bold">
              3 Km
            </p>
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
            <p className="text-s text-custom-black">
              Selesai
            </p>
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
            <p className="text-s text-custom-black font-bold">
              3 Km
            </p>
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
            <p className="text-s text-custom-black">
              Selesai
            </p>
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
</div> */
}

//IF THERE NO DATA
{
  /* <div className="w-full h-screen flex items-center justify-center pb-12">
<svg
  width="343"
  height="332"
  viewBox="0 0 343 332"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M276.958 112.102C276.958 112.102 269.808 40.0324 188.017 66.0792C170.856 71.5533 136.688 15.5956 100.435 40.3544C64.1814 65.1132 90.6742 139.902 123.519 161.894C156.364 183.886 178.495 137.469 206.942 150.35C235.39 163.23 254.482 181.143 268.437 166.545C282.393 151.948 276.958 112.102 276.958 112.102Z"
    fill="#F4F7FA"
  />
  <path
    d="M102.743 197.59C92.5088 196.273 79.5336 192.815 74.3222 183.064C73.0848 180.744 71.8387 176.237 74.9679 174.542C77.8282 172.991 81.527 174.629 83.6527 176.648C85.2157 178.132 86.4354 181.445 88.1919 182.493C90.7624 184.026 92.1459 179.844 92.0917 178.116C91.9707 174.255 87.2274 172.675 84.0754 171.837C78.8425 170.446 72.7497 169.251 73.0779 163.35C73.4061 157.449 79.155 153.906 83.5783 156.489C87.2223 158.617 86.7095 163.159 89.1993 165.886C91.4113 168.307 92.1811 164.378 92.0344 162.451C91.713 158.267 88.0382 155.24 85.3335 152.436C82.2755 149.262 78.8973 142.883 82.157 138.691C84.0326 136.279 88.7967 135.714 91.6129 136.121C105.397 138.113 96.2567 155.97 98.7629 157.962C101.269 159.953 103.64 156.467 103.634 151.164C103.628 145.86 104.439 141.95 109.967 143.647C115.495 145.344 116.548 159.196 110.235 164.519C103.922 169.841 110.631 175.649 112.326 171.834C113.549 169.08 114.625 161.87 118.161 161.075C124.053 159.76 123.965 171.802 122.269 174.606C119.892 178.535 114.52 179.388 111.516 182.778C110.644 183.763 108.676 186.202 109.437 187.641C110.504 189.648 113.479 187.501 114.572 186.569C117.029 184.477 120.432 177.368 123.897 182.091C128.173 187.92 121.023 196.561 102.743 197.59Z"
    fill="#B6C3D1"
  />
  <g className="mix-blend-soft-light" opacity="0.8">
    <g className="mix-blend-soft-light" opacity="0.8">
      <path
        d="M101.268 196.722C101.509 196.722 101.705 196.447 101.709 196.205C101.713 195.996 101.998 174.955 92.8367 149.977C92.7978 149.865 92.7168 149.773 92.6109 149.72C92.505 149.667 92.3825 149.657 92.2697 149.693C92.2155 149.712 92.1655 149.742 92.1228 149.78C92.0801 149.819 92.0455 149.865 92.021 149.917C91.9966 149.969 91.9827 150.026 91.9803 150.083C91.9779 150.14 91.987 150.198 92.007 150.252C101.111 175.073 100.827 195.983 100.827 196.191C100.823 196.435 101.016 196.719 101.261 196.719L101.268 196.722Z"
        fill="#B6C3D1"
      />
    </g>
  </g>
  <path
    d="M94.5952 196.169C94.9301 193.995 98.9424 193.375 100.557 193.06C101.495 192.876 102.831 192.687 103.311 191.684C103.818 190.63 103.048 189.815 102.062 189.628C100.295 189.295 98.3954 190.456 96.7537 190.985C94.9904 191.553 93.1613 191.821 91.4127 191.037C90.0187 190.411 88.5909 188.925 88.2879 187.362C87.4483 183.033 91.6345 183.283 94.3622 183.891C95.6861 184.186 98.2884 184.408 98.522 182.471C98.7678 180.41 96.238 179.37 94.6738 179.309C92.6296 179.228 90.6173 179.694 88.5921 179.846C86.7636 179.984 84.5971 179.777 84.0913 177.598C83.6998 175.914 84.6149 173.979 85.9351 172.98C88.9904 170.671 93.0168 174.609 96.2786 174.601C97.4316 174.601 99.3351 173.722 99.6541 172.437C99.978 171.13 98.3394 170.25 97.4415 169.774C94.7789 168.361 82.5486 166.553 86.9314 161.084C88.0341 159.707 90.1644 158.55 91.8841 158.502C95.128 158.409 98.7734 160.69 101.272 162.657C105.206 165.751 108.643 170.01 110.876 174.573C115.812 184.657 113.421 191.418 113.421 191.418C111.99 193.862 109.776 196.404 107.336 197.784C104.472 199.402 100.035 200.115 96.9141 198.855C95.9055 198.448 94.388 197.516 94.5952 196.169Z"
    fill="#97A6B7"
  />
  <path
    d="M101.76 203.81C101 207.64 121.33 221.81 162.38 229.92C203.43 238.03 238.9 241.57 250.38 233.09C253.58 230.72 244.82 220.45 203.77 212.36C162.72 204.27 102.51 200 101.76 203.81Z"
    fill="#F4F7FA"
  />
  <path
    d="M125.26 210.74C137.603 210.74 147.61 200.469 147.61 187.8C147.61 175.131 137.603 164.86 125.26 164.86C112.916 164.86 102.91 175.131 102.91 187.8C102.91 200.469 112.916 210.74 125.26 210.74Z"
    fill="#263238"
  />
  <path
    d="M120.35 202.1C126.491 202.1 131.47 195.962 131.47 188.39C131.47 180.818 126.491 174.68 120.35 174.68C114.209 174.68 109.23 180.818 109.23 188.39C109.23 195.962 114.209 202.1 120.35 202.1Z"
    fill="#CBD0D8"
  />
  <path
    d="M208.13 194.82C208.13 194.82 195.72 199.63 171.9 196.59C148.08 193.55 148.08 189.49 148.08 189.49C150.946 186.28 154.462 183.717 158.395 181.97C162.327 180.223 166.587 179.334 170.89 179.36C185.33 179.61 208.13 194.82 208.13 194.82Z"
    fill="#CBD0D8"
  />
  <path
    d="M156.44 189.24C156.44 189.24 151.12 151.74 143.52 143.38C135.92 135.02 174.43 139.32 174.43 139.32L187.86 189L156.44 189.24Z"
    fill="#D6DDE8"
  />
  <path
    d="M150.11 144.14C150.11 144.14 164.05 178.85 157.46 191C150.87 203.15 103.74 187.71 99.6799 181.38C95.6199 175.05 102.47 157.81 109.82 151.22C117.17 144.63 118.44 139.82 118.44 139.82L150.11 144.14Z"
    fill="#F2F4F8"
  />
  <path
    d="M206.87 194.06C206.87 194.06 170.13 196.59 159.23 192.53C148.33 188.47 162.78 177.84 183.56 179.87C204.34 181.9 215.48 191.52 215.48 191.52L206.87 194.06Z"
    fill="#CBD0D8"
  />
  <path
    d="M204.08 188.23C204.08 188.23 198.51 186.45 196.23 184.3C193.95 182.15 190.4 181.89 186.47 182.53C182.54 183.17 181.91 184.53 181.91 184.53C181.91 184.53 181.02 189.22 182.04 190.74C183.06 192.26 194.71 192.39 199.39 191.88C204.07 191.37 207.12 190.63 204.08 188.23Z"
    fill="#263238"
  />
  <path
    d="M170.89 145.66C158.657 146.578 146.369 146.491 134.15 145.4C112.86 143.63 112.61 141.86 114.15 137.55C115.69 133.24 123.78 135.78 128.84 134.55C133.9 133.32 165.08 137.34 165.08 137.34L170.89 145.66Z"
    fill="#4391EF"
  />
  <path
    d="M212.28 114.47C212.28 114.47 226.9 119.11 230.16 133.25C232.71 144.25 235.89 165.01 233.16 180C230.43 194.99 211.41 199.57 211.41 199.57L207.41 115.95L212.28 114.47Z"
    fill="#CBD0D8"
  />
  <path
    d="M129.33 137.8H156.7V91.6799H129.33V137.8Z"
    fill="#BBC1CA"
  />
  <path
    d="M107.79 134.51L129.58 137.8V91.6899H107.79V134.51Z"
    fill="#CBD0D8"
  />
  <path
    d="M176.63 118.06L177.63 120.87C177.63 120.87 197.85 123.52 204.63 133.41C211.41 143.3 215.41 177.68 212.63 179.75C209.85 181.82 204.07 181.81 201.57 179.3C199.07 176.79 193.89 148.9 190.94 144.92C187.99 140.94 168.21 135.48 164.52 127.92C160.83 120.36 162.61 119.07 162.61 119.07L176.63 118.06Z"
    fill="#8C949C"
  />
  <path
    d="M140.18 117.23C140.18 117.23 137.67 122.83 144.75 135.03C151.83 147.23 167.33 146.15 171.66 149.89C175.99 153.63 176.38 181.17 179.72 183.73C183.06 186.29 189.96 184.73 194.29 183.73C198.62 182.73 186.22 135.13 182.68 129.82C179.14 124.51 167.33 122.74 167.33 122.74L166.54 117.62L140.18 117.23Z"
    fill="#97A6B7"
  />
  <path
    d="M193.07 114.68C186.592 118.265 181.586 124.019 178.93 130.93C174.71 142.33 190.46 194.62 198.93 198.21C207.4 201.8 222.44 204.81 225.61 175.47C228.78 146.13 212.31 118.27 206.61 115.53"
    fill="#F2F4F8"
  />
  <path
    d="M209.5 111.18L218.96 110.51L227.9 109.87C228.286 109.843 228.664 109.741 229.01 109.568C229.357 109.395 229.666 109.155 229.92 108.862C230.173 108.57 230.367 108.23 230.489 107.862C230.61 107.494 230.658 107.106 230.63 106.72C230.559 105.947 230.191 105.232 229.603 104.725C229.016 104.218 228.255 103.958 227.48 104L209.08 105.31C208.304 105.376 207.583 105.742 207.072 106.33C206.561 106.918 206.298 107.682 206.34 108.46C206.411 109.235 206.781 109.951 207.37 110.459C207.96 110.966 208.723 111.225 209.5 111.18Z"
    fill="#4391EF"
  />
  <path
    d="M211.6 105.27C212.416 104.267 213.376 103.391 214.45 102.67C214.804 102.484 215.191 102.37 215.59 102.336C215.988 102.301 216.389 102.347 216.77 102.47C217.455 102.041 218.227 101.772 219.03 101.68C219.302 101.673 219.573 101.722 219.826 101.823C220.079 101.925 220.308 102.077 220.5 102.27C221.05 101.936 221.677 101.75 222.32 101.73C222.746 101.779 223.136 101.99 223.41 102.32C223.713 102.192 224.041 102.13 224.37 102.138C224.7 102.147 225.024 102.226 225.32 102.37C226.32 102.86 228.03 105.47 227.54 107.93C227.05 110.39 224.88 111.03 224.34 110.83C224.191 110.783 224.053 110.707 223.935 110.605C223.816 110.504 223.719 110.38 223.65 110.24C223.65 110.24 222.57 111.62 221.54 111.18L220.54 110.73C220.54 110.73 219.31 111.62 218.54 111.27L217.75 110.93C217.536 111.15 217.273 111.318 216.984 111.42C216.694 111.522 216.385 111.556 216.08 111.52C215.776 111.512 215.479 111.431 215.213 111.285C214.947 111.139 214.72 110.931 214.55 110.68C214.26 110.34 216.09 109.06 215.93 108.37C215 104.44 211.6 105.27 211.6 105.27Z"
    fill="#FFBE9D"
  />
  <path
    d="M172.05 67C172.05 67 179.33 66.36 180.51 77.14C181.69 87.92 183.86 87.56 188.38 90.61C191.56 92.76 205.38 93.42 208.38 97.85C211.38 102.28 206.47 108.77 195.84 107.14C185.21 105.51 177.9 103.75 174.51 93.71C171.12 83.67 172.05 67 172.05 67Z"
    fill="#97A6B7"
  />
  <path
    d="M175.89 118.5L149.18 119.69C145.4 119.69 137.7 119.52 137.81 115.75C138.19 103.36 138.31 67.6799 141.43 66.3799C145.58 64.6499 152.85 61.1899 152.85 61.1899L165 62.6899C165 62.6899 173 64.6899 174.81 67.8799C175.28 68.7099 175.74 71.7799 176.16 75.8799C176.46 78.8199 176.74 82.2899 176.99 85.8799C177.42 92.0299 177.83 99.4699 178.1 104.8C178.27 108.61 179.72 118.5 175.89 118.5Z"
    fill="#CBD0D8"
  />
  <path
    d="M172.25 37.1499C172.25 37.1499 176.02 46.7499 172.77 51.8999C169.52 57.0499 166.94 52.6699 166.94 52.6699L170.28 37.9199L172.25 37.1499Z"
    fill="#97A6B7"
  />
  <path
    d="M154.25 54.12L154.08 59.61C154.08 59.61 158.88 63.61 162.02 63.38C165.16 63.15 164.71 62.38 164.71 62.38L164.77 58.55C164.77 58.55 157.22 54.18 154.25 54.12Z"
    fill="#EB996E"
  />
  <path
    d="M170.75 52.2C170.41 58.03 167.19 59.44 164.45 60.3C161.71 61.16 156.68 58.69 154.87 55.61C154.779 55.461 154.695 55.3074 154.62 55.15C153.69 53.1612 153.274 50.9711 153.41 48.78C153.41 48.78 153.33 46.84 153.41 44.55C153.49 42.26 153.79 39.64 154.53 38.27C156.02 35.52 160.53 34.87 162.53 34.87C164.53 34.87 168.27 36.32 169.82 38.38C171.37 40.44 170.85 50.48 170.75 52.2Z"
    fill="#FFBE9D"
  />
  <path
    d="M153.43 43.9199C152.929 43.9785 152.452 44.1623 152.041 44.4541C151.63 44.746 151.3 45.1366 151.08 45.5899C150.26 47.1799 150.86 50.7799 153.69 51.1699C156.52 51.5599 153.43 43.9199 153.43 43.9199Z"
    fill="#E1964F"
  />
  <path
    d="M170.71 39.0799C168.718 39.5636 166.66 39.709 164.62 39.5099C162.566 39.4383 160.519 39.2379 158.49 38.9099C158.706 40.3713 158.537 41.8637 158 43.2399C157.1 45.1699 156.11 44.7399 155.86 46.2399C155.61 47.7399 155.68 48.5499 154.86 48.5099C154.04 48.4699 154.15 45.0999 153.68 44.3699C153.21 43.6399 151.58 44.6899 151.43 45.0399C151.28 45.3899 149.16 39.0399 153.25 36.8299C153.25 36.8299 154.52 33.6999 159.96 33.4599C165.4 33.2199 169.79 35.1599 170.71 39.0799Z"
    fill="#263238"
  />
  <path
    d="M154.14 46.45L156.41 49.3899L156.09 49.6399L154.25 47.1399L154.14 46.45Z"
    fill="#EFF5E1"
  />
  <path
    d="M173.34 39.09C173.34 44.44 160.6 41.97 158.06 41.42L157.62 41.32C157.62 41.32 157 51.21 155.51 53.55C154.75 54.75 152.41 55.22 150.22 54.24C148.12 53.31 146.16 51.05 145.8 46.88C145.05 38.29 148.25 31 156.42 29.43C164.59 27.86 173.39 30.58 173.34 39.09Z"
    fill="#CBD0D8"
  />
  <path
    d="M158.06 41.4199L157.62 41.3199C157.62 41.3199 157 51.2099 155.51 53.5499C154.75 54.7499 152.41 55.2199 150.22 54.2399C150.9 54.3499 152.75 54.5199 153.68 53.0399C154.82 51.2099 156.48 40.6699 156.48 40.6699L158 40.0599L158.06 41.4199Z"
    fill="#97A6B7"
  />
  <path
    d="M156.45 40.83C156.464 40.5935 156.543 40.3654 156.677 40.17C156.81 39.9745 156.995 39.819 157.21 39.72C157.94 39.42 165.05 37.62 168.05 37.79C171.05 37.96 174.57 39.25 175.17 40.41C175.77 41.57 168.17 42.68 163.38 42.47C158.59 42.26 156.45 40.83 156.45 40.83Z"
    fill="#97A6B7"
  />
  <path
    d="M151.25 44.78C151.25 47.1 150.25 48.98 148.91 48.98C147.57 48.98 146.58 47.1 146.58 44.78C146.58 42.46 147.58 40.58 148.91 40.58C150.24 40.58 151.25 42.46 151.25 44.78Z"
    fill="#97A6B7"
  />
  <path
    d="M156.25 39C156.25 39 164.64 34.68 172.49 38.27C171.919 36.6176 170.947 35.133 169.66 33.95C167.81 32.55 164.87 31.38 160.66 33.11C159.47 33.6142 158.434 34.425 157.66 35.4597C156.885 36.4944 156.399 37.716 156.25 39Z"
    fill="#97A6B7"
  />
  <path
    d="M176.82 85.9199C171.347 88.1905 165.475 89.3464 159.55 89.32C147.69 89.32 142.4 84.5499 142.4 84.5499L142.34 73.45C142.34 73.45 153.4 80.9199 163.79 80.0499C170.93 79.4599 174.47 77.26 175.99 75.95C176.29 78.89 176.57 82.3599 176.82 85.9199Z"
    fill="#97A6B7"
  />
  <path
    d="M224.25 103.45C224.25 103.45 225.36 106.68 224.25 108.34C223.14 110 224.4 109.54 225.04 108.6C225.68 107.66 225.68 105.77 224.25 103.45Z"
    fill="#EB996E"
  />
  <path
    d="M221.28 103.63C221.28 103.63 222.39 106.85 221.28 108.52C220.17 110.19 221.43 109.71 222.06 108.78C222.69 107.85 222.71 105.94 221.28 103.63Z"
    fill="#EB996E"
  />
  <path
    d="M218.05 104.3C218.05 104.3 219.17 107.52 218.05 109.19C216.93 110.86 218.2 110.39 218.83 109.45C219.46 108.51 219.49 106.61 218.05 104.3Z"
    fill="#C16A2F"
  />
  <path
    d="M152.71 61.23L154.03 58.23C154.03 58.23 160.03 62.15 162.23 62.32L162.63 63.32L163.1 62.11C163.1 62.11 164.48 61.76 164.83 61.24C165.18 60.72 165.69 63.61 165.69 63.61C165.69 63.61 165.17 64.82 161.69 64.82C158.21 64.82 152.71 61.23 152.71 61.23Z"
    fill="#97A6B7"
  />
  <path
    d="M162.4 64.5799C162.4 64.5799 166.73 103.76 166.4 111.81H167.6C167.6 111.81 166 73.4699 163.1 64.5499L162.4 64.5799Z"
    fill="#F2F4F8"
  />
  <path
    d="M176.38 106.9C176.38 106.9 176.48 105.32 173.38 104.14C170.28 102.96 155.57 104.44 151.83 102.67C148.09 100.9 147.7 101.73 146.72 101.53C145.74 101.33 146.42 89.8799 145.83 84.2699C145.24 78.6599 143.47 67.9999 141.8 66.3599C141.8 66.3599 140.21 64.3599 135.6 70.3599C131.91 75.2299 133.83 110.79 141.6 114.19C152.2 118.8 169.1 119.39 172.79 118.36C173.842 118.068 174.789 117.482 175.521 116.67C176.252 115.859 176.738 114.857 176.92 113.78L176.38 106.9Z"
    fill="#97A6B7"
  />
  <path
    d="M167.85 111.64C167.877 112.7 168.217 113.728 168.826 114.596C169.435 115.464 170.287 116.133 171.275 116.52C172.262 116.906 173.342 116.992 174.378 116.768C175.415 116.544 176.362 116.019 177.101 115.259C177.841 114.498 178.34 113.537 178.535 112.495C178.731 111.453 178.615 110.376 178.202 109.399C177.789 108.423 177.096 107.59 176.212 107.005C175.328 106.42 174.29 106.108 173.23 106.11C171.784 106.131 170.405 106.725 169.396 107.762C168.387 108.799 167.831 110.194 167.85 111.64Z"
    fill="#8C949C"
  />
  <path
    d="M219.18 100.6C219.18 100.6 217.11 95.83 212.58 95.14C209.941 94.816 207.262 95.1495 204.783 96.1108C202.304 97.0721 200.101 98.6314 198.37 100.65C194.73 105.08 184.2 106.45 181.64 108.32C179.08 110.19 180 115.11 183.22 116.19C186.44 117.27 196.7 114.91 200.93 117.08C205.16 119.25 212.78 118.21 216.32 116.73C219.86 115.25 223.21 107.29 219.18 100.6Z"
    fill="#F2F4F8"
  />
  <path
    d="M170.63 115.88L178.93 114.88L186.76 113.88C187.119 113.82 187.463 113.688 187.771 113.494C188.08 113.299 188.346 113.045 188.554 112.746C188.763 112.447 188.91 112.109 188.986 111.753C189.063 111.396 189.067 111.028 189 110.67C188.939 109.948 188.594 109.279 188.041 108.811C187.488 108.342 186.772 108.112 186.05 108.17L169.92 110.17C169.208 110.297 168.574 110.7 168.159 111.292C167.743 111.884 167.578 112.617 167.7 113.33C167.723 113.691 167.817 114.043 167.977 114.367C168.137 114.691 168.36 114.98 168.632 115.217C168.905 115.454 169.222 115.635 169.565 115.749C169.908 115.863 170.27 115.907 170.63 115.88Z"
    fill="#4391EF"
  />
  <path
    d="M169.79 110.19C170.605 109.183 171.565 108.303 172.64 107.58C173 107.39 173.395 107.275 173.8 107.242C174.206 107.21 174.614 107.26 175 107.39C175.689 106.962 176.464 106.692 177.27 106.6C177.542 106.593 177.813 106.642 178.066 106.743C178.319 106.845 178.548 106.997 178.74 107.19C179.289 106.855 179.917 106.669 180.56 106.65C180.984 106.697 181.372 106.909 181.64 107.24C181.945 107.112 182.274 107.05 182.605 107.059C182.936 107.068 183.262 107.146 183.56 107.29C184.56 107.78 186.27 110.39 185.78 112.85C185.29 115.31 183.12 115.95 182.58 115.75C182.431 115.703 182.293 115.627 182.175 115.525C182.056 115.424 181.959 115.3 181.89 115.16C181.89 115.16 180.81 116.54 179.77 116.09L178.77 115.65C178.77 115.65 177.54 116.54 176.77 116.19L175.99 115.85C175.776 116.07 175.513 116.238 175.224 116.34C174.934 116.442 174.625 116.477 174.32 116.44C174.016 116.432 173.719 116.351 173.453 116.205C173.187 116.059 172.96 115.852 172.79 115.6C172.5 115.26 174.33 113.98 174.17 113.29C173.16 109.36 169.79 110.19 169.79 110.19Z"
    fill="#FFBE9D"
  />
  <path
    d="M213.425 113.873C217.709 112.862 220.362 108.57 219.351 104.286C218.34 100.002 214.047 97.3484 209.763 98.3595C205.479 99.3706 202.826 103.663 203.837 107.947C204.848 112.231 209.141 114.884 213.425 113.873Z"
    fill="#CBD0D8"
  />
  <path
    d="M223.53 234.29C236.757 234.29 247.48 223.285 247.48 209.71C247.48 196.135 236.757 185.13 223.53 185.13C210.303 185.13 199.58 196.135 199.58 209.71C199.58 223.285 210.303 234.29 223.53 234.29Z"
    fill="#263238"
  />
  <path
    d="M218.26 225.04C224.843 225.04 230.18 218.463 230.18 210.35C230.18 202.237 224.843 195.66 218.26 195.66C211.677 195.66 206.34 202.237 206.34 210.35C206.34 218.463 211.677 225.04 218.26 225.04Z"
    fill="#CBD0D8"
  />
  <path
    d="M213.58 187.52C213.58 187.52 223.79 215.4 221.03 218.59C218.27 221.78 214.85 221.79 212.73 214.59C210.61 207.39 206.98 191.39 206.98 191.39L213.58 187.52Z"
    fill="#4391EF"
  />
  <path
    d="M249.82 200.39C248.789 199.477 247.585 198.783 246.279 198.348C244.973 197.913 243.592 197.747 242.22 197.86C237.53 198.24 237.65 201.4 233.85 201.4C230.05 201.4 229.17 195.07 218.14 193.55C207.11 192.03 204.84 198.24 199.77 199.38C194.7 200.52 198.77 191.9 210.29 185.31C221.81 178.72 234.23 181.51 242.98 187.47C251.73 193.43 254.12 201.28 249.82 200.39Z"
    fill="#CBD0D8"
  />
  <path
    d="M207.75 125.64C207.75 125.64 198.89 123.74 196.48 124.64C194.07 125.54 200.79 127.64 195.85 128.18C190.91 128.72 182.67 130.18 182.04 131.48C181.41 132.78 198.13 130.59 199.9 130.21C201.67 129.83 199.9 126.54 199.9 126.54H207.75C208.26 126.53 207.75 125.64 207.75 125.64Z"
    fill="#CBD0D8"
  />
  <path
    d="M196.42 188.16C196.42 188.16 182.92 155.29 183.87 145.4C184.82 135.51 185.77 144.26 190.14 160.61C194.51 176.96 200.6 191.2 196.42 188.16Z"
    fill="#CBD0D8"
  />
  <path
    d="M182.25 108.58C182.25 108.58 183.36 111.81 182.25 113.47C181.14 115.13 182.39 114.67 183.03 113.73C183.67 112.79 183.68 110.9 182.25 108.58Z"
    fill="#EB996E"
  />
  <path
    d="M179.28 108.76C179.28 108.76 180.39 111.98 179.28 113.65C178.17 115.32 179.43 114.85 180.06 113.91C180.69 112.97 180.71 111.07 179.28 108.76Z"
    fill="#EB996E"
  />
  <path
    d="M176.05 109.43C176.05 109.43 177.17 112.66 176.05 114.32C174.93 115.98 176.2 115.52 176.83 114.58C177.46 113.64 177.49 111.74 176.05 109.43Z"
    fill="#EB996E"
  />
  <path
    d="M111.09 157.31C111.09 157.31 132.24 162.25 133.26 164.03C134.28 165.81 107.16 160.1 111.09 157.31Z"
    fill="#CBD0D8"
  />
  <path
    d="M109.69 163C109.69 163 130.85 168 131.86 169.72C132.87 171.44 105.77 165.8 109.69 163Z"
    fill="#CBD0D8"
  />
  <path
    d="M108.93 168.46C108.93 168.46 130.09 173.4 131.1 175.18C132.11 176.96 105 171.25 108.93 168.46Z"
    fill="#CBD0D8"
  />
  <path
    d="M169.49 46C169.482 46.2088 169.395 46.4069 169.247 46.5537C169.098 46.7005 168.899 46.785 168.69 46.79C168.587 46.794 168.485 46.7778 168.389 46.7423C168.293 46.7067 168.205 46.6526 168.129 46.5829C168.054 46.5133 167.993 46.4295 167.951 46.3363C167.908 46.2431 167.884 46.1424 167.88 46.04C167.885 45.8304 167.971 45.6309 168.12 45.4836C168.27 45.3362 168.47 45.2525 168.68 45.25C168.782 45.246 168.885 45.2622 168.981 45.2977C169.077 45.3333 169.165 45.3874 169.24 45.4571C169.316 45.5267 169.376 45.6105 169.419 45.7037C169.462 45.7968 169.486 45.8975 169.49 46Z"
    fill="#263238"
  />
  <path
    d="M170.43 44.94C170.32 45.04 169.73 44.57 168.86 44.55C167.99 44.53 167.35 44.94 167.26 44.84C167.17 44.74 167.33 44.6 167.61 44.41C167.988 44.159 168.436 44.0331 168.89 44.05C169.34 44.0607 169.774 44.2149 170.13 44.49C170.39 44.7 170.48 44.89 170.43 44.94Z"
    fill="#263238"
  />
  <path
    d="M161 45.87C160.995 46.0796 160.908 46.279 160.759 46.4264C160.61 46.5737 160.41 46.6574 160.2 46.66C160.098 46.6654 159.996 46.6504 159.9 46.616C159.804 46.5816 159.715 46.5284 159.64 46.4595C159.565 46.3907 159.504 46.3075 159.461 46.2149C159.418 46.1222 159.394 46.022 159.39 45.92C159.395 45.7104 159.481 45.5109 159.631 45.3636C159.78 45.2162 159.98 45.1325 160.19 45.13C160.292 45.1246 160.394 45.1396 160.49 45.174C160.586 45.2084 160.674 45.2616 160.75 45.3304C160.825 45.3993 160.886 45.4825 160.929 45.5751C160.972 45.6677 160.996 45.768 161 45.87Z"
    fill="#263238"
  />
  <path
    d="M161.93 44.87C161.82 44.97 161.23 44.5 160.36 44.48C159.49 44.46 158.85 44.87 158.76 44.76C158.67 44.65 158.82 44.53 159.11 44.34C159.486 44.0907 159.931 43.9644 160.383 43.9788C160.834 43.9931 161.27 44.1473 161.63 44.42C161.89 44.63 162 44.82 161.93 44.87Z"
    fill="#263238"
  />
  <path
    d="M164.89 51.36C165.348 51.2264 165.823 51.1557 166.3 51.15C166.52 51.15 166.73 51.09 166.77 50.94C166.796 50.7119 166.75 50.4813 166.64 50.28C166.45 49.74 166.25 49.18 166.03 48.59C165.463 47.149 165.015 45.664 164.69 44.15C165.372 45.5417 165.941 46.9864 166.39 48.47C166.59 49.06 166.78 49.63 166.97 50.18C167.097 50.448 167.129 50.7515 167.06 51.04C167.025 51.1171 166.974 51.1857 166.91 51.2409C166.846 51.2962 166.771 51.3369 166.69 51.36C166.564 51.3778 166.436 51.3778 166.31 51.36C165.838 51.4203 165.361 51.4203 164.89 51.36Z"
    fill="#263238"
  />
  <path
    d="M164.46 53.44C164.303 53.2266 164.093 53.0575 163.851 52.9489C163.61 52.8402 163.344 52.7959 163.08 52.82C162.888 52.8308 162.7 52.8807 162.528 52.9666C162.356 53.0526 162.204 53.1729 162.08 53.32C161.966 53.4578 161.895 53.6266 161.877 53.8047C161.86 53.9829 161.895 54.1623 161.98 54.32C162.111 54.4819 162.289 54.5988 162.49 54.6544C162.691 54.71 162.904 54.7014 163.1 54.63C163.519 54.4999 163.907 54.2855 164.24 54C164.335 53.9297 164.42 53.8454 164.49 53.75C164.522 53.701 164.539 53.6437 164.539 53.585C164.539 53.5263 164.522 53.469 164.49 53.42"
    fill="#EB996E"
  />
  <path
    d="M162.33 51.89C162.47 51.89 162.44 52.82 163.23 53.51C164.02 54.2 165.01 54.12 165.02 54.26C165.03 54.4 164.79 54.43 164.37 54.43C163.819 54.421 163.288 54.2193 162.87 53.86C162.472 53.518 162.224 53.0331 162.18 52.51C162.15 52.11 162.26 51.88 162.33 51.89Z"
    fill="#263238"
  />
  <path
    d="M172 143.5C172.333 144.167 172.9 146 172.5 148C172.1 150 172 149.833 172 149.5"
    stroke="#263238"
    strokeWidth="0.1"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M166.5 119L167.5 123C171.5 123.5 179.6 125.2 180 128"
    stroke="#263238"
    strokeWidth="0.1"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M180.5 93.5C181 91.5 182.8 87.9 186 89.5"
    stroke="#263238"
    strokeWidth="0.1"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M156.5 89.5C158.333 89.8333 162.5 90.3 164.5 89.5"
    stroke="#263238"
    strokeWidth="0.1"
    strokeWinecap="round"
    strokeWinejoin="round"
  />
  <path
    fill-Rule="evenodd"
    clip-Rle="evenodd"
    d="M140.976 65.956C141.001 65.9428 141.031 65.9519 141.044 65.9762C141.964 67.6814 143.317 70.6275 144.384 73.9265C145.45 77.2246 146.234 80.8805 146.012 84.0035C146.011 84.031 145.987 84.0518 145.959 84.0498C145.932 84.0479 145.911 84.024 145.913 83.9964C146.133 80.8924 145.354 77.251 144.288 73.9572C143.223 70.6644 141.874 67.7239 140.956 66.0237C140.943 65.9994 140.952 65.9691 140.976 65.956Z"
    fill="#263238"
  />
  <path
    d="M146.5 101.5C144.5 102 140.5 103.6 140.5 106"
    stroke="#263238"
    strokeWidth="0.1"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M21.5198 300.06C21.5198 301.2 20.7098 301.875 19.3598 301.875H16.9448V298.185H19.3148C20.6498 298.185 21.5198 298.905 21.5198 300.06ZM21.2498 295.365C21.2498 296.43 20.5148 297.06 19.2398 297.06H16.9448V293.67H19.2098C20.5448 293.67 21.2498 294.33 21.2498 295.365ZM22.8848 300.195C22.8848 298.905 21.9548 297.81 20.8148 297.615C21.8198 297.285 22.6448 296.52 22.6448 295.2C22.6448 293.745 21.5348 292.545 19.3298 292.545H15.5798V303H19.4798C21.6398 303 22.8848 301.77 22.8848 300.195ZM28.274 295.8C29.684 295.8 30.884 296.685 30.869 298.29H25.679C25.829 296.685 26.939 295.8 28.274 295.8ZM32.114 300.465H30.644C30.344 301.35 29.564 301.98 28.334 301.98C26.939 301.98 25.769 301.065 25.664 299.4H32.234C32.264 299.115 32.279 298.875 32.279 298.575C32.279 296.325 30.719 294.645 28.334 294.645C25.934 294.645 24.269 296.28 24.269 298.875C24.269 301.485 25.994 303.135 28.334 303.135C30.374 303.135 31.694 301.965 32.114 300.465ZM34.0808 303H35.4458V291.9H34.0808V303ZM45.0622 294.78H43.6972V299.295C43.6972 301.065 42.7522 301.935 41.3422 301.935C39.9622 301.935 39.0472 301.08 39.0472 299.415V294.78H37.6972V299.595C37.6972 301.95 39.1822 303.12 41.0722 303.12C42.1672 303.12 43.1722 302.64 43.6972 301.785V303H45.0622V294.78ZM59.2319 303H60.5819V298.155C60.5819 295.8 59.1269 294.63 57.2519 294.63C55.9919 294.63 54.8219 295.275 54.3419 296.46C53.8019 295.23 52.6769 294.63 51.3269 294.63C50.2469 294.63 49.2719 295.095 48.7319 295.965V294.78H47.3669V303H48.7319V298.47C48.7319 296.7 49.6769 295.815 51.0569 295.815C52.4069 295.815 53.3069 296.67 53.3069 298.35V303H54.6569V298.47C54.6569 296.7 55.6019 295.815 56.9819 295.815C58.3319 295.815 59.2319 296.67 59.2319 298.35V303ZM66.31 298.86C66.31 301.41 68.005 303.135 70.195 303.135C71.71 303.135 72.775 302.355 73.27 301.47V303H74.65V294.78H73.27V296.28C72.79 295.425 71.74 294.645 70.21 294.645C68.005 294.645 66.31 296.295 66.31 298.86ZM73.27 298.875C73.27 300.81 71.98 301.935 70.48 301.935C68.98 301.935 67.705 300.795 67.705 298.86C67.705 296.925 68.98 295.83 70.48 295.83C71.98 295.83 73.27 296.97 73.27 298.875ZM76.4468 298.86C76.4468 301.41 78.1418 303.135 80.3468 303.135C81.8468 303.135 82.9118 302.37 83.4068 301.455V303H84.7868V291.9H83.4068V296.25C82.8368 295.305 81.6518 294.645 80.3618 294.645C78.1418 294.645 76.4468 296.295 76.4468 298.86ZM83.4068 298.875C83.4068 300.81 82.1168 301.935 80.6168 301.935C79.1168 301.935 77.8418 300.795 77.8418 298.86C77.8418 296.925 79.1168 295.83 80.6168 295.83C82.1168 295.83 83.4068 296.97 83.4068 298.875ZM86.5835 298.86C86.5835 301.41 88.2785 303.135 90.4685 303.135C91.9835 303.135 93.0485 302.355 93.5435 301.47V303H94.9235V294.78H93.5435V296.28C93.0635 295.425 92.0135 294.645 90.4835 294.645C88.2785 294.645 86.5835 296.295 86.5835 298.86ZM93.5435 298.875C93.5435 300.81 92.2535 301.935 90.7535 301.935C89.2535 301.935 87.9785 300.795 87.9785 298.86C87.9785 296.925 89.2535 295.83 90.7535 295.83C92.2535 295.83 93.5435 296.97 93.5435 298.875ZM102.594 298.53C102.594 296.625 103.584 296.04 104.889 296.04H105.249V294.63C103.944 294.63 103.059 295.2 102.594 296.115V294.78H101.229V303H102.594V298.53ZM106.825 303H108.19V294.78H106.825V303ZM107.53 293.445C108.025 293.445 108.43 293.04 108.43 292.515C108.43 291.99 108.025 291.585 107.53 291.585C107.005 291.585 106.6 291.99 106.6 292.515C106.6 293.04 107.005 293.445 107.53 293.445ZM112.121 303H113.531L115.511 296.475L117.491 303H118.901L121.466 294.78H120.116L118.256 301.695L116.261 294.78H114.866L112.826 301.68L110.936 294.78H109.541L112.121 303ZM122.311 298.86C122.311 301.41 124.006 303.135 126.196 303.135C127.711 303.135 128.776 302.355 129.271 301.47V303H130.651V294.78H129.271V296.28C128.791 295.425 127.741 294.645 126.211 294.645C124.006 294.645 122.311 296.295 122.311 298.86ZM129.271 298.875C129.271 300.81 127.981 301.935 126.481 301.935C124.981 301.935 123.706 300.795 123.706 298.86C123.706 296.925 124.981 295.83 126.481 295.83C127.981 295.83 129.271 296.97 129.271 298.875ZM136.078 301.44L133.498 294.78H131.983L135.298 302.91L133.678 306.87H135.088L140.038 294.78H138.628L136.078 301.44ZM140.9 298.86C140.9 301.41 142.595 303.135 144.785 303.135C146.3 303.135 147.365 302.355 147.86 301.47V303H149.24V294.78H147.86V296.28C147.38 295.425 146.33 294.645 144.8 294.645C142.595 294.645 140.9 296.295 140.9 298.86ZM147.86 298.875C147.86 300.81 146.57 301.935 145.07 301.935C143.57 301.935 142.295 300.795 142.295 298.86C142.295 296.925 143.57 295.83 145.07 295.83C146.57 295.83 147.86 296.97 147.86 298.875ZM151.847 300.75C151.847 302.4 152.672 303 154.127 303H155.357V301.845H154.352C153.512 301.845 153.212 301.56 153.212 300.75V295.905H155.357V294.78H153.212V292.71H151.847V294.78H150.782V295.905H151.847V300.75ZM168.809 298.875C168.809 296.28 166.994 294.645 164.654 294.645C162.329 294.645 160.499 296.28 160.499 298.875C160.499 301.485 162.269 303.135 164.594 303.135C166.934 303.135 168.809 301.485 168.809 298.875ZM161.894 298.875C161.894 296.805 163.199 295.83 164.639 295.83C166.049 295.83 167.414 296.805 167.414 298.875C167.414 300.96 166.019 301.935 164.594 301.935C163.169 301.935 161.894 300.96 161.894 298.875ZM171.969 298.53C171.969 296.625 172.959 296.04 174.264 296.04H174.624V294.63C173.319 294.63 172.434 295.2 171.969 296.115V294.78H170.604V303H171.969V298.53ZM175.69 298.86C175.69 301.41 177.385 303.135 179.59 303.135C181.09 303.135 182.155 302.37 182.65 301.455V303H184.03V291.9H182.65V296.25C182.08 295.305 180.895 294.645 179.605 294.645C177.385 294.645 175.69 296.295 175.69 298.86ZM182.65 298.875C182.65 300.81 181.36 301.935 179.86 301.935C178.36 301.935 177.085 300.795 177.085 298.86C177.085 296.925 178.36 295.83 179.86 295.83C181.36 295.83 182.65 296.97 182.65 298.875ZM189.832 295.8C191.242 295.8 192.442 296.685 192.427 298.29H187.237C187.387 296.685 188.497 295.8 189.832 295.8ZM193.672 300.465H192.202C191.902 301.35 191.122 301.98 189.892 301.98C188.497 301.98 187.327 301.065 187.222 299.4H193.792C193.822 299.115 193.837 298.875 193.837 298.575C193.837 296.325 192.277 294.645 189.892 294.645C187.492 294.645 185.827 296.28 185.827 298.875C185.827 301.485 187.552 303.135 189.892 303.135C191.932 303.135 193.252 301.965 193.672 300.465ZM197.003 298.53C197.003 296.625 197.993 296.04 199.298 296.04H199.658V294.63C198.353 294.63 197.468 295.2 197.003 296.115V294.78H195.638V303H197.003V298.53ZM202.569 302.16C202.569 301.635 202.164 301.23 201.669 301.23C201.144 301.23 200.739 301.635 200.739 302.16C200.739 302.685 201.144 303.09 201.669 303.09C202.164 303.09 202.569 302.685 202.569 302.16ZM207.873 298.86C207.873 301.41 209.568 303.135 211.773 303.135C213.273 303.135 214.338 302.37 214.833 301.455V303H216.213V291.9H214.833V296.25C214.263 295.305 213.078 294.645 211.788 294.645C209.568 294.645 207.873 296.295 207.873 298.86ZM214.833 298.875C214.833 300.81 213.543 301.935 212.043 301.935C210.543 301.935 209.268 300.795 209.268 298.86C209.268 296.925 210.543 295.83 212.043 295.83C213.543 295.83 214.833 296.97 214.833 298.875ZM218.519 303H219.884V294.78H218.519V303ZM219.224 293.445C219.719 293.445 220.124 293.04 220.124 292.515C220.124 291.99 219.719 291.585 219.224 291.585C218.699 291.585 218.294 291.99 218.294 292.515C218.294 293.04 218.699 293.445 219.224 293.445ZM228.121 300.765C228.061 297.825 223.291 298.89 223.291 296.94C223.291 296.28 223.891 295.8 224.896 295.8C225.991 295.8 226.621 296.4 226.681 297.225H228.046C227.956 295.62 226.756 294.645 224.941 294.645C223.111 294.645 221.926 295.68 221.926 296.94C221.926 300 226.786 298.935 226.786 300.765C226.786 301.44 226.186 301.98 225.106 301.98C223.951 301.98 223.246 301.38 223.171 300.585H221.761C221.851 302.085 223.201 303.135 225.121 303.135C226.936 303.135 228.121 302.115 228.121 300.765ZM230.048 303H231.413V294.78H230.048V303ZM230.753 293.445C231.248 293.445 231.653 293.04 231.653 292.515C231.653 291.99 231.248 291.585 230.753 291.585C230.228 291.585 229.823 291.99 229.823 292.515C229.823 293.04 230.228 293.445 230.753 293.445ZM239.754 303H241.104V298.155C241.104 295.8 239.649 294.63 237.744 294.63C236.634 294.63 235.644 295.095 235.104 295.95V294.78H233.739V303H235.104V298.455C235.104 296.685 236.064 295.815 237.459 295.815C238.839 295.815 239.754 296.67 239.754 298.35V303ZM243.334 303H244.699V294.78H243.334V303ZM244.039 293.445C244.534 293.445 244.939 293.04 244.939 292.515C244.939 291.99 244.534 291.585 244.039 291.585C243.514 291.585 243.109 291.99 243.109 292.515C243.109 293.04 243.514 293.445 244.039 293.445ZM251.024 303H252.389V299.37L255.614 303H257.474L253.589 298.875L257.459 294.78H255.554L252.389 298.425V291.9H251.024V303ZM258.234 298.86C258.234 301.41 259.929 303.135 262.119 303.135C263.634 303.135 264.699 302.355 265.194 301.47V303H266.574V294.78H265.194V296.28C264.714 295.425 263.664 294.645 262.134 294.645C259.929 294.645 258.234 296.295 258.234 298.86ZM265.194 298.875C265.194 300.81 263.904 301.935 262.404 301.935C260.904 301.935 259.629 300.795 259.629 298.86C259.629 296.925 260.904 295.83 262.404 295.83C263.904 295.83 265.194 296.97 265.194 298.875ZM280.746 303H282.096V298.155C282.096 295.8 280.641 294.63 278.766 294.63C277.506 294.63 276.336 295.275 275.856 296.46C275.316 295.23 274.191 294.63 272.841 294.63C271.761 294.63 270.786 295.095 270.246 295.965V294.78H268.881V303H270.246V298.47C270.246 296.7 271.191 295.815 272.571 295.815C273.921 295.815 274.821 296.67 274.821 298.35V303H276.171V298.47C276.171 296.7 277.116 295.815 278.496 295.815C279.846 295.815 280.746 296.67 280.746 298.35V303ZM291.625 294.78H290.26V299.295C290.26 301.065 289.315 301.935 287.905 301.935C286.525 301.935 285.61 301.08 285.61 299.415V294.78H284.26V299.595C284.26 301.95 285.745 303.12 287.635 303.12C288.73 303.12 289.735 302.64 290.26 301.785V303H291.625V294.78ZM299.293 296.31V291.9H297.928V303H299.293V301.485C299.803 302.385 300.868 303.135 302.368 303.135C304.573 303.135 306.268 301.41 306.268 298.86C306.268 296.295 304.588 294.645 302.368 294.645C300.913 294.645 299.818 295.395 299.293 296.31ZM304.873 298.86C304.873 300.795 303.598 301.935 302.083 301.935C300.598 301.935 299.293 300.81 299.293 298.875C299.293 296.97 300.598 295.83 302.083 295.83C303.598 295.83 304.873 296.925 304.873 298.86ZM308.065 303H309.43V294.78H308.065V303ZM308.77 293.445C309.265 293.445 309.67 293.04 309.67 292.515C309.67 291.99 309.265 291.585 308.77 291.585C308.245 291.585 307.84 291.99 307.84 292.515C307.84 293.04 308.245 293.445 308.77 293.445ZM317.667 300.765C317.607 297.825 312.837 298.89 312.837 296.94C312.837 296.28 313.437 295.8 314.442 295.8C315.537 295.8 316.167 296.4 316.227 297.225H317.592C317.502 295.62 316.302 294.645 314.487 294.645C312.657 294.645 311.472 295.68 311.472 296.94C311.472 300 316.332 298.935 316.332 300.765C316.332 301.44 315.732 301.98 314.652 301.98C313.497 301.98 312.792 301.38 312.717 300.585H311.307C311.397 302.085 312.747 303.135 314.667 303.135C316.482 303.135 317.667 302.115 317.667 300.765ZM319.083 298.86C319.083 301.41 320.778 303.135 322.968 303.135C324.483 303.135 325.548 302.355 326.043 301.47V303H327.423V294.78H326.043V296.28C325.563 295.425 324.513 294.645 322.983 294.645C320.778 294.645 319.083 296.295 319.083 298.86ZM326.043 298.875C326.043 300.81 324.753 301.935 323.253 301.935C321.753 301.935 320.478 300.795 320.478 298.86C320.478 296.925 321.753 295.83 323.253 295.83C324.753 295.83 326.043 296.97 326.043 298.875ZM71.0461 326H72.4111V314.9H71.0461V326ZM74.7375 326H76.1025V317.78H74.7375V326ZM75.4425 316.445C75.9375 316.445 76.3425 316.04 76.3425 315.515C76.3425 314.99 75.9375 314.585 75.4425 314.585C74.9175 314.585 74.5125 314.99 74.5125 315.515C74.5125 316.04 74.9175 316.445 75.4425 316.445ZM78.4289 326H79.7939V321.455C79.7939 319.685 80.7539 318.815 82.1489 318.815C83.5289 318.815 84.4439 319.67 84.4439 321.35V326H85.7939V321.155C85.7939 318.8 84.3389 317.63 82.5089 317.63C81.3539 317.63 80.3339 318.095 79.7939 318.965V314.9H78.4289V326ZM87.5137 321.86C87.5137 324.41 89.2087 326.135 91.3987 326.135C92.9137 326.135 93.9787 325.355 94.4737 324.47V326H95.8537V317.78H94.4737V319.28C93.9937 318.425 92.9437 317.645 91.4137 317.645C89.2087 317.645 87.5137 319.295 87.5137 321.86ZM94.4737 321.875C94.4737 323.81 93.1837 324.935 91.6837 324.935C90.1837 324.935 88.9087 323.795 88.9087 321.86C88.9087 319.925 90.1837 318.83 91.6837 318.83C93.1837 318.83 94.4737 319.97 94.4737 321.875ZM98.4604 323.75C98.4604 325.4 99.2854 326 100.74 326H101.97V324.845H100.965C100.125 324.845 99.8254 324.56 99.8254 323.75V318.905H101.97V317.78H99.8254V315.71H98.4604V317.78H97.3954V318.905H98.4604V323.75ZM108.988 321.53C108.988 319.625 109.978 319.04 111.283 319.04H111.643V317.63C110.338 317.63 109.453 318.2 108.988 319.115V317.78H107.623V326H108.988V321.53ZM113.219 326H114.584V317.78H113.219V326ZM113.924 316.445C114.419 316.445 114.824 316.04 114.824 315.515C114.824 314.99 114.419 314.585 113.924 314.585C113.399 314.585 112.994 314.99 112.994 315.515C112.994 316.04 113.399 316.445 113.924 316.445ZM118.515 326H119.925L121.905 319.475L123.885 326H125.295L127.86 317.78H126.51L124.65 324.695L122.655 317.78H121.26L119.22 324.68L117.33 317.78H115.935L118.515 326ZM128.705 321.86C128.705 324.41 130.4 326.135 132.59 326.135C134.105 326.135 135.17 325.355 135.665 324.47V326H137.045V317.78H135.665V319.28C135.185 318.425 134.135 317.645 132.605 317.645C130.4 317.645 128.705 319.295 128.705 321.86ZM135.665 321.875C135.665 323.81 134.375 324.935 132.875 324.935C131.375 324.935 130.1 323.795 130.1 321.86C130.1 319.925 131.375 318.83 132.875 318.83C134.375 318.83 135.665 319.97 135.665 321.875ZM142.472 324.44L139.892 317.78H138.377L141.692 325.91L140.072 329.87H141.482L146.432 317.78H145.022L142.472 324.44ZM147.294 321.86C147.294 324.41 148.989 326.135 151.179 326.135C152.694 326.135 153.759 325.355 154.254 324.47V326H155.634V317.78H154.254V319.28C153.774 318.425 152.724 317.645 151.194 317.645C148.989 317.645 147.294 319.295 147.294 321.86ZM154.254 321.875C154.254 323.81 152.964 324.935 151.464 324.935C149.964 324.935 148.689 323.795 148.689 321.86C148.689 319.925 149.964 318.83 151.464 318.83C152.964 318.83 154.254 319.97 154.254 321.875ZM158.241 323.75C158.241 325.4 159.066 326 160.521 326H161.751V324.845H160.746C159.906 324.845 159.606 324.56 159.606 323.75V318.905H161.751V317.78H159.606V315.71H158.241V317.78H157.176V318.905H158.241V323.75ZM175.204 321.875C175.204 319.28 173.389 317.645 171.049 317.645C168.724 317.645 166.894 319.28 166.894 321.875C166.894 324.485 168.664 326.135 170.989 326.135C173.329 326.135 175.204 324.485 175.204 321.875ZM168.289 321.875C168.289 319.805 169.594 318.83 171.034 318.83C172.444 318.83 173.809 319.805 173.809 321.875C173.809 323.96 172.414 324.935 170.989 324.935C169.564 324.935 168.289 323.96 168.289 321.875ZM178.363 321.53C178.363 319.625 179.353 319.04 180.658 319.04H181.018V317.63C179.713 317.63 178.828 318.2 178.363 319.115V317.78H176.998V326H178.363V321.53ZM182.084 321.86C182.084 324.41 183.779 326.135 185.984 326.135C187.484 326.135 188.549 325.37 189.044 324.455V326H190.424V314.9H189.044V319.25C188.474 318.305 187.289 317.645 185.999 317.645C183.779 317.645 182.084 319.295 182.084 321.86ZM189.044 321.875C189.044 323.81 187.754 324.935 186.254 324.935C184.754 324.935 183.479 323.795 183.479 321.86C183.479 319.925 184.754 318.83 186.254 318.83C187.754 318.83 189.044 319.97 189.044 321.875ZM196.226 318.8C197.636 318.8 198.836 319.685 198.821 321.29H193.631C193.781 319.685 194.891 318.8 196.226 318.8ZM200.066 323.465H198.596C198.296 324.35 197.516 324.98 196.286 324.98C194.891 324.98 193.721 324.065 193.616 322.4H200.186C200.216 322.115 200.231 321.875 200.231 321.575C200.231 319.325 198.671 317.645 196.286 317.645C193.886 317.645 192.221 319.28 192.221 321.875C192.221 324.485 193.946 326.135 196.286 326.135C198.326 326.135 199.646 324.965 200.066 323.465ZM203.397 321.53C203.397 319.625 204.387 319.04 205.692 319.04H206.052V317.63C204.747 317.63 203.862 318.2 203.397 319.115V317.78H202.032V326H203.397V321.53ZM207.118 321.86C207.118 324.41 208.813 326.135 211.003 326.135C212.518 326.135 213.583 325.355 214.078 324.47V326H215.458V317.78H214.078V319.28C213.598 318.425 212.548 317.645 211.018 317.645C208.813 317.645 207.118 319.295 207.118 321.86ZM214.078 321.875C214.078 323.81 212.788 324.935 211.288 324.935C209.788 324.935 208.513 323.795 208.513 321.86C208.513 319.925 209.788 318.83 211.288 318.83C212.788 318.83 214.078 319.97 214.078 321.875ZM223.78 326H225.13V321.155C225.13 318.8 223.675 317.63 221.77 317.63C220.66 317.63 219.67 318.095 219.13 318.95V317.78H217.765V326H219.13V321.455C219.13 319.685 220.09 318.815 221.485 318.815C222.865 318.815 223.78 319.67 223.78 321.35V326ZM231.359 326H232.724V322.37L235.949 326H237.809L233.924 321.875L237.794 317.78H235.889L232.724 321.425V314.9H231.359V326ZM238.568 321.86C238.568 324.41 240.263 326.135 242.453 326.135C243.968 326.135 245.033 325.355 245.528 324.47V326H246.908V317.78H245.528V319.28C245.048 318.425 243.998 317.645 242.468 317.645C240.263 317.645 238.568 319.295 238.568 321.86ZM245.528 321.875C245.528 323.81 244.238 324.935 242.738 324.935C241.238 324.935 239.963 323.795 239.963 321.86C239.963 319.925 241.238 318.83 242.738 318.83C244.238 318.83 245.528 319.97 245.528 321.875ZM261.08 326H262.43V321.155C262.43 318.8 260.975 317.63 259.1 317.63C257.84 317.63 256.67 318.275 256.19 319.46C255.65 318.23 254.525 317.63 253.175 317.63C252.095 317.63 251.12 318.095 250.58 318.965V317.78H249.215V326H250.58V321.47C250.58 319.7 251.525 318.815 252.905 318.815C254.255 318.815 255.155 319.67 255.155 321.35V326H256.505V321.47C256.505 319.7 257.45 318.815 258.83 318.815C260.18 318.815 261.08 319.67 261.08 321.35V326ZM271.959 317.78H270.594V322.295C270.594 324.065 269.649 324.935 268.239 324.935C266.859 324.935 265.944 324.08 265.944 322.415V317.78H264.594V322.595C264.594 324.95 266.079 326.12 267.969 326.12C269.064 326.12 270.069 325.64 270.594 324.785V326H271.959V317.78Z"
    fill="#414141"
  />
</svg>
</div> */
}
