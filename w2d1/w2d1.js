// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

// arrays may not be the same length
// create new array
// input always sorted
// may be empty
// integers


// extra challenge:
// how would you change your function to accept n arrays?









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
