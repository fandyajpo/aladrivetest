//STATE
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import BackNav from "components/footer/backNav";

//NEXT
import Image from "next/image";

//MEDIA
import Profile from "public/profile.outlet.png";
import RemoveOutlet from "components/modal/removeOutlet";
import BatalPartneran from "components/modal/cancelPartner";

//COMPONENTS
const BatalPartner = () => {
  const router = useRouter();

  const [batalPartner, setBatalPartner] = useState(false);
  const handleOpenBatal = () => setBatalPartner(true);
  const handleClosebatal = () => setBatalPartner(false);

  const [bergabung, setBergabung] = useState(false);

  return (
    <>
      <BatalPartneran
        setBatalPartner={setBatalPartner}
        title={"Batalkan Permintaan"}
        description={"Kamu yakin gakjadi minta outlet ini jadi partnermu?"}
        batalPartner={batalPartner}
        handleClosebatal={handleClosebatal}
      />
      <div className="w-full h-full bg-white relative overflow-hidden text-custom-black p-4 flex flex-col pb-44">
        <div className="w-full space-y-3">
          {/* OUTLET_PROFILE */}
          <div className="relative w-full">
            <div className="w-full">
              <div className="flex flex-row space-x-4 items-center ">
                <div>
                  <Image src={Profile} />
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xl text-custom-black font-bold">
                      Good Method
                    </p>
                    <div className="flex flex-row items-center gap-x-1">
                      <p className="text-md font-bold">80</p>
                      <p className="text-s">Pengantaran/Minggu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-around items-center border-b pb-2">
              <div>
                <button>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row items-center">
                      <div>
                        <p className="font-bold text-s text-custom-black">
                          4.5
                        </p>
                      </div>
                      <div>
                        <svg
                          width="13"
                          height="11"
                          viewBox="0 0 13 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0439 3.80846H8.10394L6.90552 0.2799C6.87473 0.197764 6.8192 0.126908 6.74639 0.076867C6.67358 0.0268256 6.58699 0 6.49827 0C6.40955 0 6.32297 0.0268256 6.25016 0.076867C6.17735 0.126908 6.12182 0.197764 6.09103 0.2799L4.89505 3.80846H0.928098C0.814659 3.80878 0.705958 3.85341 0.625744 3.93259C0.545531 4.01178 0.500324 4.11908 0.5 4.23107C0.500055 4.25513 0.502936 4.2791 0.508586 4.30251C0.51422 4.36232 0.5332 4.42016 0.564165 4.47188C0.595129 4.52359 0.637309 4.56789 0.687676 4.6016L3.92601 6.85509L2.68219 10.4212C2.65277 10.5057 2.65116 10.5972 2.6776 10.6827C2.70404 10.7682 2.75716 10.8432 2.82939 10.8971C2.89746 10.9571 2.98369 10.9933 3.07472 11C3.17107 10.993 3.2636 10.9599 3.34213 10.9043L6.50318 8.68113L9.66423 10.9043C9.74215 10.961 9.83502 10.9942 9.93164 11C10.0206 10.9939 10.1048 10.9576 10.1696 10.8971C10.2424 10.8437 10.296 10.7687 10.3225 10.683C10.349 10.5974 10.347 10.5056 10.3168 10.4212L9.07054 6.85388L12.2819 4.57981L12.3604 4.51079C12.426 4.45398 12.4716 4.37796 12.4904 4.29382C12.5092 4.20967 12.5003 4.1218 12.465 4.043C12.4296 3.9642 12.3697 3.8986 12.294 3.85576C12.2183 3.81292 12.1306 3.79507 12.0439 3.80483V3.80846Z"
                            fill="#F3B33D"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-s font-light text-custom-follower">
                        Rating
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="border-l h-8" />
              <div>
                <button
                  onClick={() =>
                    router.push("profile/follower", "profile/follower")
                  }
                >
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row items-center">
                      <div>
                        <p className="font-bold text-s text-custom-black">
                          2-5/Km
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-s font-light text-custom-follower">
                        Jarak Antar
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="border-l h-8" />
              <div>
                <button
                  onClick={() => router.push("profile/post", "profile/post")}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row items-center">
                      <div>
                        <p className="font-bold text-s text-custom-black">
                          7.000/Km
                        </p>
                      </div>
                      <div>
                        <svg
                          width="13"
                          height="11"
                          viewBox="0 0 13 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0439 3.80846H8.10394L6.90552 0.2799C6.87473 0.197764 6.8192 0.126908 6.74639 0.076867C6.67358 0.0268256 6.58699 0 6.49827 0C6.40955 0 6.32297 0.0268256 6.25016 0.076867C6.17735 0.126908 6.12182 0.197764 6.09103 0.2799L4.89505 3.80846H0.928098C0.814659 3.80878 0.705958 3.85341 0.625744 3.93259C0.545531 4.01178 0.500324 4.11908 0.5 4.23107C0.500055 4.25513 0.502936 4.2791 0.508586 4.30251C0.51422 4.36232 0.5332 4.42016 0.564165 4.47188C0.595129 4.52359 0.637309 4.56789 0.687676 4.6016L3.92601 6.85509L2.68219 10.4212C2.65277 10.5057 2.65116 10.5972 2.6776 10.6827C2.70404 10.7682 2.75716 10.8432 2.82939 10.8971C2.89746 10.9571 2.98369 10.9933 3.07472 11C3.17107 10.993 3.2636 10.9599 3.34213 10.9043L6.50318 8.68113L9.66423 10.9043C9.74215 10.961 9.83502 10.9942 9.93164 11C10.0206 10.9939 10.1048 10.9576 10.1696 10.8971C10.2424 10.8437 10.296 10.7687 10.3225 10.683C10.349 10.5974 10.347 10.5056 10.3168 10.4212L9.07054 6.85388L12.2819 4.57981L12.3604 4.51079C12.426 4.45398 12.4716 4.37796 12.4904 4.29382C12.5092 4.20967 12.5003 4.1218 12.465 4.043C12.4296 3.9642 12.3697 3.8986 12.294 3.85576C12.2183 3.81292 12.1306 3.79507 12.0439 3.80483V3.80846Z"
                            fill="#F3B33D"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-s font-light text-custom-follower">
                        Sharing
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="border-r h-8" />
              <div>
                <button
                  onClick={() => router.push("riwayat-antar", "riwayat-antar")}
                >
                  <div className="flex flex-col items-center">
                    <div>
                      <div>
                        <p className="text-s font-light text-custom-blue">
                          Riwayat
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-s font-light text-custom-blue">
                        Antarmu
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* RATE DLL */}

          {/* Description */}
          <div>
            <div>
              <div>
                <p className="text-custom-black font-bold text-md">Deskripsi</p>
              </div>
              <div>
                <p className="text-s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisis quam sollicitudin ipsum commodo purus, tempor urna
                  sem aliquam.
                </p>
              </div>
            </div>
          </div>
          {/* Lokasi */}
          <div>
            <div>
              <div>
                <p className="text-custom-black font-bold text-md">Lokasi</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <div className="py-0.5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6C6.55228 6 7 5.55228 7 5C7 4.44772 6.55228 4 6 4ZM4 5C4 3.89543 4.89543 3 6 3C7.10457 3 8 3.89543 8 5C8 6.10457 7.10457 7 6 7C4.89543 7 4 6.10457 4 5Z"
                      fill="#FDB249"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5C10.5 5.50831 10.4461 5.95607 10.3055 6.38019C10.1642 6.80655 9.94353 7.18417 9.64016 7.56269C9.63615 7.5677 9.63204 7.57262 9.62784 7.57747L6.37784 11.3275C6.28287 11.437 6.14501 11.5 6 11.5C5.85499 11.5 5.71713 11.437 5.62216 11.3275L2.37216 7.57747C2.36796 7.57262 2.36385 7.5677 2.35984 7.56269C2.05647 7.18417 1.83585 6.80655 1.69452 6.38019C1.55393 5.95607 1.5 5.50831 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802ZM6 1.5C5.07174 1.5 4.1815 1.86875 3.52513 2.52513C2.86875 3.1815 2.5 4.07174 2.5 5C2.5 5.43769 2.54657 5.77243 2.64373 6.06556C2.73939 6.35413 2.89208 6.62646 3.13431 6.92999L6 10.2366L8.86569 6.92999C9.10792 6.62646 9.26061 6.35413 9.35627 6.06556C9.45343 5.77243 9.5 5.43769 9.5 5C9.5 4.07174 9.13125 3.1815 8.47487 2.52513C7.8185 1.86875 6.92826 1.5 6 1.5Z"
                      fill="#FDB249"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-s">
                    Jl. Teuku Umar Barat No.371, Padangsambian Klod, Kec.
                    Denpasar Bar., Kota Denpasar, Bali
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Jam Operasional */}
          <div>
            <div>
              <div>
                <p className="text-custom-black font-bold text-md">
                  Jam Operasional
                </p>
              </div>
              <div className="divide-y py-2">
                <div className="flex flex-row justify-between items-center py-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M22 10H2V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V10ZM7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8ZM17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8Z"
                          fill="#F3B33D"
                        />
                        <path
                          d="M19 4H18V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V4H8V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V10H22V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4V4Z"
                          fill="#F3B33D"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-custom-black font-bold text-md">
                        Senin
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-custom-textGray text-s">
                      00:00-24:00 WIB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M22 10H2V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V10ZM7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8ZM17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8Z"
                          fill="#F3B33D"
                        />
                        <path
                          d="M19 4H18V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V4H8V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V10H22V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4V4Z"
                          fill="#F3B33D"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-custom-black font-bold text-md">
                        Selasa
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-custom-textGray text-s">
                      00:00-24:00 WIB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M22 10H2V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V10ZM7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8ZM17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8Z"
                          fill="#F3B33D"
                        />
                        <path
                          d="M19 4H18V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V4H8V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V10H22V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4V4Z"
                          fill="#F3B33D"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-custom-black font-bold text-md">
                        Rabu
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-custom-textGray text-s">
                      00:00-24:00 WIB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M22 10H2V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V10ZM7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8ZM17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8Z"
                          fill="#F3B33D"
                        />
                        <path
                          d="M19 4H18V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V4H8V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V10H22V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4V4Z"
                          fill="#F3B33D"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-custom-black font-bold text-md">
                        Kamis
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-custom-textGray text-s">
                      00:00-24:00 WIB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M22 10H2V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V10ZM7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8ZM17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8Z"
                          fill="#F3B33D"
                        />
                        <path
                          d="M19 4H18V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V4H8V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V10H22V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4V4Z"
                          fill="#F3B33D"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-custom-black font-bold text-md">
                        Jum`at
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-custom-textGray text-s">
                      00:00-24:00 WIB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M22 10H2V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V10ZM7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8ZM17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8Z"
                          fill="#F3B33D"
                        />
                        <path
                          d="M19 4H18V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V4H8V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V10H22V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4V4Z"
                          fill="#F3B33D"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-custom-black font-bold text-md">
                        Sabtu
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-custom-textGray text-s">
                      00:00-24:00 WIB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M22 10H2V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V10ZM7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8ZM17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8Z"
                          fill="#F3B33D"
                        />
                        <path
                          d="M19 4H18V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V4H8V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V10H22V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4V4Z"
                          fill="#F3B33D"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-custom-black font-bold text-md">
                        Minggu
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-custom-textGray text-s">
                      00:00-24:00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TAG */}
          <div>
            <div>
              <div>
                <p className="text-custom-black font-bold text-md">Tagging</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 py-2">
                <div className="bg-custom-layer rounded-full">
                  <p className="text-custom-textGray py-1 px-4">Kopi</p>
                </div>
                <div className="bg-custom-layer rounded-full">
                  <p className="text-custom-textGray py-1 px-4">Coffee</p>
                </div>
                <div className="bg-custom-layer rounded-full">
                  <p className="text-custom-textGray py-1 px-4">Espresso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackNav
        title={"Nama Resto"}
        bottomButton={
          bergabung ? "Permintaan Bergabung" : "Batalkan Permintaan"
        }
        bottomAction={() => setBergabung(!bergabung)}
        classButton={
          bergabung
            ? "bg-custom-blue text-white"
            : " bg-custom-btnGray text-custom-blue"
        }
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
              d="M23.4666 14.9347H10.8159L14.6879 10.284C14.8689 10.0662 14.956 9.78534 14.93 9.50328C14.904 9.22123 14.7671 8.96106 14.5492 8.78C14.3314 8.59895 14.0506 8.51184 13.7685 8.53785C13.4864 8.56385 13.2263 8.70084 13.0452 8.91867L7.71189 15.3187C7.676 15.3696 7.64392 15.4231 7.61589 15.4787C7.61589 15.532 7.61589 15.564 7.54122 15.6173C7.49287 15.7396 7.46756 15.8698 7.46655 16.0013C7.46756 16.1328 7.49287 16.263 7.54122 16.3853C7.54122 16.4387 7.54122 16.4707 7.61589 16.524C7.64392 16.5796 7.676 16.6331 7.71189 16.684L13.0452 23.084C13.1455 23.2044 13.2711 23.3012 13.4131 23.3676C13.555 23.434 13.7098 23.4683 13.8666 23.468C14.1158 23.4685 14.3573 23.3817 14.5492 23.2227C14.6572 23.1331 14.7465 23.0231 14.812 22.899C14.8774 22.7749 14.9177 22.6391 14.9306 22.4994C14.9435 22.3597 14.9287 22.2189 14.887 22.0849C14.8454 21.9509 14.7777 21.8265 14.6879 21.7187L10.8159 17.068H23.4666C23.7494 17.068 24.0208 16.9556 24.2208 16.7556C24.4208 16.5555 24.5332 16.2842 24.5332 16.0013C24.5332 15.7184 24.4208 15.4471 24.2208 15.2471C24.0208 15.047 23.7494 14.9347 23.4666 14.9347Z"
              fill="#414141"
            />
          </svg>
        }
      />
    </>
  );
};

export default BatalPartner;
