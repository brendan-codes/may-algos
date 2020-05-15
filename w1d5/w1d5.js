
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



function quickSort(arr, left, right){
    if(left === undefined){
        left = 0;
    }
    if(right === undefined){
        right = arr.length - 1;
    }
    //
    if (left >= right) {
        return;
    }

    const pivotIdx = partitionLomuto(arr, left, right);

    quickSort(arr, left, pivotIdx - 1); // left of pivot
    quickSort(arr, pivotIdx, right); // right of pivot

    return arr;
}

const b = [1, 17, 12, 3, 9, 13, 21, 4, 27];
console.log(b.join(", "));
console.log(quickSort(b).join(", "));



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



// radix

// setup
function getPosition(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// get num with most digits
function getMax(arr) {
    let max = 0;
    for (let num of arr) {
        if (max < num.toString().length) {
            max = num.toString().length;
        }
    }
    return max;
}

// setup
function radixSort(arr) {
    const max = getMax(arr); // length of the max digit in the array

    for (let i = 0; i < max; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
    }
    return arr;
}

function radixSort(arr) {
    const max = getMax(arr); // length of the max digit in the array

    for (let i = 0; i < max; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            buckets[getPosition(arr[j], i)].push(arr[j]); // pushing into buckets
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

console.log(radixSort([4, 57, 7, 3, 933])); // [3,4,7,57,933]



