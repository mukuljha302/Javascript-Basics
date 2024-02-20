
//Jasmine is a BDD framework in JS

let add=(a,b)=> a+b;

// function add(a,b){
//     return a+b;
// }

let subtract=(a,b)=> a-b;

describe('Calculator',()=>{



fit('Add 2 numbers',()=>{
    expect(add(1,2)).toBe(4);
})


it('Sub 2 numbers',()=>{
    console.log(subtract(10,25));
})


it('Add 2 numbers',()=>{
    console.log(add(1,2));
})

})

