import Modal from "react-modal";

import { useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import { Status } from "context/onlineStatus";
Modal.setAppElement("#__next");

const Online = (props) => {
  const Online = useContext(Status);

  return (
    <>
      <Modal
        isOpen={props.onlineModal}
        onClose={props.handleCloseOnlineModal}
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
          <div className="space-y-14">
            <div className="space-y-2">
              <div className="text-xl font-bold">
                <p>{props.title}</p>
              </div>
              <div className="text-md text-custom-textGray">
                <p>{props.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-x-4">
              <div className="w-full">
                <button
                  onClick={props.handleCloseOnlineModal}
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
                    Online.set.setOnline(!Online.data.online);
                    props.handleCloseOnlineModal(e);
                  }}
                  className="bg-custom-blue rounded-full w-full"
                >
                  <p className="text-white font-bold text-s py-3">Offline</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Online;
