// John Stevens,Ryan Alumbaugh, Kamakani Roque
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

const possiblePalindrome = (astring) => {
  let charMap = {}
  for (const char of astring){
      if (!charMap[char]){
          charMap[char] = 1
      }
      else {charMap[char] += 1}
  }
  if (astring.length % 2 == 0){
      // even number of characters
      for (const key of Object.keys(charMap)){
          if (charMap[key] % 2 !== 0){
              return false
          }
      }
      return true
  }
  else {
      // odd number of characters.
      let odd = 0;
      for (const key of Object.keys(charMap)){
          if (charMap[key] % 2 !== 0){
              odd += 1
              if (odd > 1){return false}
          }
      }
      return true
  }
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


let array = [10,2,8,12,16,7,10,8]
const isEven = n => { return n % 2 === 0 }
const isOdd = n => { return n % 2 !== 0 }

const mySlice = (arr, idx1, idx2=arr.length) => {
  let newArr = []
  for (var i=idx1; i<idx2; i++){
      newArr.push(arr[i])
  }
  return newArr
}

const dropIt = (arr, callBack) => {
    let flag = false
    while (!callBack(arr[0])){
        arr = arr.mySlice(1,arr.length)
    }
    return arr
}

console.log(dropIt(array, isEven)) // Output -> [10, 2, 8, 12, 16, 7, 10, 8]
console.log(dropIt(array, isOdd)) // Output -> [ 7, 10, 8 ]


const dropIt = (arr, callback) => {
  let output=[];
  let firstidx = false;
  for(let i = 0; i< arr.length; i++){
    // Find first time that it returns true
    if(callback(arr[i]) && firstidx===false){
      firstidx = true;
      output.push(arr[i])
    }
    // First time it returns true has been found.Output rest of array
    else if(firstidx){
      output.push(arr[i])
    }
  }
  return output;
}



