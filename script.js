// Array para almacenar los artículos agregados al carrito
let listaCompra = [];
// Variable para almacenar el precio total
let precioTotal = 0;

const agregarArticuloBtn = document.getElementById("agregarArticuloBtn");
agregarArticuloBtn.addEventListener("click", () => {
    // Llamada a la función agregarArticulo() cuando se haga clic en el botón
    agregarArticulo();
});

// Función para reiniciar la compra
function reiniciarCompra() {
    // Reiniciar el arreglo y el precio total
    listaCompra = [];
    precioTotal = 0;

    // Limpiar la tabla de la lista de compra
    const listaCompraTable = document.getElementById("listaCompra");
    listaCompraTable.innerHTML = "";

    // Reiniciar el precio total en el DOM
    document.getElementById("precioTotal").textContent = "Precio Total: $0";

    // Limpiar el mensaje final
    document.getElementById("mensajeFinal").textContent = "";

    // Reiniciar los valores de los inputs
    document.getElementById("nombreArticulo").value = "";
    document.getElementById("cantidadArticulo").value = "";
    document.getElementById("precioArticulo").value = "";

    // Reiniciar el método de pago seleccionado
    const metodoPagoInputs = document.getElementsByName("metodoPago");
    metodoPagoInputs.forEach((input) => {
        input.checked = false;
    });

    // Ocultar las opciones de cuotas
    document.getElementById("cuotasOptions").style.display = "none";

    // Reiniciar el select de cuotas
    const cuotasSelect = document.getElementById("cuotasSelect");
    cuotasSelect.selectedIndex = 0;

    // Limpiar el Local Storage
    localStorage.removeItem("listaCompra");
    // Reiniciar la variable compraFinalizada a false
    compraFinalizada = false;
}

// Función para Agregar al Carrito
function agregarArticulo() {
    // Obtener valores de los inputs
    const nombreArticulo = document.getElementById("nombreArticulo").value;
    const cantidadArticulo = parseInt(document.getElementById("cantidadArticulo").value);
    const precioArticulo = parseInt(document.getElementById("precioArticulo").value);
    // Verificar si la compra ya ha sido finalizada
    if (compraFinalizada) {
        return;
    }
 // Validar que los campos no estén vacíos y sean números válidos
    if (!nombreArticulo || isNaN(cantidadArticulo) || isNaN(precioArticulo)) {
        // Mostrar mensaje de error con SweetAlert (puedes modificarlo según tu preferencia)
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, completa todos los campos correctamente.",
        });
        return;
    }

    const articulo = {
        nombre: nombreArticulo,
        cantidad: cantidadArticulo,
        precio: precioArticulo * cantidadArticulo,
    };

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

    // Guardar el progreso en el Local Storage
    guardarProgresoEnLocalStorage();
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

    Toastify({
        text: "Artículo eliminado",
        backgroundColor: "red",
    }).showToast();

    // Guardar el progreso en el Local Storage
    guardarProgresoEnLocalStorage();
}

// Variable para almacenar el botón de confirmar
let confirmarButton = null;
// Variable para verificar si la compra ya ha sido finalizada
let compraFinalizada = false;
// Agregar el listener para el botón "Finalizar compra"
const finalizarCompraBtn = document.getElementById("finalizarCompraBtn");
finalizarCompraBtn.addEventListener("click", () => {
    // Llamada a la función finalizarCompra() cuando se haga clic en el botón
    finalizarCompra();
});

