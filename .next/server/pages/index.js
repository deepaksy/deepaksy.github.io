module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "+wZM":
/***/ (function(module, exports) {

module.exports = require("react-icons/si");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "8WuN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigationAction");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9oDC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


let customTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  typography: {
    fontFamily: "'DM Sans', 'sans-serif'"
  },
  palette: {
    type: "dark",
    primary: {
      main: '#ff5252'
    },
    secondary: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["grey"][800]
    }
  }
});
customTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(customTheme);
/* harmony default export */ __webpack_exports__["a"] = (customTheme);

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "E9fQ":
/***/ (function(module, exports) {

module.exports = require("html-to-text");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Hh55":
/***/ (function(module, exports) {

module.exports = require("react-icons/im");

/***/ }),

/***/ "JH4w":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigation");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "PxrZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/BottomNavigation"
var BottomNavigation_ = __webpack_require__("JH4w");
var BottomNavigation_default = /*#__PURE__*/__webpack_require__.n(BottomNavigation_);

// EXTERNAL MODULE: external "@material-ui/core/BottomNavigationAction"
var BottomNavigationAction_ = __webpack_require__("8WuN");
var BottomNavigationAction_default = /*#__PURE__*/__webpack_require__.n(BottomNavigationAction_);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// CONCATENATED MODULE: ./components/AppBottomNavigation.js








const useStyles = Object(styles_["makeStyles"])({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  },
  scrollspy: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  }
});
function AppBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = external_react_default.a.useState(0);
  const {
    0: elements,
    1: setElements
  } = Object(external_react_["useState"])(null);
  const sections = ["about", "skills", "projects", "blogs"];
  Object(external_react_["useEffect"])(() => {
    const _elements = [];
    sections.forEach(sectionId => {
      _elements.push(document.querySelector("#" + sectionId));
    });
    setElements(_elements);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scrollspy_default.a, {
    items: sections,
    className: classes.scrollspy,
    onUpdate: section => {
      setValue(sections.indexOf(section.id));
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(BottomNavigation_default.a, {
      value: value,
      onChange: (event, newValue) => {
        setValue(newValue);

        if (elements !== null) {
          elements[newValue].scrollIntoView();
        }
      },
      showLabels: true,
      className: classes.root,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(BottomNavigationAction_default.a, {
        label: "About",
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["Person"], {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BottomNavigationAction_default.a, {
        label: "Skills",
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["BubbleChart"], {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BottomNavigationAction_default.a, {
        label: "Projects",
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["Laptop"], {})
      })]
    })
  });
}
// CONCATENATED MODULE: ./components/Copyright.js




const Copyright_useStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    padding: 20
  }
}));
function Copyright() {
  const classes = Copyright_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
    container: true,
    className: classes.root,
    justify: "center",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
        variant: "body2",
        color: "textSecondary",
        align: "center",
        size: "2px",
        children: ["This project is made with the reference of the project made by Suvansh Rana.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Copyright © Suvansh Rana ", new Date().getFullYear(), "."]
      })
    })
  });
}
// CONCATENATED MODULE: ./components/Margin.js


function Margin({
  count = 1
}) {
  const margin = 14 * count;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      margin
    }
  });
}
// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__("YeXC");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__("PxrZ");
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__("thJL");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__("s051");
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "html-to-text"
var external_html_to_text_ = __webpack_require__("E9fQ");

// CONCATENATED MODULE: ./components/OuterLink.js



function OuterLink(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    href: props.link,
    target: "_blank",
    rel: "noopener noreferrer",
    children: props.children
  });
}

/* harmony default export */ var components_OuterLink = (OuterLink);
// CONCATENATED MODULE: ./components/BlogCard.js














