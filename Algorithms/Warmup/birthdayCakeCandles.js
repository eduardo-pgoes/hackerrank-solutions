/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
function birthdayCakeCandles(candles) {
    // What this function should actually do is get the biggest number in the array and return how many times it happens
    let biggestCandle = Math.max(...candles), n = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === biggestCandle) {
            n++;
        }
    }
    return n;
}   

let candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));