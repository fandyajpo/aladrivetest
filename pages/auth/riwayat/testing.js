/* eslint-disable jsx-a11y/alt-text */
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

import { useSpring, animated } from "@react-spring/web";
import {
  useDrag,
  createUseGesture,
  useGesture,
  dragAction,
  pinchAction,
} from "@use-gesture/react";
import Draggable, { DraggableCore } from "react-draggable";

import Image from "next/image";
import Profile1 from "public/profile.png";
import Profile2 from "public/profile.png";
import Profile3 from "public/profile.png";
import Profile4 from "public/profile.png";

const SendStory = () => {
  const router = useRouter();

  const [userList, setUserList] = useState([
    {
      id: "1",
      name: "Thomas Graham",
      image: Profile1,
    },
    {
      id: "2",
      name: "Belia Adelia",
      image: Profile2,
    },
    {
      id: "3",
      name: "Cahaya Murti",
      image: Profile3,
    },
    {
      id: "4",
      name: "Soimah Delova",
      image: Profile4,
    },
  ]);

  const [selectedList, setSelectedList] = useState([]);

  const selectUser = (id, index) => {
    // console.log("index", index);
    let list = [...selectedList];
    if (list.includes(id)) {
      let i = list.indexOf(id);
      list.splice(i, 1);
    } else {
      list.push(id);
    }
    setSelectedList(list);
    // setSelectedList({ ...selectedList, username: e.target.value })
  };

  const [dragging, setDragging] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  // function handleClick() {
  //   console.log("click");
  // }

  function handleStart(id) {
    console.log("start", id);
    setSelectedItem(id);
  }

  function handleDrag(event, info) {
    console.log("drag");
    console.log(event, info);
    setDragging(true);
  }

  // function handleStop(id) {
  //   event.preventDefault();
  //   if(dragging){
  //     selectUser(id, id)
  //     console.log("dragging stop", id);
  //   }
  //   else{
  //     console.log("stop", id);
  //   }
  //   setDragging(false)
  // }

  function handleStop(event, info) {
    event.preventDefault();
    // console.log(event, info);

    if (dragging) {
      // console.log("dragging stop", currentItem, selectedItem);
      if (currentItem == selectedItem) {
        if (info.x > -45) {
          setCurrentItem("");
        }
      } else {
        if (info.x < -25) {
          setCurrentItem(selectedItem);
        }
        // else if (info.x > -45){
        //   setCurrentItem("")
        // }
      }
    } else {
      // console.log("click", selectedItem);
      alert(selectedItem);
    }

    setDragging(false);
  }

  const dragRef = useRef();

  useEffect(() => {
    // console.log(dragRef.current);
  }, []);

  return (
    <>
      <div
        className={
          `${!userList.length > 0 && "justify-center "}` +
          "w-full min-h-screen bg-white relative overflow-x-hidden overflow-y-hidden text-md text-custom-dark pb-32 flex flex-col items-center"
        }
      >
        <div className="w-full px-4 py-2 bg-white  z-1">
          {userList.length > 0 ? (
            <div>
              {userList.map((data, index) => {
                return (
                  <div
                    key={data.id}
                    onClick={() => selectUser(data.id, index)}
                    className="w-full flex flex-row items-center border-b border-custom-border py-4"
                  >
                    <Draggable
                      axis="x"
                      bounds={{ left: -60, right: 0 }}
                      // handle=".handle"
                      defaultPosition={{ x: 0, y: 0 }}
                      position={
                        currentItem == data.id
                          ? { x: -60, y: 0 }
                          : { x: 0, y: 0 }
                      }
                      // grid={[25, 25]}
                      // scale={1}
                      // onMouseDown={handleClick}
                      onStart={() => handleStart(data.id)}
                      onDrag={handleDrag}
                      onStop={handleStop}
                      className="z-1 delay-500"
                    >
                      <div className="w-full flex flex-row items-center justify-between bg-white z-1">
                        <div className="min-w-max">
                          <div className="w-[3rem] h-[3rem] rounded-full mr-3 relative">
                            <Image
                              src={data.image}
                              className="w-full h-full rounded-full"
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <p className="">{data.name}</p>
                        </div>
                        {/* <div>{!selectedList.includes(data.id) ? <RadioButton /> : <RadioButtonChecked />}</div> */}
                      </div>
                    </Draggable>
                    <div
                      onClick={() => alert("H")}
                      className={
                        `${
                          currentItem == data.id
                            ? "z-2 right-4"
                            : "z-0 -right-8"
                        }` + " min-w-max absolute ease-linear duration-75"
                      }
                    >
                      <div className="bg-red-500 w-10 h-10 rounded-full" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="min-w-max h-full flex items-center justify-center">
              <p className="text-center">
                Kamu belum mempunyai akun yang kamu follow
              </p>
            </div>
          )}
        </div>

        {/* <div className="w-full h-64 bg-blueGray-200 fixed bottom-32 flex items-center justify-center">
          <PullRelease />  
        </div> */}

        <div className="w-full fixed bottom-32">
          <DragExample ref={dragRef} />
        </div>
      </div>
    </>
  );
};

export default SendStory;

function PullRelease() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  // const bind = useDrag(({ down, movement: [mx, my] }) => {
  //   api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  // })
  const bind = useGesture(
    {
      onDrag: (state) => console.log(state),
      // onDragStart: (state) => doSomethingWith(state),
      // onDragEnd: (state) => doSomethingWith(state),
      // onPinch: (state) => doSomethingWith(state),
      // onPinchStart: (state) => doSomethingWith(state),
      // onPinchEnd: (state) => doSomethingWith(state),
      // onScroll: (state) => doSomethingWith(state),
      // onScrollStart: (state) => doSomethingWith(state),
      // onScrollEnd: (state) => doSomethingWith(state),
      // onMove: (state) => doSomethingWith(state),
      // onMoveStart: (state) => doSomethingWith(state),
      // onMoveEnd: (state) => doSomethingWith(state),
      // onWheel: (state) => doSomethingWith(state),
      // onWheelStart: (state) => doSomethingWith(state),
      // onWheelEnd: (state) => doSomethingWith(state),
      // onHover: (state) => console.log(state)
    }
    // config
  );

  // Bind it to a component
  return (
    <animated.div
      {...bind()}
      style={{ x, y }}
      className="w-full h-32 bg-yellow-100 p-2"
    >
      <div className="w-full h-full bg-violet-200"></div>
    </animated.div>
  );
}

function DragExample() {
  // eventLogger = (e: MouseEvent, data: Object) => {
  //   console.log('Event: ', e);
  //   console.log('Data: ', data);
  // };

  const [coordinate, setCoordinate] = useState(0);

  function handleStart() {
    console.log("start");
  }

  function handleDrag() {
    console.log("drag");
  }

  function handleStop(event, info) {
    event.preventDefault();
    console.log("stop", event, info);

    if (info.y < -70) {
      setShowDetail(true);
    }
  }

  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      {showDetail ? (
        <div
          onClick={() => setShowDetail(false)}
          className="w-full h-32 flex items-center justify-center bg-emerald-200"
        >
          <div className="text-center">Tap here to hide detail</div>
        </div>
      ) : (
        <Draggable
          axis="y"
          bounds={{ top: -100, bottom: 0 }}
          // handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={{ x: 0, y: 0 }}
          // grid={[25, 25]}
          // scale={1}
          onStart={handleStart}
          onDrag={handleDrag}
          onStop={handleStop}
        >
          <div className="w-full h-32 flex items-center justify-center">
            <div className="text-center">Swipe here to show detail</div>
          </div>
        </Draggable>
      )}
    </>
  );
}
