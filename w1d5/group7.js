// Good morning!  This is Richard Lee, Becky Betts, Petra Franklin. We worked at the very bottom of this page.

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


// function partition(arr, low, high) {
//     var mid = Math.floor((high + low) / 2);
//     var pivot = arr[mid];
//     while(low < high) {
//     if(arr[low] < pivot) {
//     low++;
//     } else if(arr[high] > pivot) {
//     high--;
//     } else {
//     [arr[high], arr[low]] = [arr[low], arr[high]];
//     }
//     } return low;
//     }

    // partition([5,2,1,4,7,3], 0, 5);

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

// // stand-alone swap function
// function swap(arr, i, j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// // Sir Charles Antony Richard Hoare partitioning scheme
// function partitionHoare(arr, left, right) {
//     const pivot = arr[Math.floor((left + right) / 2)];

//     while (left <= right) {
//         while (arr[left] < pivot && left <= right) {
//             left++;
//         }
//         while (arr[right] > pivot) {
//             right--;
//         }
//         if (left <= right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//     }
//     // swap(arr, left, Math.floor((left + right)) / 2);
//     return left;
// }

//This is where we created a partition and a quickSort
// function that called that partition function and started from that point.

function partitionNew(arr, left=0, right=arr.length-1) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    const pivot = arr[left];
    let index = left;

    for (let k = left+1; k <= right; k++) {
        if (pivot>arr[k]) {
            index++;
            swap(arr, index, k);
        }
    }
    swap(arr, left, index);
    return index;
}

function quickSort(arr, left=0, right=arr.length-1){
if(left<right){
let pivot =partitionNew(arr, left, right)
quickSort(arr, left, pivot-1);
quickSort(arr, pivot+1, right);
}
return arr;
}
console.log(quickSort([5,2,1,4,7,3]));

