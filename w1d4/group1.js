// Array: Partition


// partition(arr, left, right){}
// partition(arr, left, right){}
// [99, 77, 66, 33, 22, 11 ...... 222, 111]

// https://opendsa-server.cs.vt.edu/embed/quicksortAV


// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value


// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition


// [99, 77, 66, 33, 22, 11 , 222, 111]
// pivot = 111
// left = 0
// right = 6

function partition(arr, left = 0, right = arr.length - 2) {
    var pivot = arr[arr.length - 1];
    while (left < right) {
        // move the left point right until you find a number that's less than the pivot
        while (arr[left] < pivot && left < right) {
            left++;
        }
        // move the right point left until you find a number that's
        while (arr[right] > pivot) {
            right--;
        }
        // swap
        if (left <= right) {
            swap(arr, left, right)
            right--
            left++
        }
    }
    swap(arr, left, pivot)
    return left;
}

function quickSort(arr, left, right) {

}

// stand-alone swap function
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const arr = [99, 77, 66, 33, 22, 11 , 222, 111]
// partition(arr, 3, 6)