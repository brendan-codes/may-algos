

// Good Morning!
// This is Theary, Joshua, and Petra.

// Union Sorted Arrays

// Efficiently combine two already-sorted multiset arrays
// into a new sorted array containing the multiset union.

// Unions by default will take the set of dupes
// that has the highest occurrences from one array.

// Input: [1,2,2,2,6,6,6,7], [2,2,6,6,7]
// Output: [1,2,2,2,6,6,6,6,7]

// arrays could be different sizes
// all positive integers
// could be empty


// function Intersect(arrA, arrB) {
//     let arrC = [];
//     for(let i=0; i < arrA.length; i++){
//         for (let j =0; j < arrB.length; j++){
//             if (arrA[i] == arrB[j]){
//                 if (arrA[i] != arrC[arrC.length-1]) {
//                 arrC.push(arrA[i]);
//                 }
//             }
//         }
//     }
//     return arrC;
// }

// console.log(Intersect([1,2,6], []));
// 1.) Iterate through both  (while loop)
// 2.) Identify lowest value and compare  (COMPARE & INCREMENT)
// 2.) Push lowest and increment index of that array. (PUSH & INCREMENT)
// 3.) If equal, push one and increment both. ()

// Input: [1,2,2,2,6,6,6,7], [2,2,6,6,7]
// Output: [1,2,2,2,6,6,6,6,7]

function UnionSorted(arrA, arrB){
    let arrC = [];
    let idx1 = 0;
    let idx2 =0;

    if (arrA.length==0){
        return arrB
    }
    if (arrB.length==0){
        return arrA
    }

    while (idx1<arrA.length && idx2< arrB.length){
        if (arrA[idx1] < arrB[idx2]){
            arrC.push(arrA[idx1]);
            idx1 ++;
        }
        else if(arrA[idx1] === arrB[idx2]){
            arrC.push(arrA[idx1]);
            idx1 ++;
            idx2 ++;
        }
        else if(arrA[idx1] > arrB[idx2]){
            arrC.push(arrB[idx2]);
            idx2 ++;
        }
        }

    return (arrC);
}

UnionSorted([1,2,2,2,6,6,6,7],[2,2,6,6,7])


// arr1 = [1,2,2,2,7]
//                      5
// arr2 = [2,2,6,6,7] x
//                     5

// result = [2, 7];
// function intersection(array[19]){}

// {}
// function intersectSortedArrays(arr1, arr2) {
//     let idx1 = 0;
//     let idx2 = 0;

//     const len1 = arr1.length;
//     const len2 = arr2.length;
//     const result = [];

//     while (idx1 < len1 && idx2 < len2) {
//         if (arr1[idx1] < arr2[idx2]) {
//             idx1++;
//         } else if (arr1[idx1] > arr2[idx2]) {
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
//



// === GLOSSARY ===

// collection: grouped data. arrays, lists, sets, multisets
// set: a collection with no duplicates, does not track count of values
// multiset: a collection that allows duplicates, tracks count of values
// intersection: all the values that exist across multiple collections, deduped

// union multiset: the higher count of duped values are kept. if there are 3 number ones
// in one set and 2 number ones in the other set, 3 number ones would be kept