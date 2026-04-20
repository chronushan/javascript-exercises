const getTheTitles = function (arr) {
	return arr.reduce((acc, item) => {
		acc.push(item.title);
		return acc;
	}, []);
};

const books = [
	{
		title: "Book",
		author: "Name",
	},
	{
		title: "Book2",
		author: "Name2",
	},
];
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
