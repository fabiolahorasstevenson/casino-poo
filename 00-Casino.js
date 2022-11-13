"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var _00_Jugador_1 = require("./00-Jugador");
var _00_Blackjack_1 = require("./00-Blackjack");
var _00_Dados_1 = require("./00-Dados");
var _00_Tragamonedas3Slots_1 = require("./00-Tragamonedas3Slots");
var _00_Tragamonedas5Slots_1 = require("./00-Tragamonedas5Slots");
//-------Interactuador de lineas de comando por terminal------
var readlineSync = require('readline-sync');
var Casino = /** @class */ (function () {
    function Casino(paramTragamonedas1, paramTragamonedas2, paramBlackjack, paramDados, pJugador) {
        this.tragamonedas1 = paramTragamonedas1;
        this.tragamonedas2 = paramTragamonedas2;
        this.blackjack = paramBlackjack;
        this.dados = paramDados;
        this.jugador = pJugador;
    }
    Casino.prototype.jugarTragamonedas1 = function (pJugador) {
        this.tragamonedas1.jugarTragamonedas(pJugador);
        this.interaccionCasino(); //le agregue esta linea para no salir del casino
    };
    Casino.prototype.jugarTragamonedas2 = function (pJugador) {
        this.tragamonedas2.jugarTragamonedas(pJugador);
        this.interaccionCasino(); //le agregue esta linea para no salir del casino
    };
    Casino.prototype.jugarBlackjack = function (pJugador) {
        this.blackjack.jugarBlackjack(pJugador);
        //this.interaccionCasino(); le agregue esta linea para no salir del casino
    };
    Casino.prototype.jugarDados = function (pJugador) {
        this.dados.jugarDados(pJugador);
        //this.interaccionCasino(); le agregue esta linea para no salir del casino
    };
    Casino.prototype.interaccionCasino = function () {
        console.log("interaccion");
        var salidaCasino = false;
        var volverIntentar = false;
        while (salidaCasino === false) {
            console.log("while");
            var juegos = ['Tragamonedas de 3 Slots', 'Tragamonedas de 5 Slots', 'Dados', 'Blackjack', 'Consultar saldo de jugador', 'Cargar saldo de jugador'], index = readlineSync.keyInSelect(juegos, 'Elija la opcion, juego, o cero para salir');
            volverIntentar = false;
            console.log("------------------------------------------------------------------------------------");
            switch (juegos[index]) {
                case 'Tragamonedas de 3 Slots':
                    if (this.jugador.getSaldoJugador() < 100 || this.jugador.getSaldoJugador() === undefined || this.jugador.getSaldoJugador() === null) {
                        console.log("No posee saldo suficiente para jugar al Tragamonedas de 3 Slots, cargue saldo y vuelva a intentar!");
                        salidaCasino = true;
                        volverIntentar = true;
                        console.log("------------------------------------------------------------------------------------");
                        break;
                    }
                    else {
                        console.log("<Bienvenido al juego de Tragamonedas de 3 Slots>");
                        console.log("------------------------------------------------------------------------------------");
                        this.jugarTragamonedas1(this.jugador);
                    }
                    break;
                case 'Tragamonedas de 5 Slots':
                    if (this.jugador.getSaldoJugador() < 100 || this.jugador.getSaldoJugador() === undefined || this.jugador.getSaldoJugador() === null) {
                        console.log("No posee saldo suficiente para jugar al Tragamonedas de 5 Slots, cargue saldo y vuelva a intentar!");
                        salidaCasino = true;
                        volverIntentar = true;
                        console.log("------------------------------------------------------------------------------------");
                        break;
                    }
                    else {
                        console.log("<Bienvenido al juego de Tragamonedas de 5 Slots>");
                        console.log("------------------------------------------------------------------------------------");
                        this.jugarTragamonedas2(this.jugador);
                    }
                    break;
                case 'Dados':
                    if (this.jugador.getSaldoJugador() < 100 || this.jugador.getSaldoJugador() === undefined || this.jugador.getSaldoJugador() === null) {
                        console.log("No posee saldo suficiente para jugar a los Dados, cargue saldo y vuelva a intentar!");
                        salidaCasino = true;
                        volverIntentar = true;
                        console.log("------------------------------------------------------------------------------------");
                        break;
                    }
                    else {
                        this.jugarDados(this.jugador);
                    }
                    break;
                case 'Blackjack':
                    if (this.jugador.getSaldoJugador() < 100 || this.jugador.getSaldoJugador() === undefined || this.jugador.getSaldoJugador() === null) {
                        console.log("No posee saldo suficiente para jugar al Blackjack, cargue saldo y vuelva a intentar!");
                        salidaCasino = true;
                        volverIntentar = true;
                        console.log("------------------------------------------------------------------------------------");
                        break;
                    }
                    else {
                        this.jugarBlackjack(this.jugador);
                    }
                    break;
                case 'Consultar saldo de jugador':
                    console.log(this.jugador.getSaldoJugador());
                    break;
                case 'Cargar saldo de jugador':
                    var cargarSaldo = readlineSync.questionInt("Ingrese la cantidad para agregar al saldo: ");
                    this.jugador.comprarSaldo(cargarSaldo);
                    console.log("<Se han agregado " + cargarSaldo + " al saldo del jugador!");
                    console.log("<El saldo actual es de " + this.jugador.getSaldoJugador());
                    break;
                case 'CANCEL':
                    console.log("IRINA");
                    console.log("Gracias vuelva pronto!!");
                    console.log("------------------------------------------------------------------------------------");
                    salidaCasino = true;
                    break;
                default:
                    index = 0;
                    console.log("IRINA");
                    console.log("Gracias vuelva pronto!!");
                    console.log("------------------------------------------------------------------------------------");
                    salidaCasino = true;
                    break;
            }
            if (volverIntentar) {
                console.log("intentar");
                this.interaccionCasino();
            }
        }
    };
    return Casino;
}());
exports.Casino = Casino;
// Dejamos acá por ahora
// Definir clase jugador 
var maquina1 = new _00_Tragamonedas3Slots_1.Tragamoneda3Slots(3, 100);
var maquina2 = new _00_Tragamonedas5Slots_1.Tragamoneda5Slots(5, 300);
var blackjack1 = new _00_Blackjack_1.Blackjack(100);
var dados1 = new _00_Dados_1.Dados(100);
var jugador1 = new _00_Jugador_1.Jugador('Pepe', 0);
var CasinoUshuaia = new Casino(maquina1, maquina2, blackjack1, dados1, jugador1);
var nombreJugador = readlineSync.question('Ingrese su nombre: ');
jugador1.setJugador(nombreJugador);
CasinoUshuaia.interaccionCasino();
