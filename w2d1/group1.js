Denys Glukhovskyi, Edward Im, Binta, Richard Lee
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

function intersectSortedArray (arr1, arr2){
    if(arr1.length === 0 || arr2.length === 0){
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    let newArr =[];
    for(let i of arr1){
        obj1[i] =  (obj1[i] || 0) +1;
    }
    for(let i of arr2){
        obj2[i] =  (obj2[i] || 0) +1;
    }
    for(let key in obj1){
        if(key in obj2){
            newArr.push(parseInt(key, 10))
        }
    }
    return newArr;
}
console.log(intersectSortedArray([1,2,2,2,7], [2,2,6,6,7]))


function intersectSortedArray (arr1, arr2){
    let idx1 = 0
    let idx2 = 0
    let newArr = [];
    let length1 = arr1.length
    let length2 = arr2.length
    while(idx1 < length1 && idx2 < length2){
        if(arr1[idx1] === arr2[idx2]){
            if(arr1[idx1] !== newArr[newArr.length-1]){
                newArr.push(arr1[idx1]);
            }
            idx1++;
            idx2++;
        }
        else if(arr1[idx1] < arr2[idx2]){
            idx1++;
        }
        else if(arr1[idx1] > arr2[idx2]){
            idx2++;
        }
    }
    return newArr;

}

function intersectSortedArray (arr1, arr2, arr3){
    let idx1 = 0
    let idx2 = 0
    let newArr = [];
    let length1 = arr1.length
    let length2 = arr2.length
    while(idx1 < length1 && idx2 < length2){
        if(arr1[idx1] === arr2[idx2]){
            if(arr1[idx1] !== newArr[newArr.length-1]){
                newArr.push(arr1[idx1]);
            }
            idx1++;
            idx2++;
        }
        else if(arr1[idx1] < arr2[idx2]){
            idx1++;
        }
        else if(arr1[idx1] > arr2[idx2]){
            idx2++;
        }
    }
    return intersectSortedArray(newArr,arr3);

}









Set



// === GLOSSARY ===

// collection: grouped data. arrays, lists, sets, multisets
// set: a collection with no duplicates, does not track count of values
// multiset: a collection that allows duplicates, tracks count of values
// intersection: all the values that exist across multiple collections, deduped
