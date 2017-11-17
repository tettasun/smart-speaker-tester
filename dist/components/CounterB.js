'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CounterB = function CounterB(_ref) {
    var count = _ref.count,
        addCountB = _ref.addCountB;
    return _react2.default.createElement(
        'div',
        null,
        'CountB:',
        count,
        _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick() {
                    return addCountB();
                } },
            'B'
        )
    );
};
//import { addCountB } from '../actions';

CounterB.propTypes = {
    count: _propTypes2.default.number.isRequired,
    addCountB: _propTypes2.default.func.isRequired
};
exports.default = CounterB;