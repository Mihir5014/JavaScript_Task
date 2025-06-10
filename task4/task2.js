// Create a function that takes a string as input and returns the reversed string.

function reverse(str) {
	let revStr = str.split('').reverse().join('');
	document.write(`original string : ${str} <br>`);
	document.write(`reverse string : ${revStr}`);
}

let string = prompt('enter a string : ');
reverse(string);