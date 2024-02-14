// Create a variable named input that is equal to any phrase you’d like. 
// This variable will contain the text you want to translate into “whale talk”.

let input = "Hello, how are you?";

// Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. 
// Using these lowercase letters, create an array named vowels.
const vowels = [ 'a', 'e', 'i', 'o', 'u' ];

// Create a variable named resultArray and set it equal to an empty array: []. 
// This will serve as a place to store the vowels from the input string.
let resultArray = [];

// Create a loop to iterate through each letter of the input variable text. 
// In a later step, we will compare each letter with our vowels array.
// Create a nested for loop inside of the for loop you just wrote. Make the inner 
// loop iterate through the vowels array each time the outer loop runs.
// This will enable you to check each letter of input against all the vowels elements during each iteration.

for (let i=0; i < input.length; i++) {
    console.log(input[i]);
    for (let j=0; j<vowels.length;j++){
        console.log(vowels[j]);
        // compares the input letter to every letter in the vowels array.
        if (input[i] === vowels[j]){
            // If the current character matches one of the vowel characters, add it to the resultArray
            // Write an if statement that checks if each letter in the input string is equal to 'e'. 
            // If so, use the .push() method to add input[i] to the resultArray.
            if (input[i] === 'e' || input[i] === 'u') {
                resultArray.push(input[i]);
                resultArray.push(input[i]);
            } else {
                resultArray.push(input[i]);
            }
            
        }
    }
}

console.log(resultArray.join('')); // Joins the elements of the resultArray into a single string using no separator and




