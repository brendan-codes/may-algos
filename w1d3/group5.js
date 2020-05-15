// Can everybody see this? yes

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


// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
let unsortedarray = [3, 1, 8, 17, 25, 42, 58];

split

console.log(unsortedarray.slice(0,unsortedarray.length/2))
console.log(unsortedarray.slice(unsortedarray.length/2))

let array1 = [5, 10, 15, 20];
let array2 = [3, 11, 17, 23, 33];
let array3 = [];

merge =(arr1, arr2, idx1, idx2, arr3, idx3) =>{
    if(idx1 == arr1.length-1 && idx2 == arr2.length-1){
        return arr3;
    }
    if(idx1 == arr1.length){
        while(idx2 < arr2.length){
            arr3[idx3++] = arr2[idx2++];
            return arr3;
        }
    if(idx2 == arr2.length){
        while(idx1 < arr1.length){
            arr3[idx3++] = arr1[idx1++];
            return arr3;
        }
    }
    if(arr1[idx1] < arr2[idx2]){
        arr3[idx3] = arr1[idx1];
        merge(arr1, arr2, idx1+1, idx2, arr3, idx3+1);
    }
    else if(arr1[idx1] > arr2[idx2]){
        arr3[idx3] = arr2[idx2];
        merge(arr1, arr2, idx1, idx2+1, arr3, idx3+1);
    }
    else{
        arr3[idx3] = arr1[idx1];
        arr3[idx3+1] = arr2[idx2];
        merge(arr1, arr2, idx1+1, idx2+1, arr3, idx3+2);
    }
}

//   useful methods
//   - arr.concat(array2, array3, ..., arrayX)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals
//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array
