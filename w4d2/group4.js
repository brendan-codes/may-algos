//Petra Franklin
//Richard Lee
//Martin
 // "Possible Palindrome"

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that can be reverse and is still the same string.

// "aabbccdde" => true
// "abcdedcba"

// "baba" => true
// "aabb"


// "bcda" => false
// "abcd"

// "racecar"
// "racecar"

// "bread"
// "dearb"

// " racecar"

function palindrome(str){
    let obj = {};
    let count = 0;
    for(let i of str){
        obj[i] =  (obj[i] || 0) +1;
    }
    if(str.length % 2 === 0){
        for (let key in obj){
            if(obj[key] % 2 !== 0){
                return false;
            }
        }
    }
    if(str.length % 2 !== 0){
        for(let key in obj){
            if(obj[key] % 2 !== 0){
                count++;
            }
        }
        if(count > 1){
            return false;
        }
    }
    return true
}
console.log(palindrome("aabbccdde"))
console.log(palindrome("bcda"))
console.log(palindrome("racecar"))



// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  "Drop It"

  Input: arr, callback that returns true or false
  Output: arr (with elements removed)

  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.

  Return an empty array if the callback never returns true
*/

// dropIt(arr, callback){
//     if(callback(arr[0])){
//         do what?
//     }
// }

// (n) => return n > 17;

function dropElements(arr, func) {
    let newArr = [];
    for (let i of arr){
        if(func(i) == true){
            newArr.push(i);
        }
    }
    return newArr;
  }

  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));