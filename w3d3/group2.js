// Group members:Ryan, Kamakani, Kevin

/*
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.

  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)

  Side note (possible extra challenge version): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

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
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    "spicy": 50,
    "gourmet memes": 42000,
    "sugar": 9001,
    "spice": 5,
    "everything nice": 1,
};


function getMin(recipe, available){
    for(keys in recipe){
        if(available.hasOwnProperty(keys)){
            let min = Math.floor(available[keys]/recipe[keys])
            return min;
        }
        else{
            return 0;
        }
    }
}

function food(recipe, available){
    let minimum = getMin(recipe, available)

    for(keys in recipe){
        if(!available.hasOwnProperty(keys)){
            return 0;
        }
        else{
            let curr = Math.floor(available[keys]/recipe[keys])
            if(curr < minimum){
                minimum = curr;
            }
        }
    }
    return minimum;
}
console.log(food(recipe, available))


// ###### A little fancier ######
const getMin = (recipe, available) =>{
    for(keys in recipe){
        if(available.hasOwnProperty(keys)){
            let limiting = keys;
            let minimum = Math.floor(available[keys]/recipe[keys]);
            return minimum;
        }
        else{
            return 0;
        }
    }
}

const food = (recipe, available) =>{
    let minimum = getMin(recipe, available);
    let limiting = ''
    for(keys in recipe){
        if(!available.hasOwnProperty(keys)){
            return `You can't make ANY dishes!`;
        }
        else{
            let curr = Math.floor(available[keys]/recipe[keys])
            if(curr < minimum){
                limiting = keys;
                minimum=curr;
            }
        }
    }
    return `You can make ${minimum} dishes due to limiting ${limiting}`
}

console.log(food(recipe, available))