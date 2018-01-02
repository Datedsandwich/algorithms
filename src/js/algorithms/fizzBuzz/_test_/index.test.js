import fizzBuzz from '..';

describe('FizzBuzz', () => {
	it('should output "Fizz" if input is divisible by 3', () => {
		const results = fizzBuzz(3);

		expect(results[2]).toEqual('Fizz');
	});

	it('should output "Buzz" if input is divisible by 5', () => {
		const results = fizzBuzz(5);

		expect(results[4]).toEqual('Buzz');
	});

	it('should output "FizzBuzz" if input is divisible by 3 and 5', () => {
		const results = fizzBuzz(15);

		expect(results[14]).toEqual('FizzBuzz');
	});

	it("should output expected output for given number", () => {
		const results = fizzBuzz(20);

		expect(results).toEqual([
			1,
			2,
			'Fizz',
			4,
			'Buzz',
			'Fizz',
			7,
			8,
			'Fizz',
			'Buzz',
			11,
			'Fizz',
			13,
			14,
			'FizzBuzz',
			16,
			17,
			'Fizz',
			19,
			'Buzz'
		]);
	})
});