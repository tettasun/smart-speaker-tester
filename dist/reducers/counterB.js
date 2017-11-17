'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var counterB = function counterB() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];


  switch (action.type) {
    case 'ADD_COUNT_B':
      return Object.assign({}, state, {
        count: action.count
      });
    default:
      return state;
  }
};

exports.default = counterB;