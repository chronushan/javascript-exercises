const fibonacci = function (n) {
	let firstPrev = 1;
	let secondPrev = 0;
	for (let i = 2; i < n; i++) {
		let current = firstPrev + secondPrev;
		firstPrev = current;
		secondPrev = firstPrev;
	}
	return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
