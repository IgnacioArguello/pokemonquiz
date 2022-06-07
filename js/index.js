alert("Bienvenido al Quiz de Pokemon");

let user;
let categoria;
let responseFalse = 0;
let responseTrue = 0;
let risa;
//Preguntas Facil
const facilQuestion1="¿Cual es el Pokemon principal de la saga?";
const facilResponse1=2;
const facilQuestion2="¿Cual es el protagonista de la serie?";
const facilResponse2=3;
const facilQuestion3="¿De que pueblo es el protagonista?";
const facilResponse3=1;
let intFacilQuestion1;
let intFacilQuestion2;
let intFacilQuestion3;

//Preguntas Dificil
const dificilQuestion1="¿Cual es el Pokemon número 15 segun la Pokedex?";
const dificilResponse1=1;
const dificilQuestion2="¿A que pokemon evoluciona Onix?";
const dificilResponse2=1;
const dificilQuestion3="¿Cual de estos es un Pokemon legendario?";
const dificilResponse3=1;
let intDificilQuestion1;
let intDificilQuestion2;
let intDificilQuestion3;

//Funcion de entrada nombre o apodo
function saludar(){
    user = prompt("Ingresa tu nombre o apodo para jugar:");
    while (user ==="" || user === null) {
        alert("No ingresaste nada\nPara poder jugar necesitas ingresar tu nombre o apodo");
        user = prompt("Ingresa tu nombre para jugar:");
    }
    alert("Hola " + user + "\nVamos a jugar!\nAntes de comenzar elijamos la dificultad del Quiz");
    return user;
}
//Funcion donde vamos a crear todas las categorias de los Quiz
function categorias(){
    categoria = parseInt(prompt("( 1 ) - Facil\n( 2 ) - Dificil"));
    while (isNaN(categoria) || categoria > 2) {
        alert("No existe esa categoria, elija nuevamente");
        categoria = parseInt(prompt("( 1 )-Facil\n( 2 )-Dificil"));
    }
    return categoria;
}
//Modulos de preguntas separdos con un IF de cada tema
function questions(){
    if (categoria ==1) {
        alert("Elegiste Facil\nComenzemos!\nIngresa el NUMERO correspondiente a la respuesta");
        intFacilQuestion1 = parseInt(prompt(facilQuestion1 + "\n\n1 - Charmander\n2 - Pikachu\n3 - Bulbasaur"));
            while (isNaN(intFacilQuestion1) || intFacilQuestion1 > 3) {
                alert("Error!\nCaracter Incorrecto / Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intFacilQuestion1 = parseInt(prompt(facilQuestion1 + "\n1 - Charmander\n2 - Pikachu\n3 - Bulbasaur"));
            }
            intFacilQuestion2 = parseInt(prompt(facilQuestion2 + "\n\n1 - John\n2 - Pipo\n3 - Ash"));
            while (isNaN(intFacilQuestion2) || intFacilQuestion2 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intFacilQuestion2 = parseInt(prompt(facilQuestion2 + "\n1 - John\n2 - Pipo\n3 - Ash"));
            }
            intFacilQuestion3 = parseInt(prompt(facilQuestion3 + "\n\n1 - Paleta \n2 - Raiz\n3 - Manzano"));
            while (isNaN(intFacilQuestion3) || intFacilQuestion3 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intFacilQuestion3 = parseInt(prompt(facilQuestion3 + "\n1 - Paleta\n2 - Raiz\n3 - Manzano"));
            }
            return intFacilQuestion1, intFacilQuestion2, intFacilQuestion3;
    }
    else if(categoria ==2){
        alert("Elegiste Dificil\nComenzemos!\nIngresa el NUMERO correspondiente a la respuesta");
        intDificilQuestion1 = parseInt(prompt(dificilQuestion1 + "\n\n1 - Beedrill\n2 - Ratatta\n3 - Pidgey"));
            while (isNaN(intDificilQuestion1) || intDificilQuestion1 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intDificilQuestion1 = parseInt(prompt(dificilQuestion1 + "\n1 - Beedrill\n2 - Ratatta\n3 - Pidgey"));
            }
            intDificilQuestion2 = parseInt(prompt(dificilQuestion2 + "\n\n1 - Steelix\n2 - Vulpix\n3 - Cloyster"));
            while (isNaN(intDificilQuestion2) || intDificilQuestion2 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intDificilQuestion2 = parseInt(prompt(dificilQuestion2 + "\n1 - Steelix\n2 - Vulpix\n3 - Cloyster"));
            }
            intDificilQuestion3 = parseInt(prompt(dificilQuestion3 + "\n\n1 - Rayquaza\n2 - Raydon\n3 - Dragonite"));
            while (isNaN(intDificilQuestion3) || intDificilQuestion3 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intDificilQuestion3 = parseInt(prompt(dificilQuestion3 + "\n1 - Rayquaza\n2 - Raydon\n3 - Dragonite"));
            }
            return intDificilQuestion1,intDificilQuestion2,intDificilQuestion3;
    }
}
//Funcion para sumar los resultados que va obteniendo en base a lo que responda
function sumar(a,b){
    if (a == b) {
        responseTrue ++;
    }
    else{
        responseFalse ++;
    }
}
//Funcion con titulos personalizados en base a los resultados obtenidos en las respuestas
function score(){
    switch (responseTrue) {
        case 3:
            titulo="Pokemaniaco";
            break;
        case 2:
            titulo="Estas familiarizado con la saga";
            break;
        case 1:
            titulo="Sabes algo";
            break;
        default:
            titulo="Nunca interactuaste con Pokemon en tu vida";
            break;
    }
    resultado = alert(`Listo ${user}, terminaste el Quiz!\nTu resultado:\nRespuestas Correctas: ${responseTrue}\nRespuestas Incorrectas: ${responseFalse}${risa}\nNivel:----> ${titulo} <----`);
}
//Funcion de agregados de risas si tiene respuestas incorrectas
function risas(){
  if (responseFalse >=1) {
      risa = " ------>Jaja";      
  }
  else{
      risa ="";
  }
  return risa;
}
//Funcion para restartear si le va mal en las respuestas
function restart(){
    if (responseTrue <=2) {
        repeat = prompt("Quieres volver a intentarlo?\n--> Pon SI, si quieres intentarlo nuevamente\n--> Pon NO, si no quieres");
        switch (repeat) {
            case "si":
                alert("Elijamos la categoria");
                categorias();
                questions();
                score();
                alert("Hasta luego");
                break;
            case "SI":
                alert("Elijamos la categoria");
                categorias();
                questions();
                score();
                alert("Hasta luego");
                break;    
            case "no":
                alert("Hasta luego!");
                break;
            case "NO":
                alert("Hasta luego!");
                break;
            default:
                alert("Pon una opcion valida");
                repeat = prompt("Quieres volver a intentarlo?\n--> Pon SI, si quieres intentarlo nuevamente\n--> Pon NO, si no quieres");
                restart();
        }      
    } 
}

//Funcion para agrupar las funciones y que actuen con condiciones
function init(){
    saludar();
    categorias();
    questions();
    if (categoria ===1) {
        sumar(intFacilQuestion1,facilResponse1);
        sumar(intFacilQuestion2,facilResponse2);
        sumar(intFacilQuestion3,facilResponse3);   
    }
    else if (categoria ===2) {
        sumar(intDificilQuestion1,dificilResponse1);
        sumar(intDificilQuestion2,dificilResponse2);
        sumar(intDificilQuestion3,dificilResponse3);
    }
    risas();
    score();
    if (responseTrue <=2) {
        restart();
    }
    else{
        alert("Hasta luego!");
    }
}

init();