const BlogCard_useStyles = Object(styles_["makeStyles"])({
  root: {
    maxWidth: 345,
    marginTop: 20
  },
  media: {
    objectFit: "contain",
    height: 210,
    backgroundColor: "#2b2b2b"
  },
  button: {
    padding: 10,
    letterSpacing: 0.45
  },
  cardAction: {
    padding: "10px 15px"
  },
  categoryChip: {
    margin: "4px 3px",
    lineHeight: 1.9
  }
});
function BlogCard({
  title,
  description,
  thumbnail,
  categories,
  link
}) {
  const classes = BlogCard_useStyles();
  Object(external_react_["useEffect"])(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const images = document.querySelectorAll("img");
      images.forEach(image => {
        image.ondragstart = function (ev) {
          ev.preventDefault();
        };
      });
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card_default.a, {
    className: classes.root,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardMedia_default.a, {
      component: "img",
      height: "140",
      image: thumbnail,
      className: classes.media,
      alt: title,
      title: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardContent_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
        gutterBottom: true,
        variant: "h5",
        component: "h2",
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Margin, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: categories.map((category, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Chip"], {
          size: "small",
          className: classes.categoryChip,
          label: category,
          variant: "outlined",
          component: "span"
        }, `category-chip-${index}`))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Margin, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Typography_default.a, {
        variant: "body2",
        color: "textSecondary",
        component: "p",
        children: [Object(external_html_to_text_["htmlToText"])(description.slice(0, 200), {
          limits: {
            maxInputLength: 200
          }
        }), "... "]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardActions_default.a, {
      className: classes.cardAction,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
        container: true,
        justify: "flex-end",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_OuterLink, {
            link: link,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
              size: "small",
              color: "primary",
              className: classes.button,
              children: "Read"
            })
          })
        })
      })
    })]
  });
}
// CONCATENATED MODULE: ./sections/BlogSection.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function BlogSection({
  blogsData
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Container"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
      container: true,
      justify: "center",
      spacing: 3,
      children: blogsData.items.map((blogData, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogCard, _objectSpread({}, blogData))
      }, `blog-card-${index}`))
    })
  });
}
// EXTERNAL MODULE: ./customTheme.js
var customTheme = __webpack_require__("9oDC");

// CONCATENATED MODULE: ./components/SkillChip.js





const SkillChip_useStyles = Object(core_["makeStyles"])({
  skillIcon: {
    height: 18,
    width: 18
  },
  skillChip: {
    margin: "4px 3px"
  }
});

function SkillChip({
  name,
  SkillIcon,
  about_link
}) {
  const classes = SkillChip_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_OuterLink, {
    link: about_link,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Chip"], {
      variant: "outlined",
      avatar: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SkillIcon, {
        className: classes.skillIcon,
        color: customTheme["a" /* default */].palette.primary.light
      }),
      className: classes.skillChip,
      label: name,
      onClick: () => null
    })
  });
}

/* harmony default export */ var components_SkillChip = (SkillChip);
// CONCATENATED MODULE: ./components/DomainListItem.js



function DomainListItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DomainListItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DomainListItem_ownKeys(Object(source), true).forEach(function (key) { DomainListItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DomainListItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DomainListItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const DomainListItem_useStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    minWidth: 345,
    [theme.breakpoints.down("xs")]: {
      minWidth: 310
    }
  },
  avatar: {
    backgroundColor: customTheme["a" /* default */].palette.primary.main
  },
  chipsContainer: {
    marginTop: 17
  },
  listItemPrimaryText: {
    fontSize: "1.4em"
  }
}));
function DomainListItem({
  name,
  icon,
  skills
}) {
  const classes = DomainListItem_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Paper"], {
    elevation: 2,
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemAvatar"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Avatar"], {
          className: classes.avatar,
          children: icon
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
        primary: name,
        primaryTypographyProps: {
          className: classes.listItemPrimaryText
        },
        secondaryTypographyProps: {
          component: "div"
        },
        secondary: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.chipsContainer,
          children: skills.map((skillData, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_SkillChip, DomainListItem_objectSpread({}, skillData), `skill-chip-${index}`))
        })
      })]
    })
  });
}
// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__("+wZM");

// EXTERNAL MODULE: external "react-icons/di"
var di_ = __webpack_require__("Yz+/");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "react-icons/im"
var im_ = __webpack_require__("Hh55");

// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__("UhKp");

// CONCATENATED MODULE: ./data/domainData.js










const domainData = [{
  name: "Web Development",
  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiGlobe"], {}),
  skills: [{
    name: "Django",
    SkillIcon: si_["SiDjango"],
    about_link: "https://en.wikipedia.org/wiki/Django_(web_framework)"
  }, {
    name: "React.js",
    SkillIcon: fa_["FaReact"],
    about_link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)"
  }]
}, {
  name: "Mobile development",
  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(im_["ImMobile2"], {}),
  skills: [{
    SkillIcon: fa_["FaJava"],
    name: "Java",
    about_link: "https://www.java.com"
  }]
}, {
  name: "Programming Languages",
  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(io5_["IoCodeSlash"], {}),
  skills: [{
    name: "Python",
    SkillIcon: io5_["IoLogoPython"],
    about_link: "https://en.wikipedia.org/wiki/Python_(programming_language)"
  }, {
    name: "Javascript",
    SkillIcon: di_["DiJavascript1"],
    about_link: "https://en.wikipedia.org/wiki/JavaScript"
  }]
}, {
  name: "Other skills and hobbies",
  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(io5_["IoCodeSlash"], {}),
  skills: [{
    name: "photography",
    SkillIcon: fa_["FaCameraRetro"],
    about_link: "https://www.instagram.com/_deepak28/"
  }, {
    name: "Video making",
    SkillIcon: fi_["FiYoutube"],
    about_link: "https://www.youtube.com/channel/UClbT0IelMmmczzU7ozkNNcQ"
  }]
}];
/* harmony default export */ var data_domainData = (domainData);
// CONCATENATED MODULE: ./sections/DomainSection.js


