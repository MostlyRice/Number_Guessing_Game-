console.log('random-number.class.js loaded');

// This handles the min value and max value.
class Random {
  constructor (min, max) {
    this.min = 0;
    this.max = placeholder;
  }

  // This is the random number generator that will stay between the min and max.
  numberGenerator() {
    return Math.round(Math.random() * (this.max - this.min) + this.min);
  }
}

module.exports = Random;
