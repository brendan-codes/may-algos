let person = {
    id: 8,
    name: "Brendan",
    location: "California",
    email: "bstanton@codingdojo.com",
    dojo: "Silicon Valley"
}

// "location"

// hashing algorithm(keyname)
// => 1032

// [...1031,    1032,       1033, 1034...]
//     email    location    dojo

// dict.hasOwnProperty()

// for of looping over array of keys

let keys = Object.keys(person);
console.log(keys);


