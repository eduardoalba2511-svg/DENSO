let carrito = [];

const lista = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");

document.querySelectorAll(".cotizar").forEach(btn => {
    btn.addEventListener("click", (e) => {

        const card = e.target.closest(".card");
        const nombre = card.querySelector("h3").textContent;
        const precioTexto = card.querySelector("p").textContent;
        const precio = parseFloat(precioTexto.replace("$","").replace(",",""));

        const productoExistente = carrito.find(p => p.nombre === nombre);

        if(productoExistente){
            productoExistente.cantidad++;
        } else {
            carrito.push({ nombre, precio, cantidad:1 });
        }

        renderCarrito();
    });
});

function renderCarrito(){
    lista.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio * producto.cantidad;

        lista.innerHTML += `
            <div class="item-carrito">
                <h4>${producto.nombre}</h4>
                <p>$${producto.precio}</p>
                <input type="number" min="1" value="${producto.cantidad}" onchange="cambiarCantidad(${index}, this.value)">
            </div>
        `;
    });

    totalElemento.textContent = total;
}

function cambiarCantidad(index, cantidad){
    carrito[index].cantidad = parseInt(cantidad);
    renderCarrito();
}

document.getElementById("pagar").addEventListener("click", () => {

    if(carrito.length === 0){
        alert("Tu carrito está vacío");
        return;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));


     alert("Gracias por tu compra 🚗");

    window.location.href = "pago.html";
});