function miniMaxSum(arr) {
    let currentSum, minSum = (10 ** 9) * 9, maxSum = 0;
    // Loop to choose which number will get ignored
    for (let i = 0; i < 5; i++) {
        currentSum = 0;
        // Loop to get the current sum - ignoring arr[i]
        for (let j = 0; j < 5; j++) {
            if (i != j) {
                currentSum += arr[j];
            }
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < minSum) {
            minSum = currentSum;
        }
    }

    console.log(`${minSum} ${maxSum}`);
}

let arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);