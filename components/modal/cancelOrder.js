import Modal from "react-modal";
import { useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";

//CONTEXT
import { Status } from "context/onlineStatus";
import { DriveProcess } from "context/process";
import { ButtonType } from "context/buttonType";
import { OrderFound } from "context/orderFound";

Modal.setAppElement("#__next");
const CancelOrder = (props) => {
  const router = useRouter();
  const Progress = useContext(DriveProcess);
  const Order = useContext(OrderFound);
  const Types = useContext(ButtonType);

  return (
    <>
      <Modal
        isOpen={props.cancelOrder}
        onClose={props.handleCloseCancelOrder}
        className="absolute z-50 w-full h-full overflow-y-scroll flex flex-col justify-end"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 50,
          },
          content: {
            outline: "none",
            zIndex: 100,
          },
        }}
      >
        <div className="w-full bg-white rounded-tl-xl rounded-t-xl p-4 z-50">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-xl font-bold">
                <p>{props.title}</p>
              </div>
              <div className="text-md text-custom-textGray">
                <p>{props.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 pb-4">
              <div className="flex flex-row items-center gap-x-2">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <p>Lokasi outlet tidak ditemukan</p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <p>Outlet meminta dibatalkan</p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <input
                  type="radio"
                  id="javascript"
                  name="fav_language"
                  value="JavaScript"
                />
                <p>Lainnya</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-x-4">
              <div className="w-full">
                <button
                  onClick={props.handleCloseCancelOrder}
                  className="bg-custom-bgButton rounded-full w-full"
                >
                  <p className="text-custom-blue font-bold text-s py-3">
                    Batal
                  </p>
                </button>
              </div>
              <div className="w-full">
                <button
                  onClick={(e) => {
                    props.handleCloseCancelOrder(e);
                    router.push("/", "/");
                    Progress.set.setProgress("input-outlet-pin");
                    Order.set.setOrderFound("finding");
                    Types.set.setType("");
                  }}
                  className="bg-custom-blue rounded-full w-full"
                >
                  <p className="text-white font-bold text-s py-3">Konfirmasi</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CancelOrder;
