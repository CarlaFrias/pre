console.log("lolo")

var a = 1;
var b = 2;
var c = a = b;
console.log (c); 

function sumaTres(x){
    console.log(x + 10);
}

sumaTres(3);

function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
  viajar('Argentina');

  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log("no puede");
    console.log( false );
  }
  
  puedeManejar(17);

  function negacion(permiso) {
    if (permiso !== true) console.log('Tiene permiso');
 }
 negacion(false);

 // Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'];
console.log(nombres);
console.log(nombres.length);

nombres[3] = "Carla",
console.log(nombres);

nombres[4] = "chloe",
console.log(nombres);

// Lista de compras
var listaDeCompras = [];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

// Ver lista de compras
var elementoDelArray = nombres[1];
console.log(elementoDelArray);

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split("H");

console.log(palabraSeparada);