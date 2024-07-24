let score="33"
console.log(score)
console.log(typeof score)

 ///Conversion To Number

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



///Conversion To Boolean
let isLoggedIn=""
console.log(typeof isLoggedIn)  // number

let isLoggedInBoolean = Boolean(isLoggedIn) 
console.log( typeof isLoggedInBoolean)    // Boolean
console.log( isLoggedInBoolean)       //true

/*1 ==>true  
  0  ==> false
  "" ==> false
  "ALHAMDULILLAH"  ==> True */


///Conversion To String
let someNumber=33;
console.log(someNumber)  //33
console.log(typeof someNumber) //number

let someNumberString=String(someNumber)
console.log( typeof someNumberString)   //string











