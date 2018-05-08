
function obtenerCuadros(){
  const cuadros = document.getElementsByClassName('cuadro')
  console.log(cuadros);
  return cuadros
}
const cuadros = obtenerCuadros()

function clickSobreCuadros(cuadros){
  for (var i = 0; i < cuadros.length; i++) {
    cuadros[i].addEventListener("click",poner)
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
let arregloX = []
let arregloO = []
function poner(ev){
  console.log(this);
  let objeto = {
    cuadro:this,
    resultado:i
  }
  if(i==0){
    ponerX(this)
    i=1
    arregloX.push(this.classList[1])
    alumbrar(jugadores,i-1)
    apagar(jugadores,i)
  }else{
    ponerO(this)
    i=0
    arregloO.push(this.classList[1])
    alumbrar(jugadores,i+1)
    apagar(jugadores,i)
  }
let resultado = ganador(arregloO,arregloX)
if(resultado == 1){console.log("gano el jugador 1");}
else if (resultado == 2) {console.log("gano el jugador 2");}
else if (resultado == 3) {console.log("empate");}
else if (resultado == 0) {console.log("nadie ha ganado");}
this.removeEventListener("click",poner)
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

function obtenerJugadores(){
  const jugadores = document.getElementsByClassName('jugador')
  console.log(jugadores);
  return jugadores
}
const jugadores = obtenerJugadores()

function alumbrar(jugadores,i){
  jugadores[i].classList.add("verde")
}

function apagar(jugadores,i){
  jugadores[i].className = `jugador ${i}`
}
