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

arr1=[1,2,2,2,7]
arr2=[2,2,6,6,7]

function intersort(arr1, arr2){
    let keys={}
    let arr3=[]
    for(var i=0;i<arr1.length;i++){
        keys.put(arr1[i],1)

    }
    console.log(keys)



}

intersort(arr1,arr2)

