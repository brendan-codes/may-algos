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


function canStrBecomePalindrome(str) {
    // check zero length edge case
    if (str.length === 0) {
        return false;
    }

    // create a map for character frequencies, a count of odds, and if the length is odd bool
    const charFrequencies = {};
    let oddFreqCount = 0;
    let isOddLen = str.length % 2 !== 0;

    // loop characters of your string
    // 0(n)
    for (const char of str) {
        if (!charFrequencies.hasOwnProperty(char)) {
            charFrequencies[char] = 1;
        } else {
            charFrequencies[char]++;
        }
        // for loop through str
    }

    // {"a": 2, "b": 2, "c": 1}

    // lazy for in loop to map through the charFrequencies
    // 0(n-m)
    for (const key in charFrequencies) {
        const charFreq = charFrequencies[key];

        // if odd occurrences
        if (charFreq % 2 !== 0) {
            oddFreqCount++;

            // either the string is odd and we allow one odd number
            // or the string is even and we allow none

            // either way fail right here
            if ((isOddLen && oddFreqCount > 1) || (!isOddLen && oddFreqCount > 0)) {
                return false;
            }
        }
    }
    // get through the for in loop? you are true
    return true;
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
    // count
    let removeCount = 0;

    // loop
    for (let i = 0; i < arr.length; ++i) {
        // check against the callback
        const callbackResult = callback(arr[i]);

        // if we done we done
        if (callbackResult === true) {
            break;
        }

        // otherwise we're still counting
        if (callbackResult === false) {
            removeCount++;
        }
    }

    // if we have to remove any
    if (removeCount > 0) {
        // splice by the number of elements removed
        arr.splice(0, removeCount);
    }

    // return the array
    return arr;
}

// [a, b, c, d, e]
//  0  1  2  3  4