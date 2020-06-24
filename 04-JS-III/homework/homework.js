// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var primer= array[0];
  return primer;}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo= array[array.length-1];
  return ultimo;
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largo= array.length;
  return largo;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var incrementa=[];
  for (var i=0;  i<array.length; i++) {
    incrementa.push(array[i]+1);
  }
return incrementa;
}
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código: 
  var final= array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var comienzo= array.unshift(elemento);
  return array ;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  for (let i=0;  i<palabras.length; i++) {
  var final = palabras.join(" ");
  } 
  return final;
}

function arrayContiene(array, elemento) {
 
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i= 0; i< array.length; i++) {
    if (array[i]=== elemento) {
      return true;}
}

  return false;

}
function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  num=0;
  for (var i =0;  i< numeros.length; i++) {
         num +=numeros[i];
    
  }
return num;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var elem=0;
  for (var i= 0; i< resultadosTest.length; i++) {
      elem += resultadosTest[i]

  } var promedio = elem/resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var array=[0];
for (var i=0;  i<numeros.length; i++) {
if (numeros[i]>array) {
  array=numeros[i];}
}
return array;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if (arguments.length<1)return 0;
    var num=1;
    for (var i = 0;  i<arguments.length; i++) {
      num = num*arguments[i];

    }return num;
    }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
