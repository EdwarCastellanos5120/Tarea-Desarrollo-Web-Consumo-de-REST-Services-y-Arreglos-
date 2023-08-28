// Que es un Arreglo en JS
/* 
En JavaScript, un arreglo es una variable que se utiliza para almacenar diferentes tipos de datos. Básicamente almacena diferentes elementos en una caja y luego se puede evaluar con la variable.
*/

// Declarar un Arreglo
let miArreglo = [];

// Declarar un Arreglo con datos
let miArregloDatos = ["Edwar", 1, 2.55, false];

/*
Los arreglos se pueden manipular usando varias acciones conocidas como métodos. Algunos de estos métodos nos permiten agregar, eliminar, modificar y hacer mucho más en los arreglos.
*/

// Metodo ToString() - Convierte un arreglo en una cadena de texto
let miArregloToString = ["Abeja", "Burro", "Caballo", "Vaca", "Zorro", "Perro"];
console.log(miArregloToString.toString());

// Metodo Join() - Convierte un arreglo en una cadena de texto, pero con un separador especifico
let miArregloJoin = ["Abeja", "Burro", "Caballo", "Vaca", "Zorro", "Perro"];
console.log(miArregloJoin.join(" - "));

// Metodo Concat() - Une dos o mas arreglos en uno solo
let miArregloConcat = ["1", "2", "3", "4", "5", "6"];
let miArregloConcat2 = ["7", "8", "9", "10", "11", "12"];
console.log(miArregloConcat.concat(miArregloConcat2));

// Metodo Push() - Agrega un elemento al final del arreglo y cambia el arreglo original
let miArregloPush = ["Abeja", "Burro", "Caballo", "Vaca", "Zorro", "Perro"];
miArregloPush.push("Gato");
console.log(miArregloPush);

// Metodo Pop() - Elimina el ultimo elemento del arreglo y cambia el arreglo original y devuelve el arreglo modificado
let miArregloPop = ["Abeja", "Burro", "Caballo", "Vaca", "Zorro", "Perro"];
miArregloPop.pop();
console.log(miArregloPop);

// Metodo Shift() - Elimina el primer elemento del arreglo y cambia el arreglo original y devuelve el arreglo modificado
let miArregloShift = ["Abeja", "Burro", "Caballo", "Vaca", "Zorro", "Perro"];
miArregloShift.shift();
console.log(miArregloShift);

// Metodo Unshift() - Agrega un elemento al inicio del arreglo y cambia el arreglo original y devuelve el arreglo modificado
let miArregloUnshift = ["Abeja", "Burro", "Caballo", "Vaca", "Zorro", "Perro"];
miArregloUnshift.unshift("Gato");
console.log(miArregloUnshift);

// Metodo Splice() - Agrega un elemento en una posicion especifica del arreglo y cambia el arreglo original y devuelve el arreglo modificado
let miArregloSplice = ["Abeja", "Burro", "Caballo", "Vaca", "Zorro", "Perro"];
miArregloSplice.splice(2, 0, "Gato", "Pato");
console.log(miArregloSplice);

// Metodo Slice() - Este método es similar a splice() pero muy diferente. Devuelve subarreglos en lugar de subcadenas
let miArregloSlice = ["Abeja", "Burro", "Caballo", "Vaca", "Zorro", "Perro"];
console.log(miArregloSlice.slice(2, 4));

//Metodo Split() - Convierte una cadena de texto en un arreglo
let miArregloSplit = "Abeja, Burro, Caballo, Vaca, Zorro, Perro";
console.log(miArregloSplit.split(", "));

//Metodo indexOf() - Devuelve la posicion de un elemento en el arreglo y devuelve -1 si no lo encuentra
let miArregloIndexOf = ["Abeja", "Burro", "Caballo", "Vaca", "Zorro", "Perro"];
console.log(miArregloIndexOf.indexOf("Vaca"));
console.log(miArregloIndexOf.indexOf("Godzilla"));

//Metodo lastIndexOf() - Devuelve la posicion de un elemento en el arreglo y devuelve -1 si no lo encuentra, pero empieza a buscar desde el final del arreglo
let miArregloLastIndexOf = ["Abeja", "Burro", "Caballo", "Vaca", "Zorro", "Perro"];
console.log(miArregloLastIndexOf.lastIndexOf("Vaca"));
console.log(miArregloLastIndexOf.lastIndexOf("Godzilla"));

//Metodo filter() - Crea un nuevo arreglo con los elementos que cumplan con la condicion
let miArregloFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let miArregloFilter2 = miArregloFilter.filter((numero) => numero > 5);
console.log(miArregloFilter2);

//Metodo map() - Este método crea un nuevo arreglo manipulando los valores de un arreglo.
let miArregloMap = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let miArregloMap2 = miArregloMap.map((numero) => numero * 2);
console.log(miArregloMap2);

//Metodo reduce() - Este método reduce los valores de un arreglo a un solo valor.
let miArregloReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let miArregloReduce2 = miArregloReduce.reduce((total, numero) => total + numero);
console.log(miArregloReduce2);

//Metodo fing() - Este método devuelve el primer elemento que cumpla con la condicion
let miArregloFind = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let miArregloFind2 = miArregloFind.find((numero) => numero > 5);
console.log(miArregloFind2);

//Metodo findIndex() - Este método devuelve la posicion del primer elemento que cumpla con la condicion
let miArregloFindIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let miArregloFindIndex2 = miArregloFindIndex.findIndex((numero) => numero > 5);
console.log(miArregloFindIndex2);

//Metodo every() - Este método devuelve true si todos los elementos del arreglo cumplen con la condicion
let miArregloEvery = [ 6, 7, 8, 9];
let miArregloEvery2 = miArregloEvery.every((numero) => numero > 5);
console.log(miArregloEvery2);

//Metodo some() - Este método devuelve true si alguno de los elementos del arreglo cumple con la condicion
let miArregloSome = [ 1, 7, 2, 3];
let miArregloSome2 = miArregloSome.some((numero) => numero > 5);
console.log(miArregloSome2);

//Metodo forEach() - Este método ejecuta una funcion por cada elemento del arreglo
let miArregloForEach = [ 1, 7, 2, 3];
miArregloForEach.forEach((numero) => console.log(numero));

//Metodo Reverse() - Este método invierte el orden de los elementos del arreglo
let miArregloReverse = [ 1, 7, 2, 3];
console.log(miArregloReverse.reverse());