Good Morning!

This is Jon Yoo, Kevin Chancey and Petra Franklin.

// challenge #1

// https://leetcode.com/problems/two-sum/

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.


// unsorted, positive integers, no floats

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSums(nums, target) {
    let dict = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (diff in dict){
            return [dict[diff], i]
        }

        dict[nums[i]] = i
    }

    return false;
}
//return dict
twoSums([2,7,11,15], 9);

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


function allNonConsecutive(nums) {
    let output = []

    if (nums.length < 2) {
        return output
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
            let outputElement = {}
            outputElement['i'] = i
            outputElement['n'] = nums[i]
            output.push(outputElement)
        }
    }

    return output
}

let testInput = [1,2,3,4,6,7,8,10,15,16]
console.log(allNonConsecutive(testInput))