"use strict";
exports.id = 3676;
exports.ids = [3676];
exports.modules = {

/***/ 3676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Keyboard = ({ position , one , two , three , four , five , six , seven , eight , nine , zero , del , disableKeyboard , disableDelete ,  })=>{
    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const numberData = [
        input
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `fixed ${position} w-full`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center gap-y-2 w-full h-full p-2 bg-custom-bgGray pb-2 pt-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-full flex items-center justify-center gap-2 bg-custom-bgGray",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-gray-500 h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableKeyboard,
                                    onClick: one,
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "1"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-gray-500 h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableKeyboard,
                                    onClick: two,
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "2"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-gray-500 h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableKeyboard,
                                    onClick: three,
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "3"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-full flex items-center justify-center gap-2 bg-custom-bgGray",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-gray-500 h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableKeyboard,
                                    onClick: four,
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "4"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-gray-500 h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableKeyboard,
                                    onClick: five,
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "5"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-gray-500 h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableKeyboard,
                                    onClick: six,
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "6"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-full flex items-center justify-center gap-2 bg-custom-bgGray",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-gray-500 h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableKeyboard,
                                    onClick: seven,
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "7"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-gray-500 h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableKeyboard,
                                    onClick: eight,
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "8"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-gray-500 h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableKeyboard,
                                    onClick: nine,
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "9"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-full flex items-center justify-center gap-2 bg-custom-bgGray",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-custom-bgGray h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "+*#"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-gray-500 h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableKeyboard,
                                    onClick: zero,
                                    className: "text-white flex items-center justify-center w-full h-full",
                                    children: "0"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4/12 bg-custom-bgGray h-12 rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: disableDelete,
                                    onClick: del,
                                    className: "flex items-center justify-center w-full h-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        className: "",
                                        width: "32",
                                        height: "32",
                                        viewBox: "0 0 32 32",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M15.2144 13.5251C14.9215 13.2322 14.9215 12.7574 15.2144 12.4645C15.5073 12.1716 15.9822 12.1716 16.275 12.4645L18.75 14.9394L21.2249 12.4645C21.5177 12.1716 21.9926 12.1716 22.2855 12.4645C22.5784 12.7573 22.5784 13.2322 22.2855 13.5251L19.8105 16L22.2855 18.4749C22.5784 18.7678 22.5784 19.2427 22.2855 19.5355C21.9926 19.8284 21.5177 19.8284 21.2249 19.5355L18.75 17.0607L16.275 19.5355C15.9822 19.8284 15.5073 19.8284 15.2145 19.5355C14.9215 19.2426 14.9215 18.7678 15.2145 18.4749L17.6893 16.0001L15.2144 13.5251Z",
                                                fill: "white"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M12.1213 8.37866L4.5 16L12.1213 23.6213C12.684 24.184 13.447 24.5 14.2427 24.5H24.5C26.1569 24.5 27.5 23.1569 27.5 21.5V10.5C27.5 8.84314 26.1569 7.5 24.5 7.5H14.2427C13.447 7.5 12.684 7.8161 12.1213 8.37866ZM24.5 23.2H14.2427C13.7917 23.2 13.3594 23.0209 13.0405 22.7021L6.3385 16L13.0405 9.29791C13.3594 8.97913 13.7917 8.79999 14.2427 8.79999H24.5C25.4388 8.79999 26.2 9.5611 26.2 10.5V21.5C26.2 22.4389 25.4388 23.2 24.5 23.2Z",
                                                fill: "white"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);


/***/ })

};
;