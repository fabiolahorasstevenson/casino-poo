"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var _00_Tragamonedas_1 = require("./00-Tragamonedas");
var _00_Jugador_1 = require("./00-Jugador");
//-------Interactuador de lineas de comando por terminal------
var readlineSync = require('readline-sync');
var Casino = /** @class */ (function () {
    function Casino(paramTragamonedas1, pJugador) {
        this.tragamonedas1 = paramTragamonedas1;
        this.jugador = pJugador;
    }
    Casino.prototype.jugarTragamonedas1 = function (pJugador) {
        this.tragamonedas1.jugarTragamonedas(pJugador);
    };
    Casino.prototype.interaccionCasino = function () {
        var salidaCasino = false;
        var jugador1 = new _00_Jugador_1.Jugador('Pepe', 100);
        while (salidaCasino === false) {
            var juegos = ['Tragamonedas1', 'Tragamonedas2', 'Dados', 'Consultar saldo de jugador', 'Cargar saldo de jugador'], index = readlineSync.keyInSelect(juegos, 'Elija la opcion, juego, o cero para salir');
            console.log("------------------------------------------------------------------------------------");
            switch (juegos[index]) {
                case 'Tragamonedas1':
                    if (jugador1.getSaldoJugador() < 100 || jugador1.getSaldoJugador() === undefined || jugador1.getSaldoJugador() === null) {
                        console.log("No posee saldo suficiente para jugar, cargue saldo y vuelva a intentar!");
                        console.log("------------------------------------------------------------------------------------");
                        this.interaccionCasino();
                    }
                    else {
                        console.log("<Bienvenido al juego de Tragamonedas1");
                        console.log("------------------------------------------------------------------------------------");
                        this.jugarTragamonedas1(jugador1);
                    }
                    break;
                case 'Tragamonedas2':
                    console.log("<Bienvenido al juego de Tragamonedas2 -variante del 1ero [void] ");
                    console.log("------------------------------------------------------------------------------------");
                    break;
                case 'Dados':
                    console.log("<Bienvenido al juego de Dados [void] ");
                    console.log("------------------------------------------------------------------------------------");
                    break;
                case 'Consultar saldo de jugador':
                    console.log(jugador1.getSaldoJugador());
                    break;
                case 'Cargar saldo de jugador':
                    var cargarSaldo = readlineSync.questionInt("ingrese la cantidad para agregar al saldo: ");
                    jugador1.comprarSaldo(cargarSaldo);
                    console.log("<Se han agregado " + cargarSaldo + " al saldo del jugador!");
                    console.log("<El saldo actual es de " + jugador1.getSaldoJugador());
                    break;
                default:
                    index = 0;
                    console.log("gracias vuelvas prontos ");
                    console.log("------------------------------------------------------------------------------------");
                    break;
            }
            if (index === 0) {
                salidaCasino = true;
            }
        }
    };
    return Casino;
}());
exports.Casino = Casino;
// Dejamos acá por ahora
// Definir clase jugador 
var maquina1 = new _00_Tragamonedas_1.Tragamonedas(3, 100, 1000);
var jugador1 = new _00_Jugador_1.Jugador('Pepe', 100);
var CasinoUshuaia = new Casino(maquina1, jugador1);
//maquina1.setCasinoPadre(CasinoUshuaia);
CasinoUshuaia.interaccionCasino();
