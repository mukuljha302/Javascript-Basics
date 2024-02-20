let isEnabled=true;
// if(isEnabled==true){

//     console.log("type Something");
// }else {

//     console.log("skip");
// }

//console.log("completed");

let browser="opera";

// if(browser==="chrome"){

//     console.log("Run in Chrome");
// }else if(browser==="edge"){
//  console.log("Run in Edge");   
// }else if(browser==="firefox"){
//     console.log("Run in Firefox");   
//    }else{
//     console.log(`${browser} is not available`);
//    }


   switch(browser){
case "chrome": console.log("Run in Chrome");
 break;
 case "firefox": console.log("Run in Firefox");
 break;
 case "edge": console.log("Run in Edge");
 break;
 default: console.log(`${browser} is not avilable`);
 break;


   }


   let fruits=["apple","mango","grape","cherry","banana","pineapple"];

// //for loop in javascript
//    let len=fruits.length;
//    for(let i=0;i<len;i++){
// console.log(fruits[i]);

//    }

 //for of loop in javascript
 
 for( const iterator of fruits){
    console.log(iterator);
 } //will take element each time 


 
 for( const iterator in fruits){
    console.log(fruits[iterator]);
 } //will take element each time 