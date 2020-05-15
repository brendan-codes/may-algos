// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

var arr = [10,9,8,7,6,5,4,3,2,1];

function bubbleSort(arr){
    var temp =0;
    for(var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length - i; j++){
            if(arr[j-1] > arr[j]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] =temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort(arr));

// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.bigocheatsheet.com/
// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list.
// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 0.
// This continues until all values are sorted.

function selectionSort(arr){
    var min = 0;
    var temp =0;
    var temp2 = 0;
    for(var i = 0; i<arr.length; i++){
        min = arr[i];
        for(var j = i; j<arr.length; j++){
            if(arr[i] < min) {
                min = arr[i];
                temp2 = i;
            }
        }
    }
    temp = arr[0];
    arr[0] = min;
    arr[temp2] = temp;
    return arr;
}

// Gonna pull people back into the main room soon! -Brendan


console.log(selectionSort(arr));

// [
//     1, 9, 8, 7,  6,
//     5, 4, 3, 2, 10
//   ]

//meow

// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)


// Selection sort is one of the slower sorts.
// It can be used for pagination,
// where page 1 displays 10 records for example,
// you run selection sort for 10 iterations only to display the first 10 sorted items

// https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

