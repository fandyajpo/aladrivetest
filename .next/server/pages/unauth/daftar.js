"use strict";
(() => {
var exports = {};
exports.id = 4466;
exports.ids = [4466];
exports.modules = {

/***/ 2789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ daftar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/footer/backNav.js
var backNav = __webpack_require__(2357);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "embla-carousel-react"
const external_embla_carousel_react_namespaceObject = require("embla-carousel-react");
var external_embla_carousel_react_default = /*#__PURE__*/__webpack_require__.n(external_embla_carousel_react_namespaceObject);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
;// CONCATENATED MODULE: ./components/modal/exitSignUp.js




external_react_modal_default().setAppElement("#__next");
const ExitSign = (props)=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_default()), {
            isOpen: props.exitSign,
            onClose: props.handleCloseExit,
            className: "absolute z-50 w-full h-full overflow-y-scroll flex flex-col justify-end",
            style: {
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    zIndex: 50
                },
                content: {
                    outline: "none",
                    zIndex: 100
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full bg-white rounded-tl-xl rounded-t-xl p-4 z-50",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-14",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-xl font-bold",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: props.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-md text-custom-textGray",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: props.description
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center justify-center w-full gap-x-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-custom-bgButton rounded-full w-full",
                                        onClick: props.handleCloseExit,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-custom-blue font-bold text-s py-3",
                                            children: "Batal"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-custom-blue rounded-full w-full",
                                        onClick: ()=>router.back()
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-white font-bold text-s py-3",
                                            children: "Ok"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const exitSignUp = (ExitSign);

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__(4417);
;// CONCATENATED MODULE: ./pages/unauth/daftar.js

/*SENIN 7 JAN 2022 */ 





const EmblaCarousel = ({ slides  })=>{
    const router = (0,router_.useRouter)();
    const [viewportRef, embla] = external_embla_carousel_react_default()({
        skipSnaps: false,
        draggable: false
    });
    const { 0: prevBtnEnabled , 1: setPrevBtnEnabled  } = (0,external_react_.useState)(false);
    const { 0: nextBtnEnabled , 1: setNextBtnEnabled  } = (0,external_react_.useState)(false);
    const { 0: selectedIndex , 1: setSelectedIndex  } = (0,external_react_.useState)(0);
    const { 0: scrollSnaps , 1: setScrollSnaps  } = (0,external_react_.useState)([]);
    const scrollTo = (0,external_react_.useCallback)((index)=>embla && embla.scrollTo(index)
    , [
        embla
    ]);
    const onSelect = (0,external_react_.useCallback)(()=>{
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [
        embla,
        setSelectedIndex
    ]);
    const refer = (0,external_react_.useRef)();
    const scrollingIntoView = ()=>{
        setTimeout(()=>{
            refer.current.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 500);
    };
    const { 0: terms , 1: setTerms  } = (0,external_react_.useState)(false);
    const handleOpenTerms = ()=>setTerms(true)
    ;
    const handleCloseTerms = ()=>setTerms(false)
    ;
    (0,external_react_.useEffect)(()=>{
        selectedIndex === 1 && scrollingIntoView();
        terms ? scrollingIntoView() : null;
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        console.log(selectedIndex);
        embla.on("select", onSelect);
    }, [
        embla,
        setScrollSnaps,
        onSelect,
        selectedIndex
    ]);
    const { 0: exitSign , 1: setExitSign  } = (0,external_react_.useState)(false);
    const handleOpenExit = ()=>setExitSign(true)
    ;
    const handleCloseExit = ()=>setExitSign(false)
    ;
    const { 0: nama , 1: setNama  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: Hp , 1: setHp  } = (0,external_react_.useState)("");
    const { 0: KTP , 1: setKTP  } = (0,external_react_.useState)("");
    const { 0: rekening , 1: setRekening  } = (0,external_react_.useState)("");
    const { 0: atasNama , 1: setAtasNama  } = (0,external_react_.useState)("");
    const { 0: pinPemilik , 1: setPinPemilik  } = (0,external_react_.useState)("");
    const { 0: ulangiPin , 1: setUlangiPin  } = (0,external_react_.useState)("");
    //PAGE 1
    const handleNama = (a)=>setNama(a.target.value)
    ;
    const handleEmail = (b)=>setEmail(b.target.value)
    ;
    const handleHp = (c)=>setHp(c.target.value)
    ;
    const handleKTP = (d)=>setKTP(d.target.value)
    ;
    //PAGE 2
    const handleRekening = (f)=>setRekening(f.target.value)
    ;
    const handleAtasNama = (g)=>setAtasNama(g.target.value)
    ;
    const handlePinPemilik = (h)=>setPinPemilik(h.target.value)
    ;
    const handleUlangiPin = (i)=>setUlangiPin(i.target.value)
    ;
    (0,external_react_.useEffect)(()=>{
        console.log("NAMA : ", nama);
        console.log("EMAIL : ", email);
        console.log("NO HP : ", Hp);
        console.log("KTP : ", KTP);
        console.log("PAGE :", selectedIndex);
    }, [
        nama,
        email,
        Hp,
        KTP,
        selectedIndex
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log("REKENING : ", rekening);
        console.log("ATAS NAMA : ", atasNama);
        console.log("PIN : ", pinPemilik);
        console.log("ULANGI PIN : ", ulangiPin);
        console.log("PAGE :", selectedIndex);
    }, [
        rekening,
        atasNama,
        pinPemilik,
        ulangiPin,
        selectedIndex
    ]);
    const TERMS = (0,external_react_spring_.useSpring)({
        to: {
            scale: terms ? 1 : 0,
            y: terms ? 0 : 1000
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `w-full h-full ${terms ? "pt-4" : "pt-20"} overflow-hidden bg-white duration-500 z-10 pb-64`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_spring_.animated.div, {
                style: TERMS,
                className: "relative ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute z-10 top-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TermsAndCondition, {
                        terms: terms
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(exitSignUp, {
                title: "Yakin kembali?",
                description: "Datamu akan ter-reset tanpa menyimpanya, yakin kembali?",
                exitSign: exitSign,
                handleCloseExit: handleCloseExit
            }),
            terms ? null : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed top-0 z-50 w-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full h-24 bg-custom-bg bg-opacity-70 backdrop-blur-2xl",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center gap-x-2 pl-4 pt-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-custom-blue h-10 w-10 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-lg text-white flex items-center justify-center",
                                        children: selectedIndex === 0 ? "1" : "2"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-lg font-bold text-custom-black",
                                        children: selectedIndex === 0 ? "Informasi Diri" : "Informasi Bank"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "embla__dots",
                            children: scrollSnaps.map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(DotButton, {
                                    selected: index === selectedIndex
                                }, index)
                            )
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: refer
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "embla pt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "embla__viewport",
                    ref: viewportRef,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "embla__container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "embla__slide bg-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "embla__slide__inner",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full h-screen",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "space-y-4 p-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-black font-bold",
                                                                    children: "Nama"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-textGray",
                                                                    children: "Nama asli sesuai KTP agar mudah"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-textGray",
                                                                    children: "terverifikasi"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            placeholder: "Masukkan nama",
                                                            className: "placeholder-custom-textGray w-full p-1 bg-custom-layer border outline-none border-custom-border rounded-message",
                                                            onChange: handleNama,
                                                            value: nama
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-black font-bold",
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-textGray",
                                                                    children: "Email aktif untuk verifikasi"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            placeholder: "Alamat email",
                                                            className: "placeholder-custom-textGray w-full p-1 bg-custom-layer border outline-none border-custom-border rounded-message",
                                                            onChange: handleEmail,
                                                            value: email
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-black font-bold",
                                                                    children: "No. handphone"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-textGray",
                                                                    children: "Nomor handphone aktif"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            placeholder: "+ 62",
                                                            className: "placeholder-custom-textGray w-full p-1 bg-custom-layer border outline-none border-custom-border rounded-message",
                                                            onChange: handleHp,
                                                            value: Hp
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-md text-custom-black font-bold",
                                                                children: "No . KTP"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            placeholder: "Masukkan nomor KTP",
                                                            className: "placeholder-custom-textGray w-full p-1 bg-custom-layer border outline-none border-custom-border rounded-message",
                                                            onChange: handleKTP,
                                                            value: KTP
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-black font-bold",
                                                                    children: "Foto KTP"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-textGray",
                                                                    children: "Upload foto KTP"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                width: "96",
                                                                height: "60",
                                                                viewBox: "0 0 96 60",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                        x: "0.25",
                                                                        y: "0.25",
                                                                        width: "95.5",
                                                                        height: "59.5",
                                                                        rx: "4.75",
                                                                        fill: "#F4F7FA",
                                                                        stroke: "#D8DEE8",
                                                                        strokeWidth: "0.5"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M54 30.995C53.7348 30.995 53.4804 31.1004 53.2929 31.2879C53.1054 31.4754 53 31.7298 53 31.995V32.375L51.52 30.895C50.9974 30.3766 50.2911 30.0856 49.555 30.0856C48.8189 30.0856 48.1126 30.3766 47.59 30.895L46.89 31.595L44.41 29.115C43.8801 28.6106 43.1766 28.3293 42.445 28.3293C41.7134 28.3293 41.0099 28.6106 40.48 29.115L39 30.595V24.995C39 24.7298 39.1054 24.4754 39.2929 24.2879C39.4804 24.1004 39.7348 23.995 40 23.995H47C47.2652 23.995 47.5196 23.8897 47.7071 23.7021C47.8946 23.5146 48 23.2602 48 22.995C48 22.7298 47.8946 22.4754 47.7071 22.2879C47.5196 22.1004 47.2652 21.995 47 21.995H40C39.2044 21.995 38.4413 22.3111 37.8787 22.8737C37.3161 23.4363 37 24.1994 37 24.995V36.995C37 37.7907 37.3161 38.5537 37.8787 39.1163C38.4413 39.6789 39.2044 39.995 40 39.995H52C52.7956 39.995 53.5587 39.6789 54.1213 39.1163C54.6839 38.5537 55 37.7907 55 36.995V31.995C55 31.7298 54.8946 31.4754 54.7071 31.2879C54.5196 31.1004 54.2652 30.995 54 30.995ZM40 37.995C39.7348 37.995 39.4804 37.8897 39.2929 37.7021C39.1054 37.5146 39 37.2602 39 36.995V33.425L41.9 30.525C42.0469 30.385 42.2421 30.3069 42.445 30.3069C42.6479 30.3069 42.8431 30.385 42.99 30.525L46.16 33.695L50.46 37.995H40ZM53 36.995C52.9986 37.1864 52.9354 37.3723 52.82 37.525L48.31 32.995L49.01 32.295C49.0817 32.2218 49.1673 32.1637 49.2617 32.124C49.3561 32.0843 49.4576 32.0639 49.56 32.0639C49.6624 32.0639 49.7639 32.0843 49.8583 32.124C49.9527 32.1637 50.0383 32.2218 50.11 32.295L53 35.205V36.995ZM57.71 22.285L54.71 19.285C54.6149 19.194 54.5028 19.1226 54.38 19.075C54.1365 18.975 53.8635 18.975 53.62 19.075C53.4972 19.1226 53.3851 19.194 53.29 19.285L50.29 22.285C50.1017 22.4733 49.9959 22.7287 49.9959 22.995C49.9959 23.2613 50.1017 23.5167 50.29 23.705C50.4783 23.8933 50.7337 23.9991 51 23.9991C51.2663 23.9991 51.5217 23.8933 51.71 23.705L53 22.405V27.995C53 28.2602 53.1054 28.5146 53.2929 28.7021C53.4804 28.8897 53.7348 28.995 54 28.995C54.2652 28.995 54.5196 28.8897 54.7071 28.7021C54.8946 28.5146 55 28.2602 55 27.995V22.405L56.29 23.705C56.383 23.7987 56.4936 23.8731 56.6154 23.9239C56.7373 23.9747 56.868 24.0008 57 24.0008C57.132 24.0008 57.2627 23.9747 57.3846 23.9239C57.5064 23.8731 57.617 23.7987 57.71 23.705C57.8037 23.6121 57.8781 23.5014 57.9289 23.3796C57.9797 23.2577 58.0058 23.127 58.0058 22.995C58.0058 22.863 57.9797 22.7323 57.9289 22.6104C57.8781 22.4886 57.8037 22.378 57.71 22.285Z",
                                                                        fill: "#4391EF"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-black font-bold",
                                                                    children: "Foto SIM"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-textGray",
                                                                    children: "Upload foto SIM"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                width: "96",
                                                                height: "60",
                                                                viewBox: "0 0 96 60",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                        x: "0.25",
                                                                        y: "0.25",
                                                                        width: "95.5",
                                                                        height: "59.5",
                                                                        rx: "4.75",
                                                                        fill: "#F4F7FA",
                                                                        stroke: "#D8DEE8",
                                                                        strokeWidth: "0.5"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M54 30.995C53.7348 30.995 53.4804 31.1004 53.2929 31.2879C53.1054 31.4754 53 31.7298 53 31.995V32.375L51.52 30.895C50.9974 30.3766 50.2911 30.0856 49.555 30.0856C48.8189 30.0856 48.1126 30.3766 47.59 30.895L46.89 31.595L44.41 29.115C43.8801 28.6106 43.1766 28.3293 42.445 28.3293C41.7134 28.3293 41.0099 28.6106 40.48 29.115L39 30.595V24.995C39 24.7298 39.1054 24.4754 39.2929 24.2879C39.4804 24.1004 39.7348 23.995 40 23.995H47C47.2652 23.995 47.5196 23.8897 47.7071 23.7021C47.8946 23.5146 48 23.2602 48 22.995C48 22.7298 47.8946 22.4754 47.7071 22.2879C47.5196 22.1004 47.2652 21.995 47 21.995H40C39.2044 21.995 38.4413 22.3111 37.8787 22.8737C37.3161 23.4363 37 24.1994 37 24.995V36.995C37 37.7907 37.3161 38.5537 37.8787 39.1163C38.4413 39.6789 39.2044 39.995 40 39.995H52C52.7956 39.995 53.5587 39.6789 54.1213 39.1163C54.6839 38.5537 55 37.7907 55 36.995V31.995C55 31.7298 54.8946 31.4754 54.7071 31.2879C54.5196 31.1004 54.2652 30.995 54 30.995ZM40 37.995C39.7348 37.995 39.4804 37.8897 39.2929 37.7021C39.1054 37.5146 39 37.2602 39 36.995V33.425L41.9 30.525C42.0469 30.385 42.2421 30.3069 42.445 30.3069C42.6479 30.3069 42.8431 30.385 42.99 30.525L46.16 33.695L50.46 37.995H40ZM53 36.995C52.9986 37.1864 52.9354 37.3723 52.82 37.525L48.31 32.995L49.01 32.295C49.0817 32.2218 49.1673 32.1637 49.2617 32.124C49.3561 32.0843 49.4576 32.0639 49.56 32.0639C49.6624 32.0639 49.7639 32.0843 49.8583 32.124C49.9527 32.1637 50.0383 32.2218 50.11 32.295L53 35.205V36.995ZM57.71 22.285L54.71 19.285C54.6149 19.194 54.5028 19.1226 54.38 19.075C54.1365 18.975 53.8635 18.975 53.62 19.075C53.4972 19.1226 53.3851 19.194 53.29 19.285L50.29 22.285C50.1017 22.4733 49.9959 22.7287 49.9959 22.995C49.9959 23.2613 50.1017 23.5167 50.29 23.705C50.4783 23.8933 50.7337 23.9991 51 23.9991C51.2663 23.9991 51.5217 23.8933 51.71 23.705L53 22.405V27.995C53 28.2602 53.1054 28.5146 53.2929 28.7021C53.4804 28.8897 53.7348 28.995 54 28.995C54.2652 28.995 54.5196 28.8897 54.7071 28.7021C54.8946 28.5146 55 28.2602 55 27.995V22.405L56.29 23.705C56.383 23.7987 56.4936 23.8731 56.6154 23.9239C56.7373 23.9747 56.868 24.0008 57 24.0008C57.132 24.0008 57.2627 23.9747 57.3846 23.9239C57.5064 23.8731 57.617 23.7987 57.71 23.705C57.8037 23.6121 57.8781 23.5014 57.9289 23.3796C57.9797 23.2577 58.0058 23.127 58.0058 22.995C58.0058 22.863 57.9797 22.7323 57.9289 22.6104C57.8781 22.4886 57.8037 22.378 57.71 22.285Z",
                                                                        fill: "#4391EF"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "embla__slide bg-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "embla__slide__inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full h-screen",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "space-y-4 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-md text-custom-black font-bold",
                                                                        children: "Bank"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-md text-custom-textGray",
                                                                        children: "Pilih Bank sebagai penarikan saldo Anda"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                className: "w-full flex flex-row items-center justify-between border rounded-message p-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "flex flex-row items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                                    width: "82",
                                                                                    height: "41",
                                                                                    viewBox: "0 0 82 41",
                                                                                    fill: "none",
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                        width: "82",
                                                                                        height: "41",
                                                                                        rx: "5",
                                                                                        fill: "#D8DEE8"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "text-s font-bold",
                                                                                children: "Pilih Bank"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                            width: "24",
                                                                            height: "24",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                                    cx: "12",
                                                                                    cy: "12",
                                                                                    r: "12",
                                                                                    fill: "#4391EF",
                                                                                    fillOpacity: "0.1"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    d: "M9 18L15 12L9 6",
                                                                                    stroke: "#4391EF",
                                                                                    strokeWidth: "1.5",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-black font-bold",
                                                                    children: "No. Rekening"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                placeholder: "Nomer rekening",
                                                                className: "placeholder-custom-textGray w-full p-1 bg-custom-layer border outline-none border-custom-border rounded-message",
                                                                onChange: handleRekening,
                                                                value: rekening
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-black font-bold",
                                                                    children: "Atas Nama"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                placeholder: "Atas Nama Bank",
                                                                className: "placeholder-custom-textGray w-full p-1 bg-custom-layer border outline-none border-custom-border rounded-message",
                                                                onChange: handleAtasNama,
                                                                value: atasNama
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-md text-custom-black font-bold",
                                                                        children: "Pin"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-md text-custom-textGray",
                                                                        children: "Pin 6 digit angka untuk keperluan keamanan."
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                placeholder: "Masukkan nomor KTP",
                                                                className: "placeholder-custom-textGray w-full p-1 bg-custom-layer border outline-none border-custom-border rounded-message",
                                                                onChange: handlePinPemilik,
                                                                value: pinPemilik
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-md text-custom-black font-bold",
                                                                    children: "Ulangi"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                placeholder: "Ulangi Pin",
                                                                className: "placeholder-custom-textGray w-full p-1 bg-custom-layer border outline-none border-custom-border rounded-message",
                                                                onChange: handleUlangiPin,
                                                                value: ulangiPin
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "bg-custom-bg w-full h-2"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "space-y-2 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-start items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "checkbox",
                                                                className: "focus:ring-0 checked:bg-custom-blue rounded-full"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "text-1xs py-1 pl-2",
                                                                children: [
                                                                    "By creating an account, you aggree to our",
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-custom-blue",
                                                                        children: "Terms"
                                                                    }),
                                                                    "",
                                                                    " and ",
                                                                    "",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-custom-blue",
                                                                        children: "Conditions"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-start items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "checkbox",
                                                                className: "focus:ring-0 checked:bg-custom-blue rounded-full"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-1xs py-1 pl-2",
                                                                children: "I’d like to receive exclusive promotion by email and sms"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(backNav/* default */.Z, {
                title: terms ? null : "Daftar",
                bottomButton: terms ? "Selanjutnya" : "Lanjut",
                bottomAction: selectedIndex === 0 ? ()=>scrollTo(1)
                 : terms ? ()=>router.push("kirim-otp")
                 : handleOpenTerms,
                leftAction: selectedIndex === 0 ? ()=>router.back()
                 : terms ? handleCloseTerms : handleOpenExit,
                leftButton: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: "16",
                            cy: "16",
                            r: "16",
                            fill: "#414141",
                            fillOpacity: "0.1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M23.4667 14.9347H10.816L14.688 10.284C14.8691 10.0662 14.9562 9.78533 14.9302 9.50328C14.9042 9.22122 14.7672 8.96105 14.5493 8.77999C14.3315 8.59894 14.0507 8.51183 13.7686 8.53784C13.4866 8.56384 13.2264 8.70083 13.0453 8.91866L7.71201 15.3187C7.67613 15.3696 7.64404 15.423 7.61601 15.4787C7.61601 15.532 7.61601 15.564 7.54134 15.6173C7.49299 15.7396 7.46768 15.8698 7.46667 16.0013C7.46768 16.1328 7.49299 16.263 7.54134 16.3853C7.54134 16.4387 7.54134 16.4707 7.61601 16.524C7.64404 16.5796 7.67613 16.6331 7.71201 16.684L13.0453 23.084C13.1456 23.2044 13.2712 23.3012 13.4132 23.3676C13.5551 23.434 13.71 23.4682 13.8667 23.468C14.1159 23.4685 14.3574 23.3817 14.5493 23.2227C14.6574 23.1331 14.7466 23.0231 14.8121 22.899C14.8775 22.7749 14.9178 22.6391 14.9307 22.4994C14.9436 22.3597 14.9288 22.2188 14.8871 22.0849C14.8455 21.9509 14.7778 21.8264 14.688 21.7187L10.816 17.068H23.4667C23.7496 17.068 24.0209 16.9556 24.2209 16.7556C24.421 16.5555 24.5333 16.2842 24.5333 16.0013C24.5333 15.7184 24.421 15.4471 24.2209 15.2471C24.0209 15.047 23.7496 14.9347 23.4667 14.9347Z",
                            fill: "#414141"
                        })
                    ]
                }),
                block: selectedIndex === 0 ? !nama || !email || !Hp || !KTP : selectedIndex === 1 && (!rekening || !atasNama || !pinPemilik || !ulangiPin),
                classButton: `${selectedIndex === 0 && nama && email && Hp && KTP ? "bg-blue-500 text-white" : selectedIndex === 1 && rekening && atasNama && pinPemilik && ulangiPin ? "bg-blue-500 text-white" : "bg-custom-btnGray text-white"}`
            })
        ]
    }));
};
const DotButton = ({ selected , onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: `embla__dot ${selected ? "is-selected" : ""}`,
        type: "button",
        onClick: onClick
    })
