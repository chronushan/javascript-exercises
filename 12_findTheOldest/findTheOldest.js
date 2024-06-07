const findTheOldest = function (a) {
	let biggest = { yearOfBirth: 0, yearOfDeath: 0 };
	a.forEach(function (a) {
		if (
			biggest.yearOfDeath - biggest.yearOfBirth <
			a.yearOfDeath - a.yearOfBirth
		) {
			biggest = a;
		}
	});
	return biggest;
};

// Do not edit below this line
module.exports = findTheOldest;
