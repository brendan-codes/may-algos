// Array: Partition


// partition(arr, left, right){}
// partition(arr, left, right){}
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

function partition(arr, left, right) {
    pivotNumber = arr[arr.length-1]
    midpoint = arr[(Math.floor(arr.length-1)/2)]
    rightPoint = arr.length -2
    for (let leftPoint =0; leftPoint <arr.length-1; leftPoint++) {
        if(arr[i] > pivotNumber) {
            while (arr[i] > pivotNumber) {}
                if (arr[rightPoint] < pivotNumber) {
                    swap(arr, leftPoint, rightPoint)
                    rightPoint--
                }
                else {
                    rightPoint--
                }
            }
        }
        if (leftPoint +1 == rightPoint) {
            swap rightpoint pivotnumber

        }
    }
}

10  13  4  7  9
7  4  13  10  9
7  4   9  10  13

function partition2(arr, left, right) {
    pivot = arr[Math.floor((left + right) / 2)]
    i = left - 1;
    j = right + 1;

    while (true) {
        do {
            i++;
        } while (arr[i] < pivot)
        do {
            j--;
        } while (arr[j] > pivot)
        if(i >= j) {
            return j;
        }
        swap(arr, i, j)
    }
}

let exampleArr = [10, 13, 4, 7, 9]
console.log(partition2(exampleArr, 0, exampleArr.length - 1))