"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(pJugador, pSaldoJugador) {
        this.jugador = pJugador;
        this.saldoJugador = pSaldoJugador;
    }
    Jugador.prototype.comprarSaldo = function (pSaldoJugador) {
        this.saldoJugador = this.saldoJugador + pSaldoJugador;
    };
    Jugador.prototype.modificarSaldoJugador = function (pSaldoJugador) {
        this.saldoJugador = this.saldoJugador + pSaldoJugador;
    };
    Jugador.prototype.getSaldoJugador = function () {
        return this.saldoJugador;
    };
    // Repensar - si tiene sentido o reutilizamos el comprar fichas
    Jugador.prototype.ganarSaldo = function (pSaldoJugador) {
        this.saldoJugador = this.saldoJugador + pSaldoJugador;
    };
    Jugador.prototype.cobrarSaldo = function (pSaldoJugador) {
        // Ir al casino a cambiar las fichas
        // Dinero ganado ? mostrar?
        console.log("Usted ha ganado $ ");
    };
    return Jugador;
}());
exports.Jugador = Jugador;
