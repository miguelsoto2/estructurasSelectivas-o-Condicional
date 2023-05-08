//Elaborar un algoritmo que muestre un mensaje según la edad ingresada; niño (menor
 //de 10 años), preadolescente (entre 10 y 15 años), un adolescente (entre 15 y 18 años),
 //adulto (entre 18 y 50 años), adulto mayor (mayor de 50 años).
//Análisis del problema:
let edad;
edad = Number(prompt("ingrese la edad"))
if(edad<10){
    console.log("la persona es niño")
    alert("la persona es niño")
    document.write("la persona es niño")
}else if(edad>=10 && edad<15){
    console.log("la persona es preadolescente")
    alert("la persona es preadolescente")
    document.write("la persona es preadolescente")
}else if(edad>=15 && edad<18){
    console.log("la persona es adolescente")
    alert("la persona es adolescente")
    document.write("la persona es adolescente")
}else if(edad>=18 && edad<50){
    console.log("la persona es adulta")
    alert("la persona es adulta")
    document.write("la persona es adulta")
}