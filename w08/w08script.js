class Calculator
{
    constructor(previousOperandTextElement,currentOperandTextElement)
    {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear()
    {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete()
    {
        this.currentOperand=this.currentOperand.toString.slice(0,-1)
    }
    appendNumber(number)
    {
        if(number ==='.' && this.currentOperand.includes("."))return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation)
    {   
        if(this.currentOperand === '')return
        if(this.previousOperand !== '')
        {
            this.compute()
        }
        this.operation=operation
        this.previousOperand=this.currentOperand
        this.currentOperand=''
    }
    compute()
    {
        let computation
        const prey = parseFloat(this.previousOperand)
        const current = parsefloat(this.currentOperand)
        if(isNaN(prey)||isNaN(current)) return
        switch(this.operation)
        {
            case "+":
                computation=prey+current
                break
            case "-":
                computation=prey-current
                break
            case "*":
                computation=prey*current
                break
            case "÷":
                computation=prey/current
                break
            default:
                return
        }
        this.currentOperand=computation
        this.operation=undefined
        this.previousOperand=''
    }
    updateDisplay()
    {
        this.currentOperandTextElement.innerText = this.currentOperand
        if(this.operation !=null)
        {
            this.previousOperandTextElement.innerText=`${this.previousOperand} ${this.operation}`
        }
        else previousOperandTextElement.innerText=''
        
    }
}



const numberButtons=document.querySelectorAll('[data-number]')
const operationButton=document.querySelectorAll('[data-number]')
const equalsButton=document.querySelector('[data-equals]')
const deleteButton=document.querySelector('[data-delete]')
const allClearButton=document.querySelector('[data-all-clear]')
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')

const calculator= new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButton.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click',button=>{
        calculator.compute()
        calculator.updateDisplay()
})

allClearButton.addEventListener('click',button=>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click',button=>{
    calculator.compute()
    calculator.updateDisplay()
})
