
function obtenerCuadros(){
  const cuadros = document.getElementsByClassName('cuadro')
  console.log(cuadros);
  return cuadros
}
const cuadros = obtenerCuadros()

function obtenerJugadores(){
  const jugadores = document.getElementsByClassName('jugador')
  console.log(jugadores);
  return jugadores
}
const jugadores = obtenerJugadores()

let arregloX = []
let arregloO = []

function clickSobreCuadros(cuadros){
  swal({
  title: "TIC-TAC-TOE",
  text: "Bienvenido",
});
  arregloO = []
  arregloX = []
  alumbrar(jugadores,0)
  for (let j = 0; j < cuadros.length; j++) {
    console.log(cuadros[j]);
    cuadros[j].addEventListener("click",poner)
    cuadros[j].innerHTML = ""
  }
}
clickSobreCuadros(cuadros)

function ponerX(cuadro){
  cuadro.innerHTML = 'X'
  console.log("click");
}

function ponerO(cuadro){
  cuadro.innerHTML = 'O'
  console.log("click");
}

let i = 0


function poner(ev){
  console.log(this);
  if(i==0){
    ponerX(this)
    i=1
    alumbrar(jugadores,i)
    apagar(jugadores,i-1)
    arregloX.push(this.classList[1])
  }else{
    ponerO(this)
    i=0
    alumbrar(jugadores,i)
    apagar(jugadores,i+1)
    arregloO.push(this.classList[1])
  }
let resultado = ganador(arregloO,arregloX)
if(resultado == 1){
  swal({
  title: "Gano el jugador 1",
}).then((value)=>volverAEmpezar())
}
else if (resultado == 2) {
  swal({
    title: "Gano el jugador 2",
  }).then((value)=>volverAEmpezar())
}
else if (resultado == 3) {
  swal({
    title: "Empate",
  }).then((value)=>volverAEmpezar())
}
else if(resultado == 0){
this.removeEventListener("click",poner)}
}

function ganador(arregloO,arregloX){
  //4 posibilidad
  //1.nadie ha ganado(0)
  //2.jugador 1 ganado(1) ya
  //3.jugador 2 ganad(2) ya
  //4.empate(3)
  let resultado = 0
  if(tresEnLinea(arregloO,"1","2","3")){resultado = 2}
  else if(tresEnLinea(arregloO,"4","5","6")){resultado = 2}
  else if(tresEnLinea(arregloO,"7","8","9")){resultado = 2}
  else if(tresEnLinea(arregloO,"1","4","7")){resultado = 2}
  else if(tresEnLinea(arregloO,"2","5","8")){resultado = 2}
  else if(tresEnLinea(arregloO,"3","6","9")){resultado = 2}
  else if(tresEnLinea(arregloO,"1","5","9")){resultado = 2}
  else if(tresEnLinea(arregloO,"3","5","7")){resultado = 2}

  else if(tresEnLinea(arregloX,"1","2","3")){resultado = 1}
  else if(tresEnLinea(arregloX,"4","5","6")){resultado = 1}
  else if(tresEnLinea(arregloX,"7","8","9")){resultado = 1}
  else if(tresEnLinea(arregloX,"1","4","7")){resultado = 1}
  else if(tresEnLinea(arregloX,"2","5","8")){resultado = 1}
  else if(tresEnLinea(arregloX,"3","6","9")){resultado = 1}
  else if(tresEnLinea(arregloX,"1","5","9")){resultado = 1}
  else if(tresEnLinea(arregloX,"3","5","7")){resultado = 1}

  else if(arregloO.length >=5 || arregloX.length >=5){return resultado = 3}
  return resultado

}

function tresEnLinea(arreglo,x,y,z){
  if(arreglo.includes(x) && arreglo.includes(y) && arreglo.includes(z)){
    return true
  }else{return false}
}

function alumbrar(jugadores,i){
  jugadores[i].classList.add("verde")
}

function apagar(jugadores,i){
  jugadores[i].className = `jugador ${i}`
}

function  volverAEmpezar(){
  swal({
    title: "Volver a jugar?",
    buttons:{
      Si: {
        text: "Si :)",
      },
      No: {
        text: "No :(",
      }
    }

}).then((value)=>{
    switch(value){
    case "Si":
    apagar(jugadores,0)
    apagar(jugadores,1)
    clickSobreCuadros(cuadros)
    break;

    case "No":
    acabarJuego();
    break;
    }
  }
)}

function acabarJuego(){
  for (let j = 0; j < cuadros.length; j++) {
    console.log(cuadros[j]);
    cuadros[j].removeEventListener("click",poner)
    cuadros[j].innerHTML = ""
  }
  apagar(jugadores,0)
  apagar(jugadores,1)
}
