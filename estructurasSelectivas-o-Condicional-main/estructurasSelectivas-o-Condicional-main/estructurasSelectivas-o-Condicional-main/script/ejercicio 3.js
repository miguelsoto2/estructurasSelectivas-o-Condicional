//Elabore un algoritmo que lea el nombre, el salario bruto, las deducciones y las
//bonificaciones de dos trabajadores, e imprima (escriba un mensaje) el nombre del que
//más salario neto tiene.
//Análisis del problema:

let nombre1, nombre2;
let deducciones1, bonificaciones1, bruto1, neto1;
let deducciones2, bonificaciones2, bruto2, neto2;

//usuario 1
nombre1 = prompt("ingrese el nombre del trabajo")
deducciones1 = Number(prompt("ingrese las deducciones del usuario 1"))
bonificaciones1 = Number(prompt("ingrese las bonificaciones del usuario 1"))
bruto1 = Number(prompt("ingrese el salario usuario 1"))

//usuario 2
nombre2 = prompt("ingrese el nombre del trabajo")
deducciones2 = Number(prompt("ingrese las deducciones del usuario 2"))
bonificaciones2 = Number(prompt("ingrese las bonificaciones del usuario 2"))
bruto2 = Number(prompt("ingrese el salario usuario 2"))

neto1 = (bruto1-deducciones1)+ bonificaciones1
neto2 = (bruto2-deducciones2)+ bonificaciones2

if(neto1>neto2){
alert("el empleado"+ nombre1 + "tiene salario mas alto"+neto1)
}else{
    alert("el empleado"+ nombre2 + "tiene salario mas alto"+neto2)
}