// Bubble Sort
// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

// Gonna pull people back into the main room soon! -Brendan

function bubbleSort(arr){
    var num = 0
    for (var i = 0;i<arr.length; i++) {
        for (var j = 0; j<arr.length-i; j++) {
            if (arr[j] > arr[j+1]) {
                num = arr[j+1];
                arr[j+1] = arr[j]
                arr[j] = num
            }
        }
    }
    return arr;
}

console.log(bubbleSort([99,98,97,96,95,94,93,92,91]));

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
    var num = arr[0];
    for(var i=0;i<arr.length;i++){
        for(var j=0; j<arr.length-1;j++){
            if (num < arr[j]) {

                num = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = num;
            }
        }
    return arr;
    }
}

console.log(selectionSort([3,9,8,11,1,65,32]))


// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)


// Selection sort is one of the slower sorts.
// It can be used for pagination,
// where page 1 displays 10 records for example,
// you run selection sort for 10 iterations only to display the first 10 sorted items

// https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

