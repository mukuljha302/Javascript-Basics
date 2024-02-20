let fruits=["apple","mango","grape","cherry","banana","pineapple"];

fruits.sort();
// Sort will sort actual array

console.log(fruits);

fruits.reverse();

console.log(fruits);

//join and concat in array
//concatenates another array into first array
//joins joins two arrays and creates new array

//predicate function
//we will not get boolean here 
//rather we will get the value compared here

function predicate(fruit){

    if(fruit==="grape"){
        return true;
    }

}

// let found=fruits.find(fruit =>  fruit==="mango"
// // );
//  let found=fruits.find(fruit => fruit==="grape");
//  console.log(found); 

let found=fruits.find(predicate);



console.log(found);

console.log(fruits.includes('apple'));
console.log(fruits.indexOf('mango'));

let numbers=[4,3,1,0];

//Map vs SOrt
//Map doesn't affect real data Array
//Map allow to amnipulate the data of array
//It can return a new array

let newNumbers=numbers.map((num,index)=>{
    return num+2;
});

console.log(newNumbers);

let filtered =newNumbers.filter((val,index)=>{

    return val<4;
})

console.log(filtered);

//reduce method

let reduced=filtered.reduce((pre,curr)=>{
    return pre+curr;
})

console.log(reduced);

let a=new Array(5);

a.push(10); //at last of the array
//pop() removes from last of array
//unshift() add to beginning of array and shifts all elements to right
//shift removes frirst element and shifts all element by one
//fill will fill value by index
