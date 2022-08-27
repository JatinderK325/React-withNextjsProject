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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// /api/new-meetup\n// POST/api/new-meetup\n\n\nasync function handler(req, res) {\n  // to add new meetup in the database.\n  if (req.method === 'POST') {\n    const data = req.body; // connect returns a promise hence we can turn our handler function into async function to use await. This gives us connected client.\n\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://jatinder:jatinder123@cluster0.dnaxppe.mongodb.net/meetups?retryWrites=true&w=majority'); // on this client object, we can call db method to get hold of that database to which we are connecting here.\n\n    const db = client.db(); // now on this database, we can get access to our meetupscollections. Mongodb is a nosql database that works with collections full of documents. collections are kind of tables and documents are enteries in these tables.\n    // so we have collection that holds multiple documents.\n\n    const meetupsCollection = db.collection('meetups');\n    const result = await meetupsCollection.insertOne(data);\n    console.log(result); // to close the database connection once we are done.\n\n    client.close(); // we need to use 'res' object to send back a response.\n\n    res.status(201).json({\n      message: 'Meetup inserted!'\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDN0I7QUFDQSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN2QixVQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBakIsQ0FEdUIsQ0FHdkI7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0IscUdBQXBCLENBQXJCLENBSnVCLENBTXZCOztBQUNBLFVBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVgsQ0FQdUIsQ0FTdkI7QUFDQTs7QUFDQSxVQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUExQjtBQUVBLFVBQU1DLE1BQU0sR0FBRyxNQUFNRixpQkFBaUIsQ0FBQ0csU0FBbEIsQ0FBNEJULElBQTVCLENBQXJCO0FBRUFVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaLEVBZnVCLENBaUJ2Qjs7QUFDQU4sVUFBTSxDQUFDVSxLQUFQLEdBbEJ1QixDQW9CdkI7O0FBQ0FkLE9BQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0g7QUFDSjs7QUFFY25CLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYXBpL25ldy1tZWV0dXBcbi8vIFBPU1QvYXBpL25ldy1tZWV0dXBcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIC8vIHRvIGFkZCBuZXcgbWVldHVwIGluIHRoZSBkYXRhYmFzZS5cbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgICAgICAvLyBjb25uZWN0IHJldHVybnMgYSBwcm9taXNlIGhlbmNlIHdlIGNhbiB0dXJuIG91ciBoYW5kbGVyIGZ1bmN0aW9uIGludG8gYXN5bmMgZnVuY3Rpb24gdG8gdXNlIGF3YWl0LiBUaGlzIGdpdmVzIHVzIGNvbm5lY3RlZCBjbGllbnQuXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vamF0aW5kZXI6amF0aW5kZXIxMjNAY2x1c3RlcjAuZG5heHBwZS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xuXG4gICAgICAgIC8vIG9uIHRoaXMgY2xpZW50IG9iamVjdCwgd2UgY2FuIGNhbGwgZGIgbWV0aG9kIHRvIGdldCBob2xkIG9mIHRoYXQgZGF0YWJhc2UgdG8gd2hpY2ggd2UgYXJlIGNvbm5lY3RpbmcgaGVyZS5cbiAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgICAgICAvLyBub3cgb24gdGhpcyBkYXRhYmFzZSwgd2UgY2FuIGdldCBhY2Nlc3MgdG8gb3VyIG1lZXR1cHNjb2xsZWN0aW9ucy4gTW9uZ29kYiBpcyBhIG5vc3FsIGRhdGFiYXNlIHRoYXQgd29ya3Mgd2l0aCBjb2xsZWN0aW9ucyBmdWxsIG9mIGRvY3VtZW50cy4gY29sbGVjdGlvbnMgYXJlIGtpbmQgb2YgdGFibGVzIGFuZCBkb2N1bWVudHMgYXJlIGVudGVyaWVzIGluIHRoZXNlIHRhYmxlcy5cbiAgICAgICAgLy8gc28gd2UgaGF2ZSBjb2xsZWN0aW9uIHRoYXQgaG9sZHMgbXVsdGlwbGUgZG9jdW1lbnRzLlxuICAgICAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgICAgICAvLyB0byBjbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvbiBvbmNlIHdlIGFyZSBkb25lLlxuICAgICAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHVzZSAncmVzJyBvYmplY3QgdG8gc2VuZCBiYWNrIGEgcmVzcG9uc2UuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ01lZXR1cCBpbnNlcnRlZCEnIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

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