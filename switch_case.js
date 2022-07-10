//Switch Statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case
var area="circle";
var PI=3.14159,l=5,b=4,r=3;
switch (area) {
    case "circle":
        console.log("Area= "+ PI*r**2);
        break;
    case "rectangle":
        console.log("Area= "+ l*b);
        break;
    case "triangle":
        console.log("Area= "+ (l*b)/2);
    default:
        console.log("Enter valid input...");
        break;
}