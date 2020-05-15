// Richard Lee, Norbert "Fez" Geisler, John Stevens, Kamakani Roque

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

arr1 = [1,2,2,2,7]
arr2 = [2,2,6,6,7]

// === GLOSSARY ===

// collection: grouped data. arrays, lists, sets, multisets
// set: a collection with no duplicates, does not track count of values
// multiset: a collection that allows duplicates, tracks count of values
// intersection: all the values that exist across multiple collections, deduped

// union multiset: the higher count of duped values are kept. if there are 3 number ones
// in one set and 2 number ones in the other set, 3 number ones would be kept


function partition(arr, start, end){
    let pivot = arr[end]
    let i = start

    for (var j = start; j < end; j++){
        if (arr[j] <= pivot){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i += 1
        }
    }
    [arr[i], arr[end]] = [arr[end], arr[i]]
    return i
}

function quickSort(arr, start, end){
    if (start < end){
        var q = partition(arr, start, end)
        quickSort(arr, start, q-1)
        quickSort(arr, q+1, end)
    }
}

function multiSetUnion(arr1, arr2){
    let mapper1 = {}
    let mapper2 = {}
    let output = []

    for (var i=0; i<arr1.length;i++){
        if (!mapper1[arr1[i]]){
            mapper1[arr1[i]] = 1
        }
        else {
            mapper1[arr1[i]] += 1
        }
    }
    for (var j=0; j<arr2.length;j++){
        if (!mapper2[arr2[j]]){
            mapper2[arr2[j]] = 1
        }
        else {
            mapper2[arr2[j]] += 1
        }
    }

    for (var key of Object.keys(mapper1)){
        if (!mapper2[key]){
            for (var k=0; k<mapper1[key]; k++){
                output.push(parseInt(key, 10))
            }
        }
        else if (mapper2[key]){
            if (mapper1[key] > mapper2[key]){
                for (var k=0; k<mapper1[key]; k++){
                    output.push(parseInt(key,10))
                }
            }
            else if (mapper1[key] <= mapper2[key]){
                for (var k=0; k<mapper2[key]; k++){
                    output.push(parseInt(key,10))
                }
            }
        }

    }
    for (var key of Object.keys(mapper2)){
        if (!mapper1[key]){
            for (var k=0; k<mapper2[key]; k++){
                output.push(parseInt(key,10))
            }
        }
    }
    quickSort(output, 0, output.length-1)
    console.log(output)
    return output
}

multiSetUnion([1,2,2,2,7], [2,2,6,6,7]) // [1, 2, 2, 2, 6, 6, 7]
multiSetUnion([1,2,3], []) // [ 1, 2, 3 ]
multiSetUnion([], []) // []



function union(arr1, arr2){
    let i1 = 0;
    let i2 = 0;
    let newArr = [];
    while (i1<arr1.length && i2<arr2.length){
        if (arr1[i1]<arr2[i2]){
            newArr.push(arr1[i1]);
            i1++;
        }
        else if (arr2[i2]<arr1[i1]){
            newArr.push(arr2[i2]);
            i2++;
        }
        else{
            newArr.push(arr1[i1]);
            newArr.push(arr2[i2]);
            i1++;
            i2++;
        }
    } return newArr;
}
console.log(union([1,2,2,2,7], [2,2,6,6,7]));

function multiSetUnion(arr1, arr2) {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < arr1.length || j < arr2.length) {
        while(arr1[i] == arr2[j]) {
            i++;
            j++;
            result.push(arr1[i]);
        }
        while(arr1[i] != arr2[j]) {
            if (arr1[i] == arr1[i-1]) {
                i++;
                result.push(arr1[i]);
            }
            else if(arr2[j] == arr2[j-1]) {
                j++;
                result.push(arr2[j]);
            }
            if (arr1[i] < arr2[j]) {
                i++;
                result.push(arr1[i]);
            }
            else {
                j++;
                result.push(arr2[j]);
            }
        }
    }
    return result;
}