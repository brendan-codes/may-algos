


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

var test =  [14,12,15,11,19,23,18,16,7,20,5,8]
quickSort(test, 0, test.length-1)


// The unsorted array is:
// [14,12,15,11,19,23,18,16,7,20,5,8]
// The pivot is 8 at index position 11

// [7,  5,  8, 11, 19, 23, 18, 16, 14, 20, 12, 15]
// The pivot is 5 at index position 1

// [5,  7,  8, 11, 19, 23, 18, 16, 14, 20, 12, 15]
// The pivot is 15 at index position 11

// [5,  7,  8, 11, 14, 12, 15, 16, 19, 20, 23, 18]
// The pivot is 12 at index position 5

// [5,  7,  8, 11, 12, 14, 15, 16, 19, 20, 23, 18]
// The pivot is 18 at index position 11

// [5,  7,  8, 11, 12, 14, 15, 16, 18, 20, 23, 19]
// The pivot is 19 at index position 11

// [5,  7,  8, 11, 12, 14, 15, 16, 18, 19, 23, 20]
// The pivot is 20 at index position 11

// The sorted array is:
// [5,  7,  8, 11, 12, 14, 15, 16, 18, 19, 20, 23]
