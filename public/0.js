(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/components/admin/Courses.js":
/*!**************************************************!*\
  !*** ./resources/js/components/admin/Courses.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Courses; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/actionTypes */ "./resources/js/redux/actions/actionTypes.js");
/* harmony import */ var _images_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Image */ "./resources/js/components/images/Image.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_truncateText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/truncateText */ "./resources/js/utils/truncateText.js");
/* harmony import */ var _courses_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../courses/Preloader */ "./resources/js/components/courses/Preloader.jsx");
/* harmony import */ var _EditCourse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditCourse */ "./resources/js/components/admin/EditCourse.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Courses(_ref) {
  var scrollMultiplier = _ref.scrollMultiplier,
      search = _ref.search;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (store) {
    return store.coursesReducer;
  }),
      courses = _useSelector.courses,
      isLoading = _useSelector.isLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["default"].GET_ALL_COURSES
    });
  }, []);

  var handleEditClick = function handleEditClick(courseId) {
    setModal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditCourse__WEBPACK_IMPORTED_MODULE_7__["EditCourse"], {
      id: courseId,
      setModal: setModal
    }));
  };

  var coursesJsx = courses.filter(function (course) {
    return course.id.toString().includes(search) || course.title.toLowerCase().includes(search) || course.description.toLowerCase().includes(search) || course.author.name.toLowerCase().includes(search) || course.level.level.toLowerCase().includes(search) || course.software.software.toLowerCase().includes(search);
  }).map(function (course, i) {
    if (i > scrollMultiplier * 10) return;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: course.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "row"
    }, course.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
      path: course.image,
      size: "80px",
      title: course.title
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      onClick: function onClick() {
        return handleEditClick(course.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "fas fa-edit text-warning"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, course.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(_utils_truncateText__WEBPACK_IMPORTED_MODULE_5__["truncateText"])(course.description, 10)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, course.author.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, course.full_duration), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, course.lessons_qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(_utils_truncateText__WEBPACK_IMPORTED_MODULE_5__["truncateText"])(course.what_will_learn, 10)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Object(_utils_truncateText__WEBPACK_IMPORTED_MODULE_5__["truncateText"])(course.requirements, 10)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, course.is_recommended ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "fas fa-check-circle text-success"
    }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, course.level.level), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, course.software.software), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, course.views), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, moment__WEBPACK_IMPORTED_MODULE_4___default()(course.created_at).format('DD-MM-YYYY HH:mm')));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_courses_Preloader__WEBPACK_IMPORTED_MODULE_6__["Preloader"], null), modal, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-bordered table-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u0418\u0437\u043E\u0431\u0440."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u0420\u0435\u0434."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u0410\u0432\u0442\u043E\u0440"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u0423\u0440\u043E\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u041F\u043E\u043B\u044C\u0437\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u0423\u0440\u043E\u0432\u0435\u043D\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u041F\u041E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "\u0421\u043E\u0437\u0434\u0430\u043D"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, coursesJsx)));
}

/***/ }),

/***/ "./resources/js/components/admin/EditCourse.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/EditCourse.js ***!
  \*****************************************************/
