'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _counterA = require('./counterA');

var _counterA2 = _interopRequireDefault(_counterA);

var _counterB = require('./counterB');

var _counterB2 = _interopRequireDefault(_counterB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var countApp = (0, _redux.combineReducers)({
  counterA: _counterA2.default,
  counterB: _counterB2.default
});

exports.default = countApp;