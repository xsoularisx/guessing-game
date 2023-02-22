class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        return Math.ceil((this.max + this.min) / 2);
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
