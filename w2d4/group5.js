// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given a list of positive integers 0-255 arr
// You are given a value 1-255 k

// Find all the consecutive sets of integers that add up to the value k



// findConsqSums(arr, k);
// findConsqSums([2,5,3,6,7,0,0,23,12], 16)

// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

function findConsqSums(arr,k){
    var out = [];
    var temp = [];
    var sum = 0;
    var inc = 0;

    for(var i = 0; i < arr.length; i++){
        sum = arr[i];
        temp.push(arr[i]);
        while(sum <= k){
            if(sum == k && arr[i+inc+1] == 0){
                out.push([...temp]);
                inc++;
                temp.push(arr[i + inc]);
            }
            if(sum == k){
                out.push(temp);
                break;
            }
            else{
                inc++;
                sum += arr[i+inc];
                temp.push(arr[i + inc]);
            }
        }
        inc = 0;
        sum = 0;
        temp = [];
    }

    return out;
}

console.log(findConsqSums([2,5,3,6,7,0,0,23,12], 16));


// if you finish there is a second algo on the main page. - brendan
