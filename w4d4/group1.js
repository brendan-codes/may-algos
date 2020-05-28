// Norbert (Fes) Geisler, binta,
/*
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: avoid built in methods besides simple ones like .push
*/

// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]


const Honorific = (names, title) =>{
  var output = [];
  var newEntry = "";
  var lastName = "";
  for (var i = 0; i < names.length; i++){
    newEntry = title;
    lastName = "";
    var firstName = false;
    for (var j = 0; j < names[i].length; j++) {
      if (names[i][j] != "," && firstName == false) {
        lastName += names[i][j];
      }
      else if (names[i][j] == ",") {
        firstName = true;
        continue;
      }
      if (firstName == true) {
        newEntry += names[i][j];
      }
    }
    newEntry += " ";
    newEntry += lastName;
    output.push(newEntry)
  }
  return output;
}

const Honorific = (names, title) => {
    const output = [];
    let newEntry = "";
    for (var i=0; i < names.length; i++){
        newEntry=title;
        let commahit = false
        let lastName = ' '
        for(var j=0; j <names[i].length; j++){
            if(commahit === false){
                if(names[i][j] === ","){
                    commahit = true;
                }
                else{
                    lastName+=names[i][j];
                }
            }
            else{
                newEntry+=names[i][j];
            }
        }
        output.push(`${newEntry}${lastName}`);
    }
    return output
}


/*
  https://leetcode.com/problems/compare-version-numbers/
  Given two strings, version1, and version2, both representing version numbers
  If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

  Helpful methods:
    - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

  Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
// Output: -1

const test2V1 = "1.0.1";
const test2V2 = "1";
// Output: 1

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
// Output: -1

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
// Output: 1

const test5V1 = "1.01";
const test5V2 = "1.001";
// "1.1"
// Output: 0
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
// Output: 1


const versionStuff = (str1, str2) => {
  var output = null;
  if (str1 === str2) {
      console.log("Got 'im!")
  return 0;
  }
  if (str1.length > str2.length) {
    output = versionCompare(str1,str2);
  }
  else {
    output = versionCompare(str2,str1);
  }
  return output;
}
const versionCompare =(str1, str2) => {
  for (var i = 0; i < str1.length; i++) {
    if ()
  }
}

const versionCheck = (string1, string2){
    let idx1 = [];
    let idx2 = [];
    let num1= '';
    let num2= '';
    let longstring = string2;
    if(string1.length>string2.length){
        longstring = string1;
    }
    for(let i=0; i>longstring.length; i++){
        if(string1[i] !== '.' && string1[i] !== undefined){
            num1+=string1[i];
        }
        else if(string1[i] === '.'){
            idx1.push(num1)
            num1= '';
        }
        if(string2[i] !== '.' && string2[i] !== undefined){
            num2+=string2[i];
        }
        else if(string2[i] === '.'){
            idx2.push(num2);
            num2= '';
        }
    }
}