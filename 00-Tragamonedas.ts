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

//-----------------------------------



//-------Funcion Aleatorio para generar los numeros------

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//-------------Comienzo de la clase Tragamonedas----------

export abstract class Tragamonedas {
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

  abstract jugarTragamonedas(pJugador: Jugador);
}
