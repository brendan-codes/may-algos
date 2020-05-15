// michael cote


function quickSort(arr, left, right) {
    if(arr.length >1) {
        var rightSide = partitionHoare(arr, left, right)
        if (left <= rightSide) {
            console.log(left)
            console.log(rightSide)
            console.log("recursiveleftside")
            partitionHoare(arr, left, rightSide)
        }
        if (rightSide < right) {
            console.log(rightSide)
            console.log(right)
            console.log("recursiverightside")
            partitionHoare(arr, rightSide, right)
        }
    }
    return arr;
}

// Sir Charles Antony Richard Hoare partitioning scheme
function partitionHoare(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot && left <= right) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    // swap(arr, left, Math.floor((left + right)) / 2);
    return left;
}


arr = [10,4,6,12,15,7]

quickSort(arr, 0, arr.length-1)

// [4,6,10,7,15,12]
