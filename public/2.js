(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/components/admin/EditUser.js":
/*!***************************************************!*\
  !*** ./resources/js/components/admin/EditUser.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditUser; });
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








function EditUser(_ref) {
  var id = _ref.id,
      setModal = _ref.setModal;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (store) {
    return store.userReducer;
  }),
      user = _useSelector.user,
      isLoading = _useSelector.isLoading;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (store) {
    return store.rolesReducer;
  }),
      roles = _useSelector2.roles;

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (store) {
    return store.usersLevelsReducer;
  }),
      levels = _useSelector3.levels;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    file: '',
    role_id: '',
    level_id: '',
    additional: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      localState = _useState2[0],
      setLocalState = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_actions_actionCreators__WEBPACK_IMPORTED_MODULE_2__["getUserById"])(id));
    dispatch({
      type: _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["default"].GET_ALL_ROLES
    });
    dispatch({
      type: _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["default"].GET_ALL_USERS_LEVELS
    });
  }, []); //if(isLoading) return <Preloader/>;

  var handleFileChange = function handleFileChange(e) {
    var file = e.target.files || e.dataTransfer.files;
    var reader = new FileReader();

    reader.onload = function (e) {
      setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        file: e.target.result
      }));
    };

    reader.readAsDataURL(file[0]);
  };

  var handleSaveClick = function handleSaveClick() {
    dispatch(Object(_redux_actions_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateUser"])(user.id, localState));
    setModal('');
  };

  var roleSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: user.role_id,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        role_id: e.target.value
      }));
    }
  }, roles.map(function (role) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: role.id,
      value: role.id
    }, role.role);
  }));
  var levelSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: user.level_id,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        level_id: e.target.value
      }));
    }
  }, levels.map(function (level) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: level.id,
      value: level.id
    }, level.user_level);
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-modal-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-modal-window"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "fas fa-times align-self-end text-danger position-fixed",
    onClick: function onClick() {
      return setModal('');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: localState.file || user.avatar,
    size: "150px",
    margin: "0 20px 0 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    onChange: handleFileChange
  })), "\u0418\u043C\u044F:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    defaultValue: user.name,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        name: e.target.value
      }));
    }
  }), "\u0420\u043E\u043B\u044C:", roleSelector, "\u0423\u0440\u043E\u0432\u0435\u043D\u044C:", levelSelector, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    cols: "30",
    rows: "3",
    defaultValue: user.additional,
    onChange: function onChange(e) {
      return setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        additional: e.target.value
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons_FlatButton__WEBPACK_IMPORTED_MODULE_6__["FlatButton"], {
    name: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
    width: "160px",
    height: "40px",
    className: "m-auto",
    onClick: handleSaveClick
  })));
}

/***/ })

}]);