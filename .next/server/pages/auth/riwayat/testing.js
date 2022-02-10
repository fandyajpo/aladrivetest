"use strict";
(() => {
var exports = {};
exports.id = 1685;
exports.ids = [1685];
exports.modules = {

/***/ 5692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/profile.cbfcb8fd.png","height":40,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABC0lEQVR42mMAgff//2tdf/91/9W3n39dff/t5/GXnw6e+fJPCyx59sU7rZ037r898+zN/1MvP/xfd/HW/8i2nv/VS1e/ffD/vxaDe1TkQXV32/8RrZ0/i2Ys+R9Z2fCfwUTlp563x/+yGfP2M/Cp8v+U0Rb9z8DH8H9+Z8v/Oe31/xkM1f6La8j8Z2Bg+MUgZqb1S9ZQB8T531eQ+X9RY8l/BimG/5xKUv9F1RR/MrApSe4XMDb4z2Bs+dNRXeB/gI3Wf4vwmJ9Mmmr/ucS5DjIAgZawnetbxbjc/wreYf9NgyL+2xXW/Vf18X8HkmMAAUELOy2RgLiDOunlP/Wyqn5pJBfuV/MPAksCACQJdeMtG7b0AAAAAElFTkSuQmCC"});

/***/ }),

/***/ 731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "@react-spring/web"
const web_namespaceObject = require("@react-spring/web");
;// CONCATENATED MODULE: external "@use-gesture/react"
const react_namespaceObject = require("@use-gesture/react");
// EXTERNAL MODULE: external "react-draggable"
var external_react_draggable_ = __webpack_require__(192);
var external_react_draggable_default = /*#__PURE__*/__webpack_require__.n(external_react_draggable_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./public/profile.png
var profile = __webpack_require__(5692);
;// CONCATENATED MODULE: ./pages/auth/riwayat/testing.js

/* eslint-disable jsx-a11y/alt-text */ 









const SendStory = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: userList , 1: setUserList  } = (0,external_react_.useState)([
        {
            id: "1",
            name: "Thomas Graham",
            image: profile/* default */.Z
        },
        {
            id: "2",
            name: "Belia Adelia",
            image: profile/* default */.Z
        },
        {
            id: "3",
            name: "Cahaya Murti",
            image: profile/* default */.Z
        },
        {
            id: "4",
            name: "Soimah Delova",
            image: profile/* default */.Z
        }, 
    ]);
    const { 0: selectedList , 1: setSelectedList  } = (0,external_react_.useState)([]);
    const selectUser = (id, index)=>{
        // console.log("index", index);
        let list = [
            ...selectedList
        ];
        if (list.includes(id)) {
            let i = list.indexOf(id);
            list.splice(i, 1);
        } else {
            list.push(id);
        }
        setSelectedList(list);
    // setSelectedList({ ...selectedList, username: e.target.value })
    };
    const { 0: dragging , 1: setDragging  } = (0,external_react_.useState)(false);
    const { 0: currentItem , 1: setCurrentItem  } = (0,external_react_.useState)("");
    const { 0: selectedItem , 1: setSelectedItem  } = (0,external_react_.useState)("");
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
    const dragRef = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
    // console.log(dragRef.current);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${!userList.length > 0 && "justify-center "}` + "w-full min-h-screen bg-white relative overflow-x-hidden overflow-y-hidden text-md text-custom-dark pb-32 flex flex-col items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full px-4 py-2 bg-white z-1",
                    children: userList.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: userList.map((data, index)=>{
                            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                onClick: ()=>selectUser(data.id, index)
                                ,
                                className: "w-full flex flex-row items-center border-b border-custom-border py-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_draggable_default()), {
                                        axis: "x",
                                        bounds: {
                                            left: -60,
                                            right: 0
                                        },
                                        // handle=".handle"
                                        defaultPosition: {
                                            x: 0,
                                            y: 0
                                        },
                                        position: currentItem == data.id ? {
                                            x: -60,
                                            y: 0
                                        } : {
                                            x: 0,
                                            y: 0
                                        },
                                        // grid={[25, 25]}
                                        // scale={1}
                                        // onMouseDown={handleClick}
                                        onStart: ()=>handleStart(data.id)
                                        ,
                                        onDrag: handleDrag,
                                        onStop: handleStop,
                                        className: "z-1 delay-500",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-full flex flex-row items-center justify-between bg-white z-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "min-w-max",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "w-[3rem] h-[3rem] rounded-full mr-3 relative",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                            src: data.image,
                                                            className: "w-full h-full rounded-full",
                                                            layout: "fill",
                                                            objectFit: "cover"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "",
                                                        children: data.name
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: ()=>alert("H")
                                        ,
                                        className: `${currentItem == data.id ? "z-2 right-4" : "z-0 -right-8"}` + " min-w-max absolute ease-linear duration-75",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "bg-red-500 w-10 h-10 rounded-full"
                                        })
                                    })
                                ]
                            }, data.id));
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "min-w-max h-full flex items-center justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-center",
                            children: "Kamu belum mempunyai akun yang kamu follow"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full fixed bottom-32",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(DragExample, {
                        ref: dragRef
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const testing = (SendStory);
function PullRelease() {
    const [{ x , y  }, api] = useSpring(()=>({
            x: 0,
            y: 0
        })
    );
    // Set the drag hook and define component movement based on gesture data
    // const bind = useDrag(({ down, movement: [mx, my] }) => {
    //   api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
    // })
    const bind = useGesture({
        onDrag: (state)=>console.log(state)
    });
    // Bind it to a component
    return(/*#__PURE__*/ _jsx(animated.div, {
        ...bind(),
        style: {
            x,
            y
        },
        className: "w-full h-32 bg-yellow-100 p-2",
        children: /*#__PURE__*/ _jsx("div", {
            className: "w-full h-full bg-violet-200"
        })
    }));
}
function DragExample() {
    // eventLogger = (e: MouseEvent, data: Object) => {
    //   console.log('Event: ', e);
    //   console.log('Data: ', data);
    // };
    const { 0: coordinate , 1: setCoordinate  } = (0,external_react_.useState)(0);
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
    const { 0: showDetail , 1: setShowDetail  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: showDetail ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            onClick: ()=>setShowDetail(false)
            ,
            className: "w-full h-32 flex items-center justify-center bg-emerald-200",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center",
                children: "Tap here to hide detail"
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_draggable_default()), {
            axis: "y",
            bounds: {
                top: -100,
                bottom: 0
            },
            // handle=".handle"
            defaultPosition: {
                x: 0,
                y: 0
            },
            position: {
                x: 0,
                y: 0
            },
            // grid={[25, 25]}
            // scale={1}
            onStart: handleStart,
            onDrag: handleDrag,
            onStop: handleStop,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-32 flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center",
                    children: "Swipe here to show detail"
                })
            })
        })
    }));
}


/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 192:
/***/ ((module) => {

module.exports = require("react-draggable");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675], () => (__webpack_exec__(731)));
module.exports = __webpack_exports__;

})();