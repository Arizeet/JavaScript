//If...Else Statements
//If statement executes a statement if a specified condn is truthy
//If the condn is falsy, another statement can be executed
//Find whether a given vear is leap year or not

var year=2020;

if (year%4===0) {
    if (year%100===0) {
        if (year%400===0) {
            console.log(year+" is a Leap year");
        }else{
            console.log(year+" is a not Leap year");
        }
    } else{
        console.log(year+" is a leap yr");
    }
} else {
    console.log(year+" is not a leap year");
}

//What are truthy & falsy values in JS?
//We have total 5 falsy values in JS
//0, "", undefined, null, NaN, false

// if (score=undefined) {
//     console.log("Won");
// } else {
//     console.log("Lose");
// }