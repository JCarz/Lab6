// class Calculator{
//   constructor(previousOperandTextElement,currentOperandTextElement){
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.clear();
//   }
//   //this gives us a way to set these text elements inside of the Calculator class
//   clear(){
//   this.currentOperand = ''
//   this.operation = undefined
// }
//   delete(){
//     this.currentOperand = this.currentOperand.toString().slice(0,-1)
//   }
//   appendNumber(number){
//     if(number === '.' && this.currentOperand.includes('.')) return
//     this.currentOperand = this.currentOperand.toString() + number.toString()
//   }
//   chooseOperantion(operation){
//     if(this.currentOperand === '') return
//     this.compute()
//     this.operation = operation
//     this.previousOperand = this.currentOperand
//     this.currentOperand = ''
//   }
//   compute(){
//     let computation
//     const prev = parseFloat(this.previousOperand)
//     const current = parseFloat(this.currentOperand)
//     if(isNaN(prev) || isNaN(current)) return
//     switch(this.operation){
//       case '+':
//         computation = prev + current
//         break
//       case '-':
//         computation = prev - current
//         break
//       case '*':
//         computation = prev * current
//         break
//       case '/':
//         computation = prev / current
//         break
//       default:
//         return
//     }
//     this.currentOperand = computation
//     this.operation = undefined
//     this.previousOperand = ''
//   }
//   getDisplayNumber(number){
//     const stringNumber = number.toString()
//     const integerDigits = parseFloat(stringNumber.split('.')[0])
//     const decimalDigits = (stringNumber.split('.')[1])
//     let integerDisplay;
//     if(isNaN(integerDigits)){
//       integerDisplay = ''
//     } else{
//       integerDisplay = integerDigits.toLocaleString('en',{maxinmumFractionDigits: 0})
//     }
//     if(decimalDigits != null){
//       return`${integerDisplay}.${decimalDigits}`
//     }else{
//       return integerDisplay
//     }
//   }
//   updateDisplay(){
//     this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
//     if(this.operation != null){
//       this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//     }
//   }
// }




// const numberButtons = document.querySelectorAll('[col btn btn-light]')
// const operationButtons = document.querySelectorAll('[col btn btn-secondary]')
// const equalsButton = document.querySelector('[col-9 btn btn-primary]')
// const clearButton = document.querySelector('[col btn btn-info]')
// const currentOperandTextElement = document.querySelector('[form-control]')
// const calculator = new Calculator (currentOperandTextElement)


// numberButtons.forEach(button => {
//   button.addEventListener('click',() => {
//     calculator.appendNumber(button.innerText)
//     calculator.updateDisplay()
//   })
// })

// operationButtons.forEach(button => {
//   button.addEventListener('click',() =>{
//     calculator.chooseOperantion(button.innerText)
//     calculator.updateDisplay()
//   })
// })

// equalsButton.addEventListener('click',button =>{
//   calculator.compute()
//   calculator.updateDisplay()
// })

// clearButton.addEventListener('click',button =>{
//   calculator.delete()
//   calculator.updateDisplay()
function calculate (){
oneButton.eval()




}
//eval(document.querySelector('[name=equation]').value)

const oneButton = document.querySelector('input[value="1"]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
} 
const twoButton = document.querySelector('input[value="2"]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
}
const threeButton = document.querySelector('input[value="3"]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
}
 const fourButton = document.querySelector('input[value="4"]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
}
const fiveButton = document.querySelector('input[value="5"]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
}
const sixButton = document.querySelector('input[value="6"]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
}
const sevenButton = document.querySelector('input[value="7"]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
}
const eightButton = document.querySelector('input[value="8"]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
}
const nineButton = document.querySelector('input[value="9"]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
}
const zeroButton = document.querySelector('input[value="0"]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
}
const decButton = document.querySelector('input[value="."]').onclick = function(){
  document.querySelector('[name=equation]').value += this.value;
}
