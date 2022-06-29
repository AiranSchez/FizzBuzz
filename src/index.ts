const sum = (num1: number): string => {
    const isMultipleOfThree = num1 % 3 == 0
    const isMultipleOfFive = num1 % 5 == 0

    return (isMultipleOfThree && isMultipleOfFive) ? "fizzbuzz"
        : isMultipleOfFive ? "buzz"
        : isMultipleOfThree ? "fizz"
        : num1.toString()
}
export default sum
