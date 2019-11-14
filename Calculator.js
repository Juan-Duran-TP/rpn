class Calculator {
    constructor(value) {
        if (typeof value === 'undefined') {
            this.value = 0;
        }
        else {
        this.value = value;
    }
    }

    equals(){
        return this.value;
    }

    add(value){
        this.value += value;
        return this;
    }

    subtract(value){
        this.value -= value;
        return this;
    }

    divide(value){
        this.value /= value;
        return this;
    }

    multiply(value){
        this.value *= value;
        return this;
    }

    clear(){
        this.value = 0;
        return this;
    }
}

module.exports = Calculator;