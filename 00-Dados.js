"use strict";
exports.__esModule = true;
exports.Dados = void 0;
//-------Interactuador de lineas de comando por terminal------
var readlineSync = require('readline-sync');
//-------Funcion Aleatorio para generar los numeros------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
var Dados = /** @class */ (function () {
    function Dados(pApuestaMinimaDados) {
        this.apuestaMinimaDados = pApuestaMinimaDados;
    }
    Dados.prototype.getApuestaMinimaDados = function () {
        return this.apuestaMinimaDados;
    };
    Dados.prototype.setApuestaMinimaDados = function (apuestaMinimaDados) {
        this.apuestaMinimaDados = apuestaMinimaDados;
    };
    Dados.prototype.lanzarDados = function () {
        var dado = getRandomInt(1, 7); //antes era (1,6): no toma el segundo valor = 6, sino 5. Se sube a 7
        return dado;
    };
    Dados.prototype.jugarDados = function (pJugador) {
        var dado1 = 0;
        var dado2 = 0;
        var suma = 0;
        var continuar = true;
        var contadorVueltas = 1;
        while (pJugador.getSaldoJugador() >= this.apuestaMinimaDados && continuar === true) {
            if (contadorVueltas === 1) {
                console.log("------------------------------------------------------------------------------------");
                console.log("> Bienvenido al Juedo de Dados!! 7 y 11 gana. 2,3 y 12 pierde");
                console.log("-------------------------Vuelta Jugador numero " + contadorVueltas + "---------------------------------------");
            }
            else {
                console.log("-------------------------Vuelta Jugador numero " + contadorVueltas + "--------------------------------------");
            }
            console.log("En esta ronda su saldo de jugador es: " + pJugador.getSaldoJugador());
            dado1 = this.lanzarDados();
            dado2 = this.lanzarDados();
            suma = dado1 + dado2;
            switch (suma) {
                case 7: // Jugador gana
                    console.log(">Dado1: ".concat(dado1, ", Dado2: ").concat(dado2, " = --> ").concat(dado1 + dado2));
                    console.log("Jugador gana!");
                    pJugador.modificarSaldoJugador(100);
                    break;
                case 11: // Jugador gana
                    console.log(">Dado1: ".concat(dado1, ", Dado2: ").concat(dado2, " = --> ").concat(dado1 + dado2));
                    console.log("Jugador gana!");
                    pJugador.modificarSaldoJugador(100);
                    break;
                case 2: // Jugador pierde
                    console.log(">Dado1: ".concat(dado1, ", Dado2: ").concat(dado2, " = --> ").concat(dado1 + dado2));
                    console.log("Jugador pierde");
                    pJugador.modificarSaldoJugador(-100);
                    break;
                case 3: // Jugador pierde
                    console.log(">Dado1: ".concat(dado1, ", Dado2: ").concat(dado2, " = --> ").concat(dado1 + dado2));
                    console.log("Jugador pierde");
                    pJugador.modificarSaldoJugador(-100);
                    break;
                case 12: // Jugador pierde
                    console.log(">Dado1: ".concat(dado1, ", Dado2: ").concat(dado2, " = --> ").concat(dado1 + dado2));
                    console.log("Jugador pierde");
                    pJugador.modificarSaldoJugador(-100);
                    break;
                case 4: // Jugador siegue sin descuento
                    console.log(">Dado1: ".concat(dado1, ", Dado2: ").concat(dado2, " = -->").concat(dado1 + dado2));
                    console.log("Jugador sigue tirando. No se descuenta nada");
                    break;
                case 5: // Jugador siegue sin descuento
                    console.log(">Dado1: ".concat(dado1, ", Dado2: ").concat(dado2, " = --> ").concat(dado1 + dado2));
                    console.log("Jugador sigue tirando. No se descuenta nada");
                    break;
                case 6: // Jugador siegue sin descuento
                    console.log(">Dado1: ".concat(dado1, ", Dado2: ").concat(dado2, " = --> ").concat(dado1 + dado2));
                    console.log("Jugador sigue tirando. No se descuenta nada");
                    break;
                case 9: // Jugador siegue sin descuento
                    console.log(">Dado1: ".concat(dado1, ", Dado2: ").concat(dado2, " = --> ").concat(dado1 + dado2));
                    console.log("Jugador sigue tirando. No se descuenta nada");
                    break;
                case 10: // Jugador siegue sin descuento
                    console.log(">Dado1: ".concat(dado1, ", Dado2: ").concat(dado2, " = --> ").concat(dado1 + dado2));
                    console.log("Jugador sigue tirando. No se descuenta nada");
                    break;
                default:
                    break;
            }
            console.log("En esta ronda el saldo de jugador queda asi: " + pJugador.getSaldoJugador());
            console.log("------------------------------------------------------------------------------------");
            if (readlineSync.keyInYN('Desea continuar jugando a los Dados?')) {
                continuar = true;
            }
            else {
                console.log("Saliendo del juego de Dados");
                continuar = false;
            }
            contadorVueltas++;
        }
    };
    return Dados;
}());
exports.Dados = Dados;
