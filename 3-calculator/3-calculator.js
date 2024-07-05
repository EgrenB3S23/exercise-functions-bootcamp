/** Övning 3 */

/**
 * Skriv en funktion som tar tre parametrar.
 * De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'.
 * Utför beräkningen och returnera summan och skriv ut.
 * Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då)
 * och varje operation ska vara sin egen funktion.
 * Tips! Här kan typeof vara bra att använda
 * */

/**
 * 1. Ta in två tal och en sträng som säger vad vi ska göra med dessa tal
 * 2. Kolla att de två första talen är siffror
 * 3. Kolla vilken operations som ska göras (addition, subtraktion etc)
 * 4. Anropa rätt funktion beroende på vad som ska göras
 * 4. I den funktionen ska vi utföra operationen och returnera svaret
 * 5. Skriv ut summan
 */

function add(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
	return firstNumber / secondNumber;
}

function multiply(firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}

function calculate(firstNumber, secondNumber, operation) {
	// console.log(`${typeof firstNumber} ${typeof operation} ${typeof secondNumber}`);
	console.log(`${firstNumber} ${operation} ${secondNumber} = `);
	if (typeof firstNumber != "number" || typeof secondNumber != "number") {
		return NaN;
	}
	switch (operation) {
		case "+":
			return add(firstNumber, secondNumber);
			break;
		case "-":
			return subtract(firstNumber, secondNumber);
			break;
		case "/":
			return divide(firstNumber, secondNumber);
			break;
		case "*":
			return multiply(firstNumber, secondNumber);
			break;
		default:
			return undefined;
			break;
	}
}

console.log(calculate(5, 10, "+")); // 15
console.log(calculate(5, 10, "-")); // -5
console.log(calculate(5, 10, "/")); // 0.5
console.log(calculate(5, 10, "*")); // 50
console.log(calculate("hej", 10)); // NaN
console.log(calculate(10, "Hej")); // NaN

console.log(calculate("hej", "Hej", "+")); // NaN
console.log(calculate("5", "10")); // NaN
console.log(calculate(5, 10)); //und
console.log(calculate(5, "10", "+")); //NaN

// getInput();
// function getInput() {
//     let one = parseInt(window.prompt('Ange ett tal'));
//     let two = parseInt(window.prompt('Ange ett tal till'));
//     let operation = window.prompt('Ange ett räknesätt');

//     console.log(one);
//     console.log(two);
//     console.log(operation);
//     calculate(one, two, operation);
// }
