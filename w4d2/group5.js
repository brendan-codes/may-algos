// Norbert "Fes" Geisler, Chris Holley, Leuter

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

function canPalindrome (string) {
    var arr = Array.from(string);
    var loopCounter = arr.length;
    while(arr.length > 1 && loopCounter > 0) {
        var i=0;
        for(var j=1; j<string.length; j++) {
            if(arr[i] == arr[j]) {
                arr.splice(i,1);
                arr.splice(j,1);
                break;
            }
        }
        loopCounter--;
    }
    if(arr.length > 1) {
        return false;
    }
    else{
        return true;
    }

}

var string = "rraacce"
console.log(string[1])

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