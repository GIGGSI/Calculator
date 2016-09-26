 export class Arithmetics {




     constructor() {
         this.result = 0;
     }
     add(numb1) {
       return this.result +=numb1;
        
     }
     subtraction(numb1) {
        return this.result -=numb1;

     }
     multiply(numb1) {
         return  this.result *=numb1;

     }

     divide(numb1) {
        return  this.result /=numb1;

     }
        giveResult(numb1){
            return this.result +=numb1;
        }

     getResult() {
         return this.result;
     }
    }
// var calc = new Calculator();
// calc.add(4,5);
// calc.subtraction(5,3);
// calc.multiply(3,5);
// calc.divide(9,3);

// console.log(calc.getResult());