document.getElementById('calculateButton').addEventListener('click', function() {
    const marks = [
        parseFloat(document.getElementById('subject1').value),
        parseFloat(document.getElementById('subject2').value),
        parseFloat(document.getElementById('subject3').value),
        parseFloat(document.getElementById('subject4').value),
        parseFloat(document.getElementById('subject5').value)
    ];

    let totalPoints = 0;
    let resultsHtml = '<h2>Grades</h2>';
    
    marks.forEach((mark, index) => {
        const grade = calculateGrade(mark);
        resultsHtml += `<p>Subject ${index + 1}: ${grade}</p>`;
        totalPoints += gradeToPoint(grade);
    });

    const cgpa = ((totalPoints / marks.length) * 2.5).toFixed(2); // Convert to a 10-point scale
    resultsHtml += `<h3>CGPA: ${cgpa}</h3>`;

    document.getElementById('results').innerHTML = resultsHtml;
});

function calculateGrade(mark) {
    if (mark >= 90) return 'A';
    else if (mark >= 80) return 'B';
    else if (mark >= 70) return 'C';
    else if (mark >= 60) return 'D';
    else return 'F';
}

function gradeToPoint(grade) {
    switch (grade) {
        case 'A': return 4;
        case 'B': return 3;
        case 'C': return 2;
        case 'D': return 1;
        default: return 0;
    }
}