;
const PrevButton = ({ enabled , onClick  })=>/*#__PURE__*/ _jsx("button", {
        className: "embla__button embla__button--prev",
        onClick: onClick,
        disabled: !enabled,
        children: /*#__PURE__*/ _jsx("svg", {
            className: "embla__button__svg",
            viewBox: "137.718 -1.001 366.563 644",
            children: /*#__PURE__*/ _jsx("path", {
                d: "M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
            })
        })
    })
;
const NextButton = ({ enabled , onClick  })=>/*#__PURE__*/ _jsx("button", {
        className: "embla__button embla__button--next",
        onClick: onClick,
        disabled: !enabled,
        children: /*#__PURE__*/ _jsx("svg", {
            className: "embla__button__svg",
            viewBox: "0 0 238.003 238.003",
            children: /*#__PURE__*/ _jsx("path", {
                d: "M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
            })
        })
    })
;
const TermsAndCondition = ({ terms  })=>{
    const topTerms = (0,external_react_.useRef)();
    const scrollTerms = ()=>{
        setTimeout(()=>{
            topTerms.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 500);
    };
    (0,external_react_.useEffect)(()=>{
        terms ? scrollTerms() : null;
    }, [
        terms
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full h-screen p-4 space-y-4 bg-white",
        ref: topTerms,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl text-custom-black font-bold",
                        children: "Terms and Condition"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-s",
                        children: "LAST UPDATE : December 16, 2021"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-s font-bold",
                        children: "1. Lorem Ipsum"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-s",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ligula accumsan commodo risus lectus odio ipsum, ullamcorper lacus. Justo ipsum eu nibh nec auctor adipiscing aliquet nec eros. Non vitae mattis integer magna ipsum et volutpat. At nisl, enim condimentum at adipiscing sed eleifend."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-s font-bold",
                        children: "1. Lorem Ipsum"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-s",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ligula accumsan commodo risus lectus odio ipsum, ullamcorper lacus. Justo ipsum eu nibh nec auctor adipiscing aliquet nec eros. Non vitae mattis integer magna ipsum et volutpat. At nisl, enim condimentum at adipiscing sed eleifend."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-s font-bold",
                        children: "1. Lorem Ipsum"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-s",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ligula accumsan commodo risus lectus odio ipsum, ullamcorper lacus. Justo ipsum eu nibh nec auctor adipiscing aliquet nec eros. Non vitae mattis integer magna ipsum et volutpat. At nisl, enim condimentum at adipiscing sed eleifend."
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const daftar = (EmblaCarousel);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2357], () => (__webpack_exec__(2789)));
module.exports = __webpack_exports__;

})();