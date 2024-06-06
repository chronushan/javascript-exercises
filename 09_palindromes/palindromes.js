const palindromes = function (a) {
	let reversedStr = "";
	let stringWithoutPunc = "";
	for (let i = 0; i < a.length; i++) {
		if ((a[i] >= "a" && a[i] <= "z") || (a[i] >= "A" && a[i] <= "Z")) {
			stringWithoutPunc += a[i];
		} else {
			continue;
		}
		// console.log(stringWithoutPunc);
	}
	for (let i = a.length - 1; i >= 0; i--) {
		if ((a[i] >= "a" && a[i] <= "z") || (a[i] >= "A" && a[i] <= "Z")) {
			reversedStr += a[i];
		} else {
			continue;
		}
		// console.log(reversedStr);
	}
	stringWithoutPunc = stringWithoutPunc.toLowerCase();
	reversedStr = reversedStr.toLowerCase();
	if (stringWithoutPunc == reversedStr) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;

// palindromes("racecar!");
