//------codigo para escribir los Console.log a files -- todo hecho por mi desde cero ;P --
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream('./logJuegos.txt', { flags: 'w' });
var log_stdout = process.stdout;

console.log = function (d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

//-----------------------------------

import { Jugador } from './00-Jugador';

//-------Interactuador de lineas de comando por terminal------
let readlineSync = require('readline-sync');


//-------Funcion Aleatorio para generar los numeros------
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export class Dados {
  private apuestaMinimaDados: number;

  constructor(pApuestaMinimaDados: number) {
      this.apuestaMinimaDados = pApuestaMinimaDados;
  }

  public getApuestaMinimaDados(): number {
      return this.apuestaMinimaDados;
  }

  public setApuestaMinimaDados(apuestaMinimaDados: number): void {
      this.apuestaMinimaDados = apuestaMinimaDados;
  }

  public lanzarDados(): number {
      let dado: number = getRandomInt(1, 7); //antes era (1,6): no toma el segundo valor = 6, sino 5. Se sube a 7
      return dado;
  }

  public jugarDados(pJugador: Jugador) {
      let dado1: number = 0;
      let dado2: number = 0;
      let suma: number = 0;
      let continuar: boolean = true;
      let contadorVueltas: number = 1;

      while (pJugador.getSaldoJugador() >= this.apuestaMinimaDados && continuar === true) {

          if (contadorVueltas === 1) {
              console.log("------------------------------------------------------------------------------------")
              console.log("> Bienvenido al Juego de Dados!! 7 y 11 gana. 2,3 y 12 pierde");
              console.log("-------------------------Vuelta Jugador número " + contadorVueltas + "---------------------------------------")
          } else {
              console.log("-------------------------Vuelta Jugador número " + contadorVueltas + "--------------------------------------")
          }
          console.log("En esta ronda su saldo de jugador es: " + pJugador.getSaldoJugador())

          dado1 = this.lanzarDados();
          dado2 = this.lanzarDados();
          suma = dado1 + dado2;

          switch (suma) {
              case 7:// Jugador gana
                  console.log(`>Dado1: ${dado1}, Dado2: ${dado2} = --> ${dado1 + dado2}`)
                  console.log("Jugador gana!");
                  pJugador.modificarSaldoJugador(100)
                  break;

              case 11:// Jugador gana
                  console.log(`>Dado1: ${dado1}, Dado2: ${dado2} = --> ${dado1 + dado2}`)
                  console.log("Jugador gana!");
                  pJugador.modificarSaldoJugador(100)
                  break;

              case 2:// Jugador pierde
                  console.log(`>Dado1: ${dado1}, Dado2: ${dado2} = --> ${dado1 + dado2}`)
                  console.log("Jugador pierde");
                  pJugador.modificarSaldoJugador(-100)
                  break;

              case 3:// Jugador pierde
                  console.log(`>Dado1: ${dado1}, Dado2: ${dado2} = --> ${dado1 + dado2}`)
                  console.log("Jugador pierde");
                  pJugador.modificarSaldoJugador(-100)
                  break;

              case 12:// Jugador pierde
                  console.log(`>Dado1: ${dado1}, Dado2: ${dado2} = --> ${dado1 + dado2}`)
                  console.log("Jugador pierde");
                  pJugador.modificarSaldoJugador(-100)
                  break;

              case 4:// Jugador siegue sin descuento
                  console.log(`>Dado1: ${dado1}, Dado2: ${dado2} = -->${dado1 + dado2}`)
                  console.log("Jugador sigue tirando. No se descuenta nada");
                  break;

              case 5:// Jugador siegue sin descuento
                  console.log(`>Dado1: ${dado1}, Dado2: ${dado2} = --> ${dado1 + dado2}`)
                  console.log("Jugador sigue tirando. No se descuenta nada");
                  break;

              case 6:// Jugador siegue sin descuento
                  console.log(`>Dado1: ${dado1}, Dado2: ${dado2} = --> ${dado1 + dado2}`)
                  console.log("Jugador sigue tirando. No se descuenta nada");
                  break;

              case 9:// Jugador siegue sin descuento
                  console.log(`>Dado1: ${dado1}, Dado2: ${dado2} = --> ${dado1 + dado2}`)
                  console.log("Jugador sigue tirando. No se descuenta nada");

                  break;

              case 10:// Jugador siegue sin descuento
                  console.log(`>Dado1: ${dado1}, Dado2: ${dado2} = --> ${dado1 + dado2}`)
                  console.log("Jugador sigue tirando. No se descuenta nada");
                  break;

              default:
                  break;
          }
          console.log("En esta ronda el saldo de jugador queda asi: " + pJugador.getSaldoJugador())
          console.log("------------------------------------------------------------------------------------")

          if (readlineSync.keyInYN('Desea continuar jugando a los Dados?')) {
              continuar = true;
          } else {
              console.log(`Saliendo del juego de Dados`);
              continuar = false;
          }
          contadorVueltas++;
      }
  }
}