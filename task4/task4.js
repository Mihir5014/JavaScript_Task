// Write a function to remove duplicate elements from an array without using any library methods.

function removeDuplicate(ar) {
	let firstElement = ar[0];
	const unique = [];
	for(let i=0;i<ar.length;i++){
		if(!unique.includes(ar[i])){
			unique.push(ar[i]);
		}
	}
	document.write(unique);
}

const arr = [21,2,54,2,46,83,2,39];
removeDuplicate(arr);