// This is Norbert"Fes" Geisler, Theary Ouk, and Petra Franklin.

// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,3,6,6,7]
// output: [2,7]

// arrays may not be the same length
// create new array
// input always sorted
// may be empty
// integers
// extra challenge:
// how would you change your function to accept n arrays?

function Intersect(arrA, arrB) {
    let arrC = [];
    for(let i=0; i < arrA.length; i++){
        for (let j =0; j < arrB.length; j++){
            if (arrA[i] == arrB[j]){
                if (arrA[i] != arrC[arrC.length-1]) {
                arrC.push(arrA[i]);
                }
            }
        }
    }
    return arrC;
}

console.log(Intersect([1,2,6], []));
// input: collection = [ [1,2,2,2,7] , [2,3,6,6,7] , [3,7] ]
// output: [2,3,7]

arrays[][] ={arr1, arr2, arr3, arr4}

function MultiIntersect(collection){

    let arrC =[];
    for(let k=0; i<collection.length; k++){
        let arrA =collection[k];
        for (let m = 0; m < collection.length; m ++ ){
            let arrB = collection[m];
            for(let i=0; i < arrA.length; i++){
                for (let j =0; j < arrB.length; j++){
                    if (arrA[i] == arrB[j]){
                        if (arrA[i] != arrC[arrC.length-1]) {
                        arrC.push(arrA[i]);
                        }
                    }
                }
            }
        }
        return arrC;

 }
}
console.log(MultiIntersect([ [1,2,2,2,7] , [2,3,6,6,7] , [3,7], [4,3,7]]))

// === GLOSSARY ===

// collection: grouped data. arrays, lists, sets, multisets
// set: a collection with no duplicates, does not track count of values
// multiset: a collection that allows duplicates, tracks count of values
// intersection: all the values that exist across multiple collections, deduped
