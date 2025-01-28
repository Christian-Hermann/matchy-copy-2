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

search(dog, dog)
search(cat, dog)
 



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: Takes in an array of animals, string representing name of animal
   and an Object representing replacement animal
O: If animal string within animal array exists
   Replace entire object with replacement object
C: Use a for loop
E: NA
*/

function replace(animals, name, replacement){

}




//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



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