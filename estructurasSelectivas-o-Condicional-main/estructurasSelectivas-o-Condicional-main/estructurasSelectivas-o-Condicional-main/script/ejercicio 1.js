//Elabore un algoritmo que permita averiguar cuál es el nombre del mayor de 2
//hermanos no gemelos. Como datos de entrada se tiene el nombre y la edad de las 2
//personas.
//analisis del problema
let edadh1, edadh2, nombreh1, nombreh2;

edadh1 = Number(prompt("ingrese la edad del hermano 1"))
edadh1 = Number(prompt("ingrese la edad del hermano 2"))
nombreh1 = Number(prompt("ingrese el nombre del hermano 1"))
nombreh1 = Number(prompt("ingrese el nombre del hermano 2"))

if(edadh1>edadh2){
    alert("el hermano mayor es" + nombreh1)
}else{
    alert("el hermano mayor es" + nombreh2)
}