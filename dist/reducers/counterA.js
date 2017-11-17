"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var counterA = function counterA() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  console.log("counterAR " + action.type + " count " + action.count);
  switch (action.type) {
    case 'ADD_COUNT_A':
      return Object.assign({}, state, {
        count: action.count
      });
    default:
      return state;
  }
};

exports.default = counterA;