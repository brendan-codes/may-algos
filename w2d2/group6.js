// Union Sorted Arrays

// Efficiently combine two already-sorted multiset arrays
// into a new sorted array containing the multiset union.

// Unions by default will take the set of dupes
// that has the highest occurences from one array.

// Input: [1,2,2,2,6, 6,6,6,7], [2,2,6,6,7]
// Output: [1,2,2,2,6,6,6,6, 7]

// arrays could be different sizes
// all positive integers
// could be empty


// https://prod.liveshare.vsengsaas.visualstudio.com/join?CB04E68C2F05CF5355590769EA2420480100
// share this if a group member drops or connects late


function unionSortedArray(arr1, arr2){
    let idx1 = 0;
    let idx2 = 0;

    const len1 = arr1.length;
    const len2 = arr2.length;
    const result = [];
    while(idx1 < len1 || idx2 < len2){
        if(arr1[idx1] < arr2[idx2]){
            result.push(arr1[idx1])
            idx1++
        }
        else if (arr2[idx2] < arr1[idx1]){
            result.push(arr2[idx2])
            idx2++
        }
        else if(arr1[idx1] == arr2[idx2]){
            result.push(arr1[idx1])
            idx1++
            idx2++
        }
    }
    return result;
}
console.log(unionSortedArray([1,2,2,2,6, 6,6,6,7], [2,2,6,6,7]))



// function intersectSortedArrays(arr1, arr2) {
//     let idx1 = 0;
//     let idx2 = 0;

//     const len1 = arr1.length;
//     const len2 = arr2.length;
//     const result = [];

//     while (idx1 < len1 && idx2 < len2) {
//         if (arr1[idx1] < arr2[idx2]) {
//             result.push(arr1[idx1]);
//             idx1++;
//         } else if (arr1[idx1] > arr2[idx2]) {
//             result.push(arr2[idx2]);
//             idx2++;
//         }
//         // current num from both arrays are equal
//         else {
//             if (result[result.length - 1] !== arr1[idx1]) {
//                 result.push(arr1[idx1]);
//             }
//             idx1++;
//             idx2++;
//         }
//     }
//     return result;
// }