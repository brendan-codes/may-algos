//
// Ryan
// Theary
// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.bigocheatsheet.com/
// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/


// BRENDAN JUST MOVED ME, BUT YOU SHOULD GO THROUGH THE LOOP AS MANY NUMBERS AS THERE ARE WITHIN THE ARRAY
// var array1 = [5, 3, 8, 10, 2, 13,1]

// function bubbleSort(arr){
//     for (var i=0; i<arr.length;i++){
//         for(var j=0; j<arr.length; j++){
//             if(arr[i]<arr[j]){
//                 var placeholder = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = placeholder;
//             }
//         }
//     }
//     return(arr)
// }

// console.log(bubbleSort(array1))

// Selection Sort


// Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list.
// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

var array1 = [5, 3, 8, 10, 2, 13, 1, 1]

function selectionSort(arr){
    var arr2 = arr.length;
    for (var i=0; i<arr.length; i++){
        let min = arr[0];
        if (arr[i]< min){
            min=arr[i]
        }
        for(var j=0; j<arr.length; j++){
            if(arr[j] == min){
                // .POP ONLY REMOVES THE NUMBER FROM THE BACK OF ARRAY
                arr[j].pop;
                arr2.push;
            }
        }
    }
    return(arr2)
}


// Gonna pull people back into the main room soon! -Brendan
