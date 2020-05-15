

function mergeArray(arr1,arr2) {
    // var output = new Array(arr1.length + arr2.length).fill(0)
    var output = []
    var firstPlaceholder = 0
    var secondPlaceholder =0
    while (output.length < arr1.length + arr2.length) {
        if (arr1[firstPlaceholder] <= arr2[secondPlaceholder]) {
            output.push(arr1[firstPlaceholder])
            firstPlaceholder ++
        }
        else if (arr1[firstPlaceholder] >= arr2[secondPlaceholder]) {
            output.push(arr2[secondPlaceholder])
            secondPlaceholder++
        }

        if (arr1.length == firstPlaceholder) {
            output.push(arr2[secondPlaceholder])
            secondPlaceholder++
        }
        if (arr2.length == secondPlaceholder) {
            output.push(arr1[firstPlaceholder])
            firstPlaceholder ++
        }
    }
    return output
}

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid, arr.length))
    let output = mergeArray(left, right)

    return output
}

// var test1 = [5,8,10,12,19]
// var test2 = [1,2,3,4,6]
//[1, 2, 3, 4, 5, 6]

// [ 1, 2, 3, 4, 6 ]

// 1,2,3,4,5,68,10,12,19

// var test = [5,1,11,19,20,33,46,3,9]
// console.log(mergeSort(test))

// [
    // 1,  3,  5,  9, 11,
//    19, 20, 33, 46
//  ]


