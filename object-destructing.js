const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard: 1,
}

let strengths = classDetails.strength;
let benches = classDetails.benches;
let blackBoard = classDetails.blackBoard;
console.log(strengths);  // Outputs 78
console.log(benches);    // Outputs 39
console.log(blackBoard); // Outputs 1

// With object destructing
let { strength: classStrength, benches: classBenches, blackBoard: classBlackBoard } = classDetails;

console.log(classStrength);   // Outputs 78
console.log(classBenches);    // Outputs 39
console.log(classBlackBoard); // Outputs 1


const { strength } = classDetails;// Equivalent to const {strength:strength} = classDetails;
console.log(strength);


const arr = [1, 2, 3, 4];

// without using object destructuring:
const first1 = arr[0];
const second2 = arr[1];
const third3 = arr[2];
const fourth4 = arr[3];
console.log(first1);  // Outputs 1
console.log(second2); // Outputs 2
console.log(third3);  // Outputs 3
console.log(fourth4); // Outputs 4

// using object destructuring:

const [first, second, third, fourth] = arr;

console.log(first);  // Outputs 1
console.log(second); // Outputs 2
console.log(third);  // Outputs 3
console.log(fourth); // Outputs 4


const [firsts, seconds, thirds] = arr;

console.log(firsts);  // Outputs 1
console.log(seconds); // Outputs 2
console.log(thirds);  // Outputs 3