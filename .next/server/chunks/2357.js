"use strict";
exports.id = 2357;
exports.ids = [2357];
exports.modules = {

/***/ 2357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BackNavigation = ({ //BUTTON PROPS
title , topButton , leftButton , rightButton , bottomButton , //ACTION PROPS
topAction , leftAction , rightAction , bottomAction , //INPUT PROPS
inputProps , tod , //DISABLED
block , classButton , position ,  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-full fixed ${bottomButton ? "h-32" : "h-24"} ${position ? position : "bottom-0"}  z-20 bg-custom-bg bg-opacity-70 backdrop-blur-2xl border-t border-custom-gray`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full px-4 py-4 space-y-3",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-3/12 flex items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: leftAction,
                                children: leftButton
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full flex items-center justify-center text-lg font-bold text-custom-black",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: rightAction,
                            className: "w-3/12 flex items-center",
                            children: rightButton
                        })
                    ]
                }),
                bottomButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        disabled: block,
                        className: `${classButton} w-full h-12 rounded-full text-s font-bold`,
                        onClick: bottomAction,
                        children: bottomButton
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackNavigation);


/***/ })

};
;