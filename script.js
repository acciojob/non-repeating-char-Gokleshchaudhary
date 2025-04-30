function firstNonRepeatedChar(str) {
    let charCount = {};

    // Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // Return null if there are no non-repeated characters
}

// Event listener for the button
document.getElementById('findCharButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const result = firstNonRepeatedChar(inputString);
    document.getElementById('output').innerText = result !== null ? result : 'null';
});