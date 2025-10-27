// calc().add(10).subtract(5).multiply(20).divide(2).getResult() = 50

class Calculator {
    constructor(initialValue = 0){
        this.value = initialValue;
    }

    add(num) {
        this.value += num;
        return this;
    }
    subtract(num) {
        this.value -= num;
        return this;
    }
    multiply(num) {
        this.value *= num;
        return this;
    }
    divide(num) {
        this.value /= num;
        return this;
    }
    getResult() {
        return this.value;
    }
}

function calc() {
    return new Calculator();
    //add, subtract, multiply, divide, getResult
}

console.log(calc().add(10).subtract(5).multiply(20).divide(2).getResult());