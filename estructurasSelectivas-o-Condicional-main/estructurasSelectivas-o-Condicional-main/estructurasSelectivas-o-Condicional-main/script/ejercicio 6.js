6.//Crear un algoritmo que le permita al usuario ingresar el tipo de trabajador (FIJO o
  //TEMPORAL) y con base en esto pueda imprimir el nombre y el salario neto, sabiendo
  //que si es FIJO debe leer el nombre, el número de horas trabajadas, el salario básico
 //hora, el total de deducciones y el total de bonificaciones y si es TEMPORAL solo debe
 //leer el nombre y el número de horas trabajadas; estos trabajadores tienen un salario
//básico hora fijo de $6.000 y no tienen deducciones ni bonificaciones.

let tpt, nom, nh, saln, bon, ded, sal 

tpt=prompt('Ingrese el tipo de trabajador que es (Fijo o Temporal)')

if(tpt=fijo) {
    nom=prompt('ingrese su nombre')
    nh=Number(prompt('Ingrese el numero de horas trabajadas'))
    sal=Number(prompt('Ingrese su salario basico por hora'))
    ded=Number(prompt('Ingrese sus deducciones'))
    bon=Number(prompt('Ingrese sus bonificaciones'))

    saln= sal*nh+bon-ded
    alert(nom+ 'Tiene un salaruio neto de' +saln)
} else if(tpt=temporal) {
    nom=prompt('Ingrese su nombre')
    nh=Number(prompt('Ingrese el numero de horas trabajadas'))

    saln= 6000*nh
    alert(nom+ 'Tiene un salario neto de' +saln)
}