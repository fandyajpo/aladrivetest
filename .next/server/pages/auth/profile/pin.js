"use strict";
(() => {
var exports = {};
exports.id = 4009;
exports.ids = [4009];
exports.modules = {

/***/ 5599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ButtonType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ButtonType = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(); //fan


/***/ }),

/***/ 7842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Logged)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Logged = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();


/***/ }),

/***/ 3663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ DriveProcess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DriveProcess = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();


/***/ }),

/***/ 71:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var context_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3663);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var context_buttonType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5599);
/* harmony import */ var context_loginType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7842);
/* harmony import */ var components_footer_customKeyboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3676);







const Pin = ()=>{
    const Progress = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context_process__WEBPACK_IMPORTED_MODULE_2__/* .DriveProcess */ .X);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const Types = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context_buttonType__WEBPACK_IMPORTED_MODULE_4__/* .ButtonType */ .L);
    const Log = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context_loginType__WEBPACK_IMPORTED_MODULE_5__/* .Logged */ .I);
    const { 0: first , 1: setFirst  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: second , 1: setSecond  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: third , 1: setThird  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: fourth , 1: setFourth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("FIRST : ", first);
        console.log("SECOND : ", second);
        console.log("THIRD : ", third);
        console.log("FOURTH : ", fourth);
    }, [
        first,
        second,
        third,
        fourth
    ]);
    const pinData = [];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        first ? pinData.push(first) : undefined;
        second ? pinData.push(second) : undefined;
        third ? pinData.push(third) : undefined;
        fourth ? pinData.push(fourth) : undefined;
        console.log("DATA MASUK : ", pinData);
    }, [
        first,
        second,
        third,
        fourth,
        pinData
    ]);
    const firstInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const secondInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const thirdInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const fourthInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
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
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-full pb-64",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center justify-center w-full h-full pt-8 pb-2 gap-y-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-2 text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-2xl font-bold text-custom-black",
                                    children: "OTP Otentifikasi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-md",
                                    children: "Kode otentifikasi telah di kirim ke"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-md font-bold",
                                    children: "email@email.com"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-md",
                                    children: "(00:59)"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "bg-custom-pin w-20 h-24 rounded-md outline-none text-center text-3xl font-bold text-custom-black flex justify-center items-center",
                                    onChange: firstInput,
                                    readOnly: true,
                                    value: first,
                                    maxLength: 1,
                                    ref: firstInputRef
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "bg-custom-pin w-20 h-24 rounded-md outline-none text-center text-3xl font-bold text-custom-black flex justify-center items-center",
                                    onChange: secondInput,
                                    readOnly: true,
                                    value: second,
                                    maxLength: 1,
                                    ref: secondInputRef
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "bg-custom-pin w-20 h-24 rounded-md outline-none text-center text-3xl font-bold text-custom-black flex justify-center items-center",
                                    onChange: thirdInput,
                                    readOnly: true,
                                    value: third,
                                    maxLength: 1,
                                    ref: thirdInputRef
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "bg-custom-pin w-20 h-24 rounded-md outline-none text-center text-3xl font-bold text-custom-black flex justify-center items-center",
                                    onChange: fourthInput,
                                    readOnly: true,
                                    value: fourth,
                                    maxLength: 1,
                                    ref: fourthInputRef
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full space-y-4 p-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "w-full bg-custom-blue rounded-full",
                                    onClick: ()=>router.push("reset-pin", "reset-pin")
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-white p-2 font-bold",
                                        children: "Konfirmasi"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-row items-center justify-between gap-x-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-custom-bgButton w-full rounded-full",
                                            onClick: ()=>router.back()
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-bold text-custom-blue p-2",
                                                children: "Cara Lain"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-custom-bgButton w-full rounded-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-bold text-custom-blue p-2",
                                                children: "Kirim Ulang"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_footer_customKeyboard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                position: "bottom-0",
                one: ()=>{
                    first === "" ? firstInputRef && setFirst("1") : second === "" ? secondInputRef && setSecond("1") : third === "" ? thirdInputRef && setThird("1") : fourth === "" ? fourthInputRef && setFourth("1") : null;
                },
                two: ()=>{
                    first === "" ? firstInputRef && setFirst("2") : second === "" ? secondInputRef && setSecond("2") : third === "" ? thirdInputRef && setThird("2") : fourth === "" ? fourthInputRef && setFourth("2") : null;
                },
                three: ()=>{
                    first === "" ? firstInputRef && setFirst("3") : second === "" ? secondInputRef && setSecond("3") : third === "" ? thirdInputRef && setThird("3") : fourth === "" ? fourthInputRef && setFourth("3") : null;
                },
                four: ()=>{
                    first === "" ? firstInputRef && setFirst("4") : second === "" ? secondInputRef && setSecond("4") : third === "" ? thirdInputRef && setThird("4") : fourth === "" ? fourthInputRef && setFourth("4") : null;
                },
                five: ()=>{
                    first === "" ? firstInputRef && setFirst("5") : second === "" ? secondInputRef && setSecond("5") : third === "" ? thirdInputRef && setThird("5") : fourth === "" ? fourthInputRef && setFourth("5") : null;
                },
                six: ()=>{
                    first === "" ? firstInputRef && setFirst("6") : second === "" ? secondInputRef && setSecond("6") : third === "" ? thirdInputRef && setThird("6") : fourth === "" ? fourthInputRef && setFourth("6") : null;
                },
                seven: ()=>{
                    first === "" ? firstInputRef && setFirst("7") : second === "" ? secondInputRef && setSecond("7") : third === "" ? thirdInputRef && setThird("7") : fourth === "" ? fourthInputRef && setFourth("7") : null;
                },
                eight: ()=>{
                    first === "" ? firstInputRef && setFirst("8") : second === "" ? secondInputRef && setSecond("8") : third === "" ? thirdInputRef && setThird("8") : fourth === "" ? fourthInputRef && setFourth("8") : null;
                },
                nine: ()=>{
                    first === "" ? firstInputRef && setFirst("9") : second === "" ? secondInputRef && setSecond("9") : third === "" ? thirdInputRef && setThird("9") : fourth === "" ? fourthInputRef && setFourth("9") : null;
                },
                zero: ()=>{
                    first === "" ? firstInputRef && setFirst("0") : second === "" ? secondInputRef && setSecond("0") : third === "" ? thirdInputRef && setThird("0") : fourth === "" ? fourthInputRef && setFourth("0") : null;
                },
                del: ()=>{
                    fourth !== "" ? fourthInputRef && setFourth("") : third !== "" ? thirdInputRef && setThird("") : second !== "" ? secondInputRef && setSecond("") : first !== "" ? firstInputRef && setFirst("") : null;
                },
                disableKeyboard: pinData.length > 3,
                disableDelete: !pinData
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pin);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [3676], () => (__webpack_exec__(71)));
module.exports = __webpack_exports__;

})();