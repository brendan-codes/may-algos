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
const names3 = ["VonBrawn, Jane"];
// Output: ["Dr. Jane Wright"]


const addHonor = (honorific, fullNames) => {
    const output = [];


    for(const fullName of fullNames){
        let firstName = "";
        let lastName = "";
        let foundComma = false;

        for(let i = 0; i < fullName.length; i++){
            const char = fullName[i];

            if(char === ","){ foundComma = true };

            if(char !== " " && char !== ",") {
                if(foundComma === false) {
                    lastName += char;
                }else {
                    firstName += char;
                }
            }
        }
        output.push(`${honorific} ${firstName} ${lastName}`)
    }
    return output;
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

const test3V1 = "7.5.2.4.5.2.2.14.12.41.23.15.12.312.31.2";
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

const compareVersionsSplit = (v1, v2) => {
    const v1split = v1.split(".");
    const v2split = v2.split(".");


    for(let i = 0; i < v1split.length || i < v2split.length; i++){
        const v1revision = parseInt(v1split[i]) || 0;
        const v2revision = parseInt(v2split[i]) || 0;

        if(v1revision > v2revision){
            return 1;
        }else if(v1revision < v2revision){
            return -1;
        }
    }
    return 0;
}


const compareVersions = (v1, v2) => {
    let v1Revision = "";
    let v2Revision = "";
    let idx1 = 0;
    let idx2 = 0;


    while(idx1 < v1.length || idx2 < v2.length){
        while(v1[idx1] !== "." && idx1 < v1.length){
            v1Revision += v1[idx1];
            idx1++;
        }
        while(v2[idx2] !== "." && idx2 < v2.length){
            v2Revision += v2[idx2];
            idx2++;
        }

        if(v1Revision === ""){
            v1Revision = 0;
        }else{
            v1Revision = parseInt(v1Revision);
        }

        if(v2Revision === ""){
            v2Revision = 0;
        }else{
            v2Revision = parseInt(v2Revision);
        }

        // v1Revision = v1Revision === "" ? 0 : parseInt(v1Revision);
        // v2Revision = v2Revision === "" ? 0 : parseInt(v2Revision);

        if(v1Revision > v2Revision){
            return 1;
        }else if(v1Revision < v2Revision){
            return -1;
        }

        /// .... buh?

    }
}