const foo = "2024-07-05";

console.log(`Date: ${foo}`);
console.log(`Year: ${yearFromDate(foo)}`);

function yearFromDate(date) {
	if (typeof date === "string") {
		if (date.length === 10) {
			return date.substring(0, 4);
		} else return undefined;
	} else return undefined;
}
