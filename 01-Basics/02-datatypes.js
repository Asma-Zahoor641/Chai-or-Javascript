"use strict";  //treat all js code as newer version of javascript
//alert(3+3)  // bz we are using node.js not browser , it has different syntax in node

console.log(3+3)
console.log("ALAHMDULILLAH");    // code readablity should be high

//DATATYPES IN JAVASCRIPT
  let age = 20                 // 1-numbers   => 2 to the power of 53
  let name ="ALHAMDULILLAH"    // 2-string
  let IsLoggedIn=true          // 3-boolean   =>for yes no,true false
                               // 4-bigint    => for large number of values
  let state=null               // 5-null      => standalone value but its datatype is "object" ,which consider as error
  let IsLogged                 // 6-undefined => means var is declare but its has no value , 
                               // 7-Symbol    => to identify unique component
                                //8-object
                                 console.log(typeof undefined)    //=>undefined   
                                 console.log(typeof null)         //=>object