// "Possible Palindrome"

// Michael Remy, Kevin Chancey, Joshua K,Thomas Cheng

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


function palindrome(str) {
    MatchStr = ""
    if (str.length)
    for(let i = 0; i < str.length; i++) {
        for (let j=str.length-1;j=0;j--){
            if (str[i]==str[j]){
                break
            }
        }


}

console.log(palindrome(str))




function palindrome(str) {
    let Str1 = '';
    let Str2 = '';
    for(let i = 0; i < str.length; i++) {
        Str1+str[i]
    }
    for(let j=str.length-1; j>=0; j--){
        Str2+str[j]
    }
    if(Str1 === Str2){
        console.log(Str1)
        console.log(Str2)
        return true;
    }
    else if(Str1 !== Str2){
        console.log(Str1)
        console.log(Str2)
        return false;
    }
}
console.log(palindrome('racecar'))


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