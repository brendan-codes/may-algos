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


function myReplace(astring, target, newValue){
    let output = ""
    for (const char of astring){
        if (char == target){output += newValue}
        else {output += char}
    }
    return output
}

function mySplit(astring, value){
    let output = []
    let i = 0
    while (i < astring.length){
        let entry = ""
        let j = i
        while (astring[j] !== value && j<astring.length){
            entry += astring[j]
            j += 1
        }
        output.push(entry)
        j += 1
        i = j
    }
    return output
}
// without built-ins
function honorific(title, names){
    let output = []
    for (var name of names){
        let n = myReplace(name, " ", "")
        n = mySplit(n, ",")
        output.push(`${title} ${n[1]} ${n[0]}`)
    }
    return output
}
// output -> [ 'Sir Elton John', 'Sir Ian Mckellen' ]

// with built-ins
function honorific(title, names){
    let output = []
    for (var name of names){
        let n = name.replace(" ","").split(",")
        output.push(`${title} ${n[1]} ${n[0]}`)
    }
    return output
}
console.log(honorific("Sir", ["John, Elton", "Mckellen, Ian"]))


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

function compareVersionNumbers(version1, version2){
    let formattedVersion1 = version1.split(".")
    let formattedVersion2 = version2.split(".")

    for (var i=0; i<formattedVersion1.length;i++){
        formattedVersion1[i] = parseInt(formattedVersion1[i], 10)
    }
    for (var j=0; j<formattedVersion2.length;j++){
        formattedVersion2[j] = parseInt(formattedVersion2[j], 10)
    }

    let m = 0, n = 0
    while (formattedVersion1[m] == formattedVersion2[n] && m<formattedVersion1.length){
        m += 1
        n += 1
    }
    if (formattedVersion1[m] || formattedVersion1[m] === 0){
        if (formattedVersion1[m] > formattedVersion2[n] || !formattedVersion2[n]){return 1}
    }

    if (formattedVersion2[n] || formattedVersion2[n] === 0){
        if (formattedVersion2[n] > formattedVersion1[m] || !formattedVersion1[m]){return -1}
    }
    if (formattedVersion1[m] < formattedVersion2[n]){return -1}
    else {return 0}

}

console.log(compareVersionNumbers("0.2.3", "1.2.5")) // Output -> -1
console.log(compareVersionNumbers("0.1", "1.1")) // Output -> -1
console.log(compareVersionNumbers("7.5.2.4", "7.5.3")) // Output -> -1
console.log(compareVersionNumbers("1.01", "1.001")) // Output -> 0
console.log(compareVersionNumbers("1.0.1", "1")) // Output -> 1