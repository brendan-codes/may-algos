// Array: Partition


// partition(arr, left, right){}
function partitionrun(arr, left = 0, right = arr.length) {
    var partition = Math.floor(Math.random() * arr.length);
    var partition_value = arr[partition];
    swap(arr, partition, arr.length - 1);
    var array1_left = left;
    var array2_right = right;
    var array1_right = partition - 1;
    var array2_left = partition + 1;

    while(left < right){
        if(arr.length == 1){
            return arr;
        }
        else if(arr[left] > partition_value && arr[right] < partition_value){
            swap(arr, left, right);
        }
        else if(arr[left] > partition_value && arr[right] >= partition_value){
            right--;
        }
        else if(arr[left] <= partition_value && arr[right] < partition_value){
            left++;
        }
        else if(arr[left] <= partition_value && arr[right] >= partition_value){
            right--;
            left++;
        }
    }
    swap(arr, partition, left); //left might not be the correct position
    partitionrun(arr, array1_left, array1_right);
    partitionrun(arr, array2_left, array2_right);
    return arr;
}

var temp= [9,8,7,6,5,4,3,2,1];
console.log(partition(temp, 0, temp.length - 1));

// [99, 77, 66, 33, 22, 11 ...... 222, 111]

// https://opendsa-server.cs.vt.edu/embed/quicksortAV


// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value


// Params: arr, left, right
    // - for now, left will be 0, and right will be the last idx
    // - later these params will be used to specify a sub section of the array to partition


// stand-alone swap function
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}