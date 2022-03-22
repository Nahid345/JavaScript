alert("hello world");
console.log(1);
console.log(2);

// let variable.....

let age=25;
let year=2019;
console.log(age,year);
age=30
console.log(age);

// const variable.....

const points=100;

console.log(points);

// var variable......
var score=50
console.log(score);


// strings....
 console.log("hello, world");

 let email= 'nahidparves69@gmail.com'
 console.log(email);

 // String concatenation....

 let firstname='nahid';
 let lastname='parvej';

 //let fullname= firstname+lastname; // this line nospace for fullname
 // right space fullanme:

 let fullname=firstname+' '+lastname;
 console.log(fullname);

 // getting characters...

 console.log(fullname[2]);

 // String length...

 console.log(fullname.length);

 // String method...

 console.log(fullname.toUpperCase());


let result=fullname.toLowerCase();
console.log(result,fullname);

let index=email.indexOf('@');
console.log(index);

// common string method.....

let gmail='nahidparves99@gmail.com'
//let Rseult='gmail.lastIndexOf();

//let Result=gmail.slice(2,5);
//let Result=gmail.substring(4,10);
let Result=gmail.replace('n','w');

console.log(Result);

// create Two variable ....

let radius=10;
const pi=3.14;

//console.log(radius,pi);
//math operator +,-,/,*,**,%........

//console.log(10/2);
//let answer= radius%3;
// order of operation- B I D M A S

let answer = 5*(10*3)**2;
console.log(answer);

let like=10;
//like++;
//like--;
//like+=10;
//like-=10;
//like*=2;
like/=2;
console.log(like);

// Nan is not number

//console.log(5/'hello');

// String

let Resalt='the blog has'+like+'like';
console.log(Resalt);

// template String.....

const tiltle='Best song of 2002';
const author='hindi';
const likes='30';

// concatation strings...

//let re='The song called'+ tiltle+'by'+author+'has'+likes;
//console.log(re);

// tempalte string way...
//let re= The song calle ${tiltle} by${author} has {likes} looks;

// creating html tempalte.....

//let html=
//<h2>{tiltle}</h2>;

//console.log(html);

// Object datatype......array

let ninja=['nahid','sujon','parvej'];
ninja[1]='pretty' // override
console.log(ninja[1]);

let ages=[20,25,30,35];
console.log(ages[2]);

let random=['shun','mim',20,50];
console.log(random);

//console.log(ninja.length);

// array method....
let resulT=ninja.push("kin");
console.log(resulT);

// booleans & comaprisons....

console.log(true, false,"true","false")

// method can resturn booleans

let g='nahid100@gamil.com'
let names=['mario','luigi','toad'];

let Rest=names.includes('boe')

console.log(Rest);


// type conversion

let scores='100';

score=Number(scores)
console.log(scores+1);
console.log(typeof scores);
