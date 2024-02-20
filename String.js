let str='Welcome to Letcode'
console.log(str);


let name = new String("Koushik");
console.log(name);

console.log(typeof(str));
console.log(typeof(name));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.includes('t'));

console.log(str.split(" "));

let words = str.split(" ");

words.forEach(ele =>{
    console.log(ele);
})

console.log(str.length);

let space= " Hey Welcome ";

console.log(space.trim());
console.log(space.trimLeft());
