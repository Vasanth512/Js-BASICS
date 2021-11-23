// Problem 1
function findFreq(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count += 1;
        }
    }
    return count;
}
console.log(findFreq('How many times does the character occur in this sentence?', 'm'));
console.log(findFreq('How many times does the character occur in this sentence?', 'h'));

//Problem-2
function areAllEqual(arr) {
    var first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (first !== arr[i]) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(areAllEqual([1, 2, 1, 1]));
console.log(areAllEqual(['test', 'test', 'test']));

//Problem 3
function subArray(arr, n) {
    const newArray = arr.splice(-n);
    return newArray;
}
console.log(subArray([1, 2, 3, 4, 5], 2));
console.log(subArray([1, 2, 3], 6));

fetch("https://jsonplaceholder.typicode.com/users/1/albums")
    .then((response) => response.json())
    .then((result) => console.log(result));