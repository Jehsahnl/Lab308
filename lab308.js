// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//   when divisable by 5, each number should have no remainders,
//meaning when using the % operator we should get a total of 
// 0 for each, ensuring all numbers are divisable by 0
const divBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5)

if (divBy5 == 0) {
 console.log(`Divisable by 5!`)
} else {
    console.log(`Not divisable by 5!`)
}
 
//variable and if statement ensuring the first number is greater than the last
const overLast = (n1 > n4)

if (overLast == true) {
  console.log(`First number is greater than last!`)
} else {
  console.log(`Last number is greater than first!`)
}

// a chain of arithmetics that results in the remainder of the preceding result
const chainFirst = n2 - n1

const chainSecond = chainFirst * n3

const chainThird = chainSecond % n4
console.log(chainThird)

// Onto Part 2!
console.log('Part2!')

//defining variables for the scenario
let mph55 = 30
let mph60 = 28
let mph75 = 23
let totalMiles = 1500
let budget = 175
let cost = 3

// determing variables of the answer to each question for 55 mph
const trip55 = totalMiles / mph55
const expense55 = trip55 * cost
const hours55 = totalMiles / 55
console.log(trip55, expense55, hours55)

console.log(`Going 55mph, the whole trip will take ` + trip55 +` gallons`)

if (expense55 < budget) {
  console.log(`You will spend $` + expense55 + `. That means going 55mph, the budget WILL Cover all fuel expenses! `)
} else {
  console.log(`You will spend $` + expense55 + `. That means going 55mph, the budget will NOT cover all fuel expenses`)
}

console.log(`Going 55mph, the whole trip will take ` + hours55 +` hours`)

// determing variables of the answer to each question for 60 mph
const trip60 = totalMiles / mph60
const expense60 = trip60 * cost
const hours60 = totalMiles / 60
console.log(trip60, expense60, hours60)

console.log(`Going 60mph, the whole trip will take ` + trip60 +` gallons`)

if (expense60 < budget) {
  console.log(`You will spend $` + expense60 + `. That means going 60mph, the budget WILL Cover all fuel expenses! `)
} else {
  console.log(`You will spend $` + expense60 + `. That means going 60mph, the budget will NOT cover all fuel expenses`)
}

console.log(`Going 60mph, the whole trip will take ` + hours60 +` hours`)

// determing variables of the answer to each question for 75 mph
const trip75 = totalMiles / mph75
const expense75 = trip75 * cost
const hours75 = totalMiles / 75
console.log(trip75, expense75, hours75)

console.log(`Going 75mph, the whole trip will take ` + trip75 +` gallons`)

if (expense75 < budget) {
  console.log(`You will spend $` + expense75 + `. That means going 75mph, the budget WILL Cover all fuel expenses! `)
} else {
  console.log(`You will spend $` + expense75 + `. That means going 75mph, the budget will NOT cover all fuel expenses`)
}
console.log(`Going 75mph, the whole trip will take ` + hours75 +` hours`)

