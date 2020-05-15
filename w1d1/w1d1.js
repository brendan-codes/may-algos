// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr){
    var len = arr.length;
    for(var i = 0; i < len; i++){
        for(var j = 0; j < len; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([88, 99, 111, 55, 122]));


// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.bigocheatsheet.com/
// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list.
// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr){
    var len = arr.length;
    for(var i = 0; i < len; i++){
        var min = i;
        for(var j = i + 1; j < len; j++){
            if(arr[min] > arr[j]){
                min = j
            }
            if(min !== i) {
                var temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    }
    return arr;
}

// [9, 4, 1];
//     i
//         j
//


// min = 0


// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)


// Selection sort is one of the slower sorts.
// It can be used for pagination,
// where page 1 displays 10 records for example,
// you run selection sort for 10 iterations only to display the first 10 sorted items

// https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

