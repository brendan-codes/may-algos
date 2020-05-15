// Michael Remy
// Hunter Kam
// John Stevens


//   Array: Quick Sort
// Create a function that uses yesterday’s partition to sort an array in-place.
// With yesterday’s code plus a very few new lines, you will implement QuickSort!

//   Time Complexity
//     - Best: O(n log(n))
//     - Average: O(n log(n))
//     - Worst: O(n^2)


//   Steps:
// - recursively partition the array
// - start by partitioning the full array (use the previously built partition algo)
// - then partition the left side of the array (left of new pivot idx)
//   and the right side (right of new pivot idx), recursively



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




// HOARE-PARTITION(A, p, r)
// x = A[p]
// i = p - 1
// j = r + 1
// while true
//   repeat
//      j = j - 1
//   until A[j]<= x
//   repeat
//      i = i + 1
//   until A[i] >= x
//   if i < j
//     exchange A[i] with A[j]
//   else return j





// Array: Partition

// partition(arr, left, right){}
// partition(arr, left, right){}
// [99, 77, 66, 33, 22, 11 ...... 222, 111]

// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://prod.liveshare.vsengsaas.visualstudio.com/join?E83A919698AC5B81F92DA897F8CCF644B91F


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

// Lomuto partitioning scheme, less efficient, easier to read
function partitionLomuto(arr, left, right) {
    const pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        swap(arr, i, j);
        i++;
      }
    }
    swap(arr, i, right);
    return i;
  }