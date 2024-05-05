const sumAll = function (start, end) {
	let answer = 0;
	if (Math.sign(arguments[0]) == -1 || Math.sign(arguments[1].sign) == -1) {
		return "ERROR";
	}
	let large;
	let small;
	if (start > end) {
		large = start;
		small = end;
	} else {
		large = end;
		small = start;
	}

	for (let i = small; i <= large; i++) {
		answer += i;
	}
	return answer;
};

// Do not edit below this line
module.exports = sumAll;
