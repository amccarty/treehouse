//Do a couple of console.logs

console.log("Hello from myscript.js");

console.log("Hello again!"); //This isn't needed


console.log("whatever");

/* var name = prompt("What is your name?")

alert("Hello " + name);

name = "nick";

console.log("The user's name is " + name);
*/

var name = prompt("What is your name?")

console.log("Before");

if (name) {
	console.log("If block");
} else {
	console.log("Else block");
}

console.log("After");