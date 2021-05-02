const apple = document.getElementById('apple');
const grape = document.getElementById('grape');
const banana = document.getElementById('banana');
const pear = document.getElementById('pear');

const description = document.querySelector('.description');
const title = document.querySelector('.description h3');
const listOne = document.querySelector('.description ul li:nth-child(1)');
const listTwo = document.querySelector('.description ul li:nth-child(2)');
const listThree = document.querySelector('.description ul li:nth-child(3)');

function Fruta(nombre, precio, estado, color) {
    this.nombre = nombre
    this.precio = precio
    this.estado = estado
    this.color = color
}

let manzana = new Fruta('Manzana', '$1.00', 'Estado: Madura', 'Color: Rojo');
let uva = new Fruta('Uva', '$1.50', 'Estado: Verde', 'Color: Morado');
let platano = new Fruta('Plátano', '$2.00', 'Estado: Verde', 'Color: Amarillo');
let pera = new Fruta('Pera', '$3.50', 'Estado: Madura', 'Color: Verde');

Fruta.prototype.printDescription = function () {
    title.innerHTML = this.nombre;
    listOne.innerHTML = this.precio;
    listTwo.innerHTML = this.estado;
    listThree.innerHTML = this.color;
    description.style.display = "block";
}

apple.addEventListener( 'click', () => manzana.printDescription() );

grape.addEventListener( 'click', () => uva.printDescription() );

banana.addEventListener('click', () => platano.printDescription() );

pear.addEventListener( 'click', () => pera.printDescription() );