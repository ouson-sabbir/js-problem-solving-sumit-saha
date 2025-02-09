// Event listener for the button
document.getElementById('sortButton').addEventListener('click', function () {
    const colleges =["Sabbir", "Borhan", "Ashiq"];
    const collegeslist = colleges.sort();
    document.getElementById('sortedResult').textContent = `Sorted in Alphapetically: ${collegeslist}`;
});