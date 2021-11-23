//Problem-1
fetch("https://jsonplaceholder.typicode.com/users/1/albums")
    .then((response) => response.json())
    .then((title) => console.log(title));
//Problem-2
function findNumbers(array, sum) {
    for (let i = 0; i < array.length; i++)
        for (let j = i + 1; j < array.length; j++)
            if (array[i] + array[j] == sum) {

                return console.log("[" + array[i] + "," + array[j] + "]");


            }

}
findNumbers([2, 7, 11, 15], 9);