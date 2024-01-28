const participantes = []


//crea un jugador con su nombre y apellido
const crearJugador = () => {
    const nombre = prompt("ingrese el nombre del participante");
    const apellido = prompt("ingrese el apellido del participante");
    const jugador = {nombre, apellido}
    return jugador
}


//Agrega un participante al torneo
const sumarParticipante = () => {
    const jugador = crearJugador();
    if(!existeParticipante(jugador)){
        participantes.push(jugador)
        alert("participante agregado.")
        }else{
            alert("el participante ya se encuentra participando del torneo.")
        }
        elegirOpcion()
}

//Muestra los participantes por consola
const mostrarParticipantes = () => {
    for (const participante of participantes) {
        console.table(participante)
    }
    elegirOpcion()
}
   
//verificar si un participante ya es parte del torneo
function existeParticipante(jugador){
    let existe = false
    for(let participante of participantes){
        if(participante.nombre == jugador.nombre){
            if(participante.apellido == jugador.apellido){
                existe = true;
            }
        }
    }
    return existe;
}

// ingresar datos y puntos de 2 jugadores, indica quien gano. En un futuro agregara puntos a cada jugador.
function jugarPartido(){
    let jugador1 
    let jugador2 
    do{
    jugador1 = crearJugador();
    }while(!existeParticipante(jugador1))
    const resultadoJugador1 = parseInt(prompt("ingrese los puntos del primer jugador: "))

    do{
    jugador2 = crearJugador();
        }while(!existeParticipante(jugador2))
        const resultadoJugador2 = parseInt(prompt("ingrese los puntos del segundo jugador: "))

    if(resultadoJugador1>resultadoJugador2){
        console.log("gano " + jugador1.nombre + " " +jugador1.apellido)
    }else if(resultadoJugador1<resultadoJugador2){
        console.log("gano "+ jugador2.nombre + " " +jugador2.apellido)
    }else{
        console.log("es empate")
    }
    elegirOpcion()
}

// Menu de seleccion
function elegirOpcion(){
let menu = parseInt(prompt("1- Agregar un jugador \n 2- Mostrar jugadores \n 3- Jugar Partido \n 4- Salir"))

switch(menu){
    case 1: sumarParticipante();
    break;
    case 2: mostrarParticipantes();
    break;
    case 3: jugarPartido();
    break;
    case 4: alert("Hasta la proxima!");
    break;
    default: alert("no es una opcion valida;");
    elegirOpcion()
}
}

elegirOpcion()
