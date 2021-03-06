import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
//CONTEXT

const HistorySorting = (props) => {
  const router = useRouter();
  const [sortDate, setSortDate] = useState(false);
  const [selectDate, setSelectDate] = useState("1"); //value 1 2 3 4 5
  // const [search, setSearch] = useState(false);

  useEffect(() => {
    console.log("Sort date : ", sortDate);
  }, [sortDate]);

  const contentHandle = (event) => {
    props.setText(event.target.value);
  };

  return (
    <div>
      <div
        className={`${props.search ? "hidden" : ""} ${
          sortDate ? "" : "hidden"
        } fixed bottom-32 w-full h-14 bg-custom-bg bg-opacity-70 backdrop-blur-2xl `}
      >
        <div className="w-full">
          <div className="w-full h-auto px-4 py-2">
            <div className="flex overflow-x-scroll gap-x-2 w-full">
              <button className="flex-none " onClick={() => setSelectDate("1")}>
                <div
                  className={` rounded-full w-full h-auto ${
                    selectDate === "1"
                      ? "bg-custom-blue bg-opacity-30"
                      : "bg-white"
                  }`}
                >
                  <div>
                    <p
                      className={`text-center px-4 py-1 ${
                        selectDate === "1"
                          ? "text-custom-blue font-bold"
                          : "text-custom-black"
                      }`}
                    >
                      7 Hari Terakhir
                    </p>
                  </div>
                </div>
              </button>
              <button className="flex-none" onClick={() => setSelectDate("2")}>
                <div
                  className={` rounded-full w-full h-auto ${
                    selectDate === "2"
                      ? "bg-custom-blue bg-opacity-30"
                      : "bg-white"
                  }`}
                >
                  <div>
                    <p
                      className={`text-center px-4 py-1 ${
                        selectDate === "2"
                          ? "text-custom-blue font-bold"
                          : "text-custom-black"
                      }`}
                    >
                      14 Hari Terakhir
                    </p>
                  </div>
                </div>
              </button>
              <button className="flex-none" onClick={() => setSelectDate("3")}>
                <div
                  className={` rounded-full w-full h-auto ${
                    selectDate === "3"
                      ? "bg-custom-blue bg-opacity-30"
                      : "bg-white"
                  }`}
                >
                  <div>
                    <p
                      className={`text-center px-4 py-1 ${
                        selectDate === "3"
                          ? "text-custom-blue font-bold"
                          : "text-custom-black"
                      }`}
                    >
                      30 Hari Terakhir
                    </p>
                  </div>
                </div>
              </button>
              <button className="flex-none" onClick={() => setSelectDate("4")}>
                <div
                  className={` rounded-full w-full h-auto ${
                    selectDate === "4"
                      ? "bg-custom-blue bg-opacity-30"
                      : "bg-white"
                  }`}
                >
                  <div>
                    <p
                      className={`text-center px-4 py-1 ${
                        selectDate === "4"
                          ? "text-custom-blue font-bold"
                          : "text-custom-black"
                      }`}
                    >
                      Bulan Kemarin
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className={`${
            props.search ? "hidden" : ""
          } fixed bottom-20 w-full h-14 bg-custom-bg bg-opacity-70 backdrop-blur-2xl`}
        >
          <div className="flex items-center w-full h-full">
            <div className="flex flex-row justify-between items-center w-full px-4">
              <div className="w-full flex items-center justify-center bg-custom-blue bg-opacity-30 p-2 rounded-full">
                <button className="flex items-center  gap-x-2">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66665 10.8333C6.44563 10.8333 6.23367 10.7455 6.07739 10.5892C5.92111 10.4329 5.83331 10.221 5.83331 9.99996C5.83331 9.77895 5.92111 9.56698 6.07739 9.4107C6.23367 9.25442 6.44563 9.16663 6.66665 9.16663C6.88766 9.16663 7.09962 9.25442 7.2559 9.4107C7.41218 9.56698 7.49998 9.77895 7.49998 9.99996C7.49998 10.221 7.41218 10.4329 7.2559 10.5892C7.09962 10.7455 6.88766 10.8333 6.66665 10.8333Z"
                        fill="#4391EF"
                      />
                      <path
                        d="M6.66665 14.1667C6.44563 14.1667 6.23367 14.0789 6.07739 13.9226C5.92111 13.7663 5.83331 13.5543 5.83331 13.3333C5.83331 13.1123 5.92111 12.9004 6.07739 12.7441C6.23367 12.5878 6.44563 12.5 6.66665 12.5C6.88766 12.5 7.09962 12.5878 7.2559 12.7441C7.41218 12.9004 7.49998 13.1123 7.49998 13.3333C7.49998 13.5543 7.41218 13.7663 7.2559 13.9226C7.09962 14.0789 6.88766 14.1667 6.66665 14.1667Z"
                        fill="#4391EF"
                      />
                      <path
                        d="M9.16669 13.3333C9.16669 13.5543 9.25448 13.7663 9.41076 13.9226C9.56705 14.0789 9.77901 14.1667 10 14.1667C10.221 14.1667 10.433 14.0789 10.5893 13.9226C10.7456 13.7663 10.8334 13.5543 10.8334 13.3333C10.8334 13.1123 10.7456 12.9004 10.5893 12.7441C10.433 12.5878 10.221 12.5 10 12.5C9.77901 12.5 9.56705 12.5878 9.41076 12.7441C9.25448 12.9004 9.16669 13.1123 9.16669 13.3333Z"
                        fill="#4391EF"
                      />
                      <path
                        d="M13.3333 14.1667C13.1123 14.1667 12.9004 14.0789 12.7441 13.9226C12.5878 13.7663 12.5 13.5543 12.5 13.3333C12.5 13.1123 12.5878 12.9004 12.7441 12.7441C12.9004 12.5878 13.1123 12.5 13.3333 12.5C13.5543 12.5 13.7663 12.5878 13.9226 12.7441C14.0789 12.9004 14.1667 13.1123 14.1667 13.3333C14.1667 13.5543 14.0789 13.7663 13.9226 13.9226C13.7663 14.0789 13.5543 14.1667 13.3333 14.1667Z"
                        fill="#4391EF"
                      />
                      <path
                        d="M9.16669 9.99996C9.16669 10.221 9.25448 10.4329 9.41076 10.5892C9.56705 10.7455 9.77901 10.8333 10 10.8333C10.221 10.8333 10.433 10.7455 10.5893 10.5892C10.7456 10.4329 10.8334 10.221 10.8334 9.99996C10.8334 9.77895 10.7456 9.56698 10.5893 9.4107C10.433 9.25442 10.221 9.16663 10 9.16663C9.77901 9.16663 9.56705 9.25442 9.41076 9.4107C9.25448 9.56698 9.16669 9.77895 9.16669 9.99996Z"
                        fill="#4391EF"
                      />
                      <path
                        d="M13.3333 10.8333C13.1123 10.8333 12.9004 10.7455 12.7441 10.5892C12.5878 10.4329 12.5 10.221 12.5 9.99996C12.5 9.77895 12.5878 9.56698 12.7441 9.4107C12.9004 9.25442 13.1123 9.16663 13.3333 9.16663C13.5543 9.16663 13.7663 9.25442 13.9226 9.4107C14.0789 9.56698 14.1667 9.77895 14.1667 9.99996C14.1667 10.221 14.0789 10.4329 13.9226 10.5892C13.7663 10.7455 13.5543 10.8333 13.3333 10.8333Z"
                        fill="#4391EF"
                      />
                      <path
                        d="M6.66665 5.83337C6.44563 5.83337 6.23367 5.92117 6.07739 6.07745C5.92111 6.23373 5.83331 6.44569 5.83331 6.66671C5.83331 6.88772 5.92111 7.09968 6.07739 7.25596C6.23367 7.41224 6.44563 7.50004 6.66665 7.50004H13.3333C13.5543 7.50004 13.7663 7.41224 13.9226 7.25596C14.0788 7.09968 14.1666 6.88772 14.1666 6.66671C14.1666 6.44569 14.0788 6.23373 13.9226 6.07745C13.7663 5.92117 13.5543 5.83337 13.3333 5.83337H6.66665Z"
                        fill="#4391EF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 2.5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5V15C2.5 15.663 2.76339 16.2989 3.23223 16.7678C3.70107 17.2366 4.33696 17.5 5 17.5H15C15.663 17.5 16.2989 17.2366 16.7678 16.7678C17.2366 16.2989 17.5 15.663 17.5 15V5C17.5 4.33696 17.2366 3.70107 16.7678 3.23223C16.2989 2.76339 15.663 2.5 15 2.5H5ZM15 4.16667H5C4.77899 4.16667 4.56702 4.25446 4.41074 4.41074C4.25446 4.56702 4.16667 4.77899 4.16667 5V15C4.16667 15.221 4.25446 15.433 4.41074 15.5893C4.56702 15.7455 4.77899 15.8333 5 15.8333H15C15.221 15.8333 15.433 15.7455 15.5893 15.5893C15.7455 15.433 15.8333 15.221 15.8333 15V5C15.8333 4.77899 15.7455 4.56702 15.5893 4.41074C15.433 4.25446 15.221 4.16667 15 4.16667Z"
                        fill="#4391EF"
                      />
                    </svg>
                  </div>
                  <div>
                    <button onClick={() => setSortDate(!sortDate)}>
                      <p className="text-s text-custom-blue font-bold">
                        {selectDate === "1"
                          ? "7 Hari Terakhir"
                          : selectDate === "2"
                          ? "14 Hari Terakhir"
                          : selectDate === "3"
                          ? "30 Hari Terakhir"
                          : selectDate === "4"
                          ? "Bulan Kemarin"
                          : ""}
                      </p>
                    </button>
                  </div>
                </button>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-s ">1 Okt - 7 Okt</p>
              </div>
              <div className="w-24 flex items-center justify-center">
                <button onClick={() => props.setSearch(true)}>
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
                      d="M23.2215 22.0436L20.4016 19.2321C21.3114 18.073 21.8051 16.6417 21.8032 15.1682C21.8032 13.856 21.4141 12.5732 20.6851 11.4821C19.956 10.391 18.9198 9.54056 17.7074 9.03838C16.495 8.5362 15.161 8.40481 13.8739 8.66082C12.5869 8.91682 11.4047 9.54874 10.4768 10.4766C9.54886 11.4046 8.91695 12.5868 8.66094 13.8738C8.40493 15.1609 8.53632 16.4949 9.0385 17.7073C9.54068 18.9197 10.3911 19.9559 11.4822 20.6849C12.5733 21.414 13.8561 21.8031 15.1683 21.8031C16.6418 21.805 18.0732 21.3113 19.2322 20.4015L22.0438 23.2213C22.1209 23.2991 22.2126 23.3608 22.3137 23.4029C22.4147 23.445 22.5231 23.4667 22.6326 23.4667C22.7421 23.4667 22.8505 23.445 22.9516 23.4029C23.0526 23.3608 23.1444 23.2991 23.2215 23.2213C23.2992 23.1442 23.3609 23.0525 23.403 22.9514C23.4451 22.8504 23.4668 22.742 23.4668 22.6325C23.4668 22.523 23.4451 22.4146 23.403 22.3135C23.3609 22.2125 23.2992 22.1207 23.2215 22.0436ZM10.1922 15.1682C10.1922 14.184 10.484 13.2219 11.0308 12.4036C11.5776 11.5853 12.3548 10.9475 13.264 10.5708C14.1733 10.1942 15.1739 10.0957 16.1392 10.2877C17.1044 10.4797 17.9911 10.9536 18.687 11.6495C19.383 12.3455 19.8569 13.2321 20.0489 14.1974C20.2409 15.1627 20.1424 16.1632 19.7657 17.0725C19.3891 17.9818 18.7513 18.759 17.933 19.3058C17.1146 19.8526 16.1525 20.1444 15.1683 20.1444C13.8486 20.1444 12.5829 19.6201 11.6497 18.6869C10.7164 17.7537 10.1922 16.488 10.1922 15.1682Z"
                      fill="#414141"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* SEARCH */}
        <div
          className={`${
            !props.search ? "hidden" : ""
          } fixed bottom-20 w-full h-14 bg-custom-bg bg-opacity-70 backdrop-blur-2xl`}
        >
          <div className="flex items-center w-full h-full">
            <div className="flex flex-row justify-between items-center w-full px-4">
              <div className="flex flex-row w-full justify-between gap-2 items-center">
                <div className="flex flex-row bg-white w-full rounded-xl border">
                  <input
                    className="w-full outline-none px-2 rounded-xl"
                    onChange={contentHandle}
                    value={props.text}
                  />
                  <div className="px-2 py-1 flex items-center">
                    <button
                      className="outline-none"
                      onClick={(e) => {
                        props.setText("");
                      }}
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
                          fill="#414141"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M13.128 12.0001L16.568 8.56805C16.7186 8.41741 16.8032 8.21309 16.8032 8.00005C16.8032 7.78701 16.7186 7.58269 16.568 7.43205C16.4173 7.28141 16.213 7.19678 16 7.19678C15.7869 7.19678 15.5826 7.28141 15.432 7.43205L12 10.8721L8.56795 7.43205C8.41731 7.28141 8.21299 7.19678 7.99995 7.19678C7.78691 7.19678 7.58259 7.28141 7.43195 7.43205C7.28131 7.58269 7.19668 7.78701 7.19668 8.00005C7.19668 8.21309 7.28131 8.41741 7.43195 8.56805L10.872 12.0001L7.43195 15.4321C7.35697 15.5064 7.29745 15.5949 7.25684 15.6924C7.21622 15.7899 7.19531 15.8944 7.19531 16.0001C7.19531 16.1057 7.21622 16.2102 7.25684 16.3077C7.29745 16.4052 7.35697 16.4937 7.43195 16.5681C7.50632 16.643 7.5948 16.7026 7.69229 16.7432C7.78978 16.7838 7.89434 16.8047 7.99995 16.8047C8.10556 16.8047 8.21013 16.7838 8.30761 16.7432C8.4051 16.7026 8.49358 16.643 8.56795 16.5681L12 13.1281L15.432 16.5681C15.5063 16.643 15.5948 16.7026 15.6923 16.7432C15.7898 16.7838 15.8943 16.8047 16 16.8047C16.1056 16.8047 16.2101 16.7838 16.3076 16.7432C16.4051 16.7026 16.4936 16.643 16.568 16.5681C16.6429 16.4937 16.7024 16.4052 16.7431 16.3077C16.7837 16.2102 16.8046 16.1057 16.8046 16.0001C16.8046 15.8944 16.7837 15.7899 16.7431 15.6924C16.7024 15.5949 16.6429 15.5064 16.568 15.4321L13.128 12.0001Z"
                          fill="#BCBCBC"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      props.setSearch(false);
                      props.setText("");
                    }}
                  >
                    <p className="text-custom-red">Batal</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistorySorting;
