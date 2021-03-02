function mostrar() {}

//variables

let tipo;
let precio;
let marca;
let fabricante;
let cantidadUnidades;
let cantidadProductos;
let flagAlc = 1;
let alcoholMasBarato;
let cantUnALcMasBarato;
let fabAlcMasBarato;

let contA = 0;
let totalA = 0;
let promedioCompraA;
let contB = 0;
let totalB = 0;
let promedioCompraB;

let contJ = 0;
let totalJ = 0;
let promedioCompraJ;

//validadcion de datos

for (cantidadProductos = 0; cantidadProductos < 10; cantidadProductos++) {
	tipo = prompt(
		"Ingrese el tipo de producto. barbijo, jabón o alcohol"
	).toLowerCase();
	while (
		tipo != "barbijo" &&
		tipo != "jabón" &&
		tipo != "alcohol" &&
		isNaN(tipo)
	) {
		tipo = prompt(
			"Dato invalido. ingrese el tipo de producto'barbijo, jabón o alcohol'"
		).toLowerCase();
	}

	precio = parseInt(
		prompt("Ingrese el precio del producto mayor a 100$ y menor a 300$")
	);
	while (precio < 100 || precio > 300) {
		precio = parseInt(
			prompt(
				"Dato invalido. ingrese el precio del producto mayor a 100$ y menor a 300$"
			)
		);
	}

	cantidadUnidades = parseInt(prompt("ingresa la cantidad de unidades"));
	while (cantidadUnidades <= 0 || cantidadUnidades > 1000) {
		cantidadUnidades = parseInt(
			prompt("Dato invalido, ingresa la cantidad de unidades correcta")
		);
	}

	marca = prompt("ingresa la Marca del Preoducto");
	fabricante = prompt("ingresa el nombre del fabricante");

	if (tipo == "alcohol") {
		if (flagAlc == 1 || precio < alcoholMasBarato) {
			alcoholMasBarato = precio;
			cantUnALcMasBarato = cantidadUnidades;
			fabAlcMasBarato = fabricante;
			flagAlc = 0;
		}
		totalA = totalA + cantidadUnidades;
		contA++;
	}

	if (tipo == "barbijo") {
		totalB = totalB + cantidadUnidades;
		contB++;
	}

	if (tipo == "jabón") {
		totalJ = totalJ + cantidadUnidades;
		contJ++;
	}

	console.log("producto tipo No." + cantidadProductos + " " + tipo);
	console.log(
		"esta es la cantidad de unidades de el producto No." +
		cantidadProductos +
		" " +
		cantidadUnidades
	);
	console.log(
		"esta es el precio de el producto No." + cantidadProductos + " " + precio
	);
	console.log(
		"esta es fabricante de el producto No." +
		cantidadProductos +
		" " +
		fabricante
	);
	console.log(
		"esta es la marca de el producto No." + cantidadProductos + " " + marca
	);

	console.log("<br>");
}

//promedios de compras
promedioCompraA = totalA / contA;
promedioCompraB = totalB / contB;
promedioCompraJ = totalJ / contJ;

console.log(totalA, contA, promedioCompraA);

console.log(totalB, contB, promedioCompraB);

console.log(totalJ, contJ, promedioCompraJ);

//punto A resolucion

console.log("este es el alc mas barato: " + alcoholMasBarato);
console.log("este es la cant de alc mas barato: " + cantUnALcMasBarato);
console.log("este es el fab del alc mas barato: " + fabAlcMasBarato);

//Punto B resolucion

if (totalA > totalB && totalA > totalJ) {
	console.log(
		`El tipo con mas unidades es Alcohol con: ${totalA} y su promedio por compra es ${promedioCompraA}`
	);
}

if (totalB > totalA && totalB > totalJ) {
	console.log(
		`El tipo con mas unidades es Alcohol con: ${totalB} y su promedio por compra es ${promedioCompraB}`
	);
}

if (totalJ > totalA && totalJ > totalB) {
	console.log(
		`El tipo con mas unidades es Alcohol con: ${totalJ} y su promedio por compra es ${promedioCompraJ}`
	);
}

//Punto C resolución

console.log(`el total de unidades de jabón es: ${totalJ}`);
