const repeatString = function (string, num) {
	let answer = [];
	if (num < 0) {
		return "ERROR";
	}
	for (let i = 0; i < num; i++) {
		answer.push(string);
	}
	return answer.join("");
};

// Do not edit below this line
module.exports = repeatString;
