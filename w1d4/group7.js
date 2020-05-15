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



// Pseudocode-o-clock!:
// 1. Grab pivot from middle. Move it to end.
// 2. Have a pointer on left looking for values greater than pointer.(starting at idx 0)
// 3. Have a pointer on right looking for values less than pointer. (starting at idx last-1)

const array1 = [8,6,7,5,3,0,9]
const array2 = [8, 13, 9, 12, 20, 4, 13, 6, 17]

// stand-alone swap function
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
partition =(arr, left = 0, right = arr.length-2) => {
    while (arr[left]< arr[arr.length-1]){
        left ++;
    }
    while (arr[right] > arr[arr.length-1]){
        right --;
    }
    if (left >= right){
        //swap with pivot
    }
    else {
        // swap left and right
        partition(//conditions)
    }

}



partition =(arr, left = 0, right = arr.length-2) => {
    while (arr[left]< arr[arr.length-1]){
        left ++;
    }
    while (arr[right] > arr[arr.length-1]){
        right --;
    }
    if (left >= right){
        swap(arr, left, arr.length-1)
        return left
    }
    else {
        swap(arr, left, right)
        return partition(arr, left, right)
    }
}

console.log(partition(array2))