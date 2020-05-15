function BubbleSort(arr){
    var placeholder = 0
    for(i=0; i<arr.length; i++){
        for(j=0; j<arr.length-i; j++){
            if (arr[j-1] > arr[j]){
                placeholder = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = placeholder
            }
        }
    }
    return arr
}
console.log(BubbleSort([4,7,3,8,9,2]))


// Gonna pull people back into the main room soon! -Brendan





arr[i], arr[j] = arr[j], arr[i];