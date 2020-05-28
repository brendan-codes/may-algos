// Theary Ouk, Jancy, Fez, Chris Holley
/*
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
function backspaceString (str1) {
    let arr1 =[];
    let countHash =0;
    for (let i = str1.length-1; i >= 0; i--){
        if(str1[i] === "#"){
            countHash ++;
        }
        else {
            if(countHash > 0){
                countHash --;
                continue;
            }
            else {
                arr1.push(str1[i]);
            }
        }
    }
    return arr1;
}

function checkStrings(str1, str2){
    let arr1 = backspaceString(str1);
    let arr2 = backspaceString(str2);
    if (arr1.length !== arr2.length){
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
}


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

function buildSameStrings(str1, str2){
    let newDict = {};
    for (let char of str1){
        newDict[char.toLowerCase()]? newDict[char.toLowerCase()] += 1 : newDict[char.toLowerCase()] = 1;
    }
    for (let char of str2){
        newDict[char.toLowerCase()]?
            newDict[char.toLowerCase()] > 0? newDict[char.toLowerCase()] -= 1:return false;
            : return false;
    }

    return newDict;
}