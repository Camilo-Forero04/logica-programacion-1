/* Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.
Pruébalo con las combinaciones de números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-1” */

const prompt = require('prompt-sync')();

function preguntarNumero(num){
    
    let numReturn = Number(prompt(`Digite el valor del número ${num} > `));

    if(typeof numReturn == "number" && !Number.isNaN(numReturn)){
        return numReturn;
    }

    return  preguntarNumero(num);
}

function sonIguales(nums){
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                console.log("Los numeros son iguales");
                return true
            }
        }
    }
    return false;
}

function ordenarNumeroDsc(nums){
    const numsDsc = [];
    let num;
    let indice;
    while(nums.length != 0){
        num = sacarMayor(nums);
        indice = nums.indexOf(num);
        numsDsc.push(num);
        nums.splice(indice,1);
    }
    return numsDsc;
}

function sacarMayor(nums){
    let numMayor = -Number.MAX_SAFE_INTEGER;
    for(let num of nums){
        if(num > numMayor){
            numMayor = num;
        }
    }
    return numMayor;
}

function sacarMenor(nums){
    let numMenor = Number.MAX_SAFE_INTEGER;
    for(let num of nums){
        if(num < numMenor){
            numMenor = num;
        }
    }
    return numMenor;
}

function ordenarNumeroAsc(nums){
    const numsAsc = [];
    let num;
    let indice;
    while(nums.length != 0){
        num = sacarMenor(nums);
        indice = nums.indexOf(num);
        numsAsc.push(num);
        nums.splice(indice,1);
    }
    return numsAsc;
}

function main(){
    
    const nums = [];
    for(let i = 0; i < 3; i++){
        nums.push(preguntarNumero(i+1));
    }
   
    const numsAux = [...nums] // forma de copiar un arreglo (spread operator)
    if(!sonIguales(nums)){
        console.log(ordenarNumeroAsc(nums));
        console.log(ordenarNumeroDsc(numsAux)); 
    }
}

main();