/*! exports provided: EditCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourse", function() { return EditCourse; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/actionCreators */ "./resources/js/redux/actions/actionCreators.js");
/* harmony import */ var _images_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Image */ "./resources/js/components/images/Image.jsx");
/* harmony import */ var _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/actionTypes */ "./resources/js/redux/actions/actionTypes.js");
/* harmony import */ var _courses_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../courses/Preloader */ "./resources/js/components/courses/Preloader.jsx");
/* harmony import */ var _buttons_FlatButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buttons/FlatButton */ "./resources/js/components/buttons/FlatButton.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function EditCourse(_ref) {
  var id = _ref.id,
      setModal = _ref.setModal;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (store) {
    return store.coursesReducer;
  }),
      currentCourse = _useSelector.currentCourse,
      isLoading = _useSelector.isLoading;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (store) {
    return store.coursesLevelsReducer;
  }),
      levels = _useSelector2.levels;

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (store) {
    return store.softwareReducer;
  }),
      software = _useSelector3.software;

  var _useSelector4 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (store) {
    return store.userReducer;
  }),
      users = _useSelector4.users;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: '',
    description: '',
    file: '',
    lessonsQty: '',
    fullDuration: '',
    whatWillLearn: '',
    requirements: '',
    isRecommended: '',
    levelId: '',
    softwareId: '',
    views: '',
    bonus: '',
    authorId: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      localState = _useState2[0],
      setLocalState = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_actions_actionCreators__WEBPACK_IMPORTED_MODULE_2__["getCourseById"])(id));
    dispatch({
      type: _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["default"].GET_ALL_COURSES_LEVELS
    });
    dispatch({
      type: _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["default"].GET_SOFTWARE
    });
    dispatch({
      type: _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["default"].GET_ALL_USERS
    });
  }, []);

  var handleFileChange = function handleFileChange(e) {
    var file = e.target.files || e.dataTransfer.files;
    createImage(file[0]);
  };

  function createImage(file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        file: e.target.result
      }));
    };

    reader.readAsDataURL(file);
  }

  var handleSaveClick = function handleSaveClick() {
    dispatch(Object(_redux_actions_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateCourse"])(id, localState));
    setModal('');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-modal-container"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_courses_Preloader__WEBPACK_IMPORTED_MODULE_5__["Preloader"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-modal-window"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "fas fa-times align-self-end text-danger position-fixed",
    onClick: function onClick() {
      return setModal('');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: localState.file || currentCourse.image,
    size: "150px",
    margin: "0 20px 0 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    onChange: handleFileChange
  })), "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    defaultValue: currentCourse.title,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        title: e.target.value
      }));
    }
  }), "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    style: {
      minHeight: '100px'
    },
    defaultValue: currentCourse.description,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        description: e.target.value
      }));
    }
  }), "\u041A\u043E\u043B-\u0432\u043E \u0443\u0440\u043E\u043A\u043E\u0432:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    defaultValue: currentCourse.lessons_qty,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        lessonsQty: e.target.value
      }));
    }
  }), "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    defaultValue: currentCourse.full_duration,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        fullDuration: e.target.value
      }));
    }
  }), "\u0427\u0435\u043C\u0443 \u043D\u0430\u0443\u0447\u0438\u0442:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    style: {
      minHeight: '100px'
    },
    defaultValue: currentCourse.what_will_learn,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        whatWillLearn: e.target.value
      }));
    }
  }), "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    style: {
      minHeight: '100px'
    },
    defaultValue: currentCourse.requirements,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        requirements: e.target.value
      }));
    }
  }), "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: currentCourse.is_recommended,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        isRecommended: e.target.value
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0"
  }, "\u041E\u0431\u044B\u0447\u043D\u044B\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "1"
  }, "\u0420\u0435\u043A\u043E\u043C\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u044B\u0439")), "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: currentCourse.level_id,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        levelId: e.target.value
      }));
    }
  }, levels.map(function (level) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: level.id,
      value: level.id
    }, level.level);
  })), "\u0421\u043E\u0444\u0442:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: currentCourse.software_id,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        softwareId: e.target.value
      }));
    }
  }, software.map(function (soft) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: soft.id,
      value: soft.id
    }, soft.software);
  })), "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u044B:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    defaultValue: currentCourse.views,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        views: e.target.value
      }));
    }
  }), "\u0411\u043E\u043D\u0443\u0441:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: currentCourse.bonus,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        bonus: e.target.value
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0"
  }, "\u041D\u0435\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "1"
  }, "\u0415\u0441\u0442\u044C")), "\u0410\u0432\u0442\u043E\u0440:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: currentCourse.author_id,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        authorId: e.target.value
      }));
    }
  }, users.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: user.id,
      value: user.id
    }, user.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons_FlatButton__WEBPACK_IMPORTED_MODULE_6__["FlatButton"], {
    name: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
    width: "160px",
    height: "40px",
    className: "m-auto",
    onClick: handleSaveClick
  })));
}

/***/ })

}]);