import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
//CONTEXt
import { OrderFound } from "context/orderFound";
import { ButtonType } from "context/buttonType";
import { DriveProcess } from "context/process";
import { DriverType } from "context/driverType";
//MODAL
import PickUp from "components/modal/pick-up";
import OrderSampai from "components/modal/orderSampai";
import Refuce from "components/modal/refuse";

const Pengantaran = ({ CloseDetail }) => {
  const router = useRouter();
  const Driver = useContext(DriverType);
  const Progress = useContext(DriveProcess);
  const Order = useContext(OrderFound);
  const Types = useContext(ButtonType);

  useEffect(() => {
    console.log(Types.data.type);
  }, [Types.data.type]);

  const [pickUp, setPickUp] = useState(false);
  const handleOpenPickup = () => setPickUp(true);
  const handleClosePickup = () => setPickUp(false);

  const [orderSampai, setOrderSampai] = useState(false);
  const handleOpenOrderSampai = () => setOrderSampai(true);
  const handleCloseOrderSampai = () => setOrderSampai(false);

  const [refuceModal, setRefuseModal] = useState(false);
  const handleOpenRefure = () => setRefuseModal(true);
  const handleCloseRefure = () => setRefuseModal(false);

  return (
    <>
      <OrderSampai
        title={"Order Sampai"}
        description={
          "Ini akan menjadi pemberitahuan ke customer, bahwa oerderan telah sampai"
        }
        orderSampai={orderSampai}
        handleCloseOrderSampai={handleCloseOrderSampai}
      />
      <Refuce
        title={"Tolak Order"}
        description={
          "Sisa “Tolak Order” hari ini adalah 3. Apa kamu yakin menolak orderan? pilih alasan dibawah ini untuk menolak order."
        }
        refuceModal={refuceModal}
        handleCloseRefure={handleCloseRefure}
      />
      <PickUp
        title={"Pick Up"}
        description={"Setelah kamu Pick Up, kamu masuk dipengantaran order."}
        pickUp={pickUp}
        handleClosePickup={handleClosePickup}
      />
      {Types.data.type === "option" &&
      !router.asPath.includes("riwayat") &&
      !router.asPath.includes("outlet") &&
      !router.asPath.includes("profile") ? (
        <div className="relative">
          <div className="fixed bottom-20 w-full h-20 bg-custom-bg bg-opacity-70 backdrop-blur-2xl">
            <div className="flex items-center w-full h-full">
              <div className="flex flex-row justify-around items-center w-full px-4 gap-x-2">
                <div className="w-full">
                  <button
                    className="bg-custom-bgButton rounded-full w-full"
                    onClick={handleOpenRefure}
                  >
                    <p className="text-custom-red font-bold text-s p-2">
                      Tolak
                    </p>
                  </button>
                </div>
                <div className="w-full">
                  <button
                    className="bg-custom-blue rounded-full w-full"
                    onClick={(e) => {
                      Order.set.setOrderFound("get");
                      router.push(
                        Driver.data.isDriver === "partner"
                          ? ("order/home-semua-proses",
                            "order/home-semua-proses")
                          : Driver.data.isDriver === "in-house" &&
                              "order/home-semua-proses"
                      );
                      Driver.data.isDriver === "partner"
                        ? Types.set.setType("input-pin")
                        : Driver.data.isDriver === "in-house"
                        ? Types.set.setType("pick-up") ||
                          Progress.set.setProgress("proses")
                        : null;
                    }}
                  >
                    <p className="text-white font-bold text-s p-2">Terima</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : Types.data.type === "input-pin" ? (
        <div className="relative">
          <div className="fixed bottom-20 w-full h-20 bg-custom-bg bg-opacity-70 backdrop-blur-2xl">
            <div className="flex items-center w-full h-full">
              <div className="flex flex-row justify-around items-center w-full px-4">
                <div className="w-full">
                  <button
                    className="bg-custom-blue rounded-full w-full"
                    onClick={() => router.push("/auth/pin", "/auth/pin")}
                  >
                    <p className="text-white font-bold text-s p-2">Input Pin</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : Types.data.type === "pick-up" ? (
        <div className="relative">
          <div className="fixed bottom-20 w-full h-20 bg-custom-bg bg-opacity-70 backdrop-blur-2xl">
            <div className="flex items-center w-full h-full">
              <div className="flex flex-row justify-around items-center w-full px-4">
                <div className="w-full">
                  <button
                    className="bg-custom-blue rounded-full w-full h-12"
                    onClick={(e) => {
                      handleOpenPickup(e);
                      Types.set.setType("sampai");
                      () => CloseDetail(false);
                    }}
                  >
                    <p className="text-white font-bold text-s p-2">Pick Up</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : Types.data.type === "sampai" ? (
        <div className="relative">
          <div className="fixed bottom-20 w-full h-20 bg-custom-bg bg-opacity-70 backdrop-blur-2xl">
            <div className="flex items-center w-full h-full">
              <div className="flex flex-row justify-around items-center w-full px-4">
                <div className="w-full">
                  <button
                    className="bg-custom-blue rounded-full w-full h-12"
                    onClick={handleOpenOrderSampai}
                  >
                    <p className="text-white font-bold text-s p-2">Sampai</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : Types.data.type === "selesai" ? (
        <div className="relative">
          <div className="fixed bottom-20 w-full h-20 bg-custom-bg bg-opacity-70 backdrop-blur-2xl">
            <div className="flex items-center w-full h-full">
              <div className="flex flex-row justify-around items-center w-full px-4">
                <div className="w-full">
                  <button
                    className="bg-custom-blue rounded-full w-full h-12"
                    onClick={() => {
                      Order.set.setOrderFound("");
                      Progress.set.setProgress("done");
                      Types.set.setType("done");
                    }}
                  >
                    <p className="text-white font-bold text-s p-2">Selesai</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : Types.data.type === "done" ? (
        <div className="relative">
          <div className="fixed bottom-20 w-full h-20 bg-custom-bg bg-opacity-70 backdrop-blur-2xl">
            <div className="flex items-center w-full h-full">
              <div className="flex flex-row justify-around items-center w-full px-4">
                <div className="w-full">
                  <button
                    className="bg-custom-blue rounded-full w-full h-12"
                    onClick={() => {
                      Progress.set.setProgress("input-outlet-pin");
                      Order.set.setOrderFound("finding");
                      Types.set.setType(" ");
                      router.push("/auth", "/auth");
                    }}
                  >
                    <p className="text-white font-bold text-s p-2">Ok</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {router.asPath === "/auth/outlet" && (
        <div className="relative">
          <div className="fixed bottom-20 w-full h-20 bg-custom-bg bg-opacity-70 backdrop-blur-2xl">
            <div className="flex items-center w-full h-full">
              <div className="flex flex-row justify-around items-center w-full px-4">
                <div className="w-full">
                  <button
                    className="bg-custom-blue rounded-full w-full h-12"
                    onClick={() =>
                      router.push("outlet/add-partner", "outlet/add-partner")
                    }
                  >
                    <p className="text-white font-bold text-s p-2">
                      Gabung Sekarang
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Pengantaran;
