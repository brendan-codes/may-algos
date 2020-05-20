// Good Morning. This is Michael Cote, Martin, Petra Franklin.Cote


// Create a function to determine the max amount of
//   servings that can be made based on a recipe and
//   available ingredients.

//   Input:
//     - recipe object where keys are ingredient names
//       and values are unit required (int)
//     - available ingredients object where keys are ingredient
//       names and values are unit available (int)
//   Output:
//     int (max servings)

//   Side note (possible extra challenge version): Realistically, the values
//   would be an object as well with the keys: unit (unit of measure), and amount.
//   If the available ingredient was stored in a different unit,
//   a conversion table would be needed to convert units of measure.
// */

// Example Input
const recipe = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    "spicy": 5,
    "gourmet memes": 4200,
};

const available = {
    "organic fat": 990,
    "live squid": 18,
    "birds nest": 10,
    "fried flesh": 10,
    "spicy": 50,
    "gourmet memes": 42000,
    "sugar": 9001,
    "spice": 5,
    "everything nice": 1,
};
  // Output: 1 because only 1 live squid is available
  // Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
  // Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'


//   1.) Divide each item in available by corresponding items in recipe.
//   2.) push results into an array
//   3.) sort for lowest number in our new array and return that number
//   as the answer of how servings we can produce.

// or
//  1.) .map available by recipe (math.divide) = servings


const servings = (recipe, available ) => {
    const servings = []
    var lowest = 0
    for(var i = 0; i < recipe.length -1; i++){
        for(var i = 0; i < available.length -1; i++) {

            if recipe[i] & available
        }
    }





    // const e = math.recipe())
    // math.divide(recipe, available)
    available.map(Math.divide(recipe, available));


 return lowest
 console.log(lowest)
}
math.lcm (least common multiple)
math.lcm([4, 6], [6, 21])    // returns [12, 42]


//     f {
//     }
//     for (const ingredient of recipe) {
//         if (available[i].includes(ingredient[i]) === true) {
//             then available/ingredient = n
//             servings.push = {ingredient} + n
//         }
// return lowest
//     }