const sumAll = function (a, b) {
	let answer = 0;
	let temp = 0;
	if (
		a < 0 ||
		b < 0 ||
		typeof a != "number" ||
		typeof b != "number" ||
		Math.floor(a) != a ||
		Math.floor(b) != b
	)
		return "ERROR";
	if (b < a) {
		temp = b;
		b = a;
		a = temp;
	}
	for (a; a <= b; a++) {
		answer += a;
	}
	return answer;
};

// Do not edit below this line
module.exports = sumAll;
