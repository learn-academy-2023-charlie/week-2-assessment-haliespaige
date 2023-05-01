// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.



// --------------------1) What will this log?

const cohort = "Charlie 2023"
//console.log(cohort.split(""))

// a) Your answer: ['C', 'h', 'a', 'r,' 'l', 'i', 'e', ' ' '2', '0', '2', '3']
// b) Verify and explain: ['C', 'h', 'a', 'r', 'l', 'i', 'e', ' ' '2', '0', '2', '3']
// The .split("") method turns a string into an array and separates each character




// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: Undefined 
// b) Verify and explain: You need to include the word return before the backticks in order to receive the ouput.
// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))




// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: .map() will iterate through each element of the array [4, 5, 6, 7, 8] and multiply each element by 2 and return a new array with the results.




// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: .filter() will iterate through the array and return a subset of only odd numbers by returning the remainder of each number divided by 2 (% modulo). If the remainder is not equal to zero, then it is an odd number and will be returned in the new array (since even numbers and evenly divisible by 2 and will result in a remainder of 0)




// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer:"JavaScript"
// b) Verify and explain: The pathway in the console.log is calling on the object myCodingSkills and uses the dot notation to target the key 'languages' and receives that value (the array ["JavaScript", "Ruby"]). The square brackets indicates the index location 0 of the array which is "JavaScript". 





// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
//console.log(learnStudent)

// a) Your answer:
// Learn {
//   student : "George"
//   cohort : "Charlie"
//   year : 20223
// }
// b) Verify and explain:
  // output: Learn { student: 'George', cohort: 'Charlie', year: 2023 }
  // The parameter entered into the constructor() method is 'name'. The parameter was then given a new value of "George" in the new variable 'learnStudent = new Learn ("George").
  //The console.log(learnStudent) logs the new Learn with ("George") as the new value for 'name'