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



/* let theStock = "1. Remera IWNL \n 2. Short IWNL \n 3. Medias Mid Low \n 4. Piluso IWNL Negro \n 0. Ir al Carrito"
let nombreComprador = prompt("Ingrese su nombre")
let opcion = parseInt(prompt(`Bienvenido a IWNL Shop ${nombreComprador}, estos son nuestos productos \n ${theStock}`))

let itemCarrito = ""
let precioCarrito = 0;

// Funcion para el acortar el codigo del carrito
function agrCarrito(producto, precio) {
    alert(`Se añadio ${producto} al carrito.`)
    itemCarrito += `${producto} x1 \n`
    precioCarrito += precio
}

// WHILE Y SWITCH (Mostrar el catalogo y poder añadir productos al carrito)
while (opcion != 0) {
    switch (opcion) {
        case 1:
            agrCarrito("Remera IWNL", 4200)
            break;
        case 2:
            agrCarrito("Short IWNL", 2000)
            break;
        case 3:
            agrCarrito("Medias Mid Low", 300)
            break;
        case 4:
            agrCarrito("Piluso Negro", 1200)
            break;
        default:
            alert("Ingresa una opcion valida")
    }
    opcion = parseInt(prompt(`${nombreComprador},quiere sumar algun producto?, estos son nuestos productos \n ${theStock}`))
}

alert(`En el Carrito usted tiene ${itemCarrito} con un valor total de ${precioCarrito}`)

// SI EL PAGO ES EN EFECTIVO SE HARA DESCUENTO 
if (precioCarrito >= 7000) {
    let efectivo = prompt(`${nombreComprador} el total de su compra es de ${precioCarrito}, desea pagar con efectivo?, recuerde que pagando en efectivo accede a un 15% de descuento`).toLowerCase()
    if (efectivo == "si" || efectivo == "sí") {
        let efectivo = precioCarrito * 0.85;
        alert(`El total te quedaria en ${efectivo}`)
    } else {
        alert(`Okey ${nombreComprador} el total de su compra es de ${precioCarrito}`)
    }
} */


// NUEVO PROYECTO -- LISTA DE COMPRAS SUPER

/* let precioTotal = 0

const productos = [""]
//productos.join(", ")

let agregarProducto = prompt("Bienvenido a Super, que elemento desea agregar?").toLowerCase()
let precioProducto = parseInt(prompt("Que valor tiene el producto recien agregado?"))

while (agregarProducto !== "finalizar") {
    if (agregarProducto !== "") {
        alert(`Se añadio ${agregarProducto} por $${precioProducto}`)
        productos.push(agregarProducto)
        precioTotal += precioProducto
    }
    agregarProducto = prompt("Que otro producto desea llevar. 0. Finalizar compra").toLowerCase()
    
    if (agregarProducto == "finalizar"){
        break;
    }
    precioProducto = parseInt(prompt("¿Qué valor tiene el producto recién agregado?"));
}
    alert(`En el carrito usted tiene ${productos.join(", ")} con un valor total de ${precioTotal}`)

if (precioTotal >= 10000) {
    let cine2x1 = prompt(`Su total a pagar es ${precioTotal}, pagando $500 pesos mas te llevas un 2x1 en el CINE. Desea pagar $500?`).toLowerCase()
    if (cine2x1 == "si") {
        alert("Genial, aqui esta su codigo del 2X1, 12345")
    } else {
        alert(`Su total a pagar es ${precioTotal}`)
    }
} 
 */

// Clase 07 FUNCIONES DE ORDEN SUPERIOR I
/* const ESTUDIANTES = [
    {nombre:"Martín Marquesi", comision:54925, nota:10},
    {nombre:"Luis Luisillo", comision:54925, nota:3},
    {nombre:"Perico Pereyra", comision:54925, nota:8},
    {nombre:"Romina Peralta", comision:53000, nota:8}
]

let promedioClase = ESTUDIANTES.reduce((acumulador, elemento) => {
    if (elemento.comision == 54925){
        return acumulador += elemento.nota
    }else {
        return acumulador
    }
}, 0)

let clase54925 = promedioClase/3
console.log (clase54925) */


// Pre ETREGA 2 

