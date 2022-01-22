/* Создайте простой калькулятор Calc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.
Пример вызова такой функции
Calc(‘sum’, 1, 2) - возвращает 3
Calc(‘multi’, 1, 2) - возвращает 2
И так далее, со всеми математическими действиями, которые вы изучили ранее
Но и это еще не все.
Ваш калькулятор должен возвращать сообщение “Error” в том случае если вы не указали все 3 параметра или если 
вычисляемые значения оказались не числами.
В случае с неверным “идентификатором нужного действия” возвращайте “unknown operation”*/


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
            return a / b;

        case "pow":
            return a ** b;   
        
        case "remain":
            return a % b;    

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