"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(pJugador, pSaldoJugador) {
        this.jugador = pJugador;
        this.saldoJugador = pSaldoJugador;
    }
    Jugador.prototype.setJugador = function (pJugador) {
        this.jugador = pJugador;
    };
    Jugador.prototype.comprarSaldo = function (pSaldoJugador) {
        this.saldoJugador = this.saldoJugador + pSaldoJugador;
    };
    Jugador.prototype.modificarSaldoJugador = function (pSaldoJugador) {
        this.saldoJugador = this.saldoJugador + pSaldoJugador;
    };
    Jugador.prototype.getSaldoJugador = function () {
        return this.saldoJugador;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
