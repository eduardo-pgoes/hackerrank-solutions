function hourglassSum(arr) {
    let sums = [];
    // i loop controls the x-axis 
    for (let i = 0; i < 4; i++) {
        // j loop controls the y-axis
        for (let j = 0; j < 4; j++) {
            // There's a easier way to do this, I'm sure, but that's all I could think of.
            sums.push(arr[j][i] + arr[j][i+1] + arr[j][i+2] + arr[j+1][i+1] + arr[j+2][i] + arr[j+2][i+1] + arr[j+2][i+2])
        }
    }
    return Math.max(...sums);
}

let arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
];

console.log(hourglassSum(arr));