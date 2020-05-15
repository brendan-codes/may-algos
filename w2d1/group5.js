

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


function interSet(arr1, arr2){
    let temp = 0;
    let newArr = [];
    for(let i= 0; i < arr1.length; i++){
        for(let j= 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j]){
                temp = arr1[i];
                newArr.push(temp);
            }
            else if (arr1[i] < arr2[j]) {
                i++
                j++
            }
            else if (arr2[j] < arr1[i]) {
                i++
                j++
            }
        }
    }
    return newArr;
}
console.log(interSet([1,2,2,2,7], [2,2,6,6,7]));















// === GLOSSARY ===

// collection: grouped data. arrays, lists, sets, multisets
// set: a collection with no duplicates, does not track count of values
// multiset: a collection that allows duplicates, tracks count of values
// intersection: all the values that exist across multiple collections, deduped