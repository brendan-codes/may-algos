/*

// Michael Remy, Denys Glukhovskyi
  https://leetcode.com/problems/backspace-string-compare/

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time

  Examples:
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/

function BackSpaceChar(S, T) {

    let arr1 = [], arr2 = []
    for (const char of S) {
        if (char === "#") {
            arr1.pop()
        }
        else {
            arr1.push(char)
        }
    }
    for (const char of T) {
        if (char === "#") {
            arr2.pop()
        }
        else {
            arr2.push(char)
        }
    }
    return arr1.join("") == arr2.join("");
}

console.log(BackSpaceChar("ab#c", "ad#c"))


/*
    Given two strings,
    return true if the first string can be built from the letters in the 2nd string
    Ignore case

    Input: "Hello World", "lloeh wordl"
    Output: true

    Input: "Hey", "hello"
    Output: false, second string is missing a "y"

    Input: "hello", "helo"
    Output: false, second string doesn't have enough "l" letters
 */

function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }
    let str1Counter = {}
    let str2Counter = {}

    for (let val of str1) {
        str1Counter[val] = (str1Counter[val] || 0) + 1
    }
    for (let val of str2) {
        str2Counter[val] = (str2Counter[val] || 0) + 1
    }
    for (let key in str1Counter) {
        if(!(key in str2Counter)) {
            return false;
        }
        if(str2Counter[key] !== str1Counter[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram("weloveyou", "ewloveyou"));