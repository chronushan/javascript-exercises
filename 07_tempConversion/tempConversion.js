const convertToCelsius = function (num) {
	let result = Math.round((num - 32) * (5 / 9) * 10) / 10;
	// let result = (num - 32) * (5 / 9);
	// return Number(result.toFixed(1));
	// return Math.round(result * 10) / 10;
	return result;
};

const convertToFahrenheit = function (num) {
	let result = Math.round(((num * 9) / 5 + 32) * 10) / 10;
	return result;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
