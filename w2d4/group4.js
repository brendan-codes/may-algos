// Michael Remy
// Jon Yoo
// Martin

// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given a list of positive integers 0-255 arr
// You are given a value 1-255 k

// Find all the consecutive sets of integers that add up to the value k

// if you finish there is a second algo on the main page. - brendan


function findConsSums(arr, k) {
    let output = []

    for (let i = 0; i <arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum === k) {
                let summedArr = []
                for (let idx = i; idx <= j; idx++) {
                    summedArr.push(arr[idx])
                }
                output.push(summedArr)
            }
        }
    }
    return output
}



// findConsqSums(arr, k);
// findConsqSums([2,5,3,6,7,0,0,23,12], 16)

// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]