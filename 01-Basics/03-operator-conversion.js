/* ===========================Conversion of Data types========================*/

let score="33"
console.log(score)
console.log(typeof score)  //string

 // 1-Conversion To Number

let valueInNumber= Number(score)
console.log(typeof valueInNumber)  // Number
console.log( valueInNumber)       //33


// if we add not only num value like 33abc, 
//null, undef then convert to num it may cause issue to val but all these type will be Number

/*
 "33"            => 33 
 "33ab"          => NaN
 "null"          => 0
 "undefined"     => NaN
 "ALHAMDULILLAH" => NaN
 "True"          => 1
 "False"         => 0
*/



// 2-Conversion To Boolean
let isLoggedIn="1"
console.log(typeof isLoggedIn)  // number

let isLoggedInBoolean = Boolean(isLoggedIn) 
console.log( typeof isLoggedInBoolean)    // Boolean
console.log( isLoggedInBoolean)       //true

/*1 ==>true  
  0  ==> false
  "" ==> false
  "ALHAMDULILLAH"  ==> True */


// 3-Conversion To String
let someNumber=33;
console.log(someNumber)  //33
console.log(typeof someNumber) //number

let someNumberString=String(someNumber)
console.log( typeof someNumberString)   //string



/* ==========================Operations=========================*/

let value=3
let nagValue= -value
console.log(nagValue);  //-3

/*Basis math operations
console.log(2+2);  //4
console.log(2-2);  //0
console.log(2*2);  //4
console.log(2**3); //8  ( 2 raise power of  3)
console.log(2/2); //1
console.log(2%3); //2
*/


let str1="hello"
let str2=" john"
let str3= str1+str2
console.log(str3);   // hello john

//all operation depend on first value  if first val  is string then all values  treated  as string
console.log("1"+2 );  //12
console.log(1+ "2");  //12 
console.log("1"+2+2)  //122
console.log(1+2+"2");  //32   try not to write code like this and make it complex  use paranthesis to define priority

console.log((3+3)*5/4);  //7.5

console.log(true)   //true
console.log(+true)  //1 
// console.log(true+);    it will raises an error because it is incomplete.

console.log(+""); // 0 bz blank string


let num1, num2, num3   // also not code like this bz readability is more imp
num1= num2 = num3 =  2+2
console.log(num1,num2,num3);  // 4 4 4



let gameCounter=100
++gameCounter;
console.log(gameCounter);


//Prefix (++a, --a): The variable is incremented or decremented first, and the new value is used in the expression.
let a = 10;
console.log(++a); // 11
console.log(a);   // 11

//Postfix (a++, a--): The current value of the variable is used in the expression, and then the variable is incremented or decremented.

let b = 10;
console.log(b++); // 10
console.log(b);   // 11








