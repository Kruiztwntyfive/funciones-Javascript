// Ejemplo 1
const restCode = document.getElementById('rest-code');


function limpiarConsola() {
    console.clear();
}
function showName(firstName, lastName, ...titles) {

    restCode.innerHTML = `
<b>
<span class="function">function</span> <span class="keyword">showName</span>(firstName, lastName, ...titles) {
    console.log("Nombre: " + firstName + "Apellido: " + lastName + "posicion 0: " + titles[0] + "posicion 1: " + titles[1] + "posicion 2: " + titles[2] + "Longitud: " + titles.length);
}</b>

Resultado: 
Nombre: Mary 
Apellido: Shelley
posicion 0: Escritora
posicion 1: Cantante
posicion 2: Actriz
Longitud: 3
`;

    console.log("Nombre: " + firstName + " \nApellido: " + lastName + "\nposicion 0: " + titles[0] + "\nposicion 1: " + titles[1] + "\nposicion 2: " + titles[2] + "\nLongitud: " + titles.length);
}



// Ejemplo 2 (Es necesario poner parámetros)

function max(...numeros) {
    let max = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
        // console.log(numeros[i]);

    }

    restCode.innerHTML = `
<b>
<span class="function">function</span> <span class="keyword">max</span>(...numeros) {
    <span class="keyword">let</span> max = numeros[0];
    <span class="function">for</span> (<span class="keyword">let</span> i = 0; i < numeros.length; i++) {
        <span class="keyword">if</span> (numeros[i] > max) {
            max = numeros[i];
        }

    }

    console.log(max);
}</b>

Resultado: 
1598
`;
    console.log(max);
}



function expandirArray() {

    const array1 = [1, 2, 3];
    const array2 = [...array1, 4, 5, 6];

    alert(array2);

}


function copiarArray() {
    const original = [7, 9, 11];
    const copia = [...original];
    alert(copia);
}


function agregarElementosArray() {
    const numeros = [20, 22, 24];
    const nuevoNumero = 26;
    const actualizado = [...numeros, nuevoNumero];
    alert(actualizado);
}

function concatenarArrays() {
    const array3 = [30, 31, 32];
    const array4 = [33, 34, 35];
    const arrayConcatenado = [...array3, ...array4];

    alert(arrayConcatenado);
}

function manipulacionArraysAnidados() {
    const matrices = [["Juan", "Perez"], ["Maria", "Lopez"]];
    const combinada = [].concat(...matrices);
    alert(combinada);
}

function sumar(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
function pasarArgumentosFuncion() {

    const resultado = sumar(...numbers);

    alert(resultado);
}

function desestructuracionYSpread() {
    const persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 30,
        genero: "Masculino"
    };
    const { nombre, ...resto } = persona;
    alert("Nombre: " + nombre + "\nResto: " + resto);
}