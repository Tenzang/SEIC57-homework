
 // Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
    // Write a function called guessLetter that will:
    // Take one argument, the guessed letter.
    // Iterate through the word letters and see if the guessed letter is in there.
    // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
    // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
    // It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
    // Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

    const word = ['C','A','T'];
    const guess = ['_','_','_','C','A','T'];
    const guessLetter = function (letter) {
        for (i=0; i < word.length; i++) {
            if (letter === word[i]) {
                return guess[i]=letter;
                console.log("Congratulations on finding a new letter.")
            } else {
                console.log("Try again.")
            }
        }
    }

guessLetter('C')
    