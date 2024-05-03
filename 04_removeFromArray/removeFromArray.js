const removeFromArray = function (arr, remove1, remove2) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != remove1 && arr[i] != remove2) {
			result.push(arr[i]);
		}
	}

	return result;
};

// Do not edit below this line
module.exports = removeFromArray;
