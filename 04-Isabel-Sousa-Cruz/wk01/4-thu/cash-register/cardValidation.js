/*

*/

const CURRENT_YEAR = 2022;
const WRONG_LENGTH_ERROR = "length_less_than_sixteen";
const CONTAINS_LETTER_ERROR = "contains_a_letter";
const ALL_EQUAL_DIGITS_ERROR = "all_digits_are_the_same";
const ODD_FINAL_ERROR = "odd_final";
const SUM_ERROR = "sum_less_than_sixteen";
const EXPIRED_ERROR = "Sorry, your card is expired!"

const validateCreditCard = function(cardNumber, expirationDate) {
    const cardInfo = {valid: false, number: cardNumber};
    
    if (expirationDate < CURRENT_YEAR) {
        cardInfo["error"] = EXPIRED_ERROR;
    }

    const cardWithNoDash = [];
    for (let i = 0; i < cardNumber.length; i++) {
        if (cardNumber[i] !== "-") {
            const isDigit = cardNumber[i] >= 0 && cardNumber[i] <= 9
            if (isDigit) {
                cardWithNoDash.push(Number(cardNumber[i]));
            } else {
                cardInfo["error"] = CONTAINS_LETTER_ERROR;
                return cardInfo;
            }
        }
    }

    cardInfo.number = cardWithNoDash.join("");

    if (cardWithNoDash.length < 16) {
        cardInfo["error"] = WRONG_LENGTH_ERROR;
        return cardInfo;
    }

    let count = 1;
    for (let i = 1; i < cardWithNoDash.length; i++) {
        if (cardWithNoDash[i] === cardWithNoDash[i - 1]) {
            count++;
        }
        if (count === cardWithNoDash.length) {
            cardInfo["error"] = ALL_EQUAL_DIGITS_ERROR;
            return cardInfo;
        }
    }

    if (cardWithNoDash[cardWithNoDash.length - 1] % 2 !== 0) {
        cardInfo["error"] = ODD_FINAL_ERROR;
        return cardInfo;
    }

    const sumOfDigits = cardWithNoDash.reduce((prev, curr) => prev + curr, 0);
    if (sumOfDigits < 16) {
        cardInfo["error"] = SUM_ERROR;
        return cardInfo;
    }

    cardInfo.valid = true;
    return cardInfo;
}

console.log(validateCreditCard("9999-9999-8888-0000", 2027));
console.log(validateCreditCard("6666-6666-6666-1666", 2000));
console.log(validateCreditCard("a923-3211-9c01-1112", 2017));
console.log(validateCreditCard("4444-4444-4444-4444", 2019));
console.log(validateCreditCard("1111-1111-1111-1110", 2023));
console.log(validateCreditCard("6666-6666-6666-6661", 2022));
console.log(validateCreditCard("6666-6666-6666-1666", 2022));