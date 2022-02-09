import Modal from "react-modal";

import { useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

const Online = (props) => {
  return (
    <>
      <Modal
        isOpen={props.changePhoto}
        onClose={props.handleCloseChangePhoto}
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
            <div className="pt-4 divide-y">
              <div className="text-md font-bold">
                <p className="py-4">Hapus Foto Saat Ini</p>
              </div>
              <div className="text-md font-bold">
                <p className="py-4">Ambil Foto Dari Kamera</p>
              </div>
              <div className="text-md font-bold">
                <p className="py-4 border-b">Pilih Dari Galeri</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-x-4">
              <div className="w-full">
                <button
                  onClick={props.handleCloseChangePhoto}
                  className="bg-custom-bgButton rounded-full w-full"
                >
                  <p className="text-custom-blue font-bold text-s py-3">
                    Kembali
                  </p>
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
