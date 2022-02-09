import { useState, useEffect, useContext } from "react";
//MODAL
import OnlineModal from "components/modal/online";
import { useRouter } from "next/router";

//CONTEXt
import { ButtonType } from "context/buttonType";
import { Status } from "context/onlineStatus";
import { OrderFound } from "context/orderFound";

const HistoryHead = () => {
  const Types = useContext(ButtonType);
  const Order = useContext(OrderFound);
  const Online = useContext(Status);
  const router = useRouter();

  useEffect(() => {
    console.log("DRIVER STATUS : ", Online.data.online);
  }, [Online.data.online]);

  useEffect(() => {
    console.log("ORDER STATUS : ", Order.data.orderFound);
  }, [Order.data.orderFound]);

  const [onlineModal, setOnlineModal] = useState(false);
  const handleOpenOnlineModal = () => setOnlineModal(true);
  const handleCloseOnlineModal = () => setOnlineModal(false);
  return (
    <div className="w-full h-16 bg-custom-bg bg-opacity-70 backdrop-blur-2xl fixed top-0 p-4">
      <div className="flex items-center w-full h-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-x-4">
            <div className="flex items-center">
              <div className="bg-green-500 w-10 h-10 rounded-full"></div>
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
              <div className="bg-blue-500 w-10 h-10 rounded-full"></div>
            </div>
            <div className="flex items-center gap-x-6">
              <div>
                <div>
                  <p className="text-3xs text-custom-black">Jarak</p>
                </div>
                <div>
                  <p className="text-s font-semibold text-custom-black">3 Km</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-3xs text-custom-black">Status</p>
                </div>
                <div>
                  <p className="text-s font-semibold text-custom-black">
                    Selesai
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className="text-lg font-bold text-custom-black">Rp 12.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistoryHead;
