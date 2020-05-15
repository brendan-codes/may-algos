// Group Members: Ryan, Theary, Martin, Song
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
const array1 = [5, 5, 6]
const array2 = [2, 7, 11, 15]
function twoSums(nums, target){
    let idx1 = 0;
    let idx2 = 1;
    let output = [];
    while (idx1 <= nums.length - 2) {
        if (nums[idx1] + nums[idx2] === target) {
            output.push(idx1);
            output.push(idx2);
            break;
        }
        else if (idx2 <= nums.length - 1) {
            idx2++;
        }
        else {
            idx1++;
            idx2 = idx1 + 1;
        }
    }
    return output
}
console.log(twoSums([2, 7, 11, 15], 9));

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


const allNonConsecutive = (nums) =>{
    let idx = 0;
    let output =[];
    while(idx <= nums.length-2){
        if(nums[idx] == nums[idx+1]-1){
            idx++;
        }
        else{
            idx++;
            output.push({"i": idx, "n": nums[idx]});
        }
    }
    return output;
}