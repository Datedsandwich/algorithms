const fizzBuzz = (number) => {
	let results = [];

	for(let i = 1; i <= number; i++) {
		if(i % 15 === 0) {
			results = [...results, 'FizzBuzz'];
		} else if(i % 3 === 0) {
			results = [...results, 'Fizz'];
		} else if(i % 5 === 0) {
			results = [...results, 'Buzz']
		} else {
			results = [...results, i];
		}
	}

	return results;
};

export default fizzBuzz;