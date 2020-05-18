//Petra Franklin, Michael Cote, John Stevens, Denys Glukhovskyi

// Challenge #1: Object Search
// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for
// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];




function objectSearch(criteria, objects){
    let output = []

    for (var i=0; i<objects.length; i++){
        var flag = true
        for (const key of Object.keys(criteria)){
            if (objects[i][key] != criteria[key]){
                flag = false
            }
        }
        if (flag){
            output.push(objects[i])
        }
    }
    return output
}

console.log(objectSearch(searchFor, items))

// [
//     { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
//     { firstName: 'Bob', lastName: 'White', age: 31 }
// ]

// Challenge #2: findByIdAndUpdate(id, updateObject, arr)

/*
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];


// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output:



function findByIdAndUpdate(id, updateObject, arr){
    let obj = {}
    for (var i=0; i<arr.length; i++){
        if (arr[i]["id"] === id){
            obj = arr[i]
            break
        }
    }
    if (obj){
        for (const key of Object.keys(updateObject)){
            if (obj.hasOwnProperty(key)){
                obj[key] = updateObject[key]
            }
        }
    }
    return obj
}

console.log(findByIdAndUpdate(3, {redBeltStatus: true}, students))

// Case 1
// {
//     id: 3,
//     name: 'student3',
//     isLateToday: false,
//     lateCount: 0,
//     redBeltStatus: true
// }

// Case 2
// {
//     id: 1,
//     name: 'student1',
//     isLateToday: true,
//     lateCount: 16,
//     redBeltStatus: false
//   }

// Case 3
// {}

