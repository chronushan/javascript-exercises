const findTheOldest = function (arr) {
	let notDead = arr.forEach((item) => {
		if (!item.yearOfDeath) {
			return (item.yearOfDeath = new Date().getFullYear());
		}
		console.log(arr);
	});

	arr.sort((a, b) => {
		let aAge = a.yearOfDeath - a.yearOfBirth;
		let bAge = b.yearOfDeath - b.yearOfBirth;
		console.log(aAge, bAge);
		return aAge < bAge ? 1 : -1;
	});
	return arr[0];
};
const people = [
	{
		name: "Carly",
		yearOfBirth: 1066,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
