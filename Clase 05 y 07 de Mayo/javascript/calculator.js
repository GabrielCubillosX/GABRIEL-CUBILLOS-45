console.log("logica establecida")
const firstInput = document.getElementById("firstNumber")
const secondInput = document.getElementById("secondNumber")
const mathSymbol = document.getElementById("Operaciones")
const result = document.getElementById("result")

function calculate(a,b){
    if(mathSymbol.value=="+"){
    result.innerHTML= parseInt(a.value)+parseInt(b.value)
}   else if(mathSymbol.value== "-"){
    result.innerHTML= parseInt(a.value)-parseInt(b.value)
}   else if (mathSymbol.value == "*"){
    result.innerHTML= parseInt(a.value)*parseInt(b.value)
}   else if (mathSymbol.value== "/"){
    result.innerHTML= parseInt(a.value)/parseInt(b.value)
    
} else (alert("El Operador o la Operacion Ingresado Es Invalido "))
}