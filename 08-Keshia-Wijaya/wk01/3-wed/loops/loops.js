// console.log ("Hello World");


// Exercises: for loops
// The even/odd reporter
// // // Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let current = 0; current <= 20; current++) {
    if (current === 2,4,6,8,10,12,14,16,18,20) {
      console.log (`${current} is even`);
    }
    else {
        console.log (`${current} is odd`);
    }
}

// // correct answer

for (let current = 0; current <= 20; current++) {
    if (current % 2 === 0) {
      console.log (`${current} is even`);
    }
    else {
        console.log (`${current} is odd`);
    }
}


// // // Multiplication Tables
// // // // Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (let current = 0; curent <= 10; result = ((current + 1)*9)) {
    console.log (result)
}

current = 3

// // // correct answer
for (let current = 0; curent <= 10; current++) {
    console.log (`${current} * 9 = ${current * 9}`);
}

for (let j = 1)


// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

let score = 89

if (score => 60){
    console.log ("C");
}
else if (score => 80) {
    console.log ("B");
}
else (score => 90) {
    console.log ("D");
}
