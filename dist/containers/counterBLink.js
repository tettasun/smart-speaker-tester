'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _CounterB = require('../components/CounterB');

var _CounterB2 = _interopRequireDefault(_CounterB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddCountB = (0, _reactRedux.connect)(function (state) {
    return { count: state.counterB.count };
}, { addCountB: _actions.addCountB })(_CounterB2.default);

exports.default = AddCountB;