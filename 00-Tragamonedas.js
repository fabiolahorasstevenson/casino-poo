"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
//-------Interactuador de lineas de comando por terminal------
var readlineSync = require('readline-sync');
//-------Funcion Aleatorio para generar los numeros------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//-------------Comienzo de la clase Tragamonedas----------
var Tragamonedas = /** @class */ (function () {
    //protected Casino: Casino;
    function Tragamonedas(paramCantSlots, paramApuestaMinima, paramSaldoJugador) {
        this.cantidadSlots = paramCantSlots;
        this.apuestaMinima = paramApuestaMinima;
        this.saldoJugador = paramSaldoJugador;
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
    Tragamonedas.prototype.jugarTragamonedas = function (pJugador) {
        var continuar = true;
        while (pJugador.getSaldoJugador() >= this.getApuestaMinima() && continuar === true) {
            console.log("En esta ronda su saldo de jugador es: " + pJugador.getSaldoJugador());
            var slotsMaquina = new Array(this.cantidadSlots);
            if (getRandomInt(0, 2) === 1) { //Al cumplirse la condicion de que sea 1, quiere decir que los numeros de los slots debes ser iguales.
                var numeroGanador = getRandomInt(1, 10); //Creo una variable para guardar el numero que se repetira en los slots.
                for (var i = 0; i < slotsMaquina.length; i++) { //Recorro el array de slots e igualo cada elemento al valor ganador.
                    slotsMaquina[i] = numeroGanador;
                    console.log("numero del slot " + i + " es igual a " + slotsMaquina[i]);
                }
                console.log("Usted ha ganado!!!!");
                pJugador.modificarSaldoJugador(100);
                console.log("Al finalizar esta ronda su saldo de jugador a quedado asi: " + pJugador.getSaldoJugador());
                console.log("------------------------------------------------------------------------------------");
            }
            else { //En caso de que no sea 10 el valor aleatorio, los numeros tenderan a ser distintos segun la funcion Random.
                for (var i = 0; i < slotsMaquina.length; i++) {
                    slotsMaquina[i] = getRandomInt(1, 10);
                    console.log("numero del slot " + i + " es igual a " + slotsMaquina[i]);
                }
                console.log("Usted ha perdido");
                pJugador.modificarSaldoJugador(-100);
                console.log("Al finalizar esta ronda su saldo de jugador a quedado asi: " + pJugador.getSaldoJugador());
                console.log("------------------------------------------------------------------------------------");
            }
            if (readlineSync.keyInYN('Desea continuar viciando y perdiendo su vida?')) {
                // 'Y' key was pressed.
                continuar = true;
                // Do something...
            }
            else {
                // Another key was pressed.
                console.log("Saliendo del tragamonedas de ".concat(this.cantidadSlots, " Slots"));
                // Do something...
                continuar = false;
            }
        }
        // Ver por qué no funciona 
        // this.Casino.interaccionCasino();
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
