// Merge two arrays
function merge(leftArr, rightArr) {
    let output = [];
    leftIndex = 0;
    rightIndex = 0;

// Checks both statements to be true of left and right index being shorter than its respective array length
// Then checks if left index of left array is smaller than right index of right array. If true then push to output empty array
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            output.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            output.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Below 2 while loops as an edge case in case the length of left and right array are different length
    while (leftIndex < leftArr.length) {
        output.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArr.length) {
        output.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return output;
}

// Recursively sort an array with the 'merge' function
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

exampleArray = [5, 6, 33, 1, 40, 2, 10, 7];
ex2 =[2, 1];
ex3 = [5];
console.log(mergeSort(exampleArray));