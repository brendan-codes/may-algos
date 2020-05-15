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

// matrix search

x = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 8],
    [1, 3, 5]
]



y = [
    [2, 3],
    [2, 3]
]

function matrix(arr1,arr2){
    pl=0
    for (var i=0;i<arr1.length;i++){
        for (var j=0;i<arr1[i].length;j++){
            if ((arr2[0][0]==arr1[i][j]) && (arr2[0][1]==arr1[i][j+1]) && (arr2[1][0]==arr1[i+1][j]) && (arr2[1][1]==arr1[i+1][j+1])){
                    return "Hell Yeah"

                }
            }
        }
    }

}

console.log(matrix(x,y))


// function targetindex(arr,k){
//     arr2=[];
//     pl={};
//     for (var i=0;i<arr.length;i++){

//         let diff=(k-arr[i]);
//         if ((diff) in pl){
//             arr2.push(i);
//             arr2.push(pl[diff]);
//         }
//         else{
//             pl[arr[i]]=i
//         }
//     }
//     return arr2
// }

// console.log(targetindex([2, 7, 11, 15],9))


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


