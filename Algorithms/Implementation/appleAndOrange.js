// Available @ https://www.hackerrank.com/challenges/apple-and-orange/problem

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let newApplePosition = apples.map((val) => val + a);
    let newOrangePosition = oranges.map((val) => val + b);
    let appleCount = 0, orangeCount = 0;
    for (let apple of newApplePosition) {
        if (apple >= s && apple <= t) {
            appleCount++;
        }
    }
    for (let orange of newOrangePosition) {
        if (orange >= s && orange <= t) {
            orangeCount++;
        }
    }
    console.log(appleCount);
    console.log(orangeCount);
}

let s = 7, t = 11, a = 5, b = 15, m = 3, n = 2;
let apples = [-2, 2, 1];
let oranges = [5, -6];
countApplesAndOranges(s, t, a, b, apples, oranges);