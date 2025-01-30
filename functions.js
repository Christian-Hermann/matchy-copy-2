/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: takes in an array of animals and a string representing name of animal
O: return animals object if animal with that name exists
C: use a for loop, return null if no animal exists
E:
*/

function search(animals, animalName){
// loop through animals array 
for (i = 0; i < animals.length; i++){
    // check to see if string name exist on array
    if(animals[i].name === animalName){
     // if name exists return object
        return animals[i]
    }
    console.log(animals[i])
}
// if array name not found return null
return null;
}

search()

 



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in an array of animals, string representing name of animal
   and an Object representing replacement animal
O: If animal string within animal array exists
   Replace entire object with replacement object
C: Use a for loop to iterate through
E: NA
*/

function replace(animals, animalName, replacement){
// use a for loop to iterate through the array
for(let i = 0; i < animals.length; i++){
   // find if name string is in the anmals array
   if(animals[i].name === animalName){
    // if element name is found matching string replace with new object
    // just use element to equal replacement object
       animals[i] = replacement
}
}
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in an array of animals and a string name 
O: If an animal name sring exists in animal array remove it.
C: Use a for loop
E: NA
*/

function remove(animals, animalName){
   // iterate though for loop of animal array
   for(let i = 0; i < animals.length; i++){
      // find if string name matches name in array
   if(animals[i].name === animalName){
      //use splice to remove the element from the array at the index 'i'
      animals.splice(i, 1)
   }
   }

}





//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in an array of animals and an object representing new animal
O: Checks that the animal Object has a 'name' property w/ length > 0
   Checks that the animal Object has a 'species' property w/ length > 0
   Has unique name - no other animals have same name.
   Adds new Object to array only if ALL conditions pass
C: Use a for loop
E: NA
*/


function add(animals, animal){
   // use for loop to iterate through array to check if it has the same name
    for (let i = 0; i < animals.length; i++){
      // check if animal name exists
       if(animals[i].name === animal.name){
         // if animal name already exists return
          return
    // check if animal name and speices properties have lengths greater than zero
       if(animal.name.length === 0 && animal.species.length === 0) {
        // if zero then return
          return 
         } 
       }
 }
    // if the object passes all of the tests push animal object onto animals array
   animals.push(animal)
 }
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}