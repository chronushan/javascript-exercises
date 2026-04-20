const fibonacci = function (n) {
	let a = 1;
	let b = 0;
	for (let i = 2; i <= n; i++) {
		let result = a + b;
		b = a;
		a = result;
	}
	return a;
};

console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
