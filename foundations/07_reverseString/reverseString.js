const reverseString = function (string) {
	let answer = [];
	for (let i = 0; i < string.length; i++) {
		answer.push(string[i]);
	}
	return answer.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
