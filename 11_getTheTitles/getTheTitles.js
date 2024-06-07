const getTheTitles = function (a) {
	return a.reduce((accumulator, currentArray) => {
		accumulator.push(currentArray.title);
		return accumulator;
	}, []);
};

// Do not edit below this line
module.exports = getTheTitles;

// const books = [
// 	{
// 		title: "Book",
// 		author: "Name",
// 	},
// 	{
// 		title: "Book2",
// 		author: "Name2",
// 	},
// ];

// getTheTitles(books);
