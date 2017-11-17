'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _counterALink = require('../containers/counterALink');

var _counterALink2 = _interopRequireDefault(_counterALink);

var _counterBLink = require('../containers/counterBLink');

var _counterBLink2 = _interopRequireDefault(_counterBLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_counterALink2.default, null),
    _react2.default.createElement(_counterBLink2.default, null)
  );
};

exports.default = App;