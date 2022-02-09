import { useContext, useState, useRef, useEffect } from "react";
import { DriveProcess } from "context/process";
import { useRouter } from "next/router";
import { ButtonType } from "context/buttonType";
import { Logged } from "context/loginType";
import Keyboard from "components/footer/customKeyboard";
const Pin = () => {
  const Progress = useContext(DriveProcess);
  const router = useRouter();
  const Types = useContext(ButtonType);
  const Log = useContext(Logged);

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  useEffect(() => {
    console.log("FIRST : ", first);
    console.log("SECOND : ", second);
    console.log("THIRD : ", third);
    console.log("FOURTH : ", fourth);
  }, [first, second, third, fourth]);

  const pinData = [];

  useEffect(() => {
    first ? pinData.push(first) : undefined;
    second ? pinData.push(second) : undefined;
    third ? pinData.push(third) : undefined;
    fourth ? pinData.push(fourth) : undefined;
    console.log("DATA MASUK : ", pinData);
  }, [first, second, third, fourth, pinData]);

  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();

  function firstInput(e) {
    setFirst(e.target.value);
  }
  function secondInput(f) {
    setSecond(f.target.value);
  }
  function thirdInput(g) {
    setThird(g.target.value);
  }
  function fourthInput(h) {
    setFourth(h.target.value);
  }

  return (
    <>
      <div className="w-full h-full pb-64">
        <div className="flex flex-col items-center justify-center w-full h-full pt-8 pb-2 gap-y-16">
          <div className="space-y-2 text-center">
            <p className="text-2xl font-bold text-custom-black">
              OTP Otentifikasi
            </p>
            <p className="text-md">Kode otentifikasi telah di kirim ke</p>
            <p className="text-md font-bold">email@email.com</p>
            <p className="text-md">(00:59)</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              className="bg-custom-pin w-20 h-24 rounded-md outline-none text-center text-3xl font-bold text-custom-black flex justify-center items-center"
              onChange={firstInput}
              readOnly
              value={first}
              maxLength={1}
              ref={firstInputRef}
            />
            <input
              className="bg-custom-pin w-20 h-24 rounded-md outline-none text-center text-3xl font-bold text-custom-black flex justify-center items-center"
              onChange={secondInput}
              readOnly
              value={second}
              maxLength={1}
              ref={secondInputRef}
            />
            <input
              className="bg-custom-pin w-20 h-24 rounded-md outline-none text-center text-3xl font-bold text-custom-black flex justify-center items-center"
              onChange={thirdInput}
              readOnly
              value={third}
              maxLength={1}
              ref={thirdInputRef}
            />
            <input
              className="bg-custom-pin w-20 h-24 rounded-md outline-none text-center text-3xl font-bold text-custom-black flex justify-center items-center"
              onChange={fourthInput}
              readOnly
              value={fourth}
              maxLength={1}
              ref={fourthInputRef}
            />
          </div>

          <div className="w-full space-y-4 p-4">
            <button
              className="w-full bg-custom-blue rounded-full"
              onClick={() => router.push("reset-pin", "reset-pin")}
            >
              <p className="text-white p-2 font-bold">Konfirmasi</p>
            </button>
            <div className="flex flex-row items-center justify-between gap-x-2">
              <button
                className="bg-custom-bgButton w-full rounded-full"
                onClick={() => router.back()}
              >
                <p className="font-bold text-custom-blue p-2">Cara Lain</p>
              </button>
              <button className="bg-custom-bgButton w-full rounded-full">
                <p className="font-bold text-custom-blue p-2">Kirim Ulang</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Keyboard
        position={"bottom-0"}
        one={() => {
          first === ""
            ? firstInputRef && setFirst("1")
            : second === ""
            ? secondInputRef && setSecond("1")
            : third === ""
            ? thirdInputRef && setThird("1")
            : fourth === ""
            ? fourthInputRef && setFourth("1")
            : null;
        }}
        two={() => {
          first === ""
            ? firstInputRef && setFirst("2")
            : second === ""
            ? secondInputRef && setSecond("2")
            : third === ""
            ? thirdInputRef && setThird("2")
            : fourth === ""
            ? fourthInputRef && setFourth("2")
            : null;
        }}
        three={() => {
          first === ""
            ? firstInputRef && setFirst("3")
            : second === ""
            ? secondInputRef && setSecond("3")
            : third === ""
            ? thirdInputRef && setThird("3")
            : fourth === ""
            ? fourthInputRef && setFourth("3")
            : null;
        }}
        four={() => {
          first === ""
            ? firstInputRef && setFirst("4")
            : second === ""
            ? secondInputRef && setSecond("4")
            : third === ""
            ? thirdInputRef && setThird("4")
            : fourth === ""
            ? fourthInputRef && setFourth("4")
            : null;
        }}
        five={() => {
          first === ""
            ? firstInputRef && setFirst("5")
            : second === ""
            ? secondInputRef && setSecond("5")
            : third === ""
            ? thirdInputRef && setThird("5")
            : fourth === ""
            ? fourthInputRef && setFourth("5")
            : null;
        }}
        six={() => {
          first === ""
            ? firstInputRef && setFirst("6")
            : second === ""
            ? secondInputRef && setSecond("6")
            : third === ""
            ? thirdInputRef && setThird("6")
            : fourth === ""
            ? fourthInputRef && setFourth("6")
            : null;
        }}
        seven={() => {
          first === ""
            ? firstInputRef && setFirst("7")
            : second === ""
            ? secondInputRef && setSecond("7")
            : third === ""
            ? thirdInputRef && setThird("7")
            : fourth === ""
            ? fourthInputRef && setFourth("7")
            : null;
        }}
        eight={() => {
          first === ""
            ? firstInputRef && setFirst("8")
            : second === ""
            ? secondInputRef && setSecond("8")
            : third === ""
            ? thirdInputRef && setThird("8")
            : fourth === ""
            ? fourthInputRef && setFourth("8")
            : null;
        }}
        nine={() => {
          first === ""
            ? firstInputRef && setFirst("9")
            : second === ""
            ? secondInputRef && setSecond("9")
            : third === ""
            ? thirdInputRef && setThird("9")
            : fourth === ""
            ? fourthInputRef && setFourth("9")
            : null;
        }}
        zero={() => {
          first === ""
            ? firstInputRef && setFirst("0")
            : second === ""
            ? secondInputRef && setSecond("0")
            : third === ""
            ? thirdInputRef && setThird("0")
            : fourth === ""
            ? fourthInputRef && setFourth("0")
            : null;
        }}
        del={() => {
          fourth !== ""
            ? fourthInputRef && setFourth("")
            : third !== ""
            ? thirdInputRef && setThird("")
            : second !== ""
            ? secondInputRef && setSecond("")
            : first !== ""
            ? firstInputRef && setFirst("")
            : null;
        }}
        disableKeyboard={pinData.length > 3}
        disableDelete={!pinData}
      />
    </>
  );
};

export default Pin;
