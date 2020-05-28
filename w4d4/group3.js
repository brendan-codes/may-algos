// good morning from Becky, Anthony, Jancy ,Martin


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

function honorific (honorific, arrayOfNames) {
    let output = [];
    let stringOutput =""
    for(i = 0; i < arrayOfNames.length; i++){
        var res = arrayOfNames[i].split(",");
            stringOutput = stringOutput + honorific + " ";
            for(var j = res.length -1; j>=0 ; j--){
                stringOutput += res[j]+ " ";
            }
        console.log(stringOutput);
        output.push(stringOutput);
        stringOutput = "";
    }
return output;
}
console.log(honorific(honorific2, names2));



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

function TestzzzzHelper(string1){
    let result = parseInt(string1.split("."));
    return result;
}
console.log(result);

function TestzzMain(string1, string2){
    let result1 = TestzzzzHelper(string1);
    let result2 = TestzzzzHelper(string2);

    for(var i=0; i<result1.length || i <result2.length; i++){
        if( parseInt(result1[i]) < parseInt(result2[i])){
            return -1;
        }
        else if(parseInt(result1[i]) > parseInt(result2[i])){
            return 1;
        }
        else{
            return 0;
        }
    }
}

