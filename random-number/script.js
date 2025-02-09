// JavaScript function to generate a random number
function getMyunuber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event listener for the button
document.getElementById('generateButton').addEventListener('click', function () {
    const randomNumber = getMyunuber(1, 10);
    document.getElementById('result').textContent = `Generated Number: ${randomNumber}`;
});