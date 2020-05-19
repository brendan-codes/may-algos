//Joshua K, Martin, Denys Glukhovskyi
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

function naughtylist(students, vice) {
    coallist = []

    for (let i = 0; i < students.length; i++) {
        if (students[i].habits.includes(vice)) {
            coallist.push(students[i].firstName + " " + students[i].lastName)
        }
    }

    // students.map(student => {
    //     if (student.habits.includes(vice)) {
    //         coallist.push(student.firstName + " " + student.lastName)
    //     }
    // })

    return coallist
}

console.log(naughtylist(students, "doesn't wash dishes"))



/*
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      isInfected[bool]

    return a new array of the names of people who are at high risk of infection
    A person is at high risk of catching the virus if they are:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom is infected
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    isInfected: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    isInfected: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    isInfected: false,
};

// Input:
const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];
// Output: ["Person One", "Person Three"]

function highRisk(people) {
    let risks=[]

    people.filter(person=>{
        if (person.isSocialDistancing==false){
            person.friends.filter(friend=>{
                if (friend.isInfected === true && friend.isSocialDistancing === false && !risks.includes(person.lastName)){
                risks.push(person.firstName+" "+person.lastName)
                }
            })
        }
    })
    return risks
}

console.log(highRisk(people))