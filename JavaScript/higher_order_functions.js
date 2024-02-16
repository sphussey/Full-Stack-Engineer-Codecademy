/*
Introduction to higher order functions
*/

const addTwo = num => {
    return num + 2;
  }
  
const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
      return checkB;
    } else {
      return 'inconsistent results';
    };
};

console.log(checkConsistentOutput(addTwo, 4));

/*
Introduction to Iterators:
The purpose of an iterator is to allow a function to loop over data in a collection without knowing the
specifics of how that data is stored or retrieved. In other words, it provides a way for
a function to interact with different types of collections in a consistent manner.


.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
.reduce() iterates through an array and takes the values of the elements and returns a single value.

reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/


  
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`)
})

  
const numbers = [1, 2, 3, 4, 5];
  
const squareNumbers = numbers.map(number => {
    return number * number;
});

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {return animal[0]})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {return number / 100})
  
console.log(squareNumbers);
  
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
  
const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});
  
console.log(onlyNumbers);
  
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbersTwo = randomNumbers.filter(num => {return num < 250})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {return word.length > 7})

const animalsTwo = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalsTwo.findIndex(animal => {return animal === 'elephant'})

const startsWithS = animalsTwo.findIndex(animal => {return animal[0] === 's'})


const numbersTwo = [1, 2, 4, 10];

const summedNums = numbersTwo.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17


const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10)

console.log(newSum);







