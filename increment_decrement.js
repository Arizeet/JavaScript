// Increment & Decrement Operators
// Operators: x++ or ++x or x-- or --x
// if used postfix, with operator after operand(for eg- x++), the increment operator increment and return value before incrementing.

// if used prefix, with operator after operand(for eg- ++x), the increment operator increment and return value after incrementing.

var num=15;
var newNum=num++ + 5;
console.log(num);
console.log(newNum);

//Postfix increment operator means the expression is evaluated first using the original value of variable and then the variable is incremented

var num=15;
var newNum=++num + 5;
console.log(num);
console.log(newNum);

//Prefix increment operator means the variable is incremented first and then the expression is evaluated using the new value of the variable