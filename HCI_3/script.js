document.getElementById('ascendingButton').addEventListener('click', function() {
    sortNumbers('ascending');
});

document.getElementById('descendingButton').addEventListener('click', function() {
    sortNumbers('descending');
});

function sortNumbers(order) {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number);

    if (!numbers.every(num => num === 0 || num === 1 || num === 2)) {
        alert('Please enter only 0s, 1s, and 2s.');
        return;
    }

    const count = { 0: 0, 1: 0, 2: 0 };
    numbers.forEach(num => count[num]++);
    
    const sortedNumbers = [];
    if (order === 'ascending') {
        sortedNumbers.push(...Array(count[0]).fill(0));
        sortedNumbers.push(...Array(count[1]).fill(1));
        sortedNumbers.push(...Array(count[2]).fill(2));
    } else {
        sortedNumbers.push(...Array(count[2]).fill(2));
        sortedNumbers.push(...Array(count[1]).fill(1));
        sortedNumbers.push(...Array(count[0]).fill(0));
    }
    
    displayResults(sortedNumbers);
}

function displayResults(numbers) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>Sorted Numbers: ${numbers.join(', ')}</p>`;
}
