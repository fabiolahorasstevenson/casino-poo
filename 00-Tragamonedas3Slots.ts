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
import { Tragamonedas } from './00-Tragamonedas';
import { Jugador } from './00-Jugador';

//-------Interactuador de lineas de comando por terminal------
let readlineSync = require('readline-sync');
//-------Funcion Aleatorio para generar los numeros------

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
export class Tragamoneda3Slots extends Tragamonedas {

  public constructor(pCantSlots: number, pApuestaMinima: number) {
    super(pCantSlots, pApuestaMinima);
  }

  public jugarTragamonedas(pJugador: Jugador) {
    let continuar: boolean = true;
    while (pJugador.getSaldoJugador() >= this.apuestaMinima && continuar === true) {
      console.log("En esta ronda su saldo de jugador es: " + pJugador.getSaldoJugador())

      let slotsMaquina: number[] = new Array(this.cantidadSlots);

      if (getRandomInt(0, 2) === 1) {//Al cumplirse la condicion de que sea 1, quiere decir que los numeros de los slots debes ser iguales.

        let numeroGanador: number = getRandomInt(1, 10); //Creo una variable para guardar el numero que se repetira en los slots.

        for (let i: number = 0; i < slotsMaquina.length; i++) { //Recorro el array de slots e igualo cada elemento al valor ganador.
          slotsMaquina[i] = numeroGanador;
          console.log("numero del slot " + i + " es igual a " + slotsMaquina[i]);
        }
        console.log("Usted ha ganado!!!!")
        pJugador.modificarSaldoJugador(100);
        console.log("Al finalizar esta ronda su saldo de jugador a quedado asi: " + pJugador.getSaldoJugador())
        console.log("------------------------------------------------------------------------------------")

      } else {//En caso de que no sea 10 el valor aleatorio, los numeros tenderan a ser distintos segun la funcion Random.
        for (let i: number = 0; i < slotsMaquina.length; i++) {
          slotsMaquina[i] = getRandomInt(1, 10);
          console.log("[ " + i + " ] es igual a " + slotsMaquina[i]);
        }

        console.log("Usted ha perdido")
        pJugador.modificarSaldoJugador(-100)
        console.log("Al finalizar esta ronda su saldo de jugador ha quedado asi: " + pJugador.getSaldoJugador())
        console.log("------------------------------------------------------------------------------------")
      }

      if (readlineSync.keyInYN('Desea continuar viciando y perdiendo su ¿ vida ?')) {
        // 'Y' key was pressed.
        continuar = true;
        // Do something...
      } else {
        // Another key was pressed.
        console.log(`Saliendo del tragamonedas de ${this.cantidadSlots} Slots`);
        continuar = false;
      }
    }
  }
}
