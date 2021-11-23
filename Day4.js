/*Swapping the variables*/
//using temp Variable
let a = 10;
let b = 20;
let temp = 0;
temp = a;
a = b;
b = temp;
console.log('a=' + a);
console.log('b=' + b);
//using arthematic opr
let c = 5;
let d = 10;
c = c + d;
d = c - d;
c = c - d;
console.log('c=' + c);
console.log('d=' + d);
//using es6
let x = 2;
let y = 4;
[x, y] = [y, x]
console.log('x=', x + " " + 'y=', y);
//Append object into array
function insertObject(arr, obj) {
    arr = [...arr, object];

    console.log(arr);
}

let array = [1, 2, 3];
let object = { p: 12, q: 8 };
insertObject(array, object);
//Remove duplicate
function removeDuplicate(arr) {
    let array1 = [...new Set(arr)];
    console.log(array1);

}
removeDuplicate([1, 2, 3, 2, 23, 2]);
//Reverse  a string
function reverseString(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse('');
    const newString = reverseArrayValues.join('');
    return console.log(newString);

}
reverseString('hello');
//To Check Palindrome or not
function toCheckPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse('');
    const newString = reverseArrayValues.join('');
    if (string == newString) {
        console.log("Given String is a Palindrome");
    } else {
        console.log("Given String is not a Palindrome");
    }
}
toCheckPalindrome('sky')

//To check the given number is positive/negative/Zero
function CheckNumber(number) {
    if (number > 0) {
        console.log(` ${ number }  is positive `);
    } else if (number == 0) {
        console.log(` ${ number }  is zero `);
    } else {
        console.log(` ${ number }  is negative `);
    }
}
CheckNumber(24)
CheckNumber(-4)

//Calculator using mathematical Operators
const operator = prompt('Enter operator ( either +, -, *, % or / ): ');

const num1 = 10;
const num2 = 5;
let result;

if (operator == '+') {
    result = num1 + num2;
} else if (operator == '-') {
    result = num1 - num2;
} else if (operator == '*') {
    result = num1 * num2;
} else if (operator == '%') {
    result = num1 % num2;
} else if (operator == '/') {
    result = num1 / num2;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);