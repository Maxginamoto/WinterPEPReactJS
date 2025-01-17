/*React Js
Day 4
1. Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
 if (confirm(question)) yes();
 else no();
}
ask(
 "Do you agree?",
 function() { alert("You agreed."); },
 function() { alert("You canceled the execution."); }
);

2. Identify the output of the following code
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material) => material.length));

3. Write an arrow function called square that takes a number as an argument and returns its
square.

4. Given an array of numbers, use an arrow function to create a new array that contains the
squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].

5. Use an arrow function to reverse a given string. For example, if the input is "hello", the output
should be "olleh".

6. Create a chainable object using arrow functions that allows you to set a value and then add
or multiply it by a number. For example:
const result = chainable(5).add(3).multiply(2); // result should be 16
*/
// 1. 
let ask=(question, yes, no)=>confirm(question)?yes():no();
// 2. It should result in [8,6,7,9] as it will dispaly the length of all the elements in the array
// 3.
let square=x=>x*x;
console.log(square(2));
// 4.
let sqArray=(arr)=>{
    let sqArr=[];
    for (let i = 0; i < arr.length; i++) {sqArr[i] = arr[i]*arr[i];}
    return sqArr;
}
console.log(sqArray([1,2,3]));
// 5. 
let revStr=(str)=>{
    let revString='';
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        revString=arr[i]+revString;
    }
    return revString;
}
console.log(revStr('cba'));
// 6. 
let num=0;
let chainable=(n)=>num=n;
let add=(n)=>num+=n;
let multiply=(n)=>num*=n;
chainable(5);add(3);multiply(2);
console.log(num);