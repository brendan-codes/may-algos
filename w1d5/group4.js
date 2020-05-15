// Participants: Ryan Alumbaugh, Kamakani Roque, Sotheary Ouk
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

const array1 = [17, 11, 16, 12, 18, 20, 7]
// First run,  partition(arr, 0, 6) = [7 11 12 ,16, 18 20 17] , returns pivot = 3
// Second run, partition(arr,)

function quickSort(arr, left = 0, right = arr.length -1){
    if (arr.length == 1){
        return arr;
    }
    let pivot = partitionHoare(arr, left, right);

    quickSort(arr, left, pivot-1);
    quickSort(arr, right, pivot);

}

const array1 = [17, 11, 16, 1, 12, 18, 20, 7]

function quickSort(arr, left = 0, right = arr.length -1){
    let pivot = partitionHoare(arr, left, right);
    if (pivot == 1){
        return arr;
    }

    return quickSort(arr, left, pivot-1);

}


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
    swap(arr, left, Math.floor((left + right)) / 2);
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



