const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	if (arr.length != 0) {
		return arr.reduce((acc, item) => acc + item);
	} else {
		return 0;
	}
};

const multiply = function (array) {
	return array.reduce((acc, item) => {
		acc *= item;
		return acc;
	}, 1);
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (a) {
	let result = 1;
	for (let i = 1; i <= a; i++) {
		result *= i;
	}
	return result;
};
// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
