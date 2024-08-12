export function add(numbers) {
	if (numbers.trim() === "") return 0;

	let numberString = numbers;
	let numberArray = [];

	// Check for custom delimiter specification
	if (numbers.startsWith("//")) {
		const newlineIndex = numbers.indexOf("\n");

		// Extract the custom delimiter and the numbers string
		const delimiter = numbers.substring(2, newlineIndex).trim();
		numberString = numbers.substring(newlineIndex + 1);

		// Handle delimiters in the numberString
		const delimiters = [delimiter, "\n"].filter(Boolean).join("|");
		numberArray = numberString.split(new RegExp(delimiters));
	} else {
		// Handle default delimiter (comma) and new lines
		const delimiters = [",", "\n"];
		numberArray = numberString.split(new RegExp(delimiters.join("|")));
	}
	// Convert strings to numbers and filter out NaN values
	const numbersAsIntegers = handleNegatives(numberArray);

	// Sum up the numbers and return the result
	return numbersAsIntegers.reduce((total, num) => total + num, 0);
}

function handleNegatives(numberArray) {
	const numbersAsIntegers = numberArray
		.map((num) => parseInt(num))
		.filter((num) => !isNaN(num));

	// Extract negative numbers and throw error if any are found
	const negativeNumbers = numbersAsIntegers.filter((num) => num < 0);
	if (negativeNumbers.length > 0) {
		throw new Error(
			`Negative numbers not allowed: ${negativeNumbers.join(", ")}`
		);
	}
	return numbersAsIntegers;
}
