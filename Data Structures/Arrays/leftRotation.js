function rotateLeft(d, arr) {
    let swap;
    for (let i = 0; i < d; i++) {
        // Rotating the original array 1 unit to the left
        for (let j = 0; j < arr.length - 1; j++) {
            if (j === 0) {
                swapExtremes(arr);
            } else {
                swap = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = swap;
            }
            console.log("Pass: " + j);
            console.log(arr);
        }
    }
    return arr;
}

function swapExtremes(arr) {
    swap = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = swap;
}

let arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(2, arr));