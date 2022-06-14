//Logical Operators are typically used with Boolean(Logical) values; when they return a boolean value

var a=30,b=-20;
console.log(a > b && b > 50 && b < 0);
console.log(a < b && b > 50 || b < 0);
console.log(!(a < b && b > 50 || b < 0));
console.log(!false + true);