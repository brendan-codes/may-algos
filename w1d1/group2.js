// Bubble sort

function BubbleSort(arr){
    // first for loop
    for (var i=0; i<arr.length-1; i++){
        for (var j = i+1; j <arr.length; j++) {
            if (arr[i] > arr[j]){
                temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr

}

var test = [5,3,8,2,9,10,11,2,99,0]
// Output - >
// 0, 2,  2,  3,  5,
// 8, 9, 10, 11, 99

// Selection sort

function SelectionSort(arr) {

    for(var i =0; i< arr.length-1; i++) {
        var min = arr[i]
        min_index = i
        for (var j = i+1; j< arr.length;j++){
            if (arr[j] <= min){
                min = arr[j]
                min_index = j
            }
        }
        temp = min
        arr[min_index] = arr[i]
        arr[i] = temp

    }
    return arr
}

var test = [5,3,8,2,9,10,11,2,99,0]
// console.log(SelectionSort(test))
// Output -> [0, 2, 2, 3, 5, 8, 9, 10, 11, 99]

// Gonna pull people back into the main room soon! -Brendan

