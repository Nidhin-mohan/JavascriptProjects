
class Calculator {
   constructor(previousData,newData){
    this.previousData = previousData;
    this.newData = newData;
    this.clear();

   }

   clear() {
    this.currentOperand = '';
    this.previousOperand = "";
    this.operation = undefined;
   }

   delete() {
    this.currentOperand = this.currentOperand.toString().slice(0,-1);
   }


    appendNumber(number){
        // checking if the number is '.' and currentOperent already have a "." then it wont add any '.'  .
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand =  this.currentOperand.toString() + number.toString();

   }

   chooseOperation(operation){
    // checking if the currentOperant is empty or not
    if(this.currentOperand === '')return;
    if (this.previousOperand !== ''){
        this.compute();
    }
    this.operation = operation
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';

   }

   compute(){
     let result;
     //The parseFloat() function parses a string argument and returns a floating point number.

     const prev = parseFloat(this.previousOperand);
     const current = parseFloat(this.currentOperand);

     if (isNaN(prev) || isNaN(current)) return;

     switch (this.operation) {
       case "+":
         result = prev + current;
         break;

       case "-":
         result = prev - current;
         break;

       case "x":
         result = prev * current;
         break;

       case "/":
         result = prev / current;
         break;
       default:
         return;
     }

     this.currentOperand = result;
     this.operation = undefined;
     this.previousOperand = "";
   }

   updateDisplay(){
    this.newData.innerText = this.currentOperand;
    if(this.operation != null){
      this.previousData.innerText = `${this.previousOperand} ${this.operation}`;


    }
   }
}



// numbers  and operations buttons
const operationbtn = document.querySelectorAll(".operation");
const numberbtn = document.querySelectorAll(".number");
const allClearbtn = document.querySelector(".all-clear");
const clearbtn = document.querySelector(".last-entity-clear");
const equalbtn = document.querySelector(".equal");

// display
const previousData = document.querySelector(".display-1");
const newData = document.querySelector(".display-2");


const calculator = new Calculator(previousData,newData);

numberbtn.forEach(btn => btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay()
}));

operationbtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    calculator.chooseOperation(btn.innerText);
    calculator.updateDisplay();
  })
);

equalbtn.addEventListener("click", btn => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearbtn.addEventListener("click", (btn) => {
  calculator.clear();
  calculator.updateDisplay();
});

clearbtn.addEventListener("click", (btn) => {
  calculator.delete();
  calculator.updateDisplay();
});



