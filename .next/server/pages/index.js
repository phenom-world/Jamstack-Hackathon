"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/LoginUserForm.tsx":
/*!**************************************!*\
  !*** ./components/LoginUserForm.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginUserForm\": () => (/* binding */ LoginUserForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LoginUserForm = ()=>{\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const send = ()=>{\n        fetch(\"/api/user/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                password\n            })\n        }).then(()=>window.location.reload());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: (e)=>{\n            e.preventDefault();\n            send();\n        },\n        style: {\n            display: \"flex\",\n            gap: 8\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Login:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        type: \"text\",\n                        placeholder: \"Enter your email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Me/Desktop/bookly/components/LoginUserForm.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        type: \"text\",\n                        placeholder: \"Enter your password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Me/Desktop/bookly/components/LoginUserForm.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Me/Desktop/bookly/components/LoginUserForm.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"/Users/Me/Desktop/bookly/components/LoginUserForm.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Me/Desktop/bookly/components/LoginUserForm.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luVXNlckZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFFMUIsTUFBTUMsZ0JBQWdCLElBQU07SUFDL0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNTSxPQUFPLElBQU07UUFDZkMsTUFBTSxtQkFBbUI7WUFDckJDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQlY7Z0JBQ0FFO1lBQ0o7UUFDSixHQUFHUyxJQUFJLENBQUMsSUFBTUMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO0lBQ3hDO0lBRUEscUJBQ0ksOERBQUNDO1FBQ0dDLFVBQVUsQ0FBQ0MsSUFBTTtZQUNiQSxFQUFFQyxjQUFjO1lBQ2hCZDtRQUNKO1FBQ0FlLE9BQU87WUFBRUMsU0FBUztZQUFRQyxLQUFLO1FBQUU7OzBCQUVqQyw4REFBQ0M7O29CQUFNO2tDQUVILDhEQUFDQzt3QkFDR0MsT0FBT3hCO3dCQUNQeUIsVUFBVSxDQUFDUixJQUFNaEIsU0FBU2dCLEVBQUVTLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDeENHLE1BQUs7d0JBQ0xDLGFBQVk7Ozs7OztrQ0FFaEIsOERBQUNMO3dCQUNHQyxPQUFPdEI7d0JBQ1B1QixVQUFVLENBQUNSLElBQU1kLFlBQVljLEVBQUVTLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDM0NHLE1BQUs7d0JBQ0xDLGFBQVk7Ozs7Ozs7Ozs7OzswQkFHcEIsOERBQUNDOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFHcEIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tseS8uL2NvbXBvbmVudHMvTG9naW5Vc2VyRm9ybS50c3g/MjA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgTG9naW5Vc2VyRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBzZW5kID0gKCkgPT4ge1xuICAgICAgICBmZXRjaChcIi9hcGkvdXNlci9sb2dpblwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZW5kKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogOCB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgTG9naW46XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxvZ2luVXNlckZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwiZGlzcGxheSIsImdhcCIsImxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginUserForm.tsx\n");

/***/ }),

/***/ "./components/RegisterUserForm.tsx":
/*!*****************************************!*\
  !*** ./components/RegisterUserForm.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegisterUserForm\": () => (/* binding */ RegisterUserForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst RegisterUserForm = ()=>{\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const send = ()=>{\n        fetch(\"/api/user/register\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                username,\n                password\n            })\n        }).then(()=>window.location.reload());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: (e)=>{\n            e.preventDefault();\n            send();\n        },\n        style: {\n            display: \"flex\",\n            gap: 8\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Register:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        type: \"text\",\n                        placeholder: \"Enter your email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Me/Desktop/bookly/components/RegisterUserForm.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value),\n                        type: \"text\",\n                        placeholder: \"Enter your username\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Me/Desktop/bookly/components/RegisterUserForm.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        type: \"text\",\n                        placeholder: \"Enter your password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Me/Desktop/bookly/components/RegisterUserForm.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Me/Desktop/bookly/components/RegisterUserForm.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"/Users/Me/Desktop/bookly/components/RegisterUserForm.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Me/Desktop/bookly/components/RegisterUserForm.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlZ2lzdGVyVXNlckZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFFMUIsTUFBTUMsbUJBQW1CLElBQU07SUFDbEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsTUFBTVEsT0FBTyxJQUFNO1FBQ2ZDLE1BQU0sc0JBQXNCO1lBQ3hCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDakJaO2dCQUNBRTtnQkFDQUU7WUFDSjtRQUNKLEdBQUdTLElBQUksQ0FBQyxJQUFNQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07SUFDeEM7SUFFQSxxQkFDSSw4REFBQ0M7UUFDR0MsVUFBVSxDQUFDQyxJQUFNO1lBQ2JBLEVBQUVDLGNBQWM7WUFDaEJkO1FBQ0o7UUFDQWUsT0FBTztZQUFFQyxTQUFTO1lBQVFDLEtBQUs7UUFBRTs7MEJBRWpDLDhEQUFDQzs7b0JBQU07a0NBRUgsOERBQUNDO3dCQUNHQyxPQUFPMUI7d0JBQ1AyQixVQUFVLENBQUNSLElBQU1sQixTQUFTa0IsRUFBRVMsTUFBTSxDQUFDRixLQUFLO3dCQUN4Q0csTUFBSzt3QkFDTEMsYUFBWTs7Ozs7O2tDQUVoQiw4REFBQ0w7d0JBQ0dDLE9BQU94Qjt3QkFDUHlCLFVBQVUsQ0FBQ1IsSUFBTWhCLFlBQVlnQixFQUFFUyxNQUFNLENBQUNGLEtBQUs7d0JBQzNDRyxNQUFLO3dCQUNMQyxhQUFZOzs7Ozs7a0NBRWhCLDhEQUFDTDt3QkFDR0MsT0FBT3RCO3dCQUNQdUIsVUFBVSxDQUFDUixJQUFNZCxZQUFZYyxFQUFFUyxNQUFNLENBQUNGLEtBQUs7d0JBQzNDRyxNQUFLO3dCQUNMQyxhQUFZOzs7Ozs7Ozs7Ozs7MEJBR3BCLDhEQUFDQzswQkFBTzs7Ozs7Ozs7Ozs7O0FBR3BCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rbHkvLi9jb21wb25lbnRzL1JlZ2lzdGVyVXNlckZvcm0udHN4P2UwMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyVXNlckZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBzZW5kID0gKCkgPT4ge1xuICAgICAgICBmZXRjaChcIi9hcGkvdXNlci9yZWdpc3RlclwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZW5kKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogOCB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgUmVnaXN0ZXI6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbj5TYXZlPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xufTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWdpc3RlclVzZXJGb3JtIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2VuZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ2FwIiwibGFiZWwiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RegisterUserForm.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_xata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/xata */ \"./utils/xata.ts\");\n/* harmony import */ var _components_RegisterUserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RegisterUserForm */ \"./components/RegisterUserForm.tsx\");\n/* harmony import */ var _components_LoginUserForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginUserForm */ \"./components/LoginUserForm.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_xata__WEBPACK_IMPORTED_MODULE_1__]);\n_utils_xata__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Index = ({ books  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RegisterUserForm__WEBPACK_IMPORTED_MODULE_2__.RegisterUserForm, {}, void 0, false, {\n                fileName: \"/Users/Me/Desktop/bookly/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginUserForm__WEBPACK_IMPORTED_MODULE_3__.LoginUserForm, {}, void 0, false, {\n                fileName: \"/Users/Me/Desktop/bookly/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Me/Desktop/bookly/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\nconst xata = new _utils_xata__WEBPACK_IMPORTED_MODULE_1__.XataClient();\nconst getServerSideProps = async ()=>{\n    const books = await xata.db.Book.getMany();\n    return {\n        props: {\n            books\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzJDO0FBQ3VCO0FBQ047QUFLNUQsTUFBTUcsUUFBbUIsQ0FBQyxFQUFFQyxNQUFLLEVBQUUsR0FBSztJQUNwQyxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDSiwwRUFBZ0JBOzs7OzswQkFDakIsOERBQUNDLG9FQUFhQTs7Ozs7Ozs7Ozs7QUFVMUI7QUFFQSxNQUFNSSxPQUFPLElBQUlOLG1EQUFVQTtBQUVwQixNQUFNTyxxQkFBcUIsVUFBWTtJQUMxQyxNQUFNSCxRQUFRLE1BQU1FLEtBQUtFLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPO0lBQ3hDLE9BQU87UUFBRUMsT0FBTztZQUFFUDtRQUFNO0lBQUU7QUFDOUIsRUFBRTtBQUVGLGlFQUFlRCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9va2x5Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBYYXRhQ2xpZW50IH0gZnJvbSAnLi4vdXRpbHMveGF0YSc7XG5pbXBvcnQgeyBSZWdpc3RlclVzZXJGb3JtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9SZWdpc3RlclVzZXJGb3JtJztcbmltcG9ydCB7IExvZ2luVXNlckZvcm0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpblVzZXJGb3JtXCI7XG5pbXBvcnQgeyBBZGRCb29rRm9ybSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0FkZEJvb2tGb3JtXCJcblxudHlwZSBQcm9wcyA9IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPj5bJ3Byb3BzJ107XG5cbmNvbnN0IEluZGV4OiBGQzxQcm9wcz4gPSAoeyBib29rcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8UmVnaXN0ZXJVc2VyRm9ybSAvPlxuICAgICAgICAgICAgPExvZ2luVXNlckZvcm0gLz5cbiAgICAgICAgICAgIHsvKiA8aDE+Qm9va3M8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2tzLm1hcChiID0+IDxsYWJlbCBrZXk9e2IuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPil9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+ICovfVxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn07XG5cbmNvbnN0IHhhdGEgPSBuZXcgWGF0YUNsaWVudCgpO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgeGF0YS5kYi5Cb29rLmdldE1hbnkoKTtcbiAgICByZXR1cm4geyBwcm9wczogeyBib29rcyB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiWGF0YUNsaWVudCIsIlJlZ2lzdGVyVXNlckZvcm0iLCJMb2dpblVzZXJGb3JtIiwiSW5kZXgiLCJib29rcyIsIm1haW4iLCJ4YXRhIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZGIiLCJCb29rIiwiZ2V0TWFueSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utils/xata.ts":
/*!***********************!*\
  !*** ./utils/xata.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XataClient\": () => (/* binding */ XataClient),\n/* harmony export */   \"getXataClient\": () => (/* binding */ getXataClient)\n/* harmony export */ });\n/* harmony import */ var _xata_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xata.io/client */ \"@xata.io/client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_xata_io_client__WEBPACK_IMPORTED_MODULE_0__]);\n_xata_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Generated by Xata Codegen 0.18.0. Please do not edit.\n\nconst tables = [\n    {\n        name: \"User\",\n        columns: [\n            {\n                name: \"username\",\n                type: \"string\",\n                unique: true\n            },\n            {\n                name: \"email\",\n                type: \"email\",\n                unique: true\n            },\n            {\n                name: \"password\",\n                type: \"string\"\n            },\n            {\n                name: \"token\",\n                type: \"string\"\n            }\n        ]\n    },\n    {\n        name: \"Book\",\n        columns: [\n            {\n                name: \"title\",\n                type: \"string\"\n            },\n            {\n                name: \"author\",\n                type: \"string\"\n            },\n            {\n                name: \"year_published\",\n                type: \"int\"\n            },\n            {\n                name: \"genre\",\n                type: \"string\"\n            },\n            {\n                name: \"added_by\",\n                type: \"link\",\n                link: {\n                    table: \"User\"\n                }\n            },\n            {\n                name: \"image_url\",\n                type: \"string\"\n            }\n        ]\n    }\n];\nconst DatabaseClient = (0,_xata_io_client__WEBPACK_IMPORTED_MODULE_0__.buildClient)();\nconst defaultOptions = {\n    databaseURL: \"https://Ubaydah-s-workspace-qb9vvt.us-east-1.xata.sh/db/bookly\"\n};\nclass XataClient extends DatabaseClient {\n    constructor(options){\n        super({\n            ...defaultOptions,\n            ...options\n        }, tables);\n    }\n}\nlet instance = undefined;\nconst getXataClient = ()=>{\n    if (instance) return instance;\n    instance = new XataClient();\n    return instance;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy94YXRhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdEQUF3RDtBQU0vQjtBQUV6QixNQUFNQyxTQUFTO0lBQ2I7UUFDRUMsTUFBTTtRQUNOQyxTQUFTO1lBQ1A7Z0JBQUVELE1BQU07Z0JBQVlFLE1BQU07Z0JBQVVDLFFBQVEsSUFBSTtZQUFDO1lBQ2pEO2dCQUFFSCxNQUFNO2dCQUFTRSxNQUFNO2dCQUFTQyxRQUFRLElBQUk7WUFBQztZQUM3QztnQkFBRUgsTUFBTTtnQkFBWUUsTUFBTTtZQUFTO1lBQ25DO2dCQUFFRixNQUFNO2dCQUFTRSxNQUFNO1lBQVM7U0FDakM7SUFDSDtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsU0FBUztZQUNQO2dCQUFFRCxNQUFNO2dCQUFTRSxNQUFNO1lBQVM7WUFDaEM7Z0JBQUVGLE1BQU07Z0JBQVVFLE1BQU07WUFBUztZQUNqQztnQkFBRUYsTUFBTTtnQkFBa0JFLE1BQU07WUFBTTtZQUN0QztnQkFBRUYsTUFBTTtnQkFBU0UsTUFBTTtZQUFTO1lBQ2hDO2dCQUFFRixNQUFNO2dCQUFZRSxNQUFNO2dCQUFRRSxNQUFNO29CQUFFQyxPQUFPO2dCQUFPO1lBQUU7WUFDMUQ7Z0JBQUVMLE1BQU07Z0JBQWFFLE1BQU07WUFBUztTQUNyQztJQUNIO0NBQ0Q7QUFnQkQsTUFBTUksaUJBQWlCUiw0REFBV0E7QUFFbEMsTUFBTVMsaUJBQWlCO0lBQ3JCQyxhQUFhO0FBQ2Y7QUFFTyxNQUFNQyxtQkFBbUJIO0lBQzlCSSxZQUFZQyxPQUEyQixDQUFFO1FBQ3ZDLEtBQUssQ0FBQztZQUFFLEdBQUdKLGNBQWM7WUFBRSxHQUFHSSxPQUFPO1FBQUMsR0FBR1o7SUFDM0M7QUFDRixDQUFDO0FBRUQsSUFBSWEsV0FBbUNDO0FBRWhDLE1BQU1DLGdCQUFnQixJQUFNO0lBQ2pDLElBQUlGLFVBQVUsT0FBT0E7SUFFckJBLFdBQVcsSUFBSUg7SUFDZixPQUFPRztBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rbHkvLi91dGlscy94YXRhLnRzPzVkNWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGJ5IFhhdGEgQ29kZWdlbiAwLjE4LjAuIFBsZWFzZSBkbyBub3QgZWRpdC5cbmltcG9ydCB7XG4gIEJhc2VDbGllbnRPcHRpb25zLFxuICBidWlsZENsaWVudCxcbiAgU2NoZW1hSW5mZXJlbmNlLFxuICBYYXRhUmVjb3JkLFxufSBmcm9tIFwiQHhhdGEuaW8vY2xpZW50XCI7XG5cbmNvbnN0IHRhYmxlcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiVXNlclwiLFxuICAgIGNvbHVtbnM6IFtcbiAgICAgIHsgbmFtZTogXCJ1c2VybmFtZVwiLCB0eXBlOiBcInN0cmluZ1wiLCB1bmlxdWU6IHRydWUgfSxcbiAgICAgIHsgbmFtZTogXCJlbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIHVuaXF1ZTogdHJ1ZSB9LFxuICAgICAgeyBuYW1lOiBcInBhc3N3b3JkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIHsgbmFtZTogXCJ0b2tlblwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQm9va1wiLFxuICAgIGNvbHVtbnM6IFtcbiAgICAgIHsgbmFtZTogXCJ0aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICB7IG5hbWU6IFwiYXV0aG9yXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIHsgbmFtZTogXCJ5ZWFyX3B1Ymxpc2hlZFwiLCB0eXBlOiBcImludFwiIH0sXG4gICAgICB7IG5hbWU6IFwiZ2VucmVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgeyBuYW1lOiBcImFkZGVkX2J5XCIsIHR5cGU6IFwibGlua1wiLCBsaW5rOiB7IHRhYmxlOiBcIlVzZXJcIiB9IH0sXG4gICAgICB7IG5hbWU6IFwiaW1hZ2VfdXJsXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICBdLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgU2NoZW1hVGFibGVzID0gdHlwZW9mIHRhYmxlcztcbmV4cG9ydCB0eXBlIEluZmVycmVkVHlwZXMgPSBTY2hlbWFJbmZlcmVuY2U8U2NoZW1hVGFibGVzPjtcblxuZXhwb3J0IHR5cGUgVXNlciA9IEluZmVycmVkVHlwZXNbXCJVc2VyXCJdO1xuZXhwb3J0IHR5cGUgVXNlclJlY29yZCA9IFVzZXIgJiBYYXRhUmVjb3JkO1xuXG5leHBvcnQgdHlwZSBCb29rID0gSW5mZXJyZWRUeXBlc1tcIkJvb2tcIl07XG5leHBvcnQgdHlwZSBCb29rUmVjb3JkID0gQm9vayAmIFhhdGFSZWNvcmQ7XG5cbmV4cG9ydCB0eXBlIERhdGFiYXNlU2NoZW1hID0ge1xuICBVc2VyOiBVc2VyUmVjb3JkO1xuICBCb29rOiBCb29rUmVjb3JkO1xufTtcblxuY29uc3QgRGF0YWJhc2VDbGllbnQgPSBidWlsZENsaWVudCgpO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9VYmF5ZGFoLXMtd29ya3NwYWNlLXFiOXZ2dC51cy1lYXN0LTEueGF0YS5zaC9kYi9ib29rbHlcIixcbn07XG5cbmV4cG9ydCBjbGFzcyBYYXRhQ2xpZW50IGV4dGVuZHMgRGF0YWJhc2VDbGllbnQ8RGF0YWJhc2VTY2hlbWE+IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IEJhc2VDbGllbnRPcHRpb25zKSB7XG4gICAgc3VwZXIoeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9LCB0YWJsZXMpO1xuICB9XG59XG5cbmxldCBpbnN0YW5jZTogWGF0YUNsaWVudCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGdldFhhdGFDbGllbnQgPSAoKSA9PiB7XG4gIGlmIChpbnN0YW5jZSkgcmV0dXJuIGluc3RhbmNlO1xuXG4gIGluc3RhbmNlID0gbmV3IFhhdGFDbGllbnQoKTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcbiJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsInRhYmxlcyIsIm5hbWUiLCJjb2x1bW5zIiwidHlwZSIsInVuaXF1ZSIsImxpbmsiLCJ0YWJsZSIsIkRhdGFiYXNlQ2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJkYXRhYmFzZVVSTCIsIlhhdGFDbGllbnQiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsInVuZGVmaW5lZCIsImdldFhhdGFDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/xata.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@xata.io/client":
/*!**********************************!*\
  !*** external "@xata.io/client" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("@xata.io/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();