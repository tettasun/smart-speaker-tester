'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
//import { addCountA } from '../actions';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = function request() {
    _axios2.default.get('/mock/json').then(function (response) {
        console.log(response);

        console.log(_typeof(response['data']));

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = response['data'][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                console.log("key:" + i);
                //             var key = i;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }).catch(function (error) {
        console.log(error);
    });
};

var CounterA = function CounterA(_ref) {
    var count = _ref.count,
        addCountA = _ref.addCountA;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            { className: 'Title' },
            'CountA:',
            count
        ),
        _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick() {
                    return addCountA();
                } },
            'A'
        ),
        _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick() {
                    return request();
                } },
            'XXXX'
        )
    );
};
CounterA.propTypes = {
    count: _propTypes2.default.number.isRequired,
    addCountA: _propTypes2.default.func.isRequired
};

exports.default = CounterA;