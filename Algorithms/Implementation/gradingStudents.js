// Problem available @ https://www.hackerrank.com/challenges/grading/problem

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    let roundedGrades = grades.map((grade) => {
        if (grade < 38) {
            return grade;
        }

        let nextMultipleOfFive = Math.ceil(grade / 5) * 5;
        if ((nextMultipleOfFive - grade) < 3) {
            return nextMultipleOfFive;
        }

        return grade;
    });

    return roundedGrades;
}

let arr = [73, 67, 38, 33];
console.log(gradingStudents(arr));