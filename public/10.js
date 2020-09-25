(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./resources/js/components/courses/CourseList.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/courses/CourseList.js ***!
  \*******************************************************/
/*! exports provided: CourseList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseList", function() { return CourseList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CourseListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseListItem */ "./resources/js/components/courses/CourseListItem.js");
/* harmony import */ var _titles_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../titles/Title */ "./resources/js/components/titles/Title.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/actionTypes */ "./resources/js/redux/actions/actionTypes.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var CourseList = function CourseList(_ref) {
  var courses = _ref.courses;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(5),
      _useState4 = _slicedToArray(_useState3, 2),
      qtyList = _useState4[0],
      setQtyList = _useState4[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (store) {
    return store.coursesReducer.filter;
  }),
      software_id = _useSelector.software_id;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var handleInputChange = function handleInputChange(e) {
    setInput(e);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["default"].GET_SOFTWARE
    });
    return function () {
      window.onscroll = null;
    };
  }, []);

  window.onscroll = function sc(ev) {
    var set = function set() {
      setQtyList(qtyList + 5);
    };

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      set();
    }
  };

  var courseListJsx = courses.filter(function (course) {
    return software_id ? course.software_id === software_id : course;
  }).filter(function (course) {
    return course.title.toLowerCase().includes(input) || course.description.toLowerCase().includes(input);
  }).map(function (course, i) {
    if (i < qtyList) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseListItem__WEBPACK_IMPORTED_MODULE_1__["CourseListItem"], {
      key: course.id,
      course: course
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'search-bar-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    weight: 300,
    size: 18,
    text: "\u041D\u0430\u0439\u0434\u0435\u043D\u043E ".concat(courseListJsx.length, " \u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u0445 \u043A\u0443\u0440\u0441\u043E\u0432"),
    margin: '10px'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: 'search-input',
    value: input,
    onChange: function onChange(e) {
      return handleInputChange(e.target.value.toLowerCase());
    },
    placeholder: 'Кто ищет — тот всегда найдёт!'
  })), courseListJsx);
};

/***/ }),

/***/ "./resources/js/components/courses/CourseListItem.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/courses/CourseListItem.js ***!
  \***********************************************************/
/*! exports provided: CourseListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListItem", function() { return CourseListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./resources/js/components/courses/Image.jsx");
/* harmony import */ var _titles_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../titles/Title */ "./resources/js/components/titles/Title.jsx");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





function CourseListItem(_ref) {
  var course = _ref.course;

  function avgRating(reviews) {
    if (reviews.length < 1) return 0;
    var sum = 0;
    reviews.map(function (item) {
      sum += item.rev_rating;
    });
    return sum / reviews.length;
  }

  var bonus = course.bonus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'singleBadge'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/icons/archive.png",
    alt: "archive"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    size: '14px',
    weight: 300,
    text: "Бонус",
    margin: 0
  })) : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-list-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/portal/course/".concat(course.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
    path: course.image,
    title: course.title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'badges'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'singleBadge'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/icons/Group 1.png",
    alt: "clock"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    size: '14px',
    weight: 300,
    text: new Date(course.full_duration * 1000).toISOString().substr(11, 5),
    margin: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'singleBadge'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/icons/file-video-outline 1.png",
    alt: "file"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    size: '14px',
    weight: 300,
    text: course.lessons_qty + ' уроков',
    margin: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'singleBadge'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/icons/comment-account-outline 1.png",
    alt: "review"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    size: '14px',
    weight: 300,
    text: course.reviews.length + ' отзывов',
    margin: 0
  })), bonus, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'singleBadge'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/icons/account-voice.png",
    alt: "author"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    size: '14px',
    weight: 300,
    text: course.author.name,
    margin: 0
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'course-list-text-area'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/portal/course/".concat(course.id),
    style: {
      textDecoration: 'none',
      color: 'rgba(0, 0, 0, .85)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    text: course.title.toUpperCase(),
    margin: '0 20px',
    weight: 400,
    size: '22px'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    text: course.description,
    margin: '5px 0 0 20px',
    weight: 300,
    size: '18px'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    text: 'Вы научитесь:',
    margin: '5px 0 0 20px',
    weight: 400,
    size: '18px'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    text: course.what_will_learn,
    margin: '0 20px',
    weight: 300,
    size: '16px'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'course-list-rating'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default.a, {
    rating: avgRating(course.reviews),
    starRatedColor: "#F38300",
    starDimension: "25px",
    starSpacing: "1px",
    numberOfStars: 5,
    name: "rating"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    margin: '0 0 0 10px',
    size: '16px',
    weight: 300,
    text: "".concat(avgRating(course.reviews).toFixed(1), " \u0438\u0437 5 (").concat(course.reviews ? course.reviews.length : 0, ")")
  }))));
}

