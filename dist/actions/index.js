'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var countA = 0;
var countB = 0;

//Action of increas countA
var addCountA = exports.addCountA = function addCountA() {
	return {
		type: 'ADD_COUNT_A',
		count: countA++ // num
	};
};

//Action of increas countB
var addCountB = exports.addCountB = function addCountB() {
	return {
		type: 'ADD_COUNT_B',
		count: countB++ //num
	};
};