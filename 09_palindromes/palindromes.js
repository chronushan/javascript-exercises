const palindromes = function (a) {
	let reversedStr = "";
	let stringWithoutPunc = "";
	for (let i = 0; i < a.length; i++) {
		if (
			(a[i] >= "a" && a[i] <= "z") ||
			(a[i] >= "A" && a[i] <= "Z") ||
			(a[i] >= "0" && a[i] <= "9")
		) {
			stringWithoutPunc += a[i];
		} else {
			continue;
		}
		// console.log(stringWithoutPunc);
	}
	for (let i = a.length - 1; i >= 0; i--) {
		if (
			(a[i] >= "a" && a[i] <= "z") ||
			(a[i] >= "A" && a[i] <= "Z") ||
			(a[i] >= "0" && a[i] <= "9")
		) {
			reversedStr += a[i];
		} else {
			continue;
		}
		// console.log(reversedStr);
	}
	stringWithoutPunc = stringWithoutPunc.toLowerCase();
	reversedStr = reversedStr.toLowerCase();

	// console.log(reversedStr);
	// console.log(stringWithoutPunc);

	if (stringWithoutPunc == reversedStr) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;

// palindromes("racecar!");
