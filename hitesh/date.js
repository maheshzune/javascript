let mydate= new Date()
// console.log(mydate);
// console.log(mydate.getTimezoneOffset());

let myint =new Date(2024,10,3)
// console.log(myint.toString());

let mytime = Date.now();
// console.log(mytime);
// console.log(myint.getTime());
// console.log(Math.floor(mytime));

mydate.toLocaleString('default',{
    weekday:'long'
})
console.log(mydate);