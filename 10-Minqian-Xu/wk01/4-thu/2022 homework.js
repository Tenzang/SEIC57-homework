// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling 
// to figure this out.


// Def`ine a function maxOfThree that takes three numbers as arguments and returns the largest of them.


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an 
// array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


const maxOfTwoNumbers = Function(a, b){
    if (a > b) {
        console.log('${ a } is the largest number of them');
    } else {
        console.log('${ b } is the largest number of them')
    }
}

const maxOfThreeNumbers = Function(a, b, c){
    if (a > b && a > c){
        console.log('${ a } is the largest number of them')
    } else if (b > a && b > c) {
        console.log('${ b } is the largest number of them')
    } else {
        console.log('${ c } is the largest number of them')
    }
}

console.log(masOfThreeNumbers) 

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman 
//     without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current 
// guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found 
// a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate 
// the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program 
// works.

const lettersOfWord  = ["F", "O", "X"];
const guessWorld = ["B", "I", "G", "F", "O", "X"];
const guessLetter = Function ()









// Create a function in JS that takes an input and returns Simon's response as follows:

// Simon answers 'Sure.' if you ask him a question.
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.
// The input will not contain any numbers.
// Examples:
// simonSays("Hello, how are you?"); // => "Sure."
// simonSays("Hello, how are you!"); // => "Whatever"
// simonSays(""); // => "Fine. Be that way!"
// simonSays("HEYYYYY"); // => "Woah, chill out!"
// Bonus:
// Strike out the last dot point, the input may be a combination of numbers and other characters.


const simonSays = Function (message) {
    let response = "Whatever";

    if (message. endsWith("?")){
        response = 'Sure.';
    } else if (message === " "){
        response = "Fine. Be that way!";
    } else if (message === message.toUpperCase()){
        response = "Woah, chill out!";
    }
}

simonSays("Why?")




const a = ['Monday', 'Tuseday', 'Wednesday']



// Create an object to hold information on your favorite recipe. It should have properties for title (a string),
//  servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const favouriteRecipe = {
    title: "Pizza",
    servings: "2",
    ingredients: ["tomato", "cheese", "bacon", "mushroom"]
};
 
console.log (favouriteRecipe.title)

for (let i = 0; i < favouriteRecipe.ingredients.length; i++){
    console.log(receipt.ingredients[i] );
}








// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), 
// author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: 
// "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, 
// log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 
// 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: "true",
};
console.log(${title} ' by ' ${author.})



if alreadyRead === true,

const libray = [
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', alreadyRead: true},
];

for (let i - 0; i < library.length; i++) {
    const book = library[i];

}






// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), 
// and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. 
// Stars: Puff, Jackie, Living Sneezes."

const favoriteMovie = {
    title: "The Social Network",
    duration: "120 minutes",
    stars: ["Jessie Eisenberg", "Andrew Garfield"]
    const info = '${title} ' lasts for ' ${duration} '. Stars: '${stars} '.
};
 

console.log(info);

console.log(${title} ' lasts for ' ${duration} '. Stars: '${stars} '.')












