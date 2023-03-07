var fun = function(){
    console.log("GUVI Geek Technologies, Chennai");
    alert("GUVI Geek Technologies, Chennai");
  }
fun();

// var a = 0;
// var b = 1;
// var c = 2;

// console.log(b || a);
// console.log(b || c);

// console.log(b && a);
// console.log(b && c);
// console.log(c && b);

// var a = 10;
// var b = 5;
// var Calculator = function(){
//   console.log(a+b);
//   console.log(a-b);
//   console.log(a*b);
//   console.log(a/b);
// }
// Calculator();

// var a = "hello";
// var b = "Guys!";
// console.log(a+' '+b);

// var i = 1;
// var j = ++i;
// var k = i++;
// console.log(j);
// console.log(k);
// console.log(i);

// var a = 1;
// var b = '2';
// console.log(a+b);
// console.log(a+Number(b));
// console.log(a+ +b);

// var first = prompt("Enter any value: ");
// // for(var i=0;i<3;i++){
// //     alert(first);
// // }
// var i = 3;
// // while(i < 3){
// //     alert(first);
// //     i = i+1;
// // }
// do{
//     alert(first);
//     i = i+1;
// }while(i<3);

// var m1 = 100;
// var m2 = 98;
// if(m1 === m2)
// console.log("equal");
// else
// console.log("Not equal");

// var arr = ['hey','h',0,0.5];
// console.log(arr[2])
// console.log(arr.length)
// arr.push('hello');
// console.log(arr[4]);

// function sqr(n){
//     return n*n;
// }
// console.log(sqr(7));

// var fun = function(){
//     return function(){
//         console.log("Hello");
//     }
// }
// var funny = fun();
// funny();

var myob = {
    sayhi: function(){
        console.log("Hi");
    },
    name:"My name"
};
myob.sayby = "Bye";
myob['hey'] = 'hello';
myob.sayhi();
console.log(myob.name);
console.log(myob.sayby);
console.log(myob.hey);

(function sqr(){
        console.log(6*6);
    })();

console.log(typeof myob)