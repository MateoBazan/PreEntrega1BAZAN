// Tercera Pre Entrega

 // Array para almacenar los artículos agregados al carrito
let listaCompra = [];
// Variable para almacenar el precio total
let precioTotal = 0; 

// Funcion para Agregar al Carrito
function agregarArticulo() {

// Obtener valores de los inputs
    const nombreArticulo = document.getElementById("nombreArticulo").value;
    const cantidadArticulo = parseInt(document.getElementById("cantidadArticulo").value);
    const precioArticulo = parseInt(document.getElementById("precioArticulo").value);


    const articulo = {
        nombre: nombreArticulo,
        cantidad: cantidadArticulo,
        precio: precioArticulo * cantidadArticulo,
    }

    listaCompra.push(articulo); 
// Limpiar Inputs
    document.getElementById("nombreArticulo").value = ""; 
    document.getElementById("cantidadArticulo").value = ""; 
    document.getElementById("precioArticulo").value = ""; 

// Crear elementos de la tabla para mostrar el artículo agregado
    const listaCompraTable = document.getElementById("listaCompra");
    const row = document.createElement("tr");
    const nombreCell = document.createElement("td");
    const cantidadCell = document.createElement("td");
    const precioUnitarioCell = document.createElement("td");
    const precioTotalCell = document.createElement("td");
    const eliminarCell = document.createElement("td");
    const eliminarButton = document.createElement("button");

// Valores de los elementos
    nombreCell.textContent = nombreArticulo;
    cantidadCell.textContent = cantidadArticulo;
    precioUnitarioCell.textContent = precioArticulo;
    precioTotalCell.textContent = precioArticulo * cantidadArticulo;
    eliminarButton.textContent = "Eliminar";

// Función para eliminar el artículo al hacer clic en el botón
    eliminarButton.onclick = () => {
        eliminarArticulo(row, articulo.precio);
    };

    eliminarCell.appendChild(eliminarButton);

// Agregar los elementos a la fila de la tabla
    row.appendChild(nombreCell);
    row.appendChild(cantidadCell);
    row.appendChild(precioUnitarioCell);
    row.appendChild(precioTotalCell);
    row.appendChild(eliminarCell);

// Agregar la fila a la tabla
    listaCompraTable.appendChild(row);

// Actualizar el precio total
    precioTotal += articulo.precio;
    document.getElementById("precioTotal").textContent = `Precio Total: $${precioTotal}`;
}

function eliminarArticulo(row, precio) {
// Obtener el índice de la fila en la tabla
    const index = Array.from(row.parentNode.children).indexOf(row);
// Eliminar el artículo del carrito
    listaCompra.splice(index, 1);
// Eliminar la fila de la tabla
    row.parentNode.removeChild(row);

// Actualizar el precio total
    precioTotal -= precio;
    document.getElementById("precioTotal").textContent = `Precio Total: $${precioTotal}`;
}

function finalizarCompra() {
// Crear inputs para el método de pago y la cantidad de cuotas
    const metodoPagoInput = document.createElement("input");
    metodoPagoInput.type = "text";
    metodoPagoInput.placeholder = "Método de pago (Efectivo o Tarjeta)";
    const cuotasInput = document.createElement("input");
    cuotasInput.type = "number";
    cuotasInput.placeholder = "Cantidad de cuotas (1, 3 o 6)";
    const confirmarButton = document.createElement("button");
    confirmarButton.textContent = "Confirmar";

// Función para procesar la compra al hacer clic en el botón
    confirmarButton.onclick = () => {
        const metodoPago = metodoPagoInput.value.toLowerCase();

        if (metodoPago === "tarjeta") {
            const cuotas = parseInt(cuotasInput.value);
            let precioFinal = precioTotal;

            if (cuotas === 3 || cuotas === 6) {
                precioFinal += precioTotal * 0.15;
            }

            alert(`El total a pagar es de $${precioFinal} en ${cuotas} cuotas.`);
        } else if (metodoPago === "efectivo") {
            alert(`El total a pagar es de $${precioTotal} en efectivo.`);
        } else {
            alert("Método de pago inválido.");
        }
    };

// Agregar los inputs y el botón al contenedor
    document.getElementById("acciones").appendChild(metodoPagoInput);
    document.getElementById("acciones").appendChild(cuotasInput);
    document.getElementById("acciones").appendChild(confirmarButton);
}