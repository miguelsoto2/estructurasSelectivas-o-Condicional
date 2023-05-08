//Crear un algoritmo que le permita al usuario ingresar los datos de dos buses así: Placa,
//El número de pasajeros transportados y el valor del pasaje, y el computador le
//muestre la placa del bus que más dinero recogió.

let pla1, pla2, np1, np2, vp1, vp2, t1, t2

pla1= prompt('Ingrese la placa del bus 1')
pla2= prompt('Ingrese la placa del bus 2')
np1=Number(prompt('Ingrese el numero de pasajeros transportados en el bus 1'))
np2=Number(prompt('Ingrese el numero de pasajeros transportados en el bus 2'))
vp1=Number(prompt('Ingrese el costo de cada pasaje del bus 1'))
vp2=Number(prompt('Ingrese el costo de cada pasaje del bus 2'))

t1= vp1*np2
t2= vp2*np2

if (t1>t2){
    alert('El bus con placa '+pla1+ 'recogio mas dinero,con un total de'+ t1)
} else{
    alert('El bus con placa' +pla2+ 'recogio mas dinero,con un total de' +t2)
}


  
