// praxis: användaren skriver och läser strings, men programmet ska jobba medf char arrays.
// Konvertera fram och tillbaka med strToArr() och arrToStr().

let startWord = "hero";
// let startWord = "";
let currentWord = startWord;
let targetWord = "care";
// let targetWord = "";
let startWordArr = strToArr(startWord);
let currentWordArr = strToArr(currentWord);
let targetWordArr = strToArr(targetWord);

let scoreCounter = 0;

printVars();
//hero here hare care
//temp:
function printVars() {
	// console.log("##########");
	console.log("");
	// console.log(...startWordArr);
	console.log(`Starting word: ${arrToStr(startWordArr).toUpperCase()}`);
	// console.log(...currentWordArr);
	console.log(`Current word: ${arrToStr(currentWordArr).toUpperCase()}`);
	// console.log(...targetWordArr);
	console.log(`Target word: ${arrToStr(targetWordArr).toUpperCase()}`);
	// console.log("##########");
	// console.log("");
}

function askForWord() {
	//prompts user for a word,
	//checks for word in word lists,
	//repeats until a valid word is found, then returns that word.
	//returns false if no word was found (shouldn't happen) or if player enters "!exit"
	let isValid = false;
	let debugCounterLocal = 0;
	while (!isValid) {
		debugCounterLocal++;
		let input = "";
		input = prompt(`Current word: ${currentWord}.\nEnter a new word where only 1 letter has changed. type !exit to forfeit.`, "here");
		// alert(`input: ${input}. counter: ${debugCounterLocal}`);
		console.log(`input: ${input}. counter: ${debugCounterLocal}`);

		if (input === "!exit") {
		}
		if (typeof input === "string" && input !== "") {
			input = input.toLowerCase();
			isValid = true;
			return input;
		}
		if (debugCounterLocal >= 5) return undefined; //todo: temp
	}
	return false; //shouldn't happen
}

function submitWords() {
	let startWordCandidate = document.getElementById("textbox_startWord").value;
	let targetWordCandidate = document.getElementById("textbox_targetWord").value;
	console.log(`Submitting "${startWordCandidate}" & "${targetWordCandidate}"...`);
	let startWordEval = checkForWord(startWordCandidate);
	let targetWordEval = checkForWord(targetWordCandidate);
	// console.log(startWordCandidate);
	// console.log(targetWordCandidate);
	// console.log(startWordEval);
	// console.log(targetWordEval);

	let bothAreValid = true;

	if (startWordEval === "noun" || startWordEval === "verb" || startWordEval === "adjective" || startWordEval === "adverb") {
		console.log(`Start word "${startWordCandidate}" is a valid ${startWordEval}.`);
	} else {
		console.log(`"${startWordCandidate}" is not a valid word.`);
		bothAreValid = false;
	}

	if (targetWordEval === "noun" || targetWordEval === "verb" || targetWordEval === "adjective" || targetWordEval === "adverb") {
		console.log(`Target word "${targetWordCandidate}" is a valid ${targetWordEval}.`);
	} else {
		console.log(`"${targetWordCandidate}" is not a valid word.`);
		bothAreValid = false;
	}

	//toggleAttribute("disabled"); : toggles "disabled".
	//toggleAttribute("disabled", true); : sets "disabled". (adds if not there already)
	//toggleAttribute("disabled", false); : unsets "disabled". (removes if there already)

	lengthIsEqual = startWordCandidate.length === targetWordCandidate.length;
	if (!lengthIsEqual) {
		alert("Both words must be of equal length. Try something else.");
		console.log("Both words must be of equal length. Try something else.");
	}

	if (bothAreValid && lengthIsEqual) {
		startWord = startWordCandidate;
		startWordArr = strToArr(startWord);
		targetWord = targetWordCandidate;
		targetWordArr = strToArr(targetWord);

		//everything good? Let's start the game for real.
		//todo: wip 240708 2100
		disableStartInputs();
		gameStart();
	}
}

function disableStartInputs() {
	//textboxes
	const inputStart = document.querySelector("input#textbox_startWord");
	inputStart.toggleAttribute("disabled", true);
	const inputTarget = document.querySelector("input#textbox_targetWord");
	inputTarget.toggleAttribute("disabled", true);
	const inputCurrent = document.querySelector("input#textbox_currentWord");
	inputCurrent.toggleAttribute("disabled", true);
	const inputNew = document.querySelector("input#textbox_newWord");
	inputNew.toggleAttribute("disabled", false);

	//buttons
	const buttonSubmit = document.querySelector("button#button_submitWords");
	buttonSubmit.toggleAttribute("disabled", true);
	const buttonTry = document.querySelector("button#button_tryNewWord");
	buttonTry.toggleAttribute("disabled", false);

	//misc
	const hiddenTip = document.querySelector("b#hidden_tip");
	// hiddenTip.toggleAttribute("disabled", false);
	hiddenTip.style = "";
}

