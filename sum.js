// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...numbers) => {
  let sumOfNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70

console.log(sum(25, 25, 20, 1, 78, 147, 0)); // -> 296
