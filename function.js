// function declartaion

function great(){
    console.log('hello world');
}


// function expression
const speak=function(name,time){
    console.log('good  ${time} ${name}');
};

//great();
//great();
//great()
speak('nahid','morning');


// regular function....
/*const calArea=function(radius){

  let  area= 3.14*radius**2;
  console.log(area);
}

calArea(5);
*/
const calArea=function(radius){

    //let  area= 3.14*radius**2;
    return 3.14*radius**2;
  }
  
    const area= calArea(5);
    console.log(area);

// arrow function.....

const calarea=(radius)=>{
    return 3.14*radius**2;
}
const a= calarea(5);
    console.log(a);

    const bill=function(products,tax){

        let total=0;
        for(let i=0; i<products.length;i++){
            total+=products[i]+products[i]*tax;
        }
        return total;
    }
    console.log(bill([10,15,30],0.2));


    const name='shaun'

    // functions

    const greet=()=>'hello'

    let resultone=great();
    console.log(resultone);

    // method

    let resultTwo=name.toUppercase();
    console.log(resultTwo);

    // calback & foreach//

    let people=['mario','lungi','ryu','shuna'];

    people.forEach(function(person){
         console.log(person);
    });

    