/***/ }),

/***/ "./resources/js/components/courses/CoursesPage.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/courses/CoursesPage.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoursesPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./resources/js/components/courses/Slider.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter */ "./resources/js/components/courses/Filter.js");
/* harmony import */ var _CourseList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CourseList */ "./resources/js/components/courses/CourseList.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/actionTypes */ "./resources/js/redux/actions/actionTypes.js");






function CoursesPage(_ref) {
  var courses = _ref.courses;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_5__["default"].GET_ALL_COURSES
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    courses: courses
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_2__["Filter"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseList__WEBPACK_IMPORTED_MODULE_3__["CourseList"], {
    courses: courses
  }));
}

/***/ }),

/***/ "./resources/js/components/courses/Filter.js":
/*!***************************************************!*\
  !*** ./resources/js/components/courses/Filter.js ***!
  \***************************************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _titles_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../titles/Title */ "./resources/js/components/titles/Title.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/actionCreators */ "./resources/js/redux/actions/actionCreators.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Filter() {
  var software = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (store) {
    return store.coursesReducer.software;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_4__["useParams"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      filterText = _useState2[0],
      setFilterText = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      dispatch(Object(_redux_actions_actionCreators__WEBPACK_IMPORTED_MODULE_3__["getCoursesBySoftware"])(''));
    };
  }, []);

  function handleFilterClick(item) {
    dispatch(Object(_redux_actions_actionCreators__WEBPACK_IMPORTED_MODULE_3__["getCoursesBySoftware"])(item.id));
    setFilterText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_1__["Title"], {
      size: '16px',
      weight: 300,
      text: 'Сбросить фильтр по ' + item.software,
      margin: 0
    }));
    params.value = 'kjl';
  }

  function handleResetClick() {
    dispatch(Object(_redux_actions_actionCreators__WEBPACK_IMPORTED_MODULE_3__["getCoursesBySoftware"])(''));
    setFilterText('');
  }

  var buttons = software.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'filter-button',
      key: item.id,
      onClick: function onClick() {
        return handleFilterClick(item);
      }
    }, item.software);
  });
  var resetFilters = filterText ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      marginTop: '15px'
    },
    className: 'filter-button',
    onClick: handleResetClick
  }, filterText) : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'text-center dark-container mt-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-around align-items-center"
  }, buttons), resetFilters);
}

/***/ }),

/***/ "./resources/js/components/courses/Image.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/courses/Image.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Image(_ref) {
  var path = _ref.path,
      title = _ref.title,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '300px' : _ref$size,
      margin = _ref.margin,
      _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? '5px' : _ref$borderRadius;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!path) {
      handleError();
    } else {
      setImage(path);
    }
  }, [path]);
  var styles = {
    width: size,
    height: size,
    borderRadius: borderRadius,
    objectFit: 'cover',
    margin: margin
  };

  function handleError(e) {
    setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onError: handleError,
    src: image,
    alt: title,
    style: styles
  });
}

/***/ }),

/***/ "./resources/js/components/courses/Slider.js":
/*!***************************************************!*\
  !*** ./resources/js/components/courses/Slider.js ***!
  \***************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _titles_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../titles/Title */ "./resources/js/components/titles/Title.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/history */ "./resources/js/utils/history.js");





