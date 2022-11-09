"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tragamoneda5Slots = void 0;
//------codigo para escribir los Console.log a files -- todo hecho por mi desde cero ;P --
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream('./logJuegos.txt', { flags: 'w' });
var log_stdout = process.stdout;
console.log = function (d) {
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};
//-----------------------------------
var _00_Tragamonedas_1 = require("./00-Tragamonedas");
//-------Interactuador de lineas de comando por terminal------
var readlineSync = require('readline-sync');
//-------Funcion Aleatorio para generar los numeros------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
var Tragamoneda5Slots = /** @class */ (function (_super) {
    __extends(Tragamoneda5Slots, _super);
    function Tragamoneda5Slots(pCantSlots, pApuestaMinima) {
        return _super.call(this, pCantSlots, pApuestaMinima) || this;
    }
    Tragamoneda5Slots.prototype.jugarTragamonedas = function (pJugador) {
        var continuar = true;
        while (pJugador.getSaldoJugador() >= this.getApuestaMinima() && continuar === true) {
            console.log("En esta ronda su saldo de jugador es: " + pJugador.getSaldoJugador());
            var slotsMaquina = new Array(this.cantidadSlots);
            if (getRandomInt(0, 4) === 1) { //Al cumplirse la condicion de que sea 1, quiere decir que los numeros de los slots debes ser iguales.
                var numeroGanador = getRandomInt(1, 10); //Creo una variable para guardar el numero que se repetira en los slots.
                for (var i = 0; i < slotsMaquina.length; i++) { //Recorro el array de slots e igualo cada elemento al valor ganador.
                    slotsMaquina[i] = numeroGanador;
                    console.log("Slot " + i + " es igual a " + slotsMaquina[i]);
                }
                console.log("Usted ha ganado!!!!");
                pJugador.modificarSaldoJugador(100);
                console.log("Al finalizar esta ronda su saldo de jugador a quedado asi: " + pJugador.getSaldoJugador());
                console.log("------------------------------------------------------------------------------------");
            }
            else { //En caso de que no sea 10 el valor aleatorio, los numeros tenderan a ser distintos segun la funcion Random.
                for (var i = 0; i < slotsMaquina.length; i++) {
                    slotsMaquina[i] = getRandomInt(1, 10);
                    console.log("Slot " + i + " es igual a " + slotsMaquina[i]);
                }
                console.log("Usted ha perdido");
                pJugador.modificarSaldoJugador(-100);
                console.log("Al finalizar esta ronda su saldo de jugador a quedado asi: " + pJugador.getSaldoJugador());
                console.log("------------------------------------------------------------------------------------");
            }
            if (readlineSync.keyInYN('¿Desea continuar viciando y perdiendo su vida?')) {
                // 'Y' key was pressed.
                continuar = true;
                // Do something...
            }
            else {
                // Another key was pressed.
                console.log('Saliendo del tragamonedas de ${this.cantidadSlots} Slots');
                // Do something...
                continuar = false;
            }
        }
    };
    return Tragamoneda5Slots;
}(_00_Tragamonedas_1.Tragamonedas));
exports.Tragamoneda5Slots = Tragamoneda5Slots;
