/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_scrollImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollImg */ \"./src/modules/scrollImg.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/command */ \"./src/modules/command.js\");\n/* harmony import */ var _modules_validateForms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/validateForms */ \"./src/modules/validateForms.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\nvar carousel = new SliderCarousel({\n  main: '.companies-wrapper',\n  wrap: '.companies-hor'\n});\ncarousel.init();\n\n\n\n\n\n\n\n\n\n // Таймер\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('19 march 2021'); // Меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); // popUp\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)(); // scroll btn img\n\n(0,_modules_scrollImg__WEBPACK_IMPORTED_MODULE_3__.default)(); // Табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__.default)(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)(); //калькулятор\n\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__.default)(); // \"наша команда\"\n\n(0,_modules_command__WEBPACK_IMPORTED_MODULE_7__.default)(); // формы (валидация)\n\n(0,_modules_validateForms__WEBPACK_IMPORTED_MODULE_8__.default)(); // send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__.default)();\n\n//# sourceURL=webpack://GitHub/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculator = function calculator() {\n  var calcBlock = document.querySelector('.calc-block');\n  calcBlock.addEventListener('input', function (event) {\n    if (event.target.tagName.toLowerCase === 'input') {\n      event.target.value = event.target.value.replace(/\\D/, '');\n    }\n  });\n\n  var calc = function calc() {\n    var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n    var calcType = document.querySelector('.calc-type'),\n        calcSquare = document.querySelector('.calc-square'),\n        calcDay = document.querySelector('.calc-day'),\n        calcCount = document.querySelector('.calc-count'),\n        totalValue = document.getElementById('total');\n    var interval;\n\n    var countSum = function countSum() {\n      var total = 0,\n          countValue = 1,\n          dayValue = 1;\n      var typeValue = calcType.options[calcType.selectedIndex].value,\n          squareValue = +calcSquare.value;\n\n      if (calcCount.value > 1) {\n        countValue += (calcCount.value - 1) / 10;\n      }\n\n      if (calcDay.value && calcDay.value < 5) {\n        dayValue *= 2;\n      } else if (calcDay.value && calcDay.value < 10) {\n        dayValue *= 1.5;\n      }\n\n      if (typeValue && squareValue) {\n        total = Math.floor(price * typeValue * squareValue * countValue * dayValue);\n      }\n\n      return total;\n    };\n\n    var animation = function animation(event) {\n      var target = event.target,\n          total = countSum();\n      var count = totalValue.textContent ? +totalValue.textContent : 0;\n\n      if (target.matches('select') || target.matches('input')) {\n        var debounce = function debounce(f, t) {\n          return function (args) {\n            var previousCall = this.lastCall;\n            this.lastCall = Date.now();\n\n            if (previousCall && this.lastCall - previousCall <= t) {\n              clearTimeout(this.lastCallTimer);\n            }\n\n            this.lastCallTimer = setTimeout(function () {\n              return f(args);\n            }, t);\n          };\n        };\n\n        var wrapperAnimated = function wrapperAnimated() {\n          cancelAnimationFrame(interval);\n\n          var animatedTotalValue = function animatedTotalValue() {\n            interval = requestAnimationFrame(animatedTotalValue);\n\n            if (count !== total) {\n              if (count < total) {\n                if (total - count < 20) {\n                  count++;\n                } else {\n                  count += Math.floor((total - count) / 5);\n                }\n              } else {\n                if (total === 0) {\n                  count = 0;\n                } else {\n                  if (count - total < 20) {\n                    count--;\n                  } else {\n                    count -= Math.floor((count - total) / 5);\n                  }\n                }\n              }\n\n              totalValue.textContent = count;\n            } else {\n              cancelAnimationFrame(interval);\n            }\n          };\n\n          interval = requestAnimationFrame(animatedTotalValue);\n        };\n\n        if (target.matches('input')) {\n          target.addEventListener('keyup', debounce(wrapperAnimated, 1000));\n        } else {\n          wrapperAnimated();\n        }\n      }\n    };\n\n    calcBlock.addEventListener('change', function (event) {\n      animation(event);\n    });\n    calcBlock.addEventListener('input', function (event) {\n      animation(event);\n    });\n  };\n\n  calc(100);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://GitHub/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/command.js":
/*!********************************!*\
  !*** ./src/modules/command.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar command = function command() {\n  var commandPhoto = document.querySelectorAll('.command__photo'),\n      command = document.getElementById('command');\n  command.addEventListener('mouseover', function (event) {\n    if (event.target.classList.contains('command__photo')) {\n      event.target.src = event.target.dataset.img;\n    }\n  });\n  command.addEventListener('mouseout', function (event) {\n    if (event.target.classList.contains('command__photo')) {\n      event.target.src = event.target.dataset.img.replace(/\\w(?=\\.)/, '');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (command);\n\n//# sourceURL=webpack://GitHub/./src/modules/command.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n  var idInterval;\n\n  var getTimerRemaining = function getTimerRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      seconds: seconds,\n      minutes: minutes,\n      hours: hours\n    };\n  };\n\n  var updateClock = function updateClock() {\n    var timer = getTimerRemaining();\n    timerHours.textContent = timer.hours < 10 ? \"0\".concat(timer.hours) : timer.hours;\n    timerMinutes.textContent = timer.minutes < 10 ? \"0\".concat(timer.minutes) : timer.minutes;\n    timerSeconds.textContent = timer.seconds < 10 ? \"0\".concat(timer.seconds) : timer.seconds;\n\n    if (timer.timeRemaining < 0) {\n      clearInterval(idInterval);\n      timerHours.textContent = timerMinutes.textContent = timerSeconds.textContent = '00';\n    }\n  };\n\n  idInterval = setInterval(updateClock);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://GitHub/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/scrollImg.js":
/*!**********************************!*\
  !*** ./src/modules/scrollImg.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollImg = function scrollImg() {\n  var btnImg = document.querySelector('main>a[href = \"#service-block\"]');\n  btnImg.addEventListener('click', function (event) {\n    event.preventDefault();\n    var idBlock = btnImg.getAttribute('href').substring(1),\n        block = document.getElementById(idBlock);\n    block.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollImg);\n\n//# sourceURL=webpack://GitHub/./src/modules/scrollImg.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var formOne = document.getElementById('form1'),\n      formTwo = document.getElementById('form2'),\n      formThree = document.getElementById('form3');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem; color: white;';\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var preloder = function preloder(parrent) {\n    parrent.textContent = '';\n    var preloaderWrap = document.createElement('div');\n    preloaderWrap.style.cssText = \"\\n            margin-left: auto;\\n            margin-right: auto;\\n            width: 70px;\\n            height: 70px;\\n            background: url(./images/preloader.png) center center no-repeat;\";\n    parrent.appendChild(preloaderWrap);\n  };\n\n  var outMessage = function outMessage(parrent, mess) {\n    var el = parrent.firstChild;\n    el.style.opacity = 1;\n    var interPreloader = setInterval(function () {\n      el.style.opacity = el.style.opacity - 0.05;\n\n      if (el.style.opacity <= 0.05) {\n        clearInterval(interPreloader);\n        el.style.display = \"none\";\n        parrent.textContent = mess;\n        setTimeout(function () {\n          return parrent.textContent = '';\n        }, 2500);\n\n        if (parrent.closest('.popup')) {\n          setTimeout(function () {\n            return parrent.closest('.popup').style.display = 'none';\n          }, 5000);\n        }\n      }\n    }, 30);\n  };\n\n  var sendData = function sendData(event, form) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    preloder(statusMessage);\n    var formData = new FormData(form);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      outMessage(statusMessage, successMessage);\n    })[\"catch\"](function (error) {\n      outMessage(statusMessage, errorMessage);\n      console.error(error);\n    });\n    var formInputs = form.querySelectorAll('input');\n    formInputs.forEach(function (item) {\n      return item.value = '';\n    });\n  };\n\n  var validFormOne = new Validator({\n    selector: '#form1',\n    pattern: {\n      name: /^[а-яё\\s]{2,}$/gi,\n      email: /^[\\w.-]+@[\\w]+\\.[\\w]{2,}$/gi,\n      phone: /^(\\+)?\\d{7,13}$/gi\n    },\n    method: {\n      'email': [['notEmpty'], ['pattern', 'email']],\n      'phone': [['notEmpty'], ['pattern', 'phone']],\n      'name': [['notEmpty'], ['pattern', 'name']]\n    }\n  }),\n      validFormTwo = new Validator({\n    selector: '#form2',\n    pattern: {\n      name: /^[а-яё\\s]{2,}$/gi,\n      message: /^[а-яё\\s\\d,.!?;:]+$/gi,\n      email: /^[\\w.-]+@[\\w]+\\.[\\w]{2,}$/gi,\n      phone: /^(\\+)?\\d{7,13}$/gi\n    },\n    method: {\n      'message': [['notEmpty'], ['pattern', 'message']],\n      'email': [['notEmpty'], ['pattern', 'email']],\n      'phone': [['notEmpty'], ['pattern', 'phone']],\n      'name': [['notEmpty'], ['pattern', 'name']]\n    }\n  }),\n      validFormThree = new Validator({\n    selector: '#form3',\n    pattern: {\n      name: /^[а-яё\\s]{2,}$/gi,\n      email: /^[\\w.-]+@[\\w]+\\.[\\w]{2,}$/gi,\n      phone: /^(\\+)?\\d{7,13}$/gi\n    },\n    method: {\n      'email': [['notEmpty'], ['pattern', 'email']],\n      'phone': [['notEmpty'], ['pattern', 'phone']],\n      'name': [['notEmpty'], ['pattern', 'name']]\n    }\n  });\n  validFormOne.init();\n  validFormTwo.init();\n  validFormThree.init();\n  formOne.addEventListener('submit', function (event) {\n    if (validFormOne.error.size === 0) {\n      sendData(event, formOne);\n    }\n  });\n  formTwo.addEventListener('submit', function (event) {\n    if (validFormTwo.error.size === 0) {\n      sendData(event, formTwo);\n    }\n  });\n  formThree.addEventListener('submit', function (event) {\n    if (validFormThree.error.size === 0) {\n      sendData(event, formThree);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://GitHub/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slider = document.querySelector('.portfolio-content'),\n      slide = document.querySelectorAll('.portfolio-item'),\n      portfolioDots = document.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      interval;\n\n  var addDots = function addDots() {\n    slide.forEach(function (elem, index) {\n      var dot = document.createElement('li');\n      dot.classList.add('dot');\n\n      if (index === 0) {\n        dot.classList.add('dot-active');\n      }\n\n      portfolioDots.append(dot);\n    });\n  };\n\n  addDots();\n  var dots = document.querySelectorAll('.dot');\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dots, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dots, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dots, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dots.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dots, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://GitHub/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tabs = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    tabContent.forEach(function (item, i) {\n      if (index === i) {\n        tabs[i].classList.add('active');\n        item.classList.remove('d-none');\n      } else {\n        tabs[i].classList.remove('active');\n        item.classList.add('d-none');\n      }\n    });\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tabs.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://GitHub/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu'),\n      menuItems = menu.querySelectorAll('a[href*=\"#\"]'),\n      body = document.querySelector('body');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  var scroll = function scroll(item, event) {\n    event.preventDefault();\n    var idBlock = item.getAttribute('href').substring(1),\n        block = document.getElementById(idBlock);\n    block.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  };\n\n  body.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu')) {\n      handlerMenu();\n    } else {\n      if (target.closest('menu')) {\n        menuItems.forEach(function (item) {\n          if (item === target) {\n            if (item.getAttribute('href').substring(1) !== 'close') {\n              handlerMenu();\n              scroll(item, event);\n            } else {\n              handlerMenu();\n            }\n          }\n        });\n      } else {\n        if (menu.classList.contains('active-menu')) {\n          handlerMenu();\n        }\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://GitHub/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popUp = document.querySelector('.popup'),\n      popUpBtn = document.querySelectorAll('.popup-btn');\n\n  var animate = function animate() {\n    var count = 0,\n        idInterval;\n    var width = document.documentElement.clientWidth;\n    popUp.style.display = 'block';\n\n    var ascent = function ascent() {\n      count += 0.02;\n\n      if (count < 1) {\n        popUp.style.opacity = count;\n      } else {\n        clearInterval(idInterval);\n      }\n    };\n\n    if (width >= 768) {\n      idInterval = setInterval(ascent);\n    }\n  };\n\n  popUpBtn.forEach(function (elem) {\n    return elem.addEventListener('click', animate);\n  });\n  popUp.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popUp.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popUp.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://GitHub/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/validateForms.js":
/*!**************************************!*\
  !*** ./src/modules/validateForms.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateForms = function validateForms() {\n  var body = document.querySelector('body'),\n      formEmails = body.querySelectorAll('.form-email');\n  formEmails.forEach(function (elem) {\n    return elem.required = true;\n  });\n  body.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('form-name')) {\n      target.value = target.value.replace(/[^а-яё\\s]/gi, '');\n    } else if (target.classList.contains('form-email')) {\n      target.value = target.value.replace(/[^a-z@\\-_.']/gi, '');\n    } else if (target.classList.contains('form-phone')) {\n      target.value = target.value.replace(/[^\\d\\+]/gi, '');\n    } else if (target.classList.contains('mess')) {\n      target.value = target.value.replace(/[^а-яё\\s\\d,.!?;:()]/gi, '');\n    }\n  });\n  body.addEventListener('blur', function (event) {\n    var target = event.target;\n\n    if (target.closest('form')) {\n      var correctedValue = function correctedValue(target) {\n        target.value = target.value.trim();\n        target.value = target.value.replace(/\\s{2,}/g, ' ');\n        target.value = target.value.replace(/-{2,}/g, '-');\n        target.value = target.value.replace(/^-+/g, '');\n        target.value = target.value.replace(/-+$/g, '');\n        target.value = target.value.trim();\n      };\n\n      correctedValue(target);\n\n      if (target.classList.contains('form-name')) {\n        target.value = target.value.toLowerCase();\n        target.value = target.value.replace(/(\\s|^)[а-яё]/gi, function (match) {\n          return match.toUpperCase();\n        });\n      }\n    }\n  }, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForms);\n\n//# sourceURL=webpack://GitHub/./src/modules/validateForms.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;