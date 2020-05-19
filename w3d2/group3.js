// Participants: Ryan Alumbaugh, Kevin Chancey, Song Kim
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




const naughtyList = (people, habit) => {
    output =[];
    for(let i = 0; i < people.length; i++){
        for(let j=0; j<people[i]['habits'].length; j++){
            if(people[i]['habits'][j] == habit){
                output.push(`${people[i]['firstName']} ${people[i]['lastName']}`)
                break;
            }
        }
    }
    return output;
}
console.log(naughtyList(students, "doesn't wash dishes"))






const checkHabits = (people, habit, idx) => {
    for(let j=0; j<people[idx]['habits'].length; j++){
        if(people[idx]['habits'][j] == habit){
            return `${people[idx]['firstName']} ${people[idx]['lastName']}`
        }
    }
}

const naughtyList = (people,habit) => {
    output = [];
    for(let i=0; i < people.length; i++){
        let x = checkHabits(people,habit, i);
        if(x !== undefined){
            output.push(x)
        }
    }
    return output;
}
console.log(naughtyList(students, "washes dishes"))


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


const highRisk = people =>{
    output = [];



    for(let i=0; i<people.length; i++){
        if(people[i]['isSocialDistancing'] === false){
            output.push(`${people[i].firstName} ${people[i].lastName}`)
        }
        else if(

        )
    }
    return output;
}
console.log(highRisk(people));