var Slider = function Slider(_ref) {
  var courses = _ref.courses;
  var software_id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (store) {
    return store.coursesReducer.filter.software_id;
  });

  function handleImageClick(id) {
    _utils_history__WEBPACK_IMPORTED_MODULE_4__["history"].push("/portal/course/".concat(id));
  }

  var slidesList = courses.filter(function (course) {
    return software_id ? course.software_id === software_id : course;
  }).map(function (item) {
    return item.is_recommended && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "slide",
      onClick: function onClick() {
        return handleImageClick(item.id);
      },
      key: item.id,
      src: item.image,
      alt: item.title
    });
  });
  var settingsSlick = {
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'text-center dark-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_titles_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    text: "\u0420\u0415\u041A\u041E\u041C\u0415\u041D\u0414\u0423\u0415\u041C \u0418\u0417\u0423\u0427\u0418\u0422\u042C",
    size: '24px',
    weight: 400
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settingsSlick, slidesList));
};

/***/ }),

/***/ "./resources/js/components/titles/Title.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/titles/Title.jsx ***!
  \**************************************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Title(_ref) {
  var text = _ref.text,
      size = _ref.size,
      weight = _ref.weight,
      margin = _ref.margin,
      fontStyle = _ref.fontStyle,
      textAlign = _ref.textAlign,
      cursor = _ref.cursor;
  var styles = {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontWeight: weight,
    fontSize: size,
    padding: '0',
    margin: margin,
    fontStyle: fontStyle,
    textAlign: textAlign,
    cursor: cursor
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: styles
  }, text);
}

/***/ }),

/***/ "./resources/js/redux/actions/actionCreators.js":
/*!******************************************************!*\
  !*** ./resources/js/redux/actions/actionCreators.js ***!
  \******************************************************/
/*! exports provided: getCoursesBySoftware, getCourseById, sendReview, getReviewsByUserId, getReviewsByCourseId, deleteReview, createStudiedCourse, updateStudiedCourse, deleteStudiedCourse, sendChatMessage, sendPrivateMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoursesBySoftware", function() { return getCoursesBySoftware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourseById", function() { return getCourseById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendReview", function() { return sendReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReviewsByUserId", function() { return getReviewsByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReviewsByCourseId", function() { return getReviewsByCourseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReview", function() { return deleteReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStudiedCourse", function() { return createStudiedCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudiedCourse", function() { return updateStudiedCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteStudiedCourse", function() { return deleteStudiedCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendChatMessage", function() { return sendChatMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendPrivateMessage", function() { return sendPrivateMessage; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./resources/js/redux/actions/actionTypes.js");

var getCoursesBySoftware = function getCoursesBySoftware(software_id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_COURSES_BY_SOFTWARE,
    software_id: software_id
  };
};
var getCourseById = function getCourseById(id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_COURSE_BY_ID,
    id: id
  };
};
var sendReview = function sendReview(review) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEND_REVIEW,
    review: review
  };
};
var getReviewsByUserId = function getReviewsByUserId(id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REVIEWS_BY_USER_ID,
    id: id
  };
};
var getReviewsByCourseId = function getReviewsByCourseId(id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REVIEWS_BY_COURSE_ID,
    id: id
  };
};
var deleteReview = function deleteReview(id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_REVIEW,
    id: id
  };
};
var createStudiedCourse = function createStudiedCourse(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CREATE_STUDIED_COURSE,
    data: data
  };
};
var updateStudiedCourse = function updateStudiedCourse(id, data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_STUDIED_COURSE,
    id: id,
    data: data
  };
};
var deleteStudiedCourse = function deleteStudiedCourse(id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_STUDIED_COURSE,
    id: id
  };
};
var sendChatMessage = function sendChatMessage(message) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEND_CHAT_MESSAGE,
    message: message
  };
};
var sendPrivateMessage = function sendPrivateMessage(message, recipientId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEND_PRIVATE_MESSAGE,
    recipient: recipientId,
    message: message
  };
};
/*


export const setCurrentDate = date => ({
    type: ACTIONS.SET_CURRENT_DATE,
    date,
});

export const setCurrentEventId = id => ({
    type: ACTIONS.SET_CURRENT_EVENT_ID,
    id,
});

export const editEvent = (id, event) => ({
    type: ACTIONS.EDIT_EVENT,
    id,
    event,
});
*/

/***/ })

}]);