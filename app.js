let numeroSecreto = 0; 
let contadorIntentos = 0;
let listaNumSorteados = []; //Arreglo
let numMaximo = 10;

console.log(numeroSecreto);


//document es el puente entre html y js. querySelector: se pasa el nombre de una etiqueta, lo trae y se lo asigna a titulo
//let titulo = document.querySelector('h1');
//se define el titulo al juego
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

//Código de arriba optimizado ( se resumen las 4 líneas de código en esta función ):
function asignarTextoElemento(elemento, texto) { //Se asignan 2 parametros para que sea más fácil a la hora de modificar el código
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Botones

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value); 

    //console.log(contadorIntentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${contadorIntentos} ${(contaorIntentos =d== 1) ? 'intento' : 'intentos'}`);
        
        //Activar el botón "nuevo juego" cuando se acierta
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        contadorIntentos++;
        limpiarCaja();
    }

    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto); //retorna un valor booleano / triple igual : igual en tipo y en dato*/
    
    return;
}


//Función para limpiar la caja de tecto en la que se digita

function limpiarCaja() { 
    document.querySelector('#valorDeUsuario').value = ''; //Por id usando query
}



//Función para generar el numero secreto
function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;

    let numeroGenerado = Math.floor(Math.random()*numMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumSorteados);

    // preguntar si ya se sortearon todos los numeros para condición de salida
    if (listaNumSorteados.length == numMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números disponibles');
    }else{   

        //si el número generado está incluido en la lista, hacemos una operación, sino hacemos otra       
        if (listaNumSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            //guardar la lista
            listaNumSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Función de condiciones iniciales

function condicionesIniciales() {
    //Se llama la función y se llaman el elemento y el texto
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numMaximo}`);
    numeroSecreto = generarNumeroSecreto(); //trae la función y por ende, ejecuta lo que hay dentro de esta
    contadorIntentos = 1;
}



//Función para reiniciar el juego
function reiniciarJuego() {
    //Limpiar la caja

    limpiarCaja();

    //Indicar mensaje de intervalo de números
    //Generar el número secreto
    //Inicializar el número de intentos

    condicionesIniciales();

    //Deshabilitar el botón "nuevo juego"

    document.getElementById('reiniciar').setAttribute('disabled', true);
   
}

//Se crea un array (lista) -> let numerosSorteados = [] / Luego se le agregan dados -> numerosSorteados.push(5)
//Pedir tamaño al array -> console.log(numerosSorteados.length)
//Acceder a 1 solo elemento -> console.log(numerosSorteados[0]) -> entre parentesis cuadrados pide la posición 0
//Saber el último elemento de la lista -> console.log(numerosSorteados[numerosSorteados.length-1])

condicionesIniciales();




