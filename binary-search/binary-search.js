'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length === 1) {
		if (array[0] === target) {
			return true
		} else {
			return false
		}
	}
	let midpoint = Math.ceil(array.length/2)
	console.log(array, midpoint)
	if (target < array[midpoint]) {
		return binarySearch(array.slice(0, midpoint), target)
	}
	else if (target > array[midpoint]) {
		return binarySearch(array.slice(midpoint), target)
	} else {
		return true
	}
};

// const binarySearch = (array, target) => {
//     let i = 0;
//     let j = array.length;
//     let mid = Math.ceil((i + j) / 2);
//     while (i <= j){
//         if (target < array[mid]) {
//             j = mid - 1;
//         }
//         else if (target > array[mid]) {
//             i = mid + 1;
//         }
//         else if (target === array[mid]){
//             return true;
//         }
//         mid = Math.ceil((i + j) / 2);
//     }
//     return false;
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch