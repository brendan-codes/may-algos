// Group members:Ryan Alumbaugh, Norbert Geisler, Richard Lee, Denys Glukhovyski

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


// if you finish there is a second algo on the main page. - brendan



function sums(arr, k){
    let p1 = 0;
    let p2 = 1;
    let total = 0;
    let curOutput = [];
    let totalOutput = [];
    while(p2<arr.length){
        if(arr[p1] === k){
            curOutput.push(arr[p1]);
            totalOutput.push(curOutput);
            curOutput = [];
            p1++;
        }
        else if (arr[p1] + arr[p2] === k){
            curOutput.push(arr[p1]);
            curOutput.push(arr[p2]);
            totalOutput.push(curOutput);
            curOutput = [];
            p1++;
        }
        else if(arr[p1]+arr[p2] <k){
            curOutput.push(arr[p1]);
            curOutput.push(arr[p2]);
            total += arr[p2];
            p2++;
        }
        else if(){

        }
    }
}

0 == '0' is true
0 === '0' is false
0 ========= '0' is excessive
// Ryan's working code starts here
array1 = [16,2,5,3,6,7,0,0,23,12]
array2 = [16, 0, 0, 5]
function sums(arr, k){
  let p1 = 0;
  let p2 = 1;
  let total = arr[p1];
  let curOutput = [arr[p1]];
  let totalOutput = [];
  while(p2< arr.length){
    if(total === k){
      totalOutput.push([...curOutput]);
    }
    total += arr[p2];
    if(total <= k){
      curOutput.push(arr[p2]);
      p2++;
    }
    else{
      p1 ++;
      p2 = p1+1;
      total = arr[p1];
      curOutput = [arr[p1]]
    }
  }
  return totalOutput;
}

// var iterations = 1000000;
// console.time('Function #1');
// for(var i = 0; i < iterations; i++ ){
//     functionOne();
// };
// console.timeEnd('Function #1')

// console.time('Function #2');
// for(var i = 0; i < iterations; i++ ){
//     functionTwo();
// };
// console.timeEnd('Function #2')

console.log(sums(array1,16))
// Ryan's working code ends here

function sums(arr, k) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let curOutput = [];
    let totalOutput = [];
    while (j < arr.length) {
        currOutput = [];
        i = j;
        while (i <arr.length) {
            if (sum + arr[i] <= k && sum != k) {
            sum += arr[i];
            curOutput.push(arr[i]);
            i++;
            }
            else if (arr[i] > k) {
                i++;
            }
            if (sum == k && arr[i] != 0) {
                totalOutput.push(currOutput);
            }
            else if (sum == k && arr[i] == 0) {
                curOutput.push(arr[i]);
                totalOutput.push(currOutput);
                i++;
            }
        }
        j++;
    }
    return totalOutput;
}