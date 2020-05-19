// Jon Yoo, Becky Betts, Kamakani Roque

// Given an array of objects representing people
// and a string representing a bad habit
// return a "santasNaughtyList" containing the first and last names of all the people
// who have the matching bad habit so that santa knows how much coal he needs.

// you can solve this iteratively or using functional programming. if you finish early, try
// implementing it both ways!

const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
        ],
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

// Input: students, "doesn't wash dishes"
// Output: ["FN1 LN1", "FN3 LN3"]

// Input: students, "shows up late"
// Output: ["FN2 LN2", "FN3 LN3"]

// Input: students, "vapes too much"
// Output: []

// naughtyList(people){}

// function naughtyList(students, badHabit) {
//     let output=[]
//     for (var i = 0; i < students.length; i++){
//             if(students[i].habits.includes(badHabit)){
//                 output.push(students[i].firstName + students[i].lastName)
//             }
//         }
//     return output
// }
// console.log(naughtyList(students, "doesn't wash dishes"));
// console.log(naughtyList(students, "shows up late"));
// console.log(naughtyList(students, "vapes too much"));



function naughtyList(people, badhabit) {
    let output = [];
    let badpeople = people.filter(person => {
        return person["habits"].includes(badhabit);
    });
    badpeople.map(person => {
        output.push(`${person['firstName']} ${person['lastName']}`)
    })
    return output;
}

console.log(naughtyList(students, "doesn't wash dishes"));
console.log(naughtyList(students, "shows up late"));
console.log(naughtyList(students, "vapes too much"));