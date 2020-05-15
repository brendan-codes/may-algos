
// INSERTION-SORT(A)
// for j = 2 to A.length
// key = A[j]
// // Insert A[j] into the sorted sequence A[1...j-1]
//    i = j - 1
//    while i > 0 and A[i] > key
//        A[i+1] = A[i]
//        i = i - 1
//    A[i+ 1] = key


function insertionSort(arr){
    for(i =0; i < arr.length ; i++){
        temp = arr[i];
        j = i-1;
        while(j >= 0 && arr[j] > temp){
            arr[j+1] = arr[j]
            j = j-1;
        }
        arr[j +1] = temp
    }
console.log(arr)
return arr
}

insertionSort([1,5,8,7,3]);
insertionSort([4,9,12,78,52,41,96,32,57,45,69,87]);