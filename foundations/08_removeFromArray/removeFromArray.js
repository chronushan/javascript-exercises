const removeFromArray = function (array, ...words) {
	let i = 0;
	let answer = array.filter((item) => !words.includes(item));

	return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
