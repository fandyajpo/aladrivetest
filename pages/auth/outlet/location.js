//STATE
import { useState, useRef, useEffect, useContext } from "react";
import { useRouter } from "next/router";

const UserLocation = () => {
  const router = useRouter();

  const [searchLocation, setSearchLocation] = useState("");
  const searchHandle = (event) => {
    setSearchLocation(event.target.value);
  };

  useEffect(() => {
    console.log(searchLocation);
  }, [searchLocation]);

  return (
    <>
      <div className="w-full min-h-screen bg-white relative overflow-hidden text-custom-black py-4 flex flex-col">
        <div className="w-full space-y-3">
          {/* Description */}
          <div className="px-4">
            <div className="relative">
              <div className="fixed top-0 bg-white w-full">
                <p className="text-custom-black font-bold text-md py-2">
                  {searchLocation ? " Hasil Pencarian" : " Lokasimu saat ini"}
                </p>
              </div>
            </div>
            <div className="pt-10 pb-24 space-y-2">
              {searchLocation ? (
                <div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end flex-col">
                      <div className="flex gap-x-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#414141"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069V4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#414141"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <p className="text-s font-bold text-custom-black">
                              Redwhite coffee
                            </p>
                          </div>
                          <div>
                            <p className="text-s">
                              Jl. Teuku Umar Barat No.371, Padangsambian Klod,
                              Kec. Denpasar Bar., Kota Denpasar, Bali
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="key relative z-50">
        <div className="w-full fixed bottom-0 bg-custom-bg bg-opacity-70 backdrop-filter backdrop-blur-2xl pb-2 z-50">
          <div>
            <div className="p-4">
              <div className="flex flex-row items-center justify-between">
                <div className="w-1/6 flex justify-start items-center">
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
                        d="M23.4667 14.9347H10.816L14.688 10.284C14.8691 10.0662 14.9562 9.78533 14.9302 9.50328C14.9042 9.22122 14.7672 8.96105 14.5493 8.77999C14.3315 8.59894 14.0507 8.51183 13.7686 8.53784C13.4866 8.56384 13.2264 8.70083 13.0453 8.91866L7.71201 15.3187C7.67613 15.3696 7.64404 15.423 7.61601 15.4787C7.61601 15.532 7.61601 15.564 7.54134 15.6173C7.49299 15.7396 7.46768 15.8698 7.46667 16.0013C7.46768 16.1328 7.49299 16.263 7.54134 16.3853C7.54134 16.4387 7.54134 16.4707 7.61601 16.524C7.64404 16.5796 7.67613 16.6331 7.71201 16.684L13.0453 23.084C13.1456 23.2044 13.2712 23.3012 13.4132 23.3676C13.5551 23.434 13.71 23.4682 13.8667 23.468C14.1159 23.4685 14.3574 23.3817 14.5493 23.2227C14.6574 23.1331 14.7466 23.0231 14.8121 22.899C14.8775 22.7749 14.9178 22.6391 14.9307 22.4994C14.9436 22.3597 14.9288 22.2188 14.8871 22.0849C14.8455 21.9509 14.7778 21.8264 14.688 21.7187L10.816 17.068H23.4667C23.7496 17.068 24.0209 16.9556 24.2209 16.7556C24.421 16.5555 24.5333 16.2842 24.5333 16.0013C24.5333 15.7184 24.421 15.4471 24.2209 15.2471C24.0209 15.047 23.7496 14.9347 23.4667 14.9347Z"
                        fill="#414141"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-row items-center justify-center w-full bg-white rounded-full">
                  <input
                    className="w-full outline-none p-1 rounded-full px-2"
                    onChange={searchHandle}
                    value={searchLocation}
                  />
                  <div className="px-2 flex items-center">
                    <button onClick={() => setSearchLocation("")}>
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
                          fill="#414141"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M13.128 12.0001L16.568 8.56805C16.7187 8.41741 16.8033 8.21309 16.8033 8.00005C16.8033 7.78701 16.7187 7.58269 16.568 7.43205C16.4174 7.28141 16.2131 7.19678 16 7.19678C15.787 7.19678 15.5827 7.28141 15.432 7.43205L12 10.8721L8.56801 7.43205C8.41737 7.28141 8.21305 7.19678 8.00001 7.19678C7.78697 7.19678 7.58266 7.28141 7.43201 7.43205C7.28137 7.58269 7.19674 7.78701 7.19674 8.00005C7.19674 8.21309 7.28137 8.41741 7.43201 8.56805L10.872 12.0001L7.43201 15.4321C7.35703 15.5064 7.29751 15.5949 7.2569 15.6924C7.21628 15.7899 7.19537 15.8944 7.19537 16.0001C7.19537 16.1057 7.21628 16.2102 7.2569 16.3077C7.29751 16.4052 7.35703 16.4937 7.43201 16.5681C7.50638 16.643 7.59486 16.7026 7.69235 16.7432C7.78984 16.7838 7.8944 16.8047 8.00001 16.8047C8.10562 16.8047 8.21019 16.7838 8.30767 16.7432C8.40516 16.7026 8.49364 16.643 8.56801 16.5681L12 13.1281L15.432 16.5681C15.5064 16.643 15.5949 16.7026 15.6924 16.7432C15.7898 16.7838 15.8944 16.8047 16 16.8047C16.1056 16.8047 16.2102 16.7838 16.3077 16.7432C16.4052 16.7026 16.4936 16.643 16.568 16.5681C16.643 16.4937 16.7025 16.4052 16.7431 16.3077C16.7837 16.2102 16.8047 16.1057 16.8047 16.0001C16.8047 15.8944 16.7837 15.7899 16.7431 15.6924C16.7025 15.5949 16.643 15.5064 16.568 15.4321L13.128 12.0001Z"
                          fill="#BCBCBC"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="w-1/6 flex items-center justify-end">
                  <button
                    onClick={() => router.push("location-map", "location-map")}
                  >
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
                        d="M12.368 8.79005L9.632 7.87705C9.33133 7.77691 9.01118 7.74964 8.69791 7.79751C8.38464 7.84538 8.08723 7.967 7.83019 8.15236C7.57315 8.33772 7.36383 8.58151 7.21949 8.86363C7.07516 9.14576 6.99992 9.45814 7 9.77505V21.558C6.9999 21.978 7.13198 22.3873 7.37752 22.7279C7.62305 23.0686 7.96959 23.3233 8.368 23.456L12.368 24.789C12.7783 24.9257 13.2217 24.9257 13.632 24.789L18.368 23.211C18.7783 23.0744 19.2217 23.0744 19.632 23.211L22.368 24.123C22.6687 24.2232 22.989 24.2505 23.3023 24.2025C23.6157 24.1546 23.9132 24.0329 24.1702 23.8474C24.4273 23.662 24.6366 23.418 24.7808 23.1358C24.9251 22.8535 25.0002 22.541 25 22.224V10.442C25.0002 10.0222 24.8682 9.61302 24.6229 9.27237C24.3775 8.93172 24.0312 8.67692 23.633 8.54405L19.633 7.21105C19.2224 7.07418 18.7786 7.07418 18.368 7.21105L13.631 8.78905C13.2207 8.92569 12.7773 8.92569 12.367 8.78905L12.368 8.79005Z"
                        stroke="#414141"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 9V25"
                        stroke="#414141"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 7V23"
                        stroke="#414141"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLocation;
