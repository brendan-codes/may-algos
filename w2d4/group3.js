// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given a list of positive integers 0-255 arr
// You are given a value 1-255 k

// Find all the consecutive sets of integers that add up to the value k



// findConsqSums(arr, k);
// findConsqSums([2,5,3,6,7,0,0,23,12], 16)

// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

function sumArray(arr){
    let total = 0
    for (const n of arr){
        total += n
    }
    return total
}

// arr=[2,5,3,6,7,0,0,23,12]
// k=16

// function findConsqSums(arr,k){
//     arr2=[]

//     for(var i=0;i<arr.length;i++){

//         pl = [ arr[i] ]

//         if (arr[i]==k){

//             arr2.push(pl.slice())

//         }
//         for (var j=i+1;j<arr.length;j++){

//             pl.push(arr[j])
//             if (sumArray(pl)==k){
//                 arr2.push(pl.slice())

//             }
//             else if (sumArray(pl)>k){
//                 break
//             }
//         }

//     }
//     return arr2
// }

// console.log(findConsqSums(arr,k))


// kMostFrequent(arr, k)

//   Given an unsorted non-empty array of integers and int k,
// return the k most frequent elements (in any order)
//   You can assume there is always a valid solution
//   These example inputs are sorted for readability,
// but the input is not guaranteed to be sorted and the output does not need to be in any specific order

//   Input: [1, 1, 1, 2, 2, 3], k = 2
//   Output: [1, 2]
//   Explanation: return the two most frequent elements,
//   1 and 2 are the two most frequent elements

//   Input: [0, 0, 0, 2, 2, 3], k = 1
//   Output: [0]
//   Explanation: k being 1 means return the single most frequent element

//   Input: [1, 1, 2, 2, 3, 3], k = 3
//   Output: [1, 2, 3]
//   Explanation: 3 is the only value that would be passed in for k
//   because it is the only value for k that has
//   a valid solution. Since 1, 2, and 3, all occur 3 times,
//   they are all the most frequent ints, so there is no
//   1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints.





function kMostFrequent(arr, k){
    mapper = {}
    for (var i=0; i<arr.length; i++){
        if (!mapper[arr[i]]){
            mapper[arr[i]] = 1
        }
        else { mapper[arr[i]] += 1 }
    }
    let mapper2 = {}
    for (const key of Object.keys(mapper)){
        if (!mapper2[ mapper[key] ] ){
            mapper2[ mapper[key] ] = [ parseInt(key, 10) ]
        }
        else{ mapper2[mapper[key]].push( parseInt(key,10)) }
    }
    sorted_values = []
    for (const key of Object.keys(mapper2)){
        sorted_values.push(parseInt(key, 10))
    }
    sorted_values = sorted_values.sort((a,b)=>b-a)

    let output = []
    let counter = 0
    while (counter < k){
        let key = `${sorted_values[counter]}`
        let values = mapper2[key]
        for (var j=0; j<values.length; j++){
            output.push(values[j])
            counter += 1
            if (counter === k){
                console.log(output)
                return output
            }
        }
    }
    console.log(output)
    return output
}
kMostFrequent([1, 1, 1, 2, 3, 3, 4, 5], 2) // output -> [1, 3]
kMostFrequent([1,1,2,2,4,4], 3) // output -> [1, 2, 4]
kMostFrequent([9,1,9], 1) // output -> [9]
