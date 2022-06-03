const grades = Array['A', 'B', 'A'];
function convertGradestoPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points
    }
const gpa = grades.map(convertGradestoPoints);