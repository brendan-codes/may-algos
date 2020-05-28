//Good Morning from Theary Ouk and Petra Franklin and Chris Holley
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

function honorificNames(title, nameArr){
    let honorificNamesArr = [];
    for (let name of namesArr){
        const firstName = name.split(", ")[1];
        const lastName = name.split(", ")[0];
        const fullName = title + " " + firstName + " " + lastName;
        honorificNamesArr.push(fullName);
    }
    return honorificNamesArr;
}

function honorificNames2(title, names){
    let honorificNamesArr = [];
    for (let name of names){
        let letterIdx = 0;
        let lastName = "";
        let firstName = "";
        while(name[letterIdx] !== ","){
            lastName = lastName + name[letterIdx];
            letterIdx ++;
        }
        letterIdx += 2;
        while(letterIdx < name.length){
            firstName = firstName + name[letterIdx];
            letterIdx ++;
        }
        let fullName = title + " " + firstName + " " + lastName;
        honorificNamesArr.push(fullName);
    }
    return honorificNamesArr;
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

function checkVersion(v1, v2){
    const v1Arr = v1.split(".");
    const v2Arr = v2.split(".");
    for (let i = 0; i < v1Arr.length; i++){
console.log([i].parseInt);
console.log([i].parseInt);
        // if ( v1Arr[i].parseInt < v2Arr[i].parseInt ){}
    }


    console.log(v1Arr);
}