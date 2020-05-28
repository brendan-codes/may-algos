// Group members: Ryan Alumbaugh,Michael Cote,Kevin Chancey

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
const checkForHashes =(S) => {
    let idx = 0;
    let idxLead = 0;
    let hashcount = 0;
    let output = [];
    while(idx < S.length){
        if (S[idxLead] !== '#' && idxLead < S.length){
            idxLead ++
        }
        else if(S[idxLead+hashcount] === '#'){
            hashcount++
        }
        else if(idx<idxLead-hashcount){
            output.push(S[idx]);
            idx++;
        }
        else{
            idx = idxLead+hashcount;
            idxLead = idx;
            hashcount = 0;
        }
    }
    return output;
}

const equalStrings = (S,T) => {
    let arrayS = checkForHashes(S);
    let arrayT = checkForHashes(T);
    if(arrayS.length !== arrayT.length){
        return false;
    }
    else{
        for(let i=0; i<arrayS.length; i++){
            if(arrayS[i] !== arrayT[i]){
                return false;
            }
        }
        return true;
    }
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
const makeAnObject = string => {
    returnedObject = {};
    for(let i=0; i<string.length; i++){
        if(returnedObject.hasOwnProperty(string[i])){
            returnedObject[string[i]] ++
        }
        else{
            returnedObject[string[i]] = 1;
        }
    }
    return returnedObject;
  }

const canWeBuildIt = (string1, string2) =>{ // String 1 and String 2, like the Dr. Seuss characters!
    let lowString1 = string1.toLowerCase();
    let lowString2 = string2.toLowerCase();
    builtWord = makeAnObject(lowString1);
    availableLetters = makeAnObject(lowString2);
    for(keys in builtWord){
        if(!availableLetters.hasOwnProperty(keys) || availableLetters[keys] < builtWord[keys]){
            return false;
        }
    }
    return true;
}