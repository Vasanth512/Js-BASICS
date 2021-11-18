 //Problem 1
 const numbersArray = ['apple', 'orange', 'peach'];
 console.log(numbersArray[0]);
 console.log(numbersArray[2]);

 const person = {
     name: 'Vasanth',
     age: 10,
     gender: 'm'
 };
 console.log(person.name);
 console.log(person.age);
 //Problem 2
 const array1 = [1, 2, 3];
 const array2 = [4, 5, 6];
 console.log([...array1, ...array2]);

 const basicDetails = {
     name: 'abcde',
     age: 10,
     gender: 'm'
 };
 const educationDetails = {
     degree: 'xyz',
     college: 'anc',
 }
 console.log({...basicDetails,
     ...educationDetails
 });

 //Problem 3




 function largestNumber(numArray) {
     let max = 0;
     numArray.forEach(num => { max = num > max ? num : max; })
     console.log(max);
 }
 largestNumber([-1, 1, 0, -100]);


 //Problem 4
 function updateSalaries(employeesArray, percent) {

     const updated_employee_array = employeesArray.map(salary => salary + salary * (percent / 100));
     return updated_employee_array;

 };

 console.log(updateSalaries([100, 500, 700, 400], 10))

 //Input: employeesArray = [100, 500, 700, 400], percent = 10
 //Output: [110, 550, 770, 440]