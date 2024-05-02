const arr=[1,2,3,4,5]
arr.push(6)
// console.log(arr);

//array methods

// arr.pop()
// arr.unshift(66)
// arr.shift()
// // console.log(typeof(arr.includes(3)));
// console.log(arr.indexOf(5))
// console.log(arr);



//*************************arr 2++++++++++++++++++++++++++++ */

const marvel =['ironman','spiderman','antman']
const dc =['superman','batman','flash']

marvel.push(dc);
// console.log(marvel);

const add=marvel.concat(dc)
// console.log(add);

const all_heros=[...marvel,...dc]
// console.log(all_heros);


const arra=[1,2,3,4,[5,6],7,[8,[9,10]]]
// console.log(arra);

const newa =arra.flat(Infinity)
// console.log(newa);


console.log(Array.isArray('mahesh'));
console.log(Array.from('mahesh'));
console.log(Array.from({name:"mahesh"}));