/* const listaCompra = []

//FUNCIONES AGREGAR CARRITO Y MOSTRAR CARRITO 
function agregarArticulo(nombre, cantidad, precio) {
    const articulo = {
        nombre: nombre,
        cantidad: cantidad,
        precio: precio * cantidad,
    }

    listaCompra.push(articulo)
    alert(`la cantidad de ${cantidad} de ${nombre} a sido añadido al carrito, $${precio}`)
}

function mostrarCarrito() {
    if (listaCompra.length === 0) {
        alert("El carrito esta vacio")
    } else {
        let lista = ""
        let precioTotal = 0

        for (let i = 0; i < listaCompra.length; i++) {
            //alert(`${i+1}. ${listaCompra[i].nombre}. - Cantidad: ${listaCompra[i].cantidad}. - Precio: ${listaCompra[i].precio}`)
            lista += `${listaCompra[i].nombre} - Cantidad: ${listaCompra[i].cantidad} - $${listaCompra[i].precio}\n`
            precioTotal += listaCompra[i].precio
        }

        alert(`${lista}El total es $${precioTotal}`)
    }
}

//INTERACCION CON EL USUARIO (pedir datos)
let continuar = true;
while (continuar != 0) {
    const opcion = parseInt(prompt("Selecciona una opción:\n1. Agregar artículo \n2. Mostrar lista de compra \n3. Finalizar compra"));

    switch (opcion) {
        case 1:
            const nombreArticulo = prompt("Ingrese el nombre del artículo:");
            const cantidadArticulo = parseInt(prompt("Ingrese la cantidad del artículo:"));
            const precioArticulo = parseInt(prompt("Que valor tiene este producto?"))
            agregarArticulo(nombreArticulo, cantidadArticulo, precioArticulo);
            break;
        case 2:
            mostrarCarrito();
            break;
        case 3:
            continuar = 0;
            break;
        default:
            alert("Opción inválida.");
            break;
    }
} alert(`El total a pagar es de $${precioTotal}`) */

//

const listaCompra = [];

//AGREGO FUNCION PARA QUE PUEDA AÑADIR OBJETOS AL CARRITO
function agregarArticulo(nombre, cantidad, precio) {
    const articulo = {
        nombre: nombre,
        cantidad: cantidad,
        precio: precio * cantidad,
    }

    listaCompra.push(articulo);
    alert(`${cantidad} ${nombre} han sido añadida al carrito. $${precio}`);
}

//AGREGO FUNCION PARA QUE PUEDA MOSTRAR EL CARRITO
function mostrarCarrito() {
    if (listaCompra.length === 0) {
        alert("El carrito está vacío");
    } else {
        let lista = "";
        let precioTotal = 0;

        for (let i = 0; i < listaCompra.length; i++) {
            lista += `${listaCompra[i].nombre} - Cantidad: ${listaCompra[i].cantidad} - $${listaCompra[i].precio}\n`;
            precioTotal += listaCompra[i].precio;
        }

        alert(`${lista}El total es $${precioTotal}`);
        return precioTotal;
    }
}

//AGREGO FUNCION PARA QUE PUEDA ELIMINAR OBJETOS DEL CARRITO
function eliminarArticulo(nombre) {
    const indice = listaCompra.findIndex(articulo => articulo.nombre === nombre);

    if (indice !== -1) {
        listaCompra.splice(indice, 1);
        alert(`El artículo "${nombre}" ha sido eliminado del carrito.`);
    } else {
        alert(`El artículo "${nombre}" no se encuentra en el carrito.`);
    }
}


// DOY NUVEVO VALOR AL PRECIO TOTAL YA HABIENDOLO SACADO CON EL RETURN, PARA PODER REUTILIZARLO
let continuar = true;
let precioTotal = 0;

//CICLO WHILE PARA PODER INTERCAMBIAR DATOS CON EL USUARIO
while (continuar !== 0) {
    const opcion = parseInt(prompt("Selecciona una opción:\n1. Agregar artículo\n2. Mostrar lista de compra\n3. Eliminar articulo del carrito\n4. Finalizar compra"));

    switch (opcion) {
        case 1:
            const nombreArticulo = prompt("Ingrese el nombre del artículo:");
            const cantidadArticulo = parseInt(prompt("Ingrese la cantidad del artículo:"));
            const precioArticulo = parseInt(prompt("¿Qué valor tiene este producto?"));
            agregarArticulo(nombreArticulo, cantidadArticulo, precioArticulo);
            break;
        case 2:
            precioTotal = mostrarCarrito();
            break;
        case 3:
            const nombreEliminar = prompt("Ingrese el nombre del artículo a eliminar:");
            eliminarArticulo(nombreEliminar);
            break;
        case 4:
            continuar = 0;
            break;
        default:
            alert("Opción inválida.");
            break;
    }
}

alert(`El total a pagar es de $${precioTotal}`);

//OFRECER 2X1 EN CASO DE QUE EL PRECIO TOTAL SUPERE LOS 10K
if (precioTotal >= 10000) {
    let cine2x1 = prompt(`Su total a pagar es ${precioTotal}, pagando $500 pesos más te llevas un 2x1 en el CINE. ¿Desea pagar $500?`).toLowerCase();

    if (cine2x1 === "si" || cine2x1 === "sí") {
        alert(`Genial, aquí está su código del 2X1: 54925, ahora el total es $${precioTotal + 500}`);
    } else {
        alert(`Su total a pagar es ${precioTotal}`);
    }
}
