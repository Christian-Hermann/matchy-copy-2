/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

// const { stubArray } = require("lodash");

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: create animal object
O: output will print animal object using the console
C: use dot notation use bracet notation
E: NA
*/

var animal = {};
animal.species = "Dog"
animal['name'] = "Cooper"
animal.noises = [];







//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Create a variable named "noises"
O: An array of noises
C: Use different methods for bracket notation to add string to array
E: NA
*/

var noises = [];

// place at position 'zero' in the array
noises[0] = 'bark'
// place noise at the end of the array
noises[noises.length] = 'screech'
// place noise at the end of array
noises.push('scream')
// place noise at the begining of the array
noises.unshift('beep')

console.log(noises)


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: 
O: 
C: 
E: 
*/

// Add 'noises' array to the object
animal['noises'] = noises
// Add another noise to noises array
animal.noises.push('quack')




/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: 
O: 
C: 
E: 
*/

var animals = [];

// push animal object onto animals array
animals.push(animal)
// console.log animals
console.log(animals)
// create a variable duck and assign key/vale pairs
var duck = {
species: 'Duck',
name: 'Jerome',
noises: ['quack', 'honk', 'sneeze', 'woosh']
}
// Push duck onto animals
animals.push(duck)
console.log(animals)
// Make two more animal objects
var cat = {
species: 'Cat',
name: 'Kitty',
noises: ['meow', 'hiss', 'quack']
};

var bird = {
  species: 'Bird',
  name: 'Birdy',
  noises: ['oink', 'squawk', 'gasp']
};
// Add the new objects to animals
animals.push(cat)
animals.push(bird)

console.log(animals)




//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////




// 1. I chose an array because they are used to store data 
//    and they are easily manipulated.

// create a variable and assign to a data structure
var friends = [];
// create a function with input array
function getRandom(arr){
// returns a random index of the input array
// Math.floor() finds lowest integer
// Math.random() * arr.length finds random index in length of array
  return Math.floor(Math.random() * arr.length)
}

/*
I: using random index from function get random animal
O: add its name to friends array
C: NA
E: NA
*/

// 
// Get a random index of array using getRandom function
let animalIndex = getRandom(animals)
// Push random animals name to friends array
friends.push(animals[animalIndex].name)
console.log(friends)
// Add friends list as property on friends
animals[animalIndex]['friends'] = friends
console.log(friends)









/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}