class producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
    }
    aumentarCantidad(){
        this.cantidad++;
    }
    obtenerTotal(){
        return this.precio * this.cantidad;
    }

}

class carrito {
    constructor() {
        this.id = Math.floor(Math.random() * 500) + 1;
        this.listaProductos = [];
    }
    agregarProducto(nombre, precio) {

    }

    calcularTotal() {
        let total = 0;
        for(let i = 0; i < this.listaProductos.length; i++) total+=this.listaProductos[i].obtenerTotal();

        return total;
    }

    escribirCarrito() {

    }
}

// Aquí se crean los productos y se les asigna un precio utilizando dataset
document.getElementById("botonPan").dataset.nombre = "Pan";
document.getElementById("botonPan").dataset.precio = 1.50;

document.getElementById("botonLeche").dataset.nombre = "Leche";
document.getElementById("botonLeche").dataset.precio = 0.99;

document.getElementById("botonHuevos").dataset.nombre = "Huevos";
document.getElementById("botonHuevos").dataset.precio = 2.50;

document.getElementById("botonManzana").dataset.nombre = "Manzana";
document.getElementById("botonManzana").dataset.precio = 0.75;          

