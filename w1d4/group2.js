// Array: Partition

//[ 4 8 1 6 5 7 2]
function partition(arr, left, right){
    let partition = Math.floor(arr.length/2);
    let left = 0;
    let right = arr.length - 1;
    while(left < partition && right > partition){
        if (arr[left] > arr[right]){
            swap(arr,left, right);
        }
        left ++;
        right --;
    }

}
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


// stand-alone swap function
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}