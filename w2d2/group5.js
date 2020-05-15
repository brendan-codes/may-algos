//Group members: Ryan, Becky,Martin,Jancy
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

let array1=[1, 2, 2, 2, 7]
let array2=[2, 2, 6, 6, 7, 7]

Output = [1, 2, 2, 2, 6, 6, 7]

const avengersAssemble = (arr1, arr2) =>{
    let idx1 = 0
    let idx2 = 0
    let count1 = 1
    let count2 = 1
    let output = []
    while(idx1 < arr1.length && idx2 < arr2.length){
        if(arr1[idx1] == arr1[idx1+1] && idx1 < arr1.length){
            idx1++;
            count1++;
        }
        else if(arr2[idx2] == arr2[idx2+1] && idx2 < arr2.length){
            idx2++;
            count2++;
        }
        else if(arr1[idx1] < arr2[idx2]){
            while(count1 !==0){
                output.push(arr1[idx1]);
                count1 = count1-1;
            }
            idx1++;
        }
        else if(arr1[idx1] > arr2[idx2]){
            while(count2 !==0){
                output.push(arr2[idx2]);
                count2 = count2 -1;
            }
            idx2++;
        }
        else if(arr1[idx1] === arr2[idx2] && count1 > count2){
            while(count1 !==-1){
                output.push(arr1[idx1]);
                count1 = count1-1;
            }
            count2 = 1;
            idx1++;
            idx2++;
        }
        else{
            while(count2 !==-1){
                output.push(arr2[idx2]);
                count2 = count2-1;
            }
            count1 = 1;
            idx1++;
            idx2++;
        }
    }
    return output;
}

console.log(avengersAssemble(array1,array2))









// arr1 = [1,2,2,2,7]
//                      5
// arr2 = [2,2,6,6,7] x
//                     5

// result = [2, 7];
// function intersection(array[19]){}

// {}
function intersectSortedArrays(arr1, arr2) {
    let idx1 = 0;
    let idx2 = 0;

    const len1 = arr1.length;
    const len2 = arr2.length;
    const result = [];

    while (idx1 < len1 && idx2 < len2) {
        if (arr1[idx1] < arr2[idx2]) {
            idx1++;
        } else if (arr1[idx1] > arr2[idx2]) {
            idx2++;
        }
        // current num from both arrays are equal
        else {
            if (result[result.length - 1] !== arr1[idx1]) {
                result.push(arr1[idx1]);
            }
            idx1++;
            idx2++;
        }
    }
    return result;
}



// === GLOSSARY ===

// collection: grouped data. arrays, lists, sets, multisets
// set: a collection with no duplicates, does not track count of values
// multiset: a collection that allows duplicates, tracks count of values
// intersection: all the values that exist across multiple collections, deduped

// union multiset: the higher count of duped values are kept. if there are 3 number ones
// in one set and 2 number ones in the other set, 3 number ones would be kept
