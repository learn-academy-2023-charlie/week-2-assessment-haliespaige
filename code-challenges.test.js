// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:
//name: multiplied
//input: an array 
    //const numbersArray1 = [6, 7, 8, 9, 10] 
    //const numbersArray2 = [24, 27, 30, 33, 36]
//output: the input array multiplied by 3
    //Expected output: [18, 21, 24, 27, 30]
    //Expected output: [72, 81, 90, 99, 108]
 // process: creat a test with expect statements for each of the variables provided
//Create the function that makes the test pass - that takes in the array, iterates through each element and multiplies the value (number) by 3 and returns a new array of the same length with the results. 
// .map() method 

// a) Create a test with expect statements for each of the variables provided.


// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// describe("multiplied",() => {
//     it("returns a new array with each element multiplied by 3", () => {
//         expect (multiplied(numbersArray1)).toEqual ([18, 21, 24, 27, 30])
//         expect (multiplied(numbersArray2)).toEqual ([72, 81, 90, 99, 108])
//     })
// })

//
//  PASS  ./code-challenges.test.js
//  multiplied
//    ✓ returns a new array with each element multiplied by 3 (3 ms)


// // b) Create the function that makes the test pass.

// const multiplied = (array) => {
//     return array.map((number) =>  number * 3)
// }

// console.log(multiplied(numbersArray1))
// //output:[18, 21, 24, 27, 30]

// console.log(multiplied(numbersArray2))
// //output: [72, 81, 90, 99, 108]






// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
// name: isDivisible 
// input: an object as an argument: 
    //const object1 = { number: 15 }
    //const object2 = { number: 0 }
    //const object3 = { number: -7 }
// output:   whether or not the number inside the object as an argument is evenly divisible by three. 
    // `${} is/is not divisible by three`
    // if else conditional statement 

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"



// describe("isDivisible",() => {
//     it("decides if the number inside it is evenly divisible by three or not", () => {
//         expect(isDivisible(object1.number)).toEqual ("15 is divisible by three")
//         expect(isDivisible(object2.number)).toEqual ("0 is divisible by three")
//         expect(isDivisible(object3.number)).toEqual ("-7 is not divisible by three")
//     })
// })

// // b) Create the function that makes the test pass.

// const isDivisible = (object) => {
//     if (object% 3 === 0 )  {
//         return `${object} is divisible by three`
//     }
//     else {return `${object} is not divisible by three`}
// }

// console.log(isDivisible(object1.number))
// //output: 15 is divisible by three
// console.log(isDivisible(object2.number))
// //output:  0 is divisible by three
// console.log(isDivisible(object3.number))
// //output:    -7 is not divisible by three

// // //output:  PASS  ./code-challenges.test.js
// //   isDivisible
// //   ✓ decides if the number inside it is evenly divisible by three or not (2 ms)





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:
// name: allCaps
//input: an array of words (strings)
    //const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    //const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// output: new array with all the words (strings) capitalized 
// proccess: Create a function that takes in an array, turns the elements into a string (because the .toUpperCase will not work on an array), capitalizes the entire word/string/element and returns the results in a new array.   

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// describe("allCaps",() => {
//     it("takes in an array of words and returns an array with all the words capitalized.", () => {
//         expect (allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect (allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//          })
//         })
       
// // b) Create the function that makes the test pass.

// const allCaps = (array) => {
//    return array.map((string) => { 
//    return string.charAt(0).toUpperCase() + string.slice(1)
//    })
// }

// console.log(allCaps(randomNouns1))

// //output: PASS  ./code-challenges.test.js
//   allCaps
//   ✓ takes in an array of words and returns an array with all the words capitalized. (3 ms)






// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:
// Name: firstVowelIndex
// input: string: 
    //const vowelTester1 = "learn"
    //onst vowelTester2 = "academy"
    //const vowelTester3 = "challenges"
 // output: the index of the first vowel of the string
    //   // Expected output: 1 (the index location of e, the first vowel in 'learn')
        // Expected output: 0 (the index location of a, the first vowel in "academly")
        // Expected output: 2 (the index location of a, the first vowel in "challenges")
// Process: Create a function that takes in a string, iterates through each character in the string to see if it contains a vowel and returns the index location of that first vowel in the string. 

// a) Create a test with expect statements for each of the variables provided.


const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


//  describe("firstVowelIndex",() => {
//      it("takes in a string and logs the index of the first vowel.", () => {
//          expect (firstVowelIndex(vowelTester1)).toEqual(1)
//          expect (firstVowelIndex(vowelTester2)).toEqual(0)
//          expect (firstVowelIndex(vowelTester3)).toEqual(2)
//           })
//          })



// // b) Create the function that makes the test pass.


// const firstVowelIndex = (string) =>{ 
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let i = 0; i < string.length; i++) {
//         if(vowels.includes(string[i])) {
//             return i
//         }
//     }
// }

// console.log(firstVowelIndex(vowelTester1))
// //output: 1
// console.log(firstVowelIndex(vowelTester2))
// //output: 0
// console.log(firstVowelIndex(vowelTester3))
// //output: 2

         //output:  PASS  ./code-challenges.test.js
//   firstVowelIndex
//   ✓ takes in a string and logs the index of the first vowel. (2 ms)
