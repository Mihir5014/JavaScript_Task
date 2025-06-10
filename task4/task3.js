// Write a function to find the largest number in an array.

function largest(ar) {
	const sortArr = ar.sort((a,b)=>a-b);
	let large = sortArr[sortArr.length-1];

	// let large = ar[0];
	// for(let i=1;i<ar.length;i++){
	// 	if(large<ar[i]){
	// 		large = ar[i];
	// 	}
	// }

	document.write(large);
}
const arr = [21,222,54,46,83,39];
largest(arr);
