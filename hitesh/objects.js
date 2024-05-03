const mysymbol=Symbol('key 1')

const hello={
    name :'mahesh',
    "surname":'zune',
    [mysymbol]:'mykey1',
    class:'fybbaca',
    dob:'3-11-2004'
}
// console.log(hello.name);
// console.log(hello["name"]);
// console.log( hello[mysymbol]);
// console.log(hello['surname']);

hello.class='sybbaca';
// Object.freeze(hello);
hello.class='sybaca';
// console.log(hello);

hello.greeting= function (params) {
  console.log('hello everyone');    
}
hello.greetingtwo= function (params) {
  console.log(`hello everyone ,${this.name}`);    
}

// conslog(hello.greetingtwo());

//***************************object 2 ++++++++++++++++++++++++++++ */

const regularuser = {
     username:{
      userfullname:{
        fullname:'mahesh',
        surnam:'zune'
      }
     }
}

console.log(regularuser.username.userfullname.surnam)
