
const Calculator = require('./Calculator.js')

describe('calculator', () => {
    describe("equals", () => {
        test("has a getter on 'register' called equals",() => {
            const subject = new Calculator(5);
            expect(subject.equals).toBeDefined();
        })
        test("has an initial value",() => {
            const subject = new Calculator(5);
            expect(subject.equals()).toBeDefined();
        })
        test("returns the current value",() => {
            const subject = new Calculator(5);
            expect(subject.equals()).toBe(5);
        })
    })

    describe('addition', () => {
        test("has an addition function",() => {
            const subject = new Calculator(5);
            expect(subject.add).toBeDefined();
        })
        test("addition can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.add(0).add).toBeDefined();
        })
        test("addition adds correctly",() => {
            const subject = new Calculator(5);
            expect(subject.add(5).equals()).toBe(10);
        })
    })

    describe('subtraction', () => {
        test("has an subtraction function",() => {
            const subject = new Calculator(5);
            expect(subject.subtract).toBeDefined();
        })
        test("subtraction can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.subtract(0).subtract).toBeDefined();
        })
        test("subtraction subtracts correctly",() => {
            const subject = new Calculator(5);
            expect(subject.subtract(5).equals()).toBe(0);
        })
    })

    describe('multiplication', () => {
        test("has an multiplication function",() => {
            const subject = new Calculator(5);
            expect(subject.multiply).toBeDefined();
        })
        test("multiplication can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.multiply(0).multiply).toBeDefined();
        })
        test("multiplication multiplies correctly",() => {
            const subject = new Calculator(5);
            expect(subject.multiply(5).equals()).toBe(25);
        })
    })

    describe('division', () => {
        test("has an division function",() => {
            const subject = new Calculator(5);
            expect(subject.divide).toBeDefined();
        })
        test("division can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.divide(0).divide).toBeDefined();
        })
        test("division divides correctly",() => {
            const subject = new Calculator(5);
            expect(subject.divide(5).equals()).toBe(1);
        })
    })

    describe('clear', () => {
        test("has an clear function",() => {
            const subject = new Calculator(5);
            expect(subject.clear).toBeDefined();
        })
        test("clear can be chained",() => {
            const subject = new Calculator(5);
            expect(subject.clear().clear).toBeDefined();
        })
        test("clear empties the register correctly",() => {
            const subject = new Calculator(5);
            expect(subject.clear().equals()).toBe(0);
        })
    })

    test("Complete functionality cycle",() => {
        const subject = new Calculator(5);
        expect(subject.clear().add(3).subtract(1).multiply(6).divide(3).equals()).toBe(4);
    })

})