function calc(op, a, b){
    
    if (typeof op === "undefined" || typeof a === undefined || typeof b === "undefined" || 
        typeof a !== "number" || typeof b !== "number"){

        return "Error";
    }

   switch (op){
       case "sum":
           return a + b;

        case "dif":
            return a - b;  

        case "multi":
            return a * b; 
                
        case "div":
            if (b === 0){
            return "Division by 0 is not possible";
            }
            else{
                return a / b;
            }
        case "pow":
            return a ** b;   
        
        case "remain":
            if (b === 0){
                return "Division by 0 is not possible";
             }
             else{
                return a % b;
             }
               
        default:
            return "unknown operation";             
   }
}


console.log(calc("sum",1,2)); //3
console.log(calc("multi",3,4)); //12
console.log(calc("dif",8,2));   //6
console.log(calc("div",15,3));  //5
console.log(calc("pow",2,3));   //8
console.log(calc("remain",5,2)); //1  
console.log(calc("square",5,2)); //unknown operation
console.log(calc("pow",2,)); //Error
console.log(calc(2,3));//Error
console.log(calc()); //Error
console.log(calc("sum","mn",4)); //Error
console.log(calc("sum","mn",4)); //Error
console.log(calc("div",4,0)); //Division by 0 is not possible