function DomainSection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DomainSection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DomainSection_ownKeys(Object(source), true).forEach(function (key) { DomainSection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DomainSection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DomainSection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function DomainSection() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
    container: true,
    justify: "center",
    spacing: 3,
    children: data_domainData.map((_domainData, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DomainListItem, DomainSection_objectSpread({}, _domainData))
    }, `domain-item-${index}`))
  });
}
// CONCATENATED MODULE: ./components/MyAvatar.js



const MyAvatar_useStyles = Object(core_["makeStyles"])(theme => ({
  photo: {
    height: 200,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      height: 180,
      width: 180
    },
    margin: "auto",
    borderRadius: 30
  }
}));

function MyAvatar({
  src
}) {
  const classes = MyAvatar_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Paper"], {
    elevation: 4,
    className: classes.photo,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: src,
      className: classes.photo,
      alt: "Suvansh Rana"
    })
  });
}

/* harmony default export */ var components_MyAvatar = (MyAvatar);
// CONCATENATED MODULE: ./components/SocialLinkButton.js




const SocialLinkButton_useStyles = Object(core_["makeStyles"])({
  fab: {
    margin: 5
  }
});

function SocialLinkButton({
  icon,
  link
}) {
  const classes = SocialLinkButton_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_OuterLink, {
    link: link,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Fab"], {
      color: "primary",
      size: "medium",
      className: classes.fab,
      elevation: 5,
      children: icon
    })
  });
}

/* harmony default export */ var components_SocialLinkButton = (SocialLinkButton);
// EXTERNAL MODULE: ./data/profileData.js
var profileData = __webpack_require__("cPHK");

// CONCATENATED MODULE: ./sections/ProfileSection.js



