// Group members: Ryan Alumbaugh,Lutteur, Thomas Cheng

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
const array1= [1,2,2,2,7]
const array2= [2,2,6,6,7]


function SortIntersect(arr1, arr2){
    // for(var i = 0; i < 2; i++){ //find out how to call different arrays during loop
        var j = 0
        while(j < arr1.length){
            if(arr1[j + 1] != null){
                if(arr1[j] == arr1[j + 1]){
                    arr1.splice(j, 1);
                }
                else{
                    j++;
                }
            }
            else{
                break
            }
        }

    // }
        var j = 0
        while(j < arr2.length){
            if(arr2[j + 1] != null){
                if(arr2[j] == arr2[j + 1]){
                    arr2.splice(j, 1);
                }
                else{
                    j++;
                }
            }
            else{
                break
            }
        }
    var arr_out = [];
    var i = 0;
    var j = 0;
    while( i < arr1.length && j < arr2.length){
        if(arr1[i] == arr2[j]){
            arr_out.push(arr1[i]);
            i++;
            j++;
        }
        else if(arr1[i] > arr2[j]){
            j++;
        }
        else if(arr2[j] > arr1[i]){
            i++;
        }
    }
    return arr_out;
}




// function SortIntersect(arr1, arr2){
//     let output= []
//     for(let i=0; i< arr1.length; i++){
//         if(arr1[i+1] != arr1[i]){
//             for(let x=0; x<arr2.length; x++){
//                 if(arr2[x+1] != arr2[x]){
//                     if(arr1[i] == arr2[x]){
//                         output.push(arr1[i])
//                     }
//                 }
//             }
//         }
//     }
//     return output
// }

// console.log(SortIntersect(array1,array2))


// Don't look at these nested for loops. Ignore my shame!
function MultipleArrayIntersect(arrays){
    for(let i=0; i<arrays[0].length; i++){
        for(let j=i; j<arrays[0].length; j++){
            if(arrays[0][i] == arrays[0][j]){
                j++;
            }
            else{
                arrays[0].splice(i+1,j-i-1)
                break;
            }
        }
    }
   for(let x=0; x<arrays[0].length; x++){
       for(let y=0; y<arrays.length; y++){
           for(let z=0; z<arrays[y]; z++){
               if(arrays[0][x]==arrays[y][z])
           }
       }
   }
}








Set



// === GLOSSARY ===

// collection: grouped data. arrays, lists, sets, multisets
// set: a collection with no duplicates, does not track count of values
// multiset: a collection that allows duplicates, tracks count of values
// intersection: all the values that exist across multiple collections, deduped
