module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// /api/new-meetup\n// POST/api/new-meetup\n\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const data = req.body; // connect returns a promise hence we can turn our handler function into async function to use await. This gives us connected client.\n\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://jatinder:12345@cluster0.dnaxppe.mongodb.net/meetups?retryWrites=true&w=majority');\n    console.log(client); // on this client object, we can call db method to get hold of that database to which we are connecting here.\n\n    const db = client.db(); // now on this database, we can get access to our meetupscollections. Mongodb is a nosql database that works with collections full of documents. collections are kind of tables and documents are enteries in these tables.\n    // so we have collection that holds multiple documents.\n\n    const meetupsCollection = db.collection('meetups');\n    const result = await meetupsCollection.insertOne(data);\n    console.log(result); // to close the database connection once we are done.\n\n    client.close(); // we need to use 'res' object to send back a response.\n\n    res.status(201).json({\n      message: 'Meetup inserted!'\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDN0IsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDdkIsVUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQWpCLENBRHVCLENBR3ZCOztBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQW9CLCtGQUFwQixDQUFyQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWixFQUx1QixDQU92Qjs7QUFDQSxVQUFNSyxFQUFFLEdBQUdMLE1BQU0sQ0FBQ0ssRUFBUCxFQUFYLENBUnVCLENBVXZCO0FBQ0E7O0FBQ0EsVUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUI7QUFFQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQWxCLENBQTRCWCxJQUE1QixDQUFyQjtBQUVBSyxXQUFPLENBQUNDLEdBQVIsQ0FBWUksTUFBWixFQWhCdUIsQ0FrQnZCOztBQUNBUixVQUFNLENBQUNVLEtBQVAsR0FuQnVCLENBcUJ2Qjs7QUFDQWQsT0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDSDtBQUNKOztBQUVjbkIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC9hcGkvbmV3LW1lZXR1cFxuLy8gUE9TVC9hcGkvbmV3LW1lZXR1cFxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cbiAgICAgICAgLy8gY29ubmVjdCByZXR1cm5zIGEgcHJvbWlzZSBoZW5jZSB3ZSBjYW4gdHVybiBvdXIgaGFuZGxlciBmdW5jdGlvbiBpbnRvIGFzeW5jIGZ1bmN0aW9uIHRvIHVzZSBhd2FpdC4gVGhpcyBnaXZlcyB1cyBjb25uZWN0ZWQgY2xpZW50LlxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2phdGluZGVyOjEyMzQ1QGNsdXN0ZXIwLmRuYXhwcGUubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcbiAgICAgICAgY29uc29sZS5sb2coY2xpZW50KTtcblxuICAgICAgICAvLyBvbiB0aGlzIGNsaWVudCBvYmplY3QsIHdlIGNhbiBjYWxsIGRiIG1ldGhvZCB0byBnZXQgaG9sZCBvZiB0aGF0IGRhdGFiYXNlIHRvIHdoaWNoIHdlIGFyZSBjb25uZWN0aW5nIGhlcmUuXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICAgICAgLy8gbm93IG9uIHRoaXMgZGF0YWJhc2UsIHdlIGNhbiBnZXQgYWNjZXNzIHRvIG91ciBtZWV0dXBzY29sbGVjdGlvbnMuIE1vbmdvZGIgaXMgYSBub3NxbCBkYXRhYmFzZSB0aGF0IHdvcmtzIHdpdGggY29sbGVjdGlvbnMgZnVsbCBvZiBkb2N1bWVudHMuIGNvbGxlY3Rpb25zIGFyZSBraW5kIG9mIHRhYmxlcyBhbmQgZG9jdW1lbnRzIGFyZSBlbnRlcmllcyBpbiB0aGVzZSB0YWJsZXMuXG4gICAgICAgIC8vIHNvIHdlIGhhdmUgY29sbGVjdGlvbiB0aGF0IGhvbGRzIG11bHRpcGxlIGRvY3VtZW50cy5cbiAgICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAgICAgLy8gdG8gY2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb24gb25jZSB3ZSBhcmUgZG9uZS5cbiAgICAgICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICAgICAgLy8gd2UgbmVlZCB0byB1c2UgJ3Jlcycgb2JqZWN0IHRvIHNlbmQgYmFjayBhIHJlc3BvbnNlLlxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdNZWV0dXAgaW5zZXJ0ZWQhJyB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });