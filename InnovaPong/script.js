const participantes = []



const crearJugador = () => {
    const nombre = prompt("ingrese el nombre del participante");
    const apellido = prompt("ingrese el apellido del participante");
    const jugador = {nombre, apellido}
    return jugador
}



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

//agregar la cantidad de participantes que se desee

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

//no funciona bien. pedir ayuda
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

function elegirOpcion(){
let menu = parseInt(prompt("1- Agregar un jugador \n 2- Mostrar jugadores \n 3- Jugar Partido"))

switch(menu){
    case 1: sumarParticipante();
    break;
    case 2: mostrarParticipantes();
    break;
    case 3: jugarPartido();
    break;
    default: alert("no es una opcion valida;")
    elegirOpcion()
}
}

elegirOpcion()