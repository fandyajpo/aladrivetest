"use strict";
(() => {
var exports = {};
exports.id = 5649;
exports.ids = [5649];
exports.modules = {

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4417);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_4__);

//STATE




const Checkout = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const Appear = (0,react_spring__WEBPACK_IMPORTED_MODULE_4__.useSpring)({
        from: {
            y: 0
        },
        to: {
            y: 1000
        },
        config: {
            tension: 100,
            friction: 14
        }
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full min-h-screen bg-black relative overflow-hidden text-custom-black py-4 flex flex-col pb-44",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute flex flex-row items-center justify-between w-full px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>router.back()
                                    ,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
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
                                                d: "M23.4667 14.9347H10.816L14.688 10.284C14.869 10.0662 14.9562 9.78533 14.9301 9.50328C14.9041 9.22122 14.7672 8.96105 14.5493 8.77999C14.3315 8.59894 14.0507 8.51183 13.7686 8.53784C13.4866 8.56384 13.2264 8.70083 13.0453 8.91866L7.71199 15.3187C7.67611 15.3696 7.64402 15.423 7.61599 15.4787C7.61599 15.532 7.61599 15.564 7.54133 15.6173C7.49298 15.7396 7.46766 15.8698 7.46666 16.0013C7.46766 16.1328 7.49298 16.263 7.54133 16.3853C7.54133 16.4387 7.54133 16.4707 7.61599 16.524C7.64402 16.5796 7.67611 16.6331 7.71199 16.684L13.0453 23.084C13.1456 23.2044 13.2712 23.3012 13.4132 23.3676C13.5551 23.434 13.71 23.4682 13.8667 23.468C14.1159 23.4685 14.3574 23.3817 14.5493 23.2227C14.6573 23.1331 14.7466 23.0231 14.8121 22.899C14.8775 22.7749 14.9178 22.6391 14.9307 22.4994C14.9436 22.3597 14.9288 22.2188 14.8871 22.0849C14.8455 21.9509 14.7778 21.8264 14.688 21.7187L10.816 17.068H23.4667C23.7496 17.068 24.0209 16.9556 24.2209 16.7556C24.4209 16.5555 24.5333 16.2842 24.5333 16.0013C24.5333 15.7184 24.4209 15.4471 24.2209 15.2471C24.0209 15.047 23.7496 14.9347 23.4667 14.9347Z",
                                                fill: "#414141"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z",
                                            fill: "#414141"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z",
                                            fill: "#414141"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full bottom-0 fixed bg-white rounded-t-scan",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col p-4 space-y-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xl font-bold text-custom-black",
                                    children: "Pilih Lokasi"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-s font-bold",
                                        children: "Redwhite coffee"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-s",
                                        children: "Jl. Teuku Umar Barat No.371, Padangsambian Klod, Kec. Denpasar Bar., Kota Denpasar, Bali"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center py-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "bg-custom-blue w-full rounded-full",
                                    onClick: ()=>router.back()
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-s font-bold text-white p-4",
                                        children: "Konfirmasi"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkout);


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

/***/ 4417:
/***/ ((module) => {

module.exports = require("react-spring");

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
var __webpack_exports__ = __webpack_require__.X(0, [5675], () => (__webpack_exec__(9268)));
module.exports = __webpack_exports__;

})();