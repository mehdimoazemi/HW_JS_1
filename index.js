const lefthand = +prompt("left hand number");
const operator = prompt("operator");
const righthand = +prompt("right hand number");

let result = 0 

switch (operator) {

    case "*":
       result = lefthand * righthand; 
        
        break;

        case "+":
            result = lefthand + righthand; 
             
             break;

             case "-":
                result = lefthand - righthand; 
                 
                 break;

                 case "/":
                    result = lefthand / righthand; 
                     
                     break;
    
    default:000
        break;
}

console.log(lefthand);
console.log(operator);
console.log(righthand);
console.log(result);






function average ( num1 , num2 , nem3 , num4, num5 ) {
    let total =  num1 + num2 + nem3 + num4 + num5;
    let av = total / 5

if (av >= 12) {
    return "قبول";

}

else{
    return "مشروط";
}


}


console.log(average(10 , 12 , 13 , 11 , 9));
console.log(average(12 , 15 , 20 , 16 , 17));
