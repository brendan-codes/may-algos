// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

// Time Complexity
//  - Best case: O(n log(n))
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call merge(arr, l, m, r)

// MERGESORT THAT KICKS OFF THE ALGO
function mergeSort(arr1, arr2){
    var i = 0;
    var j = 0;
    var temp = [];
    while(i < arr1.length || j < arr2.length){
        if(arr1[i] <= arr2[j] || j == arr2.length){
            temp.push(arr1[i]);
            i++;
        }
        else if(arr1[i] > arr2[j] || i == arr1.length){
            temp.push(arr2[j]);
            j++;
        }
    }
    return temp;
}

function splitarr(arr){
    if(arr.length == 1){
        return arr;
    }
    else{
        var split = Math.ceil(arr.length / 2);
        var left_array = arr.slice(0,split);
        var right_array = arr.slice(split, arr.length);
        var left = splitarr(left_array);
        var right = splitarr(right_array);
        return mergeSort(left, right);
    }
}

var arr = [0,9,5,8,2,5,1,6];

console.log(splitarr(arr));




// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - arr.concat(array2, array3, ..., arrayX)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals
//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array