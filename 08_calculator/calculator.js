const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (array) {
	let answer = 0;
	array.forEach((a) => (answer += a));
	return answer;
};

const multiply = function (array) {
	let answer = array[0];
	array.forEach((a) => {
		if (a == array[0]) {
			return;
		} else {
			answer *= a;
		}
	});
	return answer;
};

const power = function (a, b) {
	return Math.pow(a, b);
};

const factorial = function (a) {
	let answer = 1;
	for (let i = 1; i <= a; i++) {
		answer *= i;
	}
	return answer;
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
