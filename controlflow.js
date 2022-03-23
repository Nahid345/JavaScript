// for loops

/*
for (let i=0; i<5;i++){
    console.log(i);
}

*/

//const names=['shuan','mario','lungi'];

/*for(let i=0; i<names.length;i++){
    console.log(names[i]);
    let html=<div>${names[i]}</div>;
    console.log(html);
}
*/

// while loop

/*let i=0;

while(i<5){
    console.log('in lopp', i);
    i++;
}

*/

// do while loop.....
/*
let i=0;
do{
    console.log(i);
    i++;
}
    while(i<5)

*/
 // if statement...
  
 const age=25;
 if(age>20){
     console.log('you r 20 year old');
 }

 const ninja=['shuan','nahu','nahud'];

 if(ninja.length>3){
     console.log('ninja')
 }
 else if(ninja.length>=4){
     console.log('lot of ninja');
 }
 else{
     console.log('more ninja');
 }


 // logical OR AND 

 const password='p@ss';

 if(password.length>=12 && password.includes("@")){
     console.log('that password is mighty strong');
 }
 else if (password.length>=8 || password.includes('@')&& password.length>=5){
    console.log('that password is stromg enough');
 }

 else{
     console.log('password is not long enough');
 }

 // logical NOT

 let user=false;
 if(!user){
     console.log('tou must be ')

 }

 console.log(!true);
 console.log(!false);


 // break & continue

 const scores=[50,20,0,100,45,34,45];

 for(let i =0; i<scores.length;i++){

    if(scores[i]==0){
        continue;
    }
     console.log('your score',scores[i]);

     if(scores[i]==100){
         console.log('congrats, you get the top score!');
         break;
     }
    
 }


 // using switch statement...

 const grade ='D';

 switch(grade){

    case'A':
    console.log('you got A');
    break;

    case'B':
    console.log('you get B');
    break;

    case'C':
    console.log('you get C');
     break;

    case'D':
    console.log('you get D');
    break;

    case'E':
    console.log('you get E');
    break;

    default:
        console.log('not a valid grade');


 }

 // variable & block scope

 let ages =30;

 if(true){
     ages=40;
     
     console.log('inside code block:',ages);
 }
 
 console.log('outside code block:',ages)

