// Theary Ouk, Denys Glukhovskyi, Jon Yoo

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

// "rraceac" => true ********************** hello my name is theary
// "racecar"
// "racecar"

// "bread"
// "dearb"

// " racecar"

const isPalindrome = (string) => {
  let newDict ={};
  let oddCount =0;
  for (let letter of string){
      newDict[letter]? newDict[letter] += 1 :newDict[letter] = 1
  }
  for (let key in newDict){
      if(newDict[key] %2 !== 0){
          oddCount += 1;
      }
  }
  console.log(oddCount);
  if(string.length %2 === 0 && oddCount === 0){
    return true;
  }
  else if (oddCount === 1){
      return true;
  }
  else { return false; }
}




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

function dropIt(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            break;
        } else {
            // remove element
            arr.shift();
            i--;
        }
    }

    return arr;
}

let arr1 = [1, 2, 3, 4, 10, 11];
let callback1 = (x) => x > 12;

console.log(dropIt(arr1, callback1));