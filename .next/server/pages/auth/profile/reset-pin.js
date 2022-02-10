"use strict";
(() => {
var exports = {};
exports.id = 9640;
exports.ids = [9640];
exports.modules = {

/***/ 400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_footer_backNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2357);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const TarikSaldo = ()=>{
    const { 0: pin , 1: setPin  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: ulangPin , 1: setUlangPin  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handlePin = (event)=>{
        setPin(event.target.value);
    };
    const handleUlangPin = (event)=>{
        setUlangPin(event.target.value);
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full p-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-md font-bold",
                                        children: "Pin"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-md text-custom-textGray pb-1",
                                        children: "Pin 6 digit angka."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "Pin Baru",
                                onChange: handlePin,
                                value: pin,
                                className: "w-full p-1 placeholder-custom-textGray bg-custom-layer border outline-none border-custom-border rounded-message"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-md font-bold",
                                    children: "Ulangi"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "Ulangi Pin",
                                onChange: handleUlangPin,
                                value: ulangPin,
                                className: "w-full p-1 placeholder-custom-textGray bg-custom-layer border outline-none border-custom-border rounded-message"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_footer_backNav__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Reset Pin",
                bottomButton: "Konfirmasi",
                bottomAction: ()=>router.push("/auth", "/auth")
                ,
                leftAction: ()=>router.back()
                ,
                leftButton: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            cx: "16",
                            cy: "16",
                            r: "16",
                            fill: "#414141",
                            fillOpacity: "0.1"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M23.4667 14.9347H10.816L14.688 10.284C14.8691 10.0662 14.9562 9.78533 14.9302 9.50328C14.9042 9.22122 14.7672 8.96105 14.5493 8.77999C14.3315 8.59894 14.0507 8.51183 13.7686 8.53784C13.4866 8.56384 13.2264 8.70083 13.0453 8.91866L7.71201 15.3187C7.67613 15.3696 7.64404 15.423 7.61601 15.4787C7.61601 15.532 7.61601 15.564 7.54134 15.6173C7.49299 15.7396 7.46768 15.8698 7.46667 16.0013C7.46768 16.1328 7.49299 16.263 7.54134 16.3853C7.54134 16.4387 7.54134 16.4707 7.61601 16.524C7.64404 16.5796 7.67613 16.6331 7.71201 16.684L13.0453 23.084C13.1456 23.2044 13.2712 23.3012 13.4132 23.3676C13.5551 23.434 13.71 23.4682 13.8667 23.468C14.1159 23.4685 14.3574 23.3817 14.5493 23.2227C14.6574 23.1331 14.7466 23.0231 14.8121 22.899C14.8775 22.7749 14.9178 22.6391 14.9307 22.4994C14.9436 22.3597 14.9288 22.2188 14.8871 22.0849C14.8455 21.9509 14.7778 21.8264 14.688 21.7187L10.816 17.068H23.4667C23.7496 17.068 24.0209 16.9556 24.2209 16.7556C24.421 16.5555 24.5333 16.2842 24.5333 16.0013C24.5333 15.7184 24.421 15.4471 24.2209 15.2471C24.0209 15.047 23.7496 14.9347 23.4667 14.9347Z",
                            fill: "#414141"
                        })
                    ]
                }),
                classButton: !pin || !ulangPin ? "bg-custom-btnGray text-white" : "bg-custom-blue text-white"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TarikSaldo);


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
var __webpack_exports__ = __webpack_require__.X(0, [2357], () => (__webpack_exec__(400)));
module.exports = __webpack_exports__;

})();