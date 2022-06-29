import fizzbuzz from ".";

describe('FizzBuzz should', () => {
    test('return fizz when number is multiple of 3', () => {
        expect(fizzbuzz(3)).toBe('fizz')
        expect(fizzbuzz(6)).toBe('fizz')
        expect(fizzbuzz(9)).toBe('fizz')
    })
    test('return buzz when number is multiple of 5', () => {
        expect(fizzbuzz(5)).toBe('buzz')
        expect(fizzbuzz(10)).toBe('buzz')
    })
    test('return fizzbuzz when number is multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz')
        expect(fizzbuzz(30)).toBe('fizzbuzz')
    })
    test('return fizz when number is multiple of 3', () => {
        expect(fizzbuzz(-3)).toBe('fizz')
    })
    test('return fizz when number is multiple of 3', () => {
        expect(fizzbuzz(1)).toBe('1')
        expect(fizzbuzz(7)).toBe('7')
    })
});
