// Ejemplo 1
const restCode = document.getElementById('rest-code');



function showName(firstName, lastName, ...titles) {

    restCode.innerHTML = `
<b>
function showName(firstName, lastName, ...titles) {
    alert("Nombre: " + firstName + " \nApellido: " + lastName + "\nposicion 0: " + titles[0] + "\nposicion 1: " + titles[1] + "\nposicion 2: " + titles[2] + "\nLongitud: " + titles.length);
}
</b>`;

    alert("Nombre: " + firstName + " \nApellido: " + lastName + "\nposicion 0: " + titles[0] + "\nposicion 1: " + titles[1] + "\nposicion 2: " + titles[2] + "\nLongitud: " + titles.length);
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
function max(...numeros) {
    let max = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
        // console.log(numeros[i]);

    }

    alert(max);
}
</b>`;
    alert(max);


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


function agregarElementosArray(){
    const numeros = [20, 22, 24];
    const nuevoNumero = 26;
    const actualizado = [...numeros, nuevoNumero];
    alert(actualizado); 
}

function concatenarArrays(){
    const array3 = [30, 31, 32];
    const array4 = [33, 34, 35];
    const arrayConcatenado = [...array3, ...array4];

    alert(arrayConcatenado); 
}