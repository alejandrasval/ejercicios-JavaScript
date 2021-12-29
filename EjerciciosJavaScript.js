/* 1. Programa una función que cuente el número de carácteres de una cadena de texto. 
Por ejemplo, myFunction("Hola Mundo"), te devolverá 10. */

function myFunction(string = "") {
  if (!string) {
    console.warn("No ingresaste ninguna cadena de texto");
  } else {
    console.log(`La cadena de texto tiene ${string.length} carácteres`);
  }
}

myFunction();
myFunction("Hola mundo");

/* 2. Programa una función que te devuelva el texto recortado según el número de carácteres indicados. 
Por ejemplo, myFunction("Hola Mundo", 4) devolverá "Hola" */

function myFunction2(a, b) {
  if (!a || !b) {
    console.warn("No ingresaste los datos completos");
  } else {
    console.log(a.slice(0, b));
  }
}

myFunction2();
myFunction2("Hola mundo", 4);

/* 3. Programa una función que dada una string te devuelva un array de textos separados por cierto-carácter. 
Por ejemplo, myFunction("Hola que tal"). Por ejemplo, ("Hola que tal", " ") devolverá ["hola", "que", "tal"] */

function myFunction3(c, d) {
  if (!c || !d) {
    console.warn("No ingresaste los datos completos");
  } else {
    console.log(c.split(d));
  }
}

myFunction3();
myFunction3(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  " "
);

/* 4. Programa una función que repita un texto n cantidad de veces. 
Por ejemplo, myFunction("Hola Mundo", 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

function myFunction4(string = "", times = undefined) {
  if (!string || !times)
    return console.warn("No ingresaste los datos completos");
  if (times === 0 || times <= 0)
    return console.warn(
      "El número de veces a repetir no puede ser cero ni menor que cero"
    );

  for (let i = 1; i <= times; i++) {
    console.log(`${string}, ${i}`);
  }
}

myFunction4("Hola mundo", 4);

/* 5. Programa una función que invierta las palabras de una cadena de texto. 
Por ejemplo, myFunction("Hola Mundo") devolverá "odnuM aloH" */

function myFunction5(string = "") {
  if (!string) {
    console.warn("No ingresaste ninguna cadena de texto");
  } else {
    console.log(string.split("").reverse().join(""));
  }
}

myFunction5("Hola mundo");

/* 6.Programa una función para contar el número de veces que se repite una palabra en un texto largo.
Por ejemplo, myFunction("Hola mundo, adiós mundo") devolverá 2 */

const findWords = (string = "", word = "") => {
  if (!string || !word)
    return console.warn("No ingresaste los datos completos");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = string.indexOf(word, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.log(`La palabra ${word} se repite ${contador} veces`);
};

findWords("hola mundo", "mundo");

/* 7.Programa una función que valide si una palabra o frase dada, es un palíndromo.
Por ejemplo, myFunction("Salas") devolverá true */

function palindromeChecker(word = "") {
  if (!word) {
    return console.warn("No ingresaste una palabra");
  } else {
    word = word.toLowerCase();
    let validation = word.split("").reverse().join("");
    return word === validation ? console.log(`true`) : console.log(`false`);
  }
}

palindromeChecker("reconocer");
palindromeChecker("Chocolate");

/* 8.Programa una función que elimine cierto patrón de carácteres de un texto.
Por ejemplo, myFunction("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz") devolverá "1,2,3,4,5" */

function deleteExpression(string = "", expression = "") {
  if (!string || !expression) {
    console.warn("No ingresaste los datos completos");
  } else {
    console.log(string.replace(new RegExp(expression, "ig"), ""));
  }
}

deleteExpression("h1,h2,h3,h4,h5,h6", "h");

/* 9.Programa una función que obtenga un numero aleatorio entre 501 y 600. */

function randomNumber() {
  return console.log(Math.round(Math.random() * 100 + 500));
}

randomNumber();

/* 10.Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro).
Por ejemplo, myFunction(2002) devolverá true. */

function capicua(num) {
  if (!num) {
    return console.warn("No ingresaste un número");
  } else {
    newNum = num.toString();
    let validation = newNum.split("").reverse().join("");
    return newNum === validation ? console.log(`true`) : console.log(`false`);
  }
}

capicua(202);

/* 11.Programa ua función que calcule el factorial de un número.
Por ejemplo, myFunction(5) devolverá 120 */

function factorial(num = undefined) {
  if (!num || typeof num !== "number" || num <= 0) {
    return console.warn("No ingresaste un número válido");
  } else {
    let factorial = 1;

    for (let index = num; index > 1; index--) {
      factorial *= index;
    }

    return console.log(`El factorial de ${num} es ${factorial}`);
  }
}

factorial();
factorial(5);

/* 12.Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no.
Por ejemplo, myFunction(7) devolverá true. */

function primeAndComposite(num = undefined) {
  if (!num || typeof num !== "number" || num <= 0) {
    return console.warn("No ingresaste un número válido");
  } else {
    let divisible = false;

    for (let index = 2; index < num; index++) {
      if (num % index === 0) {
        divisible = true;
        break;
      }
    }
    return divisible
      ? console.log(`El número ${num} es compuesto`)
      : console.log(`El número ${num} es primo`);
  }
}

primeAndComposite(3);

/* 13.Programa una función que determine si un número es par o impar.
Por ejemplo, myFunction(29) devolverá impar. */

function evenAndOdds(num = undefined) {
  if (!num || typeof num !== "number" || num <= 0) {
    return console.warn("No ingresaste un número válido");
  } else {
    if (num % 2 === 0) {
      return console.log(`El número ${num} es par`);
    } else {
      return console.log(`El número ${num} es impar`);
    }
  }
}

evenAndOdds(412);

/* 14.Programa una función para convertir grados Celsius a Fahrenheit y viceversa.
Por ejemplo, myFunction(0,"C") devolverá 32°F. */

const temperatureConversion = (grados = undefined, unidad = undefined) => {
  if (
    grados === undefined ||
    unidad === undefined ||
    typeof unidad !== "string" ||
    typeof grados !== "number" ||
    !/(C|F)/.test(unidad)
  ) {
    return console.warn("No ingresaste datos válidos");
  }
};

/* 15.Programa una función para convertir números de base binaria a decimal y viceversa.
Por ejemplo, myFunction(100,2) devolverá 4 base 10. */

/* 16.Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada. 
Por ejemplo, myFunction(1000, 20) devolverá 800.  */

/*  17.Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy.
Por ejemplo, myFunction(new Date(1984,4,23)) devolverá 35 años (en 2020). */

/*  18.Programa una función que dada una cadena de texto cuente el número de vocales y consonantes.
Por ejemplo, myFunction("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

/* 19.Programa una función que valide que un texto sea un nombre válido.
Por ejemplo, myFunction("Juan Pérez") devolverá verdadero. */

/* 20.Programa una función que valide que un texto sea un email válido.
Por ejemplo, myFunction("jonmircha@gmail.com") devolverá verdadero. */

/* 21.Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado.
Por ejemplo, miFunction([1, 4, 5]) devolverá [1, 16, 25]. */

/* 22.Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array.
Por ejemplo, miFunction([1, 4, 5, 99, -60]) devolverá [99, -60].*/

/* 23.Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares.
Por ejemplo, myFunction([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

/* 24. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente.
Por ejemplo, miFunction([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

/* 25. Programa una función que dado un arreglo de elementos, elimine los duplicados.
Por ejemplo, miFunction(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

/* 26.Programa una función que dado un arreglo de números obtenga el promedio.
Por ejemplo, promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

/* 27.Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

/* */
