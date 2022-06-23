function calculator(number1, number2, operation) {
    switch (operation) {
        case "sum":
            return number1 + number2
            break
        case "subtract":
            return number1 - number2
            break
        case "multiply":
            return number1 * number2
            break
        case "divide":
            return number1 / number2
            break
        default:
            return 'Please enter 2 valid numbers and an operation in this calculator'
    }
}