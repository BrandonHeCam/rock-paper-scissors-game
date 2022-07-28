let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

const btnJuego = document.querySelector("#btn-game");

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🥌";
  } else if (jugada == 2) {
    resultado = "Papel 📰";
  } else if (jugada == 3) {
    resultado = "Tijera ✂";
  } else {
    resultado = "MAL ELEGIDO";
  }
  return resultado;
}

function juego(maquina, usuario) {
  /* Combate */
  if (maquina == usuario) {
    alert("¡EMPATE!");
  } else if (
    (usuario == 1 && maquina == 3) ||
    (usuario == 2 && maquina == 1) ||
    (usuario == 3 && maquina == 2)
  ) {
    alert("GANASTE!");
    triunfos += 1;
  } else {
    alert("PERDISTE :(");
    perdidas += 1;
  }
}

btnJuego.addEventListener("click", function () {
  alert("¡Quien gane 3 rondas gana!");

  while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3);
    jugador = prompt("Elije: 1 para piedra, 2 para papel, 3 para tijera");
    alert("PC elige: " + eleccion(pc));
    alert("Tú eliges: " + eleccion(jugador));
    juego(pc, jugador);
  }

  alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
});
