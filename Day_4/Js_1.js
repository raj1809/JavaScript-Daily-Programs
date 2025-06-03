
        let favColor = "navy blue";
        let height = "173 cms";
        let likesPizza = "yes";

        console.log(favColor);
        console.log(height);
        console.log(likesPizza);

console.log("----------------------------------------")
// Function declaration
function greet(name) {
    return "Hello, " + name;
}
// Function call
let message = greet("John"); // "Hello, John"
console.log(message);

console.log("----------------------------------------")
function sum(a, b) {
    return a+b;
}
let add = sum(4, 5);
console.log(add);

console.log("----------------------------------------")

function canVote(age){
        return age >  18;
}
    console.log(canVote(9));
    console.log(canVote(19));

console.log("----------------------------------------")

let num = 21;
if(num % 2 === 0){
    console.log("The number is even.");
} else{
    console.log("The number is odd.");
}

console.log("----------------------------------------")

function sum(n){
    if (n < 1) {
        return 0; 
      }
      return (n * (n + 1)) / 2;
    }

    console.log(sum(5));
    console.log(sum(50));
    console.log(sum(90))

    