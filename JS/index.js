console.log('Merge Sort');

const mergeSort = (array) => {
	const arrayLength = array.length; // Store array's length
	// If the array only contains 1 item, return it. Ignore everything else.
	if (arrayLength === 1) {
		return array
	}
	// Find the center of the array's index and store it into variable.
	const middle = Math.floor(arrayLength/2),
	// Find the left half of the array and store it into variable.
		 left = array.slice(0, middle),
	// Find the right half of the array and store it into variable.
		 right = array.slice(middle);

	// Recursively divides array into pieces.
	return merge(
		mergeSort(left),
		mergeSort(right)
	);
	

}

const merge = (left, right) => {
	let [ result, indexLeft, indexRight ] = [ [], 0, 0 ];

	// Store left and right array length
	const [ leftLen, rightLen ] = [ left.length, right.length ];

	console.log(leftLen);
	console.log(rightLen);
	

}



console.log(mergeSort([1,2]));




