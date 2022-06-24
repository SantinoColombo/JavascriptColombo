let numeroDeElementos = prompt("Cuantos elementos tienes?");
let totalPagar = 0;
if (numeroDeElementos == "") {
    alert("Por favor pon una cantidad valida")
}


for (let i = 1; i <= numeroDeElementos; i++) {
    let nombreDelElemento = prompt("Nombre de tu elemento " + i)

    if (nombreDelElemento == "") {
        alert("Pon un nombre valido")

    }
    let precioDelElemento = parseFloat(prompt("Precio de tu elemento " + i));
    if (precioDelElemento == "") {
        alert("Por favor pon un precio valido")
    }
    totalPagar += precioDelElemento;
}
alert(`El precio total a pagar es $${totalPagar}`)