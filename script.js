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
        let encontrado = false; 

        for (let i=0; i < this.listaProductos.length; i++) {
            if (this.listaProductos[i].nombre === nombre) {
                this.listaProductos[i].aumentarCantidad();
                encontrado = true;
                break;
            }
        }
            if (!encontrado) {
                const nuevoProducto = new producto (nombre, precio);
                this.listaProductos.push(nuevoProducto);
            }
            this.escribirCarrito();
    }

    calcularTotal() {
        let total = 0;
        for(let i = 0; i < this.listaProductos.length; i++) total+=this.listaProductos[i].obtenerTotal();

        return total;
    }

    escribirCarrito() {
        console.log(this.listaProductos);

        const tbody = document.getElementById("body")
        tbody.innerHTML = "";
        
        for (let i = 0; i < this.listaProductos.length; i++) {
            const prod = this.listaProductos[i];
            const fila = document.createElement("tr");
            
            const nombreCelda = document.createElement("td");
            nombreCelda.innerText = prod.nombre; // Asignación del nombre

            const cantidadCelda = document.createElement("td");
            cantidadCelda.innerText = prod.cantidad;
            
            const totalCelda = document.createElement("td");
            totalCelda.innerText = prod.obtenerTotal().toFixed(2) + "€";

            fila.appendChild(nombreCelda);
            fila.appendChild(cantidadCelda);
            fila.appendChild(totalCelda);

            tbody.appendChild(fila);
        }

        // El total se pone al final, fuera del bucle
        const celdaSI = document.getElementById("pie");
        celdaSI.innerText = this.calcularTotal().toFixed(2) + "€";
    }
}

    /** * //Aquí se crean los productos y se les asigna un precio utilizando dataset
    document.getElementById("botonPan").dataset.nombre = "Pan";
    document.getElementById("botonPan").dataset.precio = 1.50;

    document.getElementById("botonLeche").dataset.nombre = "Leche";
    document.getElementById("botonLeche").dataset.precio = 0.99;

    document.getElementById("botonHuevos").dataset.nombre = "Huevos";
    document.getElementById("botonHuevos").dataset.precio = 2.50;

    document.getElementById("botonManzana").dataset.nombre = "Manzana";
    document.getElementById("botonManzana").dataset.precio = 0.75;   
    **/   
    
    //CONFIGURACIÓN DEL DOM

const miCarrito = new carrito();

// La famosa array de arrays 🔥
const datosProductos = [
    ["Leche", 0.99],
    ["Pan", 1.50],
    ["Huevos", 2.50],
    ["Manzana", 0.75]
];

const idsBotones = ["botonLeche", "botonPan", "botonHuevos", "botonManzana"];

for (let i = 0; i < idsBotones.length; i++) {
    const boton = document.getElementById(idsBotones[i]);

    boton.dataset.nombre = datosProductos[i][0];
    boton.dataset.precio = datosProductos[i][1];

    boton.addEventListener('click', (e) => {
        const nombre = e.target.dataset.nombre;
        const precio = Number(e.target.dataset.precio);
        miCarrito.agregarProducto(nombre, precio);
    })
}