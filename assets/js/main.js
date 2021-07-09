
// Función para validar números enteros, asegurándonos que estén en un rango determinado
const numero_entero_valido = (x, min, max) => (x >= min && x <= 20);

// Se solicita al usario que ingrese un numero entero.  Usamos una función para validar de una vez que el número esté entre 1 y 20
const numero = () => {
  let es_valido = false;
  do {
    var x = parseInt(prompt("ingrese un número entero entre 1 y 20"));
    if (!isNaN(x)){
      es_valido = numero_entero_valido(x, 1, 20);
    }
    if (!es_valido) {
      alert("Número errado, debe estar entre 1 y 20");
    }
  } while (!es_valido);
  return x;
}


//función para escribir en cónsola la tabla de multiplicar del número pasado como argumento
let tabla_de_multiplicacion = (x) => {
    for (let i = 1; i <= x; i++){
        console.log(`${i} x ${x} = ${i * x}`)
    }
}

// Función para el Cálculo del factorial de un número (x!)
const factorial = (x) => {
  for (let i = 1; i <= x; i++) {
    var res = 1;
    for (let j = 1; j <= i; j++) {
      res = res * j;
    }
  }
  return res;
};

// Función que escribe la tabla de factoriales del número pasado como argumento.  Utiliza la función factorial1 para calcular cada factorial
let tabla_de_factoriales = (x) => {
  for(let i = 1; i <= num; i++){
    console.log(`Factorial de ${i} es: ${factorial(i)}`);
  }
}


// Progrma principal
//   1. Primero se lee el número.  El número asignado a la variable num estará entre 1 y 20 porque ya se verificó
let num = numero();

//   2. Solo por orden, se imprime el número seleccionado en la cónsola
console.log(`Número seleccionado: ${num}`)

//   3. Se escribe la tabla de multiplcar que  cumple lo dicho en el enunciado
tabla_de_multiplicacion(num);

//   4. Se escribe la tabla de factoriales que cumple lo dicho en el enunciado
tabla_de_factoriales(num);



