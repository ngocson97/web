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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/[deals]/[detail].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constanst/config.js":
/*!*********************************!*\
  !*** ./src/constanst/config.js ***!
  \*********************************/
/*! exports provided: API_CREATE_USER_INDENTITY_OTP, API_CHECK_PROFILE, API_AUTH_TOKEN, API_UPDATE_PROFILE_BUYER, API_CREATE_USER, API_ACTIVE_USER, API_GET_PROFILE, API_CREATE_PROFILE, API_UPDATE_PROFILE_PROVIDER, API_UPLOAD_PROFILE_FILES, API_GET_LICENSES, API_CREATE_LICENSES, API_DELETE_LICENSES, API_GET_VEHICLES, API_CREATE_VEHICLES, API_DELETE_VEHICLES, API_GET_INSURANCES, API_CREATE_INSURANCES, API_DELETE_INSURANCES, API_GET_SKILL, API_CREATE_SKILL, API_DELETE_SKILL, API_CREATE_USER_PREFERECE, API_CREATE_USER_INDENTITY, API_GET_PUBLIC_PROFILE_USER, API_GET_PL_PROFILE, API_CREATE_REVIEWS, API_GET_REVIEWS_DEALS, API_GET_REVIEW_USER, API_GET_CARDS, API_CREATE_CARDS, API_DELETE_CARD, API_CARD_SETUP, API_PAY_BILL, API_BANK_SETUP, API_GET_BANKS, API_CREATE_BANK, API_DELETE_BANK, API_CAPTURE_PAYMENT, API_UPDATE_ADDRESS, API_DELETE_ADDRESS, API_GET_ADDRESS, API_CREATE_ADDRESS, API_DEFAULT_ADDRESS, API_REFRESH_TOKEN, API_FORGOT_PASSWORD, API_VERYFI_OTP_CODE, API_CREATE_OTP, API_CREATE_DEAL, API_QUERY_BOOKING, API_GET_BOOKINGS, API_UPDATE_BOOKINGS_STATUS, API_CANCEL_DEAL, API_DELETE_SLOT_ID, API_GET_DEAL_DETAIL_REP, API_DEAL, API_GET_DEAL_DETAIL, API_GET_DEAL, API_UPLOAD_FILE_DEAL, API_BOOK_DEAL, API_SEARCH_DEAL, API_GET_USER_PROFILE, API_VERIFIEMAIL_CONFIRM, API_VERIFIEMAIL_REQUEST, API_CREATE_COMMENT, API_GET_COMMENT, API_UPDATE_COMMENT, API_DELETE_COMMENT, API_CHATS, API_GET_EVENT, API_INTERVIEWS, API_UPDATE_NEW_PASSWORD, API_BUSINESS_ACCOUNT, API_BUSINESS_FILE, API_BUSINESS_PUBLIC_PROLIES, API_GET_MY_BUSINESS, API_GET_BUSINESS_PROFILE_PUBLIC, API_REFERRALS_USER, API_GET_REFERRALS_BY_USER, API_GET_MY_REFERRALS, API_CREATE_JOB, API_UPLOAD_FILE_JOB, API_JOB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_USER_INDENTITY_OTP", function() { return API_CREATE_USER_INDENTITY_OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CHECK_PROFILE", function() { return API_CHECK_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_AUTH_TOKEN", function() { return API_AUTH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_UPDATE_PROFILE_BUYER", function() { return API_UPDATE_PROFILE_BUYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_USER", function() { return API_CREATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ACTIVE_USER", function() { return API_ACTIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_PROFILE", function() { return API_GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_PROFILE", function() { return API_CREATE_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_UPDATE_PROFILE_PROVIDER", function() { return API_UPDATE_PROFILE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_UPLOAD_PROFILE_FILES", function() { return API_UPLOAD_PROFILE_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_LICENSES", function() { return API_GET_LICENSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_LICENSES", function() { return API_CREATE_LICENSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DELETE_LICENSES", function() { return API_DELETE_LICENSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_VEHICLES", function() { return API_GET_VEHICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_VEHICLES", function() { return API_CREATE_VEHICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DELETE_VEHICLES", function() { return API_DELETE_VEHICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_INSURANCES", function() { return API_GET_INSURANCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_INSURANCES", function() { return API_CREATE_INSURANCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DELETE_INSURANCES", function() { return API_DELETE_INSURANCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_SKILL", function() { return API_GET_SKILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_SKILL", function() { return API_CREATE_SKILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DELETE_SKILL", function() { return API_DELETE_SKILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_USER_PREFERECE", function() { return API_CREATE_USER_PREFERECE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_USER_INDENTITY", function() { return API_CREATE_USER_INDENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_PUBLIC_PROFILE_USER", function() { return API_GET_PUBLIC_PROFILE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_PL_PROFILE", function() { return API_GET_PL_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_REVIEWS", function() { return API_CREATE_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_REVIEWS_DEALS", function() { return API_GET_REVIEWS_DEALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_REVIEW_USER", function() { return API_GET_REVIEW_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_CARDS", function() { return API_GET_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_CARDS", function() { return API_CREATE_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DELETE_CARD", function() { return API_DELETE_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CARD_SETUP", function() { return API_CARD_SETUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PAY_BILL", function() { return API_PAY_BILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BANK_SETUP", function() { return API_BANK_SETUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_BANKS", function() { return API_GET_BANKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_BANK", function() { return API_CREATE_BANK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DELETE_BANK", function() { return API_DELETE_BANK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CAPTURE_PAYMENT", function() { return API_CAPTURE_PAYMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_UPDATE_ADDRESS", function() { return API_UPDATE_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DELETE_ADDRESS", function() { return API_DELETE_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_ADDRESS", function() { return API_GET_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_ADDRESS", function() { return API_CREATE_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DEFAULT_ADDRESS", function() { return API_DEFAULT_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_REFRESH_TOKEN", function() { return API_REFRESH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_FORGOT_PASSWORD", function() { return API_FORGOT_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERYFI_OTP_CODE", function() { return API_VERYFI_OTP_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_OTP", function() { return API_CREATE_OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_DEAL", function() { return API_CREATE_DEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_QUERY_BOOKING", function() { return API_QUERY_BOOKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_BOOKINGS", function() { return API_GET_BOOKINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_UPDATE_BOOKINGS_STATUS", function() { return API_UPDATE_BOOKINGS_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CANCEL_DEAL", function() { return API_CANCEL_DEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DELETE_SLOT_ID", function() { return API_DELETE_SLOT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_DEAL_DETAIL_REP", function() { return API_GET_DEAL_DETAIL_REP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DEAL", function() { return API_DEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_DEAL_DETAIL", function() { return API_GET_DEAL_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_DEAL", function() { return API_GET_DEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_UPLOAD_FILE_DEAL", function() { return API_UPLOAD_FILE_DEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BOOK_DEAL", function() { return API_BOOK_DEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_SEARCH_DEAL", function() { return API_SEARCH_DEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_USER_PROFILE", function() { return API_GET_USER_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERIFIEMAIL_CONFIRM", function() { return API_VERIFIEMAIL_CONFIRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERIFIEMAIL_REQUEST", function() { return API_VERIFIEMAIL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_COMMENT", function() { return API_CREATE_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_COMMENT", function() { return API_GET_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_UPDATE_COMMENT", function() { return API_UPDATE_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DELETE_COMMENT", function() { return API_DELETE_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CHATS", function() { return API_CHATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_EVENT", function() { return API_GET_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_INTERVIEWS", function() { return API_INTERVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_UPDATE_NEW_PASSWORD", function() { return API_UPDATE_NEW_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BUSINESS_ACCOUNT", function() { return API_BUSINESS_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BUSINESS_FILE", function() { return API_BUSINESS_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BUSINESS_PUBLIC_PROLIES", function() { return API_BUSINESS_PUBLIC_PROLIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_MY_BUSINESS", function() { return API_GET_MY_BUSINESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_BUSINESS_PROFILE_PUBLIC", function() { return API_GET_BUSINESS_PROFILE_PUBLIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_REFERRALS_USER", function() { return API_REFERRALS_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_REFERRALS_BY_USER", function() { return API_GET_REFERRALS_BY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET_MY_REFERRALS", function() { return API_GET_MY_REFERRALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CREATE_JOB", function() { return API_CREATE_JOB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_UPLOAD_FILE_JOB", function() { return API_UPLOAD_FILE_JOB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_JOB", function() { return API_JOB; });
// api user management
const API_CREATE_USER_INDENTITY_OTP = 'api-gateway/user/v1.0/users/identities/passwords/otp';
const API_CHECK_PROFILE = 'api-gateway/user/v1.0/users/simple-profiles';
const API_AUTH_TOKEN = 'api-gateway/v1.0/user/oauth/token';
const API_UPDATE_PROFILE_BUYER = 'api-gateway/user/v1.0/users/profiles/buyers';
const API_CREATE_USER = 'api-gateway/user/v1.0/users';
const API_ACTIVE_USER = 'api-gateway/user/v1.0/users/activations'; //Provider Profile

const API_GET_PROFILE = 'api-gateway/user/v1.0/users/profiles';
const API_CREATE_PROFILE = 'api-gateway/user/v1.0/users/profiles';
const API_UPDATE_PROFILE_PROVIDER = 'api-gateway/user/v1.0/users/profiles/providers';
const API_UPLOAD_PROFILE_FILES = 'api-gateway/user/v1.0/users/profiles/files';
const API_GET_LICENSES = 'api-gateway/user/v1.0/users/licenses';
const API_CREATE_LICENSES = 'api-gateway/user/v1.0/users/licenses';
const API_DELETE_LICENSES = 'api-gateway/user/v1.0/users/licenses';
const API_GET_VEHICLES = 'api-gateway/user/v1.0/users/vehicles';
const API_CREATE_VEHICLES = 'api-gateway/user/v1.0/users/vehicles';
const API_DELETE_VEHICLES = 'api-gateway/user/v1.0/users/vehicles';
const API_GET_INSURANCES = 'api-gateway/user/v1.0/users/insurances';
const API_CREATE_INSURANCES = 'api-gateway/user/v1.0/users/insurances';
const API_DELETE_INSURANCES = 'api-gateway/user/v1.0/users/insurances';
const API_GET_SKILL = 'api-gateway/user/v1.0/users/skills';
const API_CREATE_SKILL = 'api-gateway/user/v1.0/users/skills';
const API_DELETE_SKILL = 'api-gateway/user/v1.0/users/skills';
const API_CREATE_USER_PREFERECE = 'api-gateway/user/v1.0/users/preferences';
const API_CREATE_USER_INDENTITY = 'api-gateway/user/v1.0/users/identities';
const API_GET_PUBLIC_PROFILE_USER = 'api-gateway/user/v1.0/users/';
const API_GET_PL_PROFILE = 'api-gateway/user/v1.0/users/public-profiles'; // reviews 

const API_CREATE_REVIEWS = 'api-gateway/user/v1.0/users/reviews';
const API_GET_REVIEWS_DEALS = 'api-gateway/user/v1.0/users/reviews/deals/';
const API_GET_REVIEW_USER = 'api-gateway/user/v1.0/users/'; //Credit Card

const API_GET_CARDS = 'api-gateway/payment/v1.0/cards';
const API_CREATE_CARDS = 'api-gateway/payment/v1.0/cards';
const API_DELETE_CARD = 'api-gateway/payment/v1.0/cards/';
const API_CARD_SETUP = 'api-gateway/payment/v1.0/card-setups';
const API_PAY_BILL = 'api-gateway/payment/v1.0/bills/'; // Bank

const API_BANK_SETUP = 'api-gateway/payment/v1.0/account-setups';
const API_GET_BANKS = 'api-gateway/payment/v1.0/connect-accounts';
const API_CREATE_BANK = 'api-gateway/payment/v1.0/connect-accounts/banks';
const API_DELETE_BANK = 'api-gateway/payment/v1.0/connect-accounts/banks/';
const API_CAPTURE_PAYMENT = 'api-gateway/payment/v1.0/bills/'; //address 

const API_UPDATE_ADDRESS = 'api-gateway/user/v1.0/users/address/';
const API_DELETE_ADDRESS = 'api-gateway/user/v1.0/users/address/';
const API_GET_ADDRESS = 'api-gateway/user/v1.0/users/address';
const API_CREATE_ADDRESS = 'api-gateway/user/v1.0/users/address';
const API_DEFAULT_ADDRESS = 'api-gateway/user/v1.0/users/address/';
const API_REFRESH_TOKEN = 'api-gateway/v1.0/user/oauth/token';
const API_FORGOT_PASSWORD = 'api-gateway/user/v1.0/users/identities/passwords'; // api otp management

const API_VERYFI_OTP_CODE = 'api-gateway/otp-management/v1.0/otp/verification';
const API_CREATE_OTP = 'api-gateway/otp-management/v1.0/otp'; // api deal 

const API_CREATE_DEAL = 'api-gateway/deal/v1.0/deals';
const API_QUERY_BOOKING = 'api-gateway/deal/v1.0/deals/books';
const API_GET_BOOKINGS = 'api-gateway/deal/v1.0/deals/';
const API_UPDATE_BOOKINGS_STATUS = 'api-gateway/deal/v1.0/deals/';
const API_CANCEL_DEAL = 'api-gateway/deal/v1.0/deals/';
const API_DELETE_SLOT_ID = 'api-gateway/deal/v1.0/deals/';
const API_GET_DEAL_DETAIL_REP = 'api-gateway/deal/v1.0/deals/rep/'; // Deal

const API_DEAL = 'api-gateway/deal/v1.0/deals/';
const API_GET_DEAL_DETAIL = 'api-gateway/deal/v1.0/deals/';
const API_GET_DEAL = 'api-gateway/search/deals';
const API_UPLOAD_FILE_DEAL = 'api-gateway/deal/v1.0/deals/';
const API_BOOK_DEAL = 'api-gateway/deal/v1.0/deals/';
const API_SEARCH_DEAL = 'api-gateway/search/deals/';
const API_GET_USER_PROFILE = 'api-gateway/user/v1.0/users/public-profiles';
const API_VERIFIEMAIL_CONFIRM = 'api-gateway/user/v1.0/users/email-verifications/confirm';
const API_VERIFIEMAIL_REQUEST = 'api-gateway/user/v1.0/users/email-verifications/request'; // public comment 

const API_CREATE_COMMENT = 'api-gateway/ticket/v1.0/comments';
const API_GET_COMMENT = 'api-gateway/ticket/v1.0/comments';
const API_UPDATE_COMMENT = 'api-gateway/ticket/v1.0/comments/';
const API_DELETE_COMMENT = 'api-gateway/ticket/v1.0/comments/';
const API_CHATS = 'api-gateway/ticket/v1.0/chats'; // schedule 

const API_GET_EVENT = "api-gateway/schedule/v1.0/events"; // interviews 

const API_INTERVIEWS = 'api-gateway/user/v1.0/users/interviews';
const API_UPDATE_NEW_PASSWORD = 'api-gateway/user/v1.0/users/identities'; // business 

const API_BUSINESS_ACCOUNT = 'api-gateway/user/v1.0/users/businesses';
const API_BUSINESS_FILE = "api-gateway/user/v1.0/users/businesses/files";
const API_BUSINESS_PUBLIC_PROLIES = 'api-gateway/user/v1.0/users/businesses/public-profiles';
const API_GET_MY_BUSINESS = 'api-gateway/user/v1.0/users/my-businesses';
const API_GET_BUSINESS_PROFILE_PUBLIC = 'api-gateway/user/v1.0/users/businesses/public-profiles';
const API_REFERRALS_USER = 'api-gateway/user/v1.0/users/referrals';
const API_GET_REFERRALS_BY_USER = 'api-gateway/user/v1.0/users/referrals/from';
const API_GET_MY_REFERRALS = 'api-gateway/user/v1.0/users/referrals/to'; // borderFit: 'overflow'

const API_CREATE_JOB = 'api-gateway/job/v1.0/jobs';
const API_UPLOAD_FILE_JOB = 'api-gateway/job/v1.0/jobs';
const API_JOB = 'api-gateway/job/v1.0/jobs/';

/***/ }),