function ProfileSection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProfileSection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProfileSection_ownKeys(Object(source), true).forEach(function (key) { ProfileSection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProfileSection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProfileSection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ProfileSection_useStyles = Object(core_["makeStyles"])(theme => ({
  background: {
    backgroundImage: `url(${profileData["a" /* default */].backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  profileContainer: {
    padding: "50px 0"
  },
  name: {
    color: "#fff",
    padding: "0 10px",
    textShadow: "0.5px 2px 2px #545454, 0 1px 3px #545454",
    letterSpacing: "0.5px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20
    }
  },
  about: {
    fontSize: "1.35em",
    color: "#fcfcfc",
    padding: "0 10px",
    marginTop: 10,
    textShadow: "0.5px 2px 2px #545454, 0 1px 3px #545454",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.15em"
    }
  },
  socialContainer: {
    marginTop: 10,
    padding: "0 10px"
  },
  centerOnSmallScreen: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center"
    }
  }
}));
function ProfileSection({}) {
  const classes = ProfileSection_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
    container: true,
    alignItems: "center",
    className: classes.background,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
      xs: 12,
      item: true,
      className: classes.profileContainer,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Container"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Grid"], {
          container: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Grid"], {
            item: true,
            xs: 12,
            md: 8,
            className: classes.centerOnSmallScreen,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Hidden"], {
              mdUp: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_MyAvatar, {
                src: profileData["a" /* default */].avatar
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
              variant: "h2",
              className: classes.name,
              children: profileData["a" /* default */].name
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
              variant: "subtitle1",
              className: classes.about,
              component: "p",
              children: profileData["a" /* default */].about
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.socialContainer,
              children: profileData["a" /* default */].links.map((linkData, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_SocialLinkButton, ProfileSection_objectSpread({}, linkData), `social-link-button-${index}`))
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
            item: true,
            container: true,
            justify: "center",
            xs: 12,
            md: 4,
            className: classes.centerOnSmallScreen,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Hidden"], {
              smDown: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_MyAvatar, {
                src: profileData["a" /* default */].avatar
              })
            })
          })]
        })
      })
    })
  });
}
// CONCATENATED MODULE: ./components/ProjectCard.js













const ProjectCard_useStyles = Object(styles_["makeStyles"])({
  root: {
    maxWidth: 345,
    marginTop: 20
  },
  media: {
    objectFit: "contain",
    height: 210,
    backgroundColor: "#2b2b2b"
  },
  button: {
    padding: 10,
    letterSpacing: 0.45
  },
  cardAction: {
    padding: "10px 15px"
  },
  tagChip: {
    margin: "4px 3px",
    lineHeight: 1.9
  }
});
function ProjectCard({
  name,
  description,
  coverImage,
  tags,
  projectLink,
  githubLink
}) {
  const classes = ProjectCard_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card_default.a, {
    className: classes.root,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardMedia_default.a, {
      component: "img",
      height: "140",
      image: coverImage,
      className: classes.media,
      alt: name,
      title: name
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardContent_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
        gutterBottom: true,
        variant: "h5",
        component: "h2",
        children: name
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Margin, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: tags.map((tag, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Chip"], {
          className: classes.tagChip,
          size: "small",
          label: tag,
          variant: "outlined",
          component: "span"
        }, `tag-chip-${index}`))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Margin, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
        variant: "body2",
        color: "textSecondary",
        component: "p",
        children: description
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardActions_default.a, {
      className: classes.cardAction,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Grid"], {
        container: true,
        justify: "flex-end",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_OuterLink, {
            link: githubLink,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
              className: classes.button,
              size: "small",
              color: "primary",
              children: "Github"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_OuterLink, {
            link: projectLink,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
              size: "small",
              color: "primary",
              className: classes.button,
              children: "Project"
            })
          })
        })]
      })
    })]
  });
}
// CONCATENATED MODULE: ./data/projectData.js
const projectData = [{
  name: "Portfolio",
  description: "This one,which you are looking at!",
  coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjQoh5x5asvSCdwceqoE_-RWNcB6l41VxBQ&usqp=CAU",
  projectLink: "#",
  githubLink: "https://github.com/deepaksy/portfolio",
  tags: ["React", "django", "materialize-css"]
}, {
  name: "Myawesomecart",
  description: "Its currelty on development. coming soon!",
  coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXsrYU5zILyuq9jcltbVpjUf5L_bdP9fruNRNNOwyUvcM-LLgDu3euFqz2OpV7iyBwXs&usqp=CAU",
  tags: ["djangoreastframework", "django"],
  projectLink: "",
  githubLink: "https://github.com/deepaksy/mac"
}];
/* harmony default export */ var data_projectData = (projectData);
// CONCATENATED MODULE: ./sections/ProjectSection.js


function ProjectSection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProjectSection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProjectSection_ownKeys(Object(source), true).forEach(function (key) { ProjectSection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProjectSection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProjectSection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function ProjectSection() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Container"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
      container: true,
      justify: "center",
      spacing: 3,
      children: data_projectData.map((_projectData, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProjectCard, ProjectSection_objectSpread({}, _projectData))
      }, `project-card-${index}`))
    })
  });
}

/* harmony default export */ var sections_ProjectSection = (ProjectSection);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/index.js












async function getStaticProps() {
  const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@suvansh_rana");
  const blogsData = await res.json();
  return {
    props: {
      blogsData
    },
    revalidate: 60 * 60 * 12
  };
}

function App({
  blogsData
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "App",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "about",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProfileSection, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Container"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Margin, {
          count: 2
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          id: "skills",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            variant: "h4",
            children: "Skills"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Margin, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DomainSection, {})]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Margin, {
          count: 2
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          id: "projects",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            variant: "h4",
            children: "Projects"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Margin, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sections_ProjectSection, {})]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Margin, {
          count: 2
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Copyright, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Hidden"], {
        mdUp: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Margin, {
          count: 4
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AppBottomNavigation, {})]
      })]
    })]
  });
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UhKp":
/***/ (function(module, exports) {

module.exports = require("react-icons/io5");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "Yz+/":
/***/ (function(module, exports) {

module.exports = require("react-icons/di");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPHK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5mtF");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


const profileData = {
  name: "Deepak suryawanshi",
  avatar: "./profile.webp",
  backgroundImage: "./img.webp",
  about: "A Tech enthusiast and a computer science undergraduate. I love to explore things and listening to music. Looking forward to work with passionate developers",
  meta: {
    title: "Deepak's Portfolio",
    url: "https://suvansh-rana.github.io",
    tags: ["developer", "portfolio", "profile", "web-developer", "python", "react.js", "django", "python", "firebase", "flutter", "engineer"]
  },
  links: [{
    icon: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGithub"], {
      size: "28px"
    }),
    link: "https://github.com/deepaksy"
  }, {
    icon: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLinkedin"], {
      size: "28px"
    }),
    link: "https://www.linkedin.com/in/deepak-suryawanshi-740546198/"
  }, {
    icon: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaTwitter"], {
      size: "28px"
    }),
    link: "https://twitter.com/@blazing_deepak"
  }, {
    icon: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFacebook"], {
      size: "28px"
    }),
    link: "https://github.com/deepaksy"
  }, {
    icon: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaInstagram"], {
      size: "28px"
    }),
    link: "https://www.instagram.com/_deepak28/"
  }, {
    icon: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaYoutube"], {
      size: "28px"
    }),
    link: "https://www.youtube.com/channel/UClbT0IelMmmczzU7ozkNNcQ"
  }]
};
/* harmony default export */ __webpack_exports__["a"] = (profileData);

/***/ }),

/***/ "s051":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });