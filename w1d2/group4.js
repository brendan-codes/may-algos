// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
// Array: Insertion Sort

Hello Chris, Hunter, Edward, Song! -Petra

// visualization with playing cards (scroll down):
// https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

// array / bar visualization:
// https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

// insertionSort(arr){}

//  - efficient for small data sets
//  - constant memory / space O(1)

// Time Complexity
//   - Best: n when array is already sorted
//   - Average: O(n^2)
//   - Worst: O(n^2) when the array is reverse sorted

// this sort splits the array into two portions (conceptually, not literally)
// the left portion will become sorted
// the right portion (that hasn't been iterated over yet) is unsorted
// can shift or swap target element until it reaches desired position

// shifting steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   3. store current item in a temp var (to make this position available to shift items)
//   4. if item to the left of current is greater than current item,
//      shift the left item to the right
//   5. repeat step 4 as many times as needed
//   6. insert current item
//   7. move to the next item and repeat

//   // swap steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   4. if item to left of current item is less than current, swap
//   5. repeat step 4 until item to left is less than current item
//   6. move to next item and repeat

// "I have the same issue as you, I also used vscode-go and vscode-vim. But when I modified the user settings "files.autoSave": "off", the problem was solved." <---show this to Brendan
// [ 2 , 4 , 5 , 8 , 1 , 32 , 5 ]   i=3  j=2           key = 4(value)
// SHIFT METHOD
function insertion_sort(arr) {
    let key = 0;
    for (let i=1; i< arr.length; i++) {
        key =arr[i];
        var j = i - 1;
        while (key < arr[j] && j >= 0 ){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key;
    }
}
console.log(insertion_sort([8,5,7,6,3,4,2,1]));

// SWAP METHOD
function insertion_sort(arr) {
    let key = 0;
    var temp=0
    for (let i=1; i< arr.length; i++) {
        key =arr[i];
        var j = i - 1;
        while (key < arr[j] && j >= 0 ){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key;
    }
    return arr;

}

console.log(insertion_sort([8,5,7,6,3,4,2,1]));

