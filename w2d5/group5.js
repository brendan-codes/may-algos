// Michael Remy

// challenge #1

// https://leetcode.com/problems/two-sum/

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.


// unsorted, positive integers, no floats

function twoSums(nums, target) {

    let idx1 = 0, idx2 = 1
    for (let i = 0; i < nums.length - 1; i++) {
        idx1 = i
        for (let j = i + 1; j < nums.length; j++) {
            idx2 = j
            if (nums[i] + nums[i + 1] == target) {
                return [idx1, idx2]
            }
        }
    }
}

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].



// challenge #2

// https://www.codewars.com/kata/58f8b35fda19c0c79400020f

// allNonConsecutive(nums)

// Given a sorted array of positive ints, find all the non-consecutive integers
// A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

// The first element is never considered non-consecutive.

// Return an array of objects where each object contains the number itself
// and it's index.

// Input: [1,2,3,4,6,7,8,10]

// 6 and 10 are the only non-consecutive numbers

// Output: [
//  {i: 4, n:6},
//  {i: 7, n:10}
// ]

function allNonConsecutive(nums){
    output = []
    for (var i=1; i<nums.length; i++){
        if (nums[i] !== nums[i-1]+1) {
            output.push({
                i: i,
                n: nums[i]
            })
        }
    }
    return output
}

console.log(allNonConsecutive([1,2,3,4,6,7,8,10]))



/*
  Matrix Search

    Mike digs image recognition and wants to create a JavaScript Imaging Library,
    just like PIL for Python. He is given 2 different two-dimensional arrays,
    containing integers between 0 and 65535. Each two-dimensional array represents a
    gray-scale image, where each integer value is a pixel. The second image might be
    found somewhere within the larger one. Return whether it is.

    Given array: [[12,34,45,56], and array: [[67,78], return true . [98,87,76,65],[43,32] ] [56, 67 , 78 ,89] , [54, 43 , 32 ,21] ]

    Second: Return location of first match found ( [-1,-1] if no match). In example above, return [2,1] .
*/
// [
    // [98,87,76,65],
    // [43,32],
    // [56, 67, 78 ,89],
    // [54, 43, 32 ,21]
// ]
//[[][]] [[][]]
// [
    // [67,78],
    // [43,32]
// ]



// [
//  [0, 1, 2],
//  [0, 1, 2],
//  [0, 1, 3]
// ]

// [
// [1, 2],
// [1, 2]
//]

let A = [
    [98,87,76,65],
    [43,32],
    [56, 67 , 78 ,89],
    [54, 43 , 32 ,21]
]

let B = [[67,78]]
let C = [[67,79]]

let D = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 3]
   ]

let E = [
[1, 2],
[1, 2]
]


function includesSubArray(arr1, arr2){
    return arr2.every( (i => v => i = arr1.indexOf(v,i) + 1)(0))
}

function matrixSearch(matrixA, matrixB){
    for (var i=0; i<matrixA.length; i++){
        for (var j=0; j<matrixB.length; j++){
            if (includesSubArray(matrixA[i], matrixB[j])){
                let k = i+1
                for (var l=j+1; l<matrixB.length; l++){
                    if (!includesSubArray(matrixA[k], matrixB[l])){
                        return false
                    }
                }
                return true
            }
        }
    }
    return false
}
console.log(matrixSearch(A,B)) // true
console.log(matrixSearch(A,C)) // false
console.log(matrixSearch(D,E)) // true