function gameStart() {
	//
}

function getArrDistance(a, b) {
	//compares strings (char arrays*) a and b and counts the nr of chars that differ. returns that number.
	//currently only accepts strings (arrays*) of equal length. returns undefined if they're not.
	//A: "help", 		B:"heap"		-> dif: 1
	//A: "false", 	B:"field"		-> dif: 4
	//A: "acorn", 	B:"pistol"	-> dif: undefined
	// console.log(`comparing "${arrToStr(a)}" and "${arrToStr(b)}"`);
	let difCounter = 0;
	if (Array.isArray(a) && Array.isArray(b) && a.length >= 1 && a.length === b.length) {
		for (let i = 0; i < a.length; i++) {
			if (a[i] != b[i]) {
				difCounter++;
			}
		}
	}
	return difCounter;
}

function checkForWord(input) {
	// returns "noun"/"verb"/etc if word is found. Only returns one.
	// "hate" is both a noun and verb. This function finds it first in nouns[], meaning verbs[] is never checked.
	// returns false if word was not found anywhere.
	let word = "";
	let wordArr = [];
	if (typeof input === "array") {
		wordArr = input;
		word = arrToStr(input);
	} else if (typeof input === "string") {
		word = input;
		wordArr = strToArr(input);
	}
	// console.log(`Checking word "${word}"...`);
	let returnVal = "";
	if (typeof word === "string") {
		if (nouns.includes(word)) {
			returnVal = "noun";
		} else if (verbs.includes(word)) {
			returnVal = "verb";
		} else if (adjectives.includes(word)) {
			returnVal = "adjective";
		} else if (adverbs.includes(word)) {
			returnVal = "adverb";
		} else {
			// console.log(`Word "${word}" not found.`);
			returnval = false;
		}
		// console.log(`"${word}" is a ${returnVal}.`);
	}
	return returnVal;
}

function strToArr(str) {
	//converts a string into an array of single characters.
	if (typeof str === "string") {
		return str.split("");
	} else return undefined;
}

function arrToStr(arr) {
	//converts an array into a string with all array items in order.
	// if (typeof arr === "array") {
	if (Array.isArray(arr)) {
		let tempStr = "";
		for (let i = 0; i < arr.length; i++) {
			tempStr = tempStr.concat(arr[i]);
		}
		return tempStr;
	} else return undefined;
}

function doNothing() {
	// temp
	console.log("Running doNothing()...");
	console.log("Successfully did nothing!");
}

function buttonPress() {
	let newWord = document.getElementById("textbox_newWord").value;
	let newWordArr = strToArr(newWord);
	let check = checkForWord(newWord);
	if (check === "noun" || check === "verb" || check === "adjective" || check === "adverb") {
		console.log(`"${newWord}" is a valid ${check}.`);
		//if we got here, the new word is valid. time to check "distance vs current word."
		// console.log(`Old word: "${arrToStr(currentWordArr)}"`);
		// console.log(currentWordArr);
		// console.log(arrToStr(currentWordArr));

		// printVars();
		// console.log(`New word: "${newWord}"`);
		// console.log(newWordArr);
		// console.log(getArrDistance(currentWordArr, newWordArr));
		dif = getArrDistance(currentWordArr, newWordArr);
		// console.log(`Difference between "${arrToStr(currentWordArr)}" & "${arrToStr(newWordArr)}": ${dif}`);

		switch (dif) {
			case 0:
				alert(`That's already your current word!\n("${arrToStr(currentWordArr)}" -> "${arrToStr(newWordArr)}")`);
				console.log(`("${arrToStr(currentWordArr)}" -> "${arrToStr(newWordArr)}")`);
				break;
			case 1:
				scoreCounter++;
				currentWord = newWord;
				currentWordArr = newWordArr;
				if (arrToStr(currentWordArr) === arrToStr(targetWordArr)) {
					alert(`Success! You went from "${arrToStr(startWordArr)}" to "${arrToStr(targetWordArr)}" in ${scoreCounter} moves.`);
				} else {
					console.log(`Moves so far: ${scoreCounter}`);
				}
				// printVars();
				break;
			default:
				alert(`Your new word must differ by exactly one character!\n("${arrToStr(currentWordArr)}" -> "${arrToStr(newWordArr)}")`);
				// console.log(`("${arrToStr(currentWordArr)}" -> "${arrToStr(newWordArr)}")`);
				break;
		}
	}
	updateFields();
}

function updateFields() {
	document.getElementById("textbox_startWord").value = startWord;
	document.getElementById("textbox_currentWord").value = currentWord;
	document.getElementById("textbox_targetWord").value = targetWord;
}
