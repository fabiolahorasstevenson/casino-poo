"use strict";
exports.__esModule = true;
exports.Blackjack = void 0;
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
//-------Funcion Aleatorio para generar los numeros------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//-------------Comienzo de la clase Blackjack----------
var Blackjack = /** @class */ (function () {
    function Blackjack(paramApuestaMinima) {
        this.apuestaMinima = paramApuestaMinima;
    }
    Blackjack.prototype.jugarBlackjack = function (pJugador) {
        console.clear();
        console.log("------------------------------------------------------------------------------------");
        console.log("< Bienvenido al juego de Blackjack >");
        console.log("------------------------------------------------------------------------------------");
        var continuarBlackjack = true;
        while (pJugador.getSaldoJugador() >= this.apuestaMinima && continuarBlackjack === true) {
            var sumaJugador = 0;
            var continuarCasino = true;
            var continuarJugador = true;
            var contadorVueltas = 1;
            while (sumaJugador < 21 && continuarJugador === true) {
                if (contadorVueltas === 1) {
                    console.log("------------------------------------------------------------------------------------");
                    console.log("> Inicia la mano Jugador");
                    console.log("-------------------------Vuelta Jugador numero " + contadorVueltas + "---------------------------------------");
                }
                else {
                    console.log("-------------------------Vuelta Jugador numero " + contadorVueltas + "--------------------------------------");
                }
                switch (getRandomInt(1, 14)) {
                    case 1:
                        console.log(">Ha salido el As (Puede valer 1 u 11)");
                        if (readlineSync.keyInYN('Presione Y = 1, o N = 11')) {
                            console.log("> Ha elegido hacer valer el As 1");
                            sumaJugador += 1;
                        }
                        else {
                            console.log("> Ha elegido hacer valer el As 11");
                            sumaJugador += 11;
                        }
                        break;
                    case 2:
                        console.log("> Carta 2");
                        sumaJugador += 2;
                        break;
                    case 3:
                        console.log("> Carta 3");
                        sumaJugador += 3;
                        break;
                    case 4:
                        console.log("> Carta 4");
                        sumaJugador += 4;
                        break;
                    case 5:
                        console.log("> Carta 5");
                        sumaJugador += 5;
                        break;
                    case 6:
                        console.log("> Carta 6");
                        sumaJugador += 6;
                        break;
                    case 7:
                        console.log("> Carta 7");
                        sumaJugador += 7;
                        break;
                    case 8:
                        console.log("> Carta 8");
                        sumaJugador += 8;
                        break;
                    case 9:
                        console.log("> Carta 9");
                        sumaJugador += 9;
                        break;
                    case 10:
                        console.log("> Carta 10");
                        sumaJugador += 10;
                        break;
                    case 11:
                        console.log("> Carta J (vale 10)");
                        sumaJugador += 10;
                        break;
                    case 12:
                        console.log("> Carta Q (vale 10)");
                        sumaJugador += 10;
                        break;
                    case 13:
                        console.log("> Carta K (vale 10)");
                        sumaJugador += 10;
                        break;
                }
                if (sumaJugador > 21) { //Jugador se pasa de 21. Automáticamente pierde
                    console.log("-->La sumaJugador total es: ".concat(sumaJugador));
                    console.log(">Usted ha perdido!");
                    pJugador.modificarSaldoJugador(-100);
                    console.log("--> Al finalizar esta ronda su saldo de jugador ha quedado asi: " + pJugador.getSaldoJugador());
                    continuarJugador = false; // >:(
                    continuarCasino = false; // >:(
                }
                else { //Jugador por debajo o igual de 21, sigue jugando. Confirma si sigue o se queda.
                    console.log("-->La sumaJugador total es: ".concat(sumaJugador));
                    if (readlineSync.keyInYN('Presione Y para pedir, o N para quedarse')) { //Jugador sigue pidiendo
                        continuarJugador = true;
                        continuarCasino = false;
                    }
                    else { //Jugador se queda
                        continuarJugador = false;
                        continuarCasino = true;
                    }
                }
                contadorVueltas++;
            } //-------------------------fin jugador
            // --------------------------juega el Casino
            contadorVueltas = 1;
            var sumaCasino = 0;
            while (continuarCasino === true) {
                if (contadorVueltas === 1) {
                    console.log("------------------------------------------------------------------------------------");
                    console.log("                                                             >Inicia la mano Casino.");
                    console.log("--------------------------------------------------------------Vuelta Casino numero " + contadorVueltas);
                }
                else {
                    console.log("--------------------------------------------------------------Vuelta Casino numero " + contadorVueltas);
                }
                switch (getRandomInt(1, 14)) {
                    case 1:
                        console.log("> Ha salido el As");
                        if (sumaCasino + 11 <= 21) {
                            console.log("--> El Casino ha elejido hacer valer el As 11");
                            sumaCasino += 11;
                        }
                        else {
                            console.log("--> El Casino ha elejido hacer valer el As 1");
                            sumaCasino += 1;
                        }
                        break;
                    case 2:
                        console.log("> Carta 2");
                        sumaCasino += 2;
                        break;
                    case 3:
                        console.log("> Carta 3");
                        sumaCasino += 3;
                        break;
                    case 4:
                        console.log("> Carta 4");
                        sumaCasino += 4;
                        break;
                    case 5:
                        console.log("> Carta 5");
                        sumaCasino += 5;
                        break;
                    case 6:
                        console.log("> Carta 6");
                        sumaCasino += 6;
                        break;
                    case 7:
                        console.log("> Carta 7");
                        sumaCasino += 7;
                        break;
                    case 8:
                        console.log("> Carta 8");
                        sumaCasino += 8;
                        break;
                    case 9:
                        console.log("> Carta 9");
                        sumaCasino += 9;
                        break;
                    case 10:
                        console.log("> Carta 10");
                        sumaCasino += 10;
                        break;
                    case 11:
                        console.log("> Carta J (vale 10)");
                        sumaCasino += 10;
                        break;
                    case 12:
                        console.log("> Carta Q (vale 10)");
                        sumaCasino += 10;
                        break;
                    case 13:
                        console.log("> Carta K (vale 10)");
                        sumaCasino += 10;
                        break;
                }
                console.log("--> En esta mano el casino suma " + sumaCasino);
                if (sumaCasino > 21) { //Casino se pasa de 21 y pierde
                    console.log("> El casino se paso, y usted gana!");
                    pJugador.modificarSaldoJugador(100);
                    console.log("--> Al finalizar esta ronda su saldo de jugador ha quedado asi: " + pJugador.getSaldoJugador());
                    continuarCasino = false;
                }
                else if (sumaCasino > sumaJugador && sumaCasino <= 21) { //Si el Casino sumas mas que el jugador, y menos de 21, gana
                    console.log("> El casino gano, lo lamento!");
                    pJugador.modificarSaldoJugador(-100);
                    console.log("--> Al finalizar esta ronda su saldo de jugador ha quedado asi: " + pJugador.getSaldoJugador());
                    continuarCasino = false;
                }
                else {
                    continuarCasino = true;
                }
                if (sumaCasino === 21 && sumaJugador === 21) {
                    console.log(" EMPATE !!! El Jugador GANA !!!");
                    pJugador.modificarSaldoJugador(100);
                    console.log("--> Al finalizar esta ronda su saldo de jugador ha quedado asi: " + pJugador.getSaldoJugador());
                    continuarCasino = false;
                }
                contadorVueltas++;
            }
            if (readlineSync.keyInYN('Presione Y para seguir jugando al Blackjack, o N para salir al menu principal del Casino')) {
                continuarBlackjack = true;
                console.clear();
            }
            else {
                continuarBlackjack = false;
            }
        }
    };
    return Blackjack;
}());
exports.Blackjack = Blackjack;
