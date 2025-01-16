/*1. Write a function calculateDiscount that takes two
parameters: price and discount (with a default value of 10). The function should
return the final price after applying the discount.
*/
function calculateDiscount(basePrice, discount=10){
    return basePrice*(100-discount)/100;
}
/*2. Create a function mergeArrays that takes two arrays as parameters and returns a new
array that combines both arrays using the spread operator.
*/
function mergeArrays(arr1, arr2){
    return [...arr1, ...arr2];
}
/*3. Write a function logArguments that takes any number of arguments and logs them to
the console. Use rest parameters to collect the arguments.
*/
function logArguments(...args){
    args.forEach(arg=>{
        console.log(arg);
    })
}
/*4. Create a function createMessage that takes a default message and an indefinite
number of names. The function should return an array of personalized messages for
each name.
*/
function createMessage(greeting, ...names){
    names.forEach( n=>{
        n=`${greeting} ${n}`;
    } )
    return names;
}
/*5. Define a function sum that takes three numbers as parameters and returns their sum. Use
the spread operator to call this function with an array of numbers.
*/
function sum(x,y,...z){
    let zsum=0;
    z.forEach( num => {
        zsum += num;
      })
    console.log(x+y+zsum);
}
arr=[1,2,3,4,5,6];
sum(...arr);
/*6. Write a function createUserProfile that takes three
parameters: username, age (defaulting to 25), and country (defaulting to "Unknown").
Return an object with these properties.
*/
function createUserProfile(username, age=25, country=`unknown`){
    return [username, age, country];
}
