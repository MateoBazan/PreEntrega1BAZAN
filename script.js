//ACTIVIDA DE CLASE 1 
/* const actualYear = 2023;
const naciminetoYear = "Tu año de nacimineto es "

let nombreUser= prompt("Dime tu nombre");
console.log("Bienvenido " + nombreUser)

// Utilizando el PARSEINT
bornYear = parseInt(prompt("Cual es tu Edad?"))
console.log(actualYear - bornYear) */

// ACTIVIDAD DE CLASE 2
/* let pais= prompt("De que pais eres?").toLowerCase()

if ((pais == "croacia") || (pais == "francia") || (pais == "marruecos")){
    alert("Tu pais fue semifinalsita del mundial")
}else if(pais == "argentina"){ 
    let scalo= prompt("Tu seleccion era la Scaloneta?").toLowerCase()
    if(scalo == "si")
    alert("Tu Seleccion es CAMPEONA DEL MUNDO")
    else(scalo != "si")
    alert("Tu Seleccion perdio la final del mundo")
}else if (pais == "chile"){
    alert("Tu pais ni clasifico al mundial jajaja")
}else{
    alert("Tu pais no llego a la final del mundo")
} */


// SEGUNDA ACTIVIDAD

/* let notaPrimera = parseInt(prompt("Cual es tu primera Nota?"))

if (notaPrimera >= 4){
    let notaSegunda = parseInt(prompt("Cual es tu segunda Nota?"))
    if (notaSegunda >= 4){
        let notaTercera = parseInt(prompt("Cual es tu Tercera Nota?"))
        if (notaTercera >= 4)
        alert ("Tu nota Final es: " +(notaPrimera + notaSegunda + notaTercera)/3)
    }
}else{
    alert ("Desaprobaste la materia")
} */

// ACTIVIDAD CLASE 3 

/* let sillasTotales = 20
let mesasTotales = 4
let sillasReservadas = 0
 */

/* for (let i = 0; i < 4; i++) {
    let nombreUser = prompt("A nombre de quien es la reserva").toLowerCase()
    let cantidadReservada = parseInt(prompt("Cuantos invitados son"))
    sillasReservadas += cantidadReservada

    if (nombreUser == "mateo") {
        alert(`Bienvenido ${nombreUser} tu reserva para ${sillasReservadas} personas ya esta realizada para la mesa VIP`)
        continue;
    }
    if (sillasReservadas <= sillasTotales) {
        alert(`La reserva a nombre de ${nombreUser} de ${sillasReservadas} comensales esta aceptada para la mesa ${i + 1}`)
    }
    if (sillasReservadas >= sillasTotales) {
        alert(`Ya no queda mas lugar.`)
        break;
    }
    alert("Para confirmar la reserva transfiera a este CBU 11111")
} */


/* let nombre = ""

do {
    nombreUser = prompt("A nombre de quien es la reserva").toLowerCase()
    if (nombreUser != "juan") {
        let cantidadReservada = parseInt(prompt("Cuantos invitados son"))
        alert(`Para realizar la reserva a nombre de ${nombreUser} para ${cantidadReservada} personas, debera transferir a CBU 2222`)
    }
}while (nombreUser != "juan")
alert("No se admiten Juanes") */



let theStock = "1. Remera IWNL \n 2. Short IWNL \n 3. Medias Mid Low \n 4. Piluso IWNL Negro \n 0. Ir al Carrito"
let nombreComprador = prompt("Ingrese su nombre")
let opcion = parseInt(prompt(`Bienvenido a IWNL Shop ${nombreComprador}, estos son nuestos productos \n ${theStock}`))

let itemCarrito = ""
let precioCarrito = 0;

// Funcion para el acortar el codigo del carrito
function agrCarrito (producto, precio){
    alert(`Se añadio ${producto} al carrito.`)
    itemCarrito += `${producto} x1 \n`
    precioCarrito += precio
}

// WHILE Y SWITCH (Mostrar el catalogo y poder añadir productos al carrito)
while (opcion != 0) {
    switch (opcion) {
        case 1:
            agrCarrito ("Remera IWNL", 4200)
            break;
        case 2:
            agrCarrito ("Short IWNL", 2000)
            break;
        case 3:
            agrCarrito ("Medias Mid Low", 300)
            break;
        case 4:
            agrCarrito ("Piluso Negro", 1200)
            break;
        default:
            alert("Ingresa una opcion valida")
    }
    opcion = parseInt(prompt(`${nombreComprador},quiere sumar algun producto?, estos son nuestos productos \n ${theStock}`))
}

alert (`En el Carrito usted tiene ${itemCarrito} con un valor total de ${precioCarrito}`)

// SI EL PAGO ES EN EFECTIVO SE HARA DESCUENTO 
if (precioCarrito >= 7000){
    let efectivo = prompt(`${nombreComprador} el total de su compra es de ${precioCarrito}, desea pagar con efectivo?, recuerde que pagando en efectivo accede a un 15% de descuento`).toLowerCase()
    if(efectivo == "si" || efectivo == "sí"){
        let efectivo = precioCarrito * 0.85; 
        alert(`El total te quedaria en ${efectivo}`)
    }else{
        alert(`Okey ${nombreComprador} el total de su compra es de ${precioCarrito}`)
    }
}