function finalizarCompra() {
    // Evitar finalizar la compra si ya ha sido finalizada
    if (compraFinalizada) {
        return;
    }

    // Crear inputs para el método de pago y la cantidad de cuotas
    const metodoPagoInputs = document.getElementsByName("metodoPago");
    const cuotasSelect = document.getElementById("cuotasSelect");

    // Si el botón de confirmar ya está en el DOM, no es necesario crearlo nuevamente
    if (confirmarButton) {
        return;
    }

    // Crear el botón "Confirmar"
    confirmarButton = document.createElement("button");
    confirmarButton.textContent = "Confirmar";

    // Función para procesar la compra al hacer clic en el botón
    confirmarButton.onclick = () => {
        const metodoPago = document.querySelector('input[name="metodoPago"]:checked').value;

        if (metodoPago === "tarjeta") {
            const cuotas = parseInt(cuotasSelect.value);
            let precioFinal = precioTotal;

            if (cuotas === 3 || cuotas === 6) {
                precioFinal += precioTotal * 0.15;
            }
            const montoCuota = precioFinal / cuotas;

            // Mostrar alerta con SweetAlert
            Swal.fire({
                icon: "success",
                title: "Compra finalizada",
                html: `El total a pagar es de $${precioFinal} en ${cuotas} cuotas.<br>Monto de cada cuota: $${montoCuota.toFixed(2)}`,
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonText: "Restaurar carrito",
            }).then((result) => {
                if (result.isConfirmed) {
                    // Vaciar el carrito
                    reiniciarCompra();
                }
            });
        } else if (metodoPago === "efectivo") {
            // Mostrar alerta con SweetAlert
            Swal.fire({
                icon: "success",
                title: "Compra finalizada",
                html: `El total a pagar es de $${precioTotal} en efectivo.`,
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonText: "Restaurar carrito",
            }).then((result) => {
                if (result.isConfirmed) {
                    // Vaciar el carrito
                    reiniciarCompra();
                }
            });
        }
    };

    // Agregar el botón al contenedor
    document.getElementById("acciones").appendChild(confirmarButton);

    // Mostrar las opciones de cuotas si se selecciona el método de pago tarjeta
    metodoPagoInputs.forEach((input) => {
        input.addEventListener("change", function () {
            if (this.value === "tarjeta") {
                document.getElementById("cuotasOptions").style.display = "block";
            } else {
                document.getElementById("cuotasOptions").style.display = "none";
            }
        });
    });

    // Marcar la compra como finalizada para evitar agregar más artículos al carrito
    compraFinalizada = true;
}



// Obtener el precio del dólar blue desde la API
function obtenerPrecioDolarBlue() {
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then(response => response.json())
        .then(data => {
            const precioDolarBlue = data.blue.value_avg;

            // Mostrar el precio del dólar blue en el DOM
            const contenedorDolarBlue = document.getElementById('precioDolarBlue');
            contenedorDolarBlue.textContent = `Precio Dólar Blue HOY: $${precioDolarBlue}`;
        })
        .catch(error => {
            console.log('Error al obtener el precio del dólar blue:', error);
        });
}

obtenerPrecioDolarBlue();

// Función para guardar el progreso en el Local Storage
function guardarProgresoEnLocalStorage() {
    const progreso = {
        listaCompra: listaCompra,
        precioTotal: precioTotal,
    };

    localStorage.setItem("listaCompra", JSON.stringify(progreso));
}

// Función para cargar el progreso almacenado en el Local Storage
function cargarProgresoDesdeLocalStorage() {
    const progresoJSON = localStorage.getItem("listaCompra");

    if (progresoJSON !== null) {
        const progreso = JSON.parse(progresoJSON);
        listaCompra = progreso.listaCompra;
        precioTotal = progreso.precioTotal;

        // Mostrar los artículos en la tabla
        const listaCompraTable = document.getElementById("listaCompra");

        listaCompra.forEach((articulo) => {
            const row = document.createElement("tr");
            const nombreCell = document.createElement("td");
            const cantidadCell = document.createElement("td");
            const precioUnitarioCell = document.createElement("td");
            const precioTotalCell = document.createElement("td");
            const eliminarCell = document.createElement("td");
            const eliminarButton = document.createElement("button");

            nombreCell.textContent = articulo.nombre;
            cantidadCell.textContent = articulo.cantidad;
            precioUnitarioCell.textContent = articulo.precio / articulo.cantidad;
            precioTotalCell.textContent = articulo.precio;

            eliminarButton.textContent = "Eliminar";
            eliminarButton.onclick = () => {
                eliminarArticulo(row, articulo.precio);
            };

            eliminarCell.appendChild(eliminarButton);

            row.appendChild(nombreCell);
            row.appendChild(cantidadCell);
            row.appendChild(precioUnitarioCell);
            row.appendChild(precioTotalCell);
            row.appendChild(eliminarCell);

            listaCompraTable.appendChild(row);
        });

        // Mostrar el precio total
        document.getElementById("precioTotal").textContent = `Precio Total: $${precioTotal}`;
    }
} 




