const numbers = [3,45,6,7,9];
// const output = [];

// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }

// function square (element){
//  return element*element;
// }

// const result = numbers.map(function(element)
//         {
//             return element*element;
//         }
// )

// const result = numbers.map(x=>x*x);
// console.log(result);
// console.log(output);

const result = numbers.find(x=>x>5);
console.log(result);