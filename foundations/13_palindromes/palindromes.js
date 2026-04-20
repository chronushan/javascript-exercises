const palindromes = function (str = "RAcecar") {
	let lowerStr = str.toLowerCase();
	let array = lowerStr.split("");
	let strippedStr = [];

	for (let i = 0; i < str.length; i++) {
		if (
			(lowerStr.charCodeAt(i) < 65 && lowerStr.charCodeAt(i) > 57) ||
			lowerStr.charCodeAt(i) < 48 ||
			lowerStr.charCodeAt(i) > 132
		) {
			console.log(lowerStr[i]);
			continue;
		}
		strippedStr.push(array[i]);
	}

	strippedStr = strippedStr.join("");
	console.log(strippedStr);

	let arrayRev = [];
	for (let i = strippedStr.length - 1; i >= 0; i--) {
		arrayRev.push(strippedStr[i]);
	}
	arrayRev = arrayRev.join("");
	console.log(arrayRev);
	return strippedStr == arrayRev ? true : false;
};

console.log(palindromes("A car, a man, a maraca."));
// Do not edit below this line
module.exports = palindromes;
