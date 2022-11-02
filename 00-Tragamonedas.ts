import { Casino } from "./00-Casino";
import { Jugador } from './00-Jugador';

//-------Interactuador de lineas de comando por terminal------
let readlineSync = require('readline-sync');

//-------Funcion Aleatorio para generar los numeros------

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//-------------Comienzo de la clase Tragamonedas----------

export class Tragamonedas {
  //protected saldoJugador: number; se borra porque esto se movio al Juagador
  protected cantidadSlots: number;
  protected apuestaMinima: number;
  //protected Casino: Casino;

  constructor(paramCantSlots: number, paramApuestaMinima: number) {
    this.cantidadSlots = paramCantSlots;
    this.apuestaMinima = paramApuestaMinima;
    //this.saldoJugador = paramSaldoJugador; se borra porque esto se movio al Juagador

  }

  public setCantidadSlots(paramCantSlots: number) {
    this.cantidadSlots = paramCantSlots
  }

  public getCantidadSlots(): number {
    return this.cantidadSlots;
  }

  public setApuestaMinima(paramApuestaMinima: number) {
    this.apuestaMinima = paramApuestaMinima;
  }

  public getApuestaMinima(): number {
    return this.apuestaMinima;
  }

  public jugarTragamonedas(pJugador: Jugador) {
    
    let continuar: boolean = true;
    while (pJugador.getSaldoJugador() >= this.getApuestaMinima() && continuar === true) {
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
          console.log("numero del slot " + i + " es igual a " + slotsMaquina[i]);

        }
        console.log("Usted ha perdido")
        pJugador.modificarSaldoJugador(-100)
        console.log("Al finalizar esta ronda su saldo de jugador a quedado asi: " + pJugador.getSaldoJugador())
        console.log("------------------------------------------------------------------------------------")

      }


      if (readlineSync.keyInYN('Desea continuar viciando y perdiendo su vida?')) {
        // 'Y' key was pressed.
        continuar = true;
        // Do something...
      } else {
        // Another key was pressed.
        console.log(`Saliendo del tragamonedas de ${this.cantidadSlots} Slots`);
        // Do something...
        continuar = false;
      }
    }
    // Ver por qué no funciona 
   // this.Casino.interaccionCasino();
  }
}
