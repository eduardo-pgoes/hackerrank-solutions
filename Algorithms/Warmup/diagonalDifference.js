/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let n = arr.length;
    let mainDiagonal = 0, antiDiagonal = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Main diagonal
            if (i === j) {
                mainDiagonal += arr[i][j];
            }
            
            // Anti diagonal condition
            if ((i + j) === (n-1)) {
                antiDiagonal += arr[i][j];
            }
        }
    }

    let res = mainDiagonal - antiDiagonal;
    return (res > 0) ? res : (res * -1);
}

let arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
console.log(diagonalDifference(arr));