/***/ "./src/pages/[deals]/[detail].js":
/*!***************************************!*\
  !*** ./src/pages/[deals]/[detail].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _untils_apiCaller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../untils/apiCaller */ "./src/untils/apiCaller.js");
/* harmony import */ var _constanst_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constanst/config */ "./src/constanst/config.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/mnt/e/ESC_LLC/intantep/src/pages/[deals]/[detail].js";







function Deal({
  data
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: data.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: data.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), "Deal detail page"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

Deal.getInitialProps = async ctx => {
  console.log(ctx);
  const data = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`https://elastichire.com/${_constanst_config__WEBPACK_IMPORTED_MODULE_4__["API_GET_DEAL_DETAIL_REP"]}${ctx.query.detail}`, {
    headers: {
      'Content-Type': "application/json",
      'client_id': 'client_id_id_client',
      'client_secret': 'client_secret_secret_client'
    }
  }).then(res => {
    return res.data.data;
  });
  return {
    data: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Deal);

/***/ }),

/***/ "./src/untils/apiCaller.js":
/*!*********************************!*\
  !*** ./src/untils/apiCaller.js ***!
  \*********************************/
/*! exports provided: UploadFile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFile", function() { return UploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return callApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function UploadFile(endpoint, file, pro_name, additional) {
  var fd = new FormData();
  fd.append('file', file);
  fd.append('property_name', pro_name);
  fd.append('additional', JSON.stringify(additional));
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${process.env.REACT_APP_API_URL}/${endpoint}`, fd, {
    headers: {
      'Content-Type': 'application/json',
      'client_id': 'client_id_id_client',
      'client_secret': 'client_secret_secret_client'
    }
  });
}
async function callApi(endpoint, method, token = "none", body, params, type_content = 'application/json') {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common = {
    'Authorization': `Bearer ${token}`
  };
  return await axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: method,
    // url: `${process.env.REACT_APP_API_URL}/${endpoint}`,
    url: `https://elastichire.com/${endpoint}`,
    data: JSON.stringify(body),
    params: params,
    headers: {
      'Content-Type': type_content,
      'client_id': 'client_id_id_client',
      'client_secret': 'client_secret_secret_client'
    }
  });
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW5zdC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1tkZWFsc10vW2RldGFpbF0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VudGlscy9hcGlDYWxsZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQVBJX0NSRUFURV9VU0VSX0lOREVOVElUWV9PVFAiLCJBUElfQ0hFQ0tfUFJPRklMRSIsIkFQSV9BVVRIX1RPS0VOIiwiQVBJX1VQREFURV9QUk9GSUxFX0JVWUVSIiwiQVBJX0NSRUFURV9VU0VSIiwiQVBJX0FDVElWRV9VU0VSIiwiQVBJX0dFVF9QUk9GSUxFIiwiQVBJX0NSRUFURV9QUk9GSUxFIiwiQVBJX1VQREFURV9QUk9GSUxFX1BST1ZJREVSIiwiQVBJX1VQTE9BRF9QUk9GSUxFX0ZJTEVTIiwiQVBJX0dFVF9MSUNFTlNFUyIsIkFQSV9DUkVBVEVfTElDRU5TRVMiLCJBUElfREVMRVRFX0xJQ0VOU0VTIiwiQVBJX0dFVF9WRUhJQ0xFUyIsIkFQSV9DUkVBVEVfVkVISUNMRVMiLCJBUElfREVMRVRFX1ZFSElDTEVTIiwiQVBJX0dFVF9JTlNVUkFOQ0VTIiwiQVBJX0NSRUFURV9JTlNVUkFOQ0VTIiwiQVBJX0RFTEVURV9JTlNVUkFOQ0VTIiwiQVBJX0dFVF9TS0lMTCIsIkFQSV9DUkVBVEVfU0tJTEwiLCJBUElfREVMRVRFX1NLSUxMIiwiQVBJX0NSRUFURV9VU0VSX1BSRUZFUkVDRSIsIkFQSV9DUkVBVEVfVVNFUl9JTkRFTlRJVFkiLCJBUElfR0VUX1BVQkxJQ19QUk9GSUxFX1VTRVIiLCJBUElfR0VUX1BMX1BST0ZJTEUiLCJBUElfQ1JFQVRFX1JFVklFV1MiLCJBUElfR0VUX1JFVklFV1NfREVBTFMiLCJBUElfR0VUX1JFVklFV19VU0VSIiwiQVBJX0dFVF9DQVJEUyIsIkFQSV9DUkVBVEVfQ0FSRFMiLCJBUElfREVMRVRFX0NBUkQiLCJBUElfQ0FSRF9TRVRVUCIsIkFQSV9QQVlfQklMTCIsIkFQSV9CQU5LX1NFVFVQIiwiQVBJX0dFVF9CQU5LUyIsIkFQSV9DUkVBVEVfQkFOSyIsIkFQSV9ERUxFVEVfQkFOSyIsIkFQSV9DQVBUVVJFX1BBWU1FTlQiLCJBUElfVVBEQVRFX0FERFJFU1MiLCJBUElfREVMRVRFX0FERFJFU1MiLCJBUElfR0VUX0FERFJFU1MiLCJBUElfQ1JFQVRFX0FERFJFU1MiLCJBUElfREVGQVVMVF9BRERSRVNTIiwiQVBJX1JFRlJFU0hfVE9LRU4iLCJBUElfRk9SR09UX1BBU1NXT1JEIiwiQVBJX1ZFUllGSV9PVFBfQ09ERSIsIkFQSV9DUkVBVEVfT1RQIiwiQVBJX0NSRUFURV9ERUFMIiwiQVBJX1FVRVJZX0JPT0tJTkciLCJBUElfR0VUX0JPT0tJTkdTIiwiQVBJX1VQREFURV9CT09LSU5HU19TVEFUVVMiLCJBUElfQ0FOQ0VMX0RFQUwiLCJBUElfREVMRVRFX1NMT1RfSUQiLCJBUElfR0VUX0RFQUxfREVUQUlMX1JFUCIsIkFQSV9ERUFMIiwiQVBJX0dFVF9ERUFMX0RFVEFJTCIsIkFQSV9HRVRfREVBTCIsIkFQSV9VUExPQURfRklMRV9ERUFMIiwiQVBJX0JPT0tfREVBTCIsIkFQSV9TRUFSQ0hfREVBTCIsIkFQSV9HRVRfVVNFUl9QUk9GSUxFIiwiQVBJX1ZFUklGSUVNQUlMX0NPTkZJUk0iLCJBUElfVkVSSUZJRU1BSUxfUkVRVUVTVCIsIkFQSV9DUkVBVEVfQ09NTUVOVCIsIkFQSV9HRVRfQ09NTUVOVCIsIkFQSV9VUERBVEVfQ09NTUVOVCIsIkFQSV9ERUxFVEVfQ09NTUVOVCIsIkFQSV9DSEFUUyIsIkFQSV9HRVRfRVZFTlQiLCJBUElfSU5URVJWSUVXUyIsIkFQSV9VUERBVEVfTkVXX1BBU1NXT1JEIiwiQVBJX0JVU0lORVNTX0FDQ09VTlQiLCJBUElfQlVTSU5FU1NfRklMRSIsIkFQSV9CVVNJTkVTU19QVUJMSUNfUFJPTElFUyIsIkFQSV9HRVRfTVlfQlVTSU5FU1MiLCJBUElfR0VUX0JVU0lORVNTX1BST0ZJTEVfUFVCTElDIiwiQVBJX1JFRkVSUkFMU19VU0VSIiwiQVBJX0dFVF9SRUZFUlJBTFNfQllfVVNFUiIsIkFQSV9HRVRfTVlfUkVGRVJSQUxTIiwiQVBJX0NSRUFURV9KT0IiLCJBUElfVVBMT0FEX0ZJTEVfSk9CIiwiQVBJX0pPQiIsIkRlYWwiLCJkYXRhIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwicXVlcnkiLCJkZXRhaWwiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIlVwbG9hZEZpbGUiLCJlbmRwb2ludCIsImZpbGUiLCJwcm9fbmFtZSIsImFkZGl0aW9uYWwiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0FQSV9VUkwiLCJjYWxsQXBpIiwibWV0aG9kIiwidG9rZW4iLCJib2R5IiwicGFyYW1zIiwidHlwZV9jb250ZW50IiwiZGVmYXVsdHMiLCJjb21tb24iLCJ1cmwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFD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QUFnQixrQkFEWDtBQUVMLG1CQUFhLHFCQUZSO0FBR0wsdUJBQWlCO0FBSFo7QUFEK0QsR0FBL0QsQ0FBYjtBQU9IO0FBR2MsZUFBZWlCLE9BQWYsQ0FBdUJiLFFBQXZCLEVBQWlDYyxNQUFqQyxFQUF5Q0MsS0FBSyxHQUFHLE1BQWpELEVBQXlEQyxJQUF6RCxFQUErREMsTUFBL0QsRUFBdUVDLFlBQVksR0FBRyxrQkFBdEYsRUFBMEc7QUFDckgxQiw4Q0FBSyxDQUFDMkIsUUFBTixDQUFldkIsT0FBZixDQUF1QndCLE1BQXZCLEdBQWdDO0FBQUUscUJBQWtCLFVBQVNMLEtBQU07QUFBbkMsR0FBaEM7QUFDQSxTQUFPLE1BQU12Qiw0Q0FBSyxDQUNkO0FBQ0lzQixVQUFNLEVBQUVBLE1BRFo7QUFFSTtBQUNBTyxPQUFHLEVBQUksMkJBQTBCckIsUUFBUyxFQUg5QztBQUlJZixRQUFJLEVBQUVzQixJQUFJLENBQUNDLFNBQUwsQ0FBZVEsSUFBZixDQUpWO0FBS0lDLFVBQU0sRUFBRUEsTUFMWjtBQU1JckIsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCc0IsWUFEWDtBQUVMLG1CQUFhLHFCQUZSO0FBR0wsdUJBQWlCO0FBSFo7QUFOYixHQURjLENBQWxCO0FBY0gsQzs7Ozs7Ozs7Ozs7QUNqQ0Qsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvW2RlYWxzXS9bZGV0YWlsXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL1tkZWFsc10vW2RldGFpbF0uanNcIik7XG4iLCIvLyBhcGkgdXNlciBtYW5hZ2VtZW50XHJcbmV4cG9ydCBjb25zdCBBUElfQ1JFQVRFX1VTRVJfSU5ERU5USVRZX09UUCA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvaWRlbnRpdGllcy9wYXNzd29yZHMvb3RwJztcclxuZXhwb3J0IGNvbnN0IEFQSV9DSEVDS19QUk9GSUxFID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9zaW1wbGUtcHJvZmlsZXMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0FVVEhfVE9LRU4gPSAnYXBpLWdhdGV3YXkvdjEuMC91c2VyL29hdXRoL3Rva2VuJztcclxuZXhwb3J0IGNvbnN0IEFQSV9VUERBVEVfUFJPRklMRV9CVVlFUiA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvcHJvZmlsZXMvYnV5ZXJzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9DUkVBVEVfVVNFUiA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0FDVElWRV9VU0VSID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9hY3RpdmF0aW9ucydcclxuLy9Qcm92aWRlciBQcm9maWxlXHJcbmV4cG9ydCBjb25zdCBBUElfR0VUX1BST0ZJTEUgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL3Byb2ZpbGVzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9DUkVBVEVfUFJPRklMRSA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvcHJvZmlsZXMnO1xyXG5leHBvcnQgY29uc3QgQVBJX1VQREFURV9QUk9GSUxFX1BST1ZJREVSID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9wcm9maWxlcy9wcm92aWRlcnMnO1xyXG5leHBvcnQgY29uc3QgQVBJX1VQTE9BRF9QUk9GSUxFX0ZJTEVTID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9wcm9maWxlcy9maWxlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQVBJX0dFVF9MSUNFTlNFUyA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvbGljZW5zZXMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0NSRUFURV9MSUNFTlNFUyA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvbGljZW5zZXMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0RFTEVURV9MSUNFTlNFUyA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvbGljZW5zZXMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0dFVF9WRUhJQ0xFUyA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvdmVoaWNsZXMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0NSRUFURV9WRUhJQ0xFUyA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvdmVoaWNsZXMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0RFTEVURV9WRUhJQ0xFUyA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvdmVoaWNsZXMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0dFVF9JTlNVUkFOQ0VTID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9pbnN1cmFuY2VzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9DUkVBVEVfSU5TVVJBTkNFUyA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvaW5zdXJhbmNlcyc7XHJcbmV4cG9ydCBjb25zdCBBUElfREVMRVRFX0lOU1VSQU5DRVMgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL2luc3VyYW5jZXMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0dFVF9TS0lMTCA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvc2tpbGxzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9DUkVBVEVfU0tJTEwgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL3NraWxscyc7XHJcbmV4cG9ydCBjb25zdCBBUElfREVMRVRFX1NLSUxMID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9za2lsbHMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0NSRUFURV9VU0VSX1BSRUZFUkVDRSA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvcHJlZmVyZW5jZXMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0NSRUFURV9VU0VSX0lOREVOVElUWSA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvaWRlbnRpdGllcyc7XHJcbmV4cG9ydCBjb25zdCBBUElfR0VUX1BVQkxJQ19QUk9GSUxFX1VTRVIgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzLyc7XHJcbmV4cG9ydCBjb25zdCBBUElfR0VUX1BMX1BST0ZJTEUgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL3B1YmxpYy1wcm9maWxlcydcclxuXHJcbi8vIHJldmlld3MgXHJcblxyXG5leHBvcnQgY29uc3QgQVBJX0NSRUFURV9SRVZJRVdTID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9yZXZpZXdzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9HRVRfUkVWSUVXU19ERUFMUyA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvcmV2aWV3cy9kZWFscy8nO1xyXG5leHBvcnQgY29uc3QgQVBJX0dFVF9SRVZJRVdfVVNFUiA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvJztcclxuXHJcblxyXG4vL0NyZWRpdCBDYXJkXHJcbmV4cG9ydCBjb25zdCBBUElfR0VUX0NBUkRTID0gJ2FwaS1nYXRld2F5L3BheW1lbnQvdjEuMC9jYXJkcyc7XHJcbmV4cG9ydCBjb25zdCBBUElfQ1JFQVRFX0NBUkRTID0gJ2FwaS1nYXRld2F5L3BheW1lbnQvdjEuMC9jYXJkcyc7XHJcbmV4cG9ydCBjb25zdCBBUElfREVMRVRFX0NBUkQgPSAnYXBpLWdhdGV3YXkvcGF5bWVudC92MS4wL2NhcmRzLyc7XHJcbmV4cG9ydCBjb25zdCBBUElfQ0FSRF9TRVRVUCA9ICdhcGktZ2F0ZXdheS9wYXltZW50L3YxLjAvY2FyZC1zZXR1cHMnO1xyXG5leHBvcnQgY29uc3QgQVBJX1BBWV9CSUxMID0gJ2FwaS1nYXRld2F5L3BheW1lbnQvdjEuMC9iaWxscy8nXHJcblxyXG5cclxuLy8gQmFua1xyXG5leHBvcnQgY29uc3QgQVBJX0JBTktfU0VUVVAgPSAnYXBpLWdhdGV3YXkvcGF5bWVudC92MS4wL2FjY291bnQtc2V0dXBzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9HRVRfQkFOS1MgPSAnYXBpLWdhdGV3YXkvcGF5bWVudC92MS4wL2Nvbm5lY3QtYWNjb3VudHMnO1xyXG5leHBvcnQgY29uc3QgQVBJX0NSRUFURV9CQU5LID0gJ2FwaS1nYXRld2F5L3BheW1lbnQvdjEuMC9jb25uZWN0LWFjY291bnRzL2JhbmtzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9ERUxFVEVfQkFOSyA9ICdhcGktZ2F0ZXdheS9wYXltZW50L3YxLjAvY29ubmVjdC1hY2NvdW50cy9iYW5rcy8nXHJcbmV4cG9ydCBjb25zdCBBUElfQ0FQVFVSRV9QQVlNRU5UID0gJ2FwaS1nYXRld2F5L3BheW1lbnQvdjEuMC9iaWxscy8nXHJcblxyXG5cclxuLy9hZGRyZXNzIFxyXG5leHBvcnQgY29uc3QgQVBJX1VQREFURV9BRERSRVNTID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9hZGRyZXNzLyc7XHJcbmV4cG9ydCBjb25zdCBBUElfREVMRVRFX0FERFJFU1MgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL2FkZHJlc3MvJztcclxuZXhwb3J0IGNvbnN0IEFQSV9HRVRfQUREUkVTUyA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvYWRkcmVzcyc7XHJcbmV4cG9ydCBjb25zdCBBUElfQ1JFQVRFX0FERFJFU1MgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL2FkZHJlc3MnO1xyXG5leHBvcnQgY29uc3QgQVBJX0RFRkFVTFRfQUREUkVTUyA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvYWRkcmVzcy8nXHJcblxyXG5leHBvcnQgY29uc3QgQVBJX1JFRlJFU0hfVE9LRU4gPSAnYXBpLWdhdGV3YXkvdjEuMC91c2VyL29hdXRoL3Rva2VuJztcclxuZXhwb3J0IGNvbnN0IEFQSV9GT1JHT1RfUEFTU1dPUkQgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL2lkZW50aXRpZXMvcGFzc3dvcmRzJztcclxuXHJcbi8vIGFwaSBvdHAgbWFuYWdlbWVudFxyXG5leHBvcnQgY29uc3QgQVBJX1ZFUllGSV9PVFBfQ09ERSA9ICdhcGktZ2F0ZXdheS9vdHAtbWFuYWdlbWVudC92MS4wL290cC92ZXJpZmljYXRpb24nXHJcbmV4cG9ydCBjb25zdCBBUElfQ1JFQVRFX09UUCA9ICdhcGktZ2F0ZXdheS9vdHAtbWFuYWdlbWVudC92MS4wL290cCc7XHJcblxyXG4vLyBhcGkgZGVhbCBcclxuXHJcbmV4cG9ydCBjb25zdCBBUElfQ1JFQVRFX0RFQUwgPSAnYXBpLWdhdGV3YXkvZGVhbC92MS4wL2RlYWxzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9RVUVSWV9CT09LSU5HID0gJ2FwaS1nYXRld2F5L2RlYWwvdjEuMC9kZWFscy9ib29rcydcclxuZXhwb3J0IGNvbnN0IEFQSV9HRVRfQk9PS0lOR1MgPSAnYXBpLWdhdGV3YXkvZGVhbC92MS4wL2RlYWxzLydcclxuZXhwb3J0IGNvbnN0IEFQSV9VUERBVEVfQk9PS0lOR1NfU1RBVFVTID0gJ2FwaS1nYXRld2F5L2RlYWwvdjEuMC9kZWFscy8nXHJcbmV4cG9ydCBjb25zdCBBUElfQ0FOQ0VMX0RFQUwgPSAnYXBpLWdhdGV3YXkvZGVhbC92MS4wL2RlYWxzLydcclxuZXhwb3J0IGNvbnN0IEFQSV9ERUxFVEVfU0xPVF9JRCA9ICdhcGktZ2F0ZXdheS9kZWFsL3YxLjAvZGVhbHMvJ1xyXG5leHBvcnQgY29uc3QgQVBJX0dFVF9ERUFMX0RFVEFJTF9SRVAgPSAnYXBpLWdhdGV3YXkvZGVhbC92MS4wL2RlYWxzL3JlcC8nXHJcblxyXG4vLyBEZWFsXHJcbmV4cG9ydCBjb25zdCBBUElfREVBTCA9ICdhcGktZ2F0ZXdheS9kZWFsL3YxLjAvZGVhbHMvJ1xyXG5leHBvcnQgY29uc3QgQVBJX0dFVF9ERUFMX0RFVEFJTCA9ICdhcGktZ2F0ZXdheS9kZWFsL3YxLjAvZGVhbHMvJztcclxuZXhwb3J0IGNvbnN0IEFQSV9HRVRfREVBTCA9ICdhcGktZ2F0ZXdheS9zZWFyY2gvZGVhbHMnO1xyXG5leHBvcnQgY29uc3QgQVBJX1VQTE9BRF9GSUxFX0RFQUwgPSAnYXBpLWdhdGV3YXkvZGVhbC92MS4wL2RlYWxzLyc7XHJcbmV4cG9ydCBjb25zdCBBUElfQk9PS19ERUFMID0gJ2FwaS1nYXRld2F5L2RlYWwvdjEuMC9kZWFscy8nO1xyXG5leHBvcnQgY29uc3QgQVBJX1NFQVJDSF9ERUFMID0gJ2FwaS1nYXRld2F5L3NlYXJjaC9kZWFscy8nO1xyXG5leHBvcnQgY29uc3QgQVBJX0dFVF9VU0VSX1BST0ZJTEUgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL3B1YmxpYy1wcm9maWxlcyc7XHJcbmV4cG9ydCBjb25zdCBBUElfVkVSSUZJRU1BSUxfQ09ORklSTSA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvZW1haWwtdmVyaWZpY2F0aW9ucy9jb25maXJtJztcclxuZXhwb3J0IGNvbnN0IEFQSV9WRVJJRklFTUFJTF9SRVFVRVNUID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9lbWFpbC12ZXJpZmljYXRpb25zL3JlcXVlc3QnO1xyXG5cclxuLy8gcHVibGljIGNvbW1lbnQgXHJcblxyXG5leHBvcnQgY29uc3QgQVBJX0NSRUFURV9DT01NRU5UID0gJ2FwaS1nYXRld2F5L3RpY2tldC92MS4wL2NvbW1lbnRzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9HRVRfQ09NTUVOVCA9ICdhcGktZ2F0ZXdheS90aWNrZXQvdjEuMC9jb21tZW50cyc7XHJcbmV4cG9ydCBjb25zdCBBUElfVVBEQVRFX0NPTU1FTlQgPSAnYXBpLWdhdGV3YXkvdGlja2V0L3YxLjAvY29tbWVudHMvJztcclxuZXhwb3J0IGNvbnN0IEFQSV9ERUxFVEVfQ09NTUVOVCA9ICdhcGktZ2F0ZXdheS90aWNrZXQvdjEuMC9jb21tZW50cy8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQSV9DSEFUUyA9ICdhcGktZ2F0ZXdheS90aWNrZXQvdjEuMC9jaGF0cydcclxuXHJcbi8vIHNjaGVkdWxlIFxyXG5cclxuZXhwb3J0IGNvbnN0IEFQSV9HRVRfRVZFTlQgPSBcImFwaS1nYXRld2F5L3NjaGVkdWxlL3YxLjAvZXZlbnRzXCI7XHJcbi8vIGludGVydmlld3MgXHJcblxyXG5leHBvcnQgY29uc3QgQVBJX0lOVEVSVklFV1MgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL2ludGVydmlld3MnXHJcbmV4cG9ydCBjb25zdCBBUElfVVBEQVRFX05FV19QQVNTV09SRCA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvaWRlbnRpdGllcydcclxuXHJcblxyXG4vLyBidXNpbmVzcyBcclxuZXhwb3J0IGNvbnN0IEFQSV9CVVNJTkVTU19BQ0NPVU5UID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9idXNpbmVzc2VzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9CVVNJTkVTU19GSUxFID0gXCJhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvYnVzaW5lc3Nlcy9maWxlc1wiO1xyXG5leHBvcnQgY29uc3QgQVBJX0JVU0lORVNTX1BVQkxJQ19QUk9MSUVTID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9idXNpbmVzc2VzL3B1YmxpYy1wcm9maWxlcyc7XHJcbmV4cG9ydCBjb25zdCBBUElfR0VUX01ZX0JVU0lORVNTID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9teS1idXNpbmVzc2VzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9HRVRfQlVTSU5FU1NfUFJPRklMRV9QVUJMSUMgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL2J1c2luZXNzZXMvcHVibGljLXByb2ZpbGVzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQSV9SRUZFUlJBTFNfVVNFUiA9ICdhcGktZ2F0ZXdheS91c2VyL3YxLjAvdXNlcnMvcmVmZXJyYWxzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9HRVRfUkVGRVJSQUxTX0JZX1VTRVIgPSAnYXBpLWdhdGV3YXkvdXNlci92MS4wL3VzZXJzL3JlZmVycmFscy9mcm9tJztcclxuZXhwb3J0IGNvbnN0IEFQSV9HRVRfTVlfUkVGRVJSQUxTID0gJ2FwaS1nYXRld2F5L3VzZXIvdjEuMC91c2Vycy9yZWZlcnJhbHMvdG8nO1xyXG5cclxuXHJcbi8vIGJvcmRlckZpdDogJ292ZXJmbG93J1xyXG5leHBvcnQgY29uc3QgQVBJX0NSRUFURV9KT0IgPSAnYXBpLWdhdGV3YXkvam9iL3YxLjAvam9icydcclxuZXhwb3J0IGNvbnN0IEFQSV9VUExPQURfRklMRV9KT0IgPSAnYXBpLWdhdGV3YXkvam9iL3YxLjAvam9icydcclxuZXhwb3J0IGNvbnN0IEFQSV9KT0IgPSAnYXBpLWdhdGV3YXkvam9iL3YxLjAvam9icy8nXHJcblxyXG5cclxuIiwiXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjYWxsQXBpIGZyb20gJy4uLy4uL3VudGlscy9hcGlDYWxsZXInO1xyXG5pbXBvcnQgeyBBUElfR0VUX0RFQUxfREVUQUlMX1JFUCB9IGZyb20gJy4uLy4uL2NvbnN0YW5zdC9jb25maWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmZ1bmN0aW9uIERlYWwoeyBkYXRhIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e2RhdGEubmFtZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgRGVhbCBkZXRhaWwgcGFnZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbkRlYWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY3R4KVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9lbGFzdGljaGlyZS5jb20vJHtBUElfR0VUX0RFQUxfREVUQUlMX1JFUH0ke2N0eC5xdWVyeS5kZXRhaWx9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAnY2xpZW50X2lkJzogJ2NsaWVudF9pZF9pZF9jbGllbnQnLFxyXG4gICAgICAgICAgICAnY2xpZW50X3NlY3JldCc6ICdjbGllbnRfc2VjcmV0X3NlY3JldF9jbGllbnQnXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXMuZGF0YS5kYXRhXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlYWwiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVwbG9hZEZpbGUoZW5kcG9pbnQsIGZpbGUsIHByb19uYW1lLCBhZGRpdGlvbmFsKSB7XHJcbiAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZkLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG4gICAgZmQuYXBwZW5kKCdwcm9wZXJ0eV9uYW1lJywgcHJvX25hbWUpO1xyXG4gICAgZmQuYXBwZW5kKCdhZGRpdGlvbmFsJywgSlNPTi5zdHJpbmdpZnkoYWRkaXRpb25hbCkpO1xyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9VUkx9LyR7ZW5kcG9pbnR9YCwgZmQsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdjbGllbnRfaWQnOiAnY2xpZW50X2lkX2lkX2NsaWVudCcsXHJcbiAgICAgICAgICAgICdjbGllbnRfc2VjcmV0JzogJ2NsaWVudF9zZWNyZXRfc2VjcmV0X2NsaWVudCdcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2FsbEFwaShlbmRwb2ludCwgbWV0aG9kLCB0b2tlbiA9IFwibm9uZVwiLCBib2R5LCBwYXJhbXMsIHR5cGVfY29udGVudCA9ICdhcHBsaWNhdGlvbi9qc29uJykge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgfVxyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIC8vIHVybDogYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9VUkx9LyR7ZW5kcG9pbnR9YCxcclxuICAgICAgICAgICAgdXJsIDogYGh0dHBzOi8vZWxhc3RpY2hpcmUuY29tLyR7ZW5kcG9pbnR9YCxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogdHlwZV9jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgJ2NsaWVudF9pZCc6ICdjbGllbnRfaWRfaWRfY2xpZW50JyxcclxuICAgICAgICAgICAgICAgICdjbGllbnRfc2VjcmV0JzogJ2NsaWVudF9zZWNyZXRfc2VjcmV0X2NsaWVudCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==