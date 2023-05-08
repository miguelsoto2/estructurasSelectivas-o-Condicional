//Crear un algoritmo que le permita al usuario ingresar el nombre de un estudiante y las
//4 notas que obtuvo en una materia y el computador le imprima el nombre, la nota
//definitiva y un mensaje que le indique si “GANA” O “PIERDE”. (LAS NOTAS SON DE 0 A
//5.0, GANA SI LA NOTA ES MAYOR O IGUAL A 3.0 Y PIERDE SI ES MENOR A 3.0)
//Necesitamos crear una variable Nombre para capturar el nombre del estudiante.
//Necesitamos 4 variables de tipo real para las respectivas notas.
//Por último, creamos un variable para la nota definitiva.

let nom, not1, not2, not3, not4, notf

nom=prompt('Ingrese el nombre del estudiante')
not1=Number(prompt('Ingrese la primera nota'))
not2=Number(prompt('Ingrese la primera nota'))
not3=Number(prompt('Ingrese la primera nota'))
not4=Number(prompt('Ingrese la primera nota'))

notf=(not1+not2+not3+not4)/4

if(notf>=3) {
    alert(nom+ 'Tiene como nota definitiva ' +notf+ 'asi gana la materia')
} else if(notf<3) {
    alert(nom+ 'Tiene como nota definitiva' +notf+ 'asi que pierde la materia')
}