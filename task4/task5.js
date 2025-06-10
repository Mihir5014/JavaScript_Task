// Write a function that takes an array of numbers (e.g., [1, 2, 4, 5]) and returns the missing number (3 in this case)

function fun(arr) {
	let missing = 0;
	for(let i=arr[0];i<arr[arr.length-1];i++){
		if(!arr.includes(i)){
			missing = i;
		}
	}
	document.write(`Array : ${arr} and missing ${missing}`);
}

const num = [1, 2, 4, 5];
fun(num);