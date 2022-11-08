"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
//------codigo para escribir los Console.log a files -- todo hecho por mi desde cero ;P --
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream('./logJuegos.txt', { flags: 'w' });
var log_stdout = process.stdout;
console.log = function (d) {
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};
//-------Interactuador de lineas de comando por terminal------
var readlineSync = require('readline-sync');
//-----------------------------------
//-------Funcion Aleatorio para generar los numeros------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//-------------Comienzo de la clase Tragamonedas----------
var Tragamonedas = /** @class */ (function () {
    //protected Casino: Casino;
    function Tragamonedas(paramCantSlots, paramApuestaMinima) {
        this.cantidadSlots = paramCantSlots;
        this.apuestaMinima = paramApuestaMinima;
        //this.saldoJugador = paramSaldoJugador; se borra porque esto se movio al Juagador
    }
    Tragamonedas.prototype.setCantidadSlots = function (paramCantSlots) {
        this.cantidadSlots = paramCantSlots;
    };
    Tragamonedas.prototype.getCantidadSlots = function () {
        return this.cantidadSlots;
    };
    Tragamonedas.prototype.setApuestaMinima = function (paramApuestaMinima) {
        this.apuestaMinima = paramApuestaMinima;
    };
    Tragamonedas.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
