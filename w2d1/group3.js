// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

// arrays may not be the same length
// create new array
// input always sorted
// may be empty
// integers



// extra challenge:
// how would you change your function to accept n arrays?

// Say Arrays are arrA[] and arrB[] and indexes for navigation are x and y respectively.
// Since arrays are sorted, compare the first element of both the arrays.(x=0, y=0)
// If both elements are same, we have our intersection point, return it.
// Else if element of arrA[x] > element of arrB[y], increase the arrB[] index, y++.
// Else if element of arrA[x] < element of arrB[y], increase the arrA[] index, x++.
// If any of the array gets over that means you have not found the intersection point. return -1.

// === GLOSSARY ===
function intersection_destructive(a, b)
{
  var result = [];
  while( a.length > 0 && b.length > 0 )
  {
     if      (a[0] < b[0] ){ a.shift(); }
     else if (a[0] > b[0] ){ b.shift(); }
     else /* they're equal */
     {
       result.push(a.shift());
       b.shift();
     }
  }

  return result;
}

let nums = intersection_destructive([1,2,2,2,7],[2,2,6,6,7]);
console.log(nums);





// This accepts n arrays:

function intersection(...arrays){
    let mapper = {}
    let output = []
    if (arrays.length > 1){
        let arr1 = arguments[0]
        for (var i=0; i<arr1.length; i++){
            if (!mapper[arr1[i]]){
                mapper[arr1[i]] = arr1[i]
            }
        }
    }
    else {
        return arguments[0]
    }
    for (var i=1; i<arguments.length; i++){
        let nextMapper = {}
        let nextArray = arguments[i]
        for (var j=0; j<nextArray.length;j++){
            if (!nextMapper[nextArray[j]]){
                nextMapper[nextArray[j]] = nextArray[j]
            }
        }
        for (var key of Object.keys(mapper)){
            if (!nextMapper[key]){
                delete mapper[key]
            }
        }
    }
    for (var key of Object.keys(mapper)){
        output.push(mapper[key])
    }

    return output

}

console.log(intersection([1,2,3],[1,5,6],[1,8,9,10])) // Output -> 1