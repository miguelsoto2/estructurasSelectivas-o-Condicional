7. //Elaborar un algoritmo que le permita al usuario leer 3 número diferentes entre sí y el
//computador le imprima el mayor de ellos.
//Declarar.

let num1, num2, num3;

num1=Number(prompt('Ingrese el primer numero'))
num2=Number(prompt('Ingrese el segundo numero'))
num3=Number(prompt('Ingrese el tercer numero'))

if(num1>num2 && num1>num3) {
    alert('El numero mayor es' +num1)
} else if(num2>num1 && num2>num3) {
    alert('El numero mayor es' +num2)
} else if(num3>num1 && num3>num2) {
    alert('El numero mayor es' +num3)
}