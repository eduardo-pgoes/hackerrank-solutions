/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let amPM = s.slice(s.length - 2, s.length).toString();
    let oldTime = +s.slice(0, 2).toString();
    
    // divide & conquer - PM cases
    if (amPM === "PM") {
        if (oldTime < 12) {
            oldTime += 12;
        }
    } else {
        if (oldTime === 12) {
            oldTime = "00";
        } 
        else if (oldTime < 10) {
            // Leading with really edgy cases...
            oldTime = "0" + oldTime.toString();
        }
    }

    return oldTime + s.slice(2, s.length - 2);
}

let s = "04:59:59AM";
console.log(timeConversion(s));