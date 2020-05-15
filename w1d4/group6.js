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

    // left, right
function Partition(arr, l, r)
    const pivot = arr[Math.floor((l + r) / 2)];
    let end = arr[arr.length]
    [arr[pivot], arr[end]] = [arr[end], arr[pivot]];
    // move left and right until a swap is identified
    while(l == 0 && r == arr.length ){
        while(l<=end || arr[l] == arr[r]){
            l++;
            while(r>=end || arr[r]==arr[l]){
                r--;
            }
    }
}
Partition([8,6,1,2,3,5], arr[0], arr[arr.length]);



// stand-alone swap function
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];