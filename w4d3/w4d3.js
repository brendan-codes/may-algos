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


function backspaceCompare(S, T) {
    let sBackspaced = processBackspaces(S);
    let tBackspaced = processBackspaces(T);

    if (sBackspaced === tBackspaced) {
      return true;
    } else {
      return false;
    }
}

function processBackspaces(s) {
let backspaceCount = 0;
let str = "";

for (let i = s.length - 1; i >= 0; i--) {
let isBackspace = s[i] === "#";

    if (backspaceCount > 0 && !isBackspace) {
    backspaceCount--;
        } else if (isBackspace) {
        backspaceCount++;
        } else {
        str = s[i] + str;
        }
    }
    return str;
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

function canBuildS1FromS2(neededStr, availableStr) {
    const availableHash = {};

    // build hash
    for (const availableChar of availableStr) {
      const availableCharLower = availableChar.toLowerCase();

      if (availableHash.hasOwnProperty(availableCharLower) === false) {
        availableHash[availableCharLower] = 1;
      } else {
        availableHash[availableCharLower]++;
      }
    }

    // check hash
    for (const neededChar of neededStr) {
      const neededCharLower = neededChar.toLowerCase();

      if (availableHash.hasOwnProperty(neededCharLower) === false) {
        // never existed
        return false;
      } else if (availableHash[neededCharLower] === 0) {
        // existed but emptied
        return false;
      } else {
        availableHash[neededCharLower]--;
      }
    }

    return true;
}