'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _CounterA = require('../components/CounterA');

var _CounterA2 = _interopRequireDefault(_CounterA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     // propsを通して取得する際に使う名前: Storeのstateの値

//     count: state.counterA.count
//   };
// }

var AddCountA = (0, _reactRedux.connect)(function (state) {
    return { count: state.counterA.count };
},
//    mapStateToProps,
{ addCountA: _actions.addCountA })(_CounterA2.default);

exports.default = AddCountA;