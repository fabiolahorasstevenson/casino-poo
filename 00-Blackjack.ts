
import { Jugador } from "./00-Jugador";

//-------Funcion Aleatorio para generar los numeros------
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//-------Interactuador de lineas de comando por terminal------
let readlineSync = require('readline-sync');

//-------------Comienzo de la clase Blackjack----------

export class Blackjack {
  protected apuestaMinima: number;

  constructor(paramApuestaMinima: number) {
    this.apuestaMinima = paramApuestaMinima;
  }


  public jugarBlackjack(pJugador: Jugador) {

    let sumaJugador: number = 0;
    let continuar: boolean = true;

    while (pJugador.getSaldoJugador() >= this.apuestaMinima && continuar === true) {
      //console.log("En esta ronda su saldo de jugador es: " + pJugador.getSaldoJugador())

      switch (getRandomInt(1, 14)) {
        case 1:
          console.log(">Ha salido el As (Puede valer 1 u 11)")
          if (readlineSync.keyInYN('Presione Y para aceptar el valor de 1, o N para hacerlo valer 11')) {
            console.log(">Ha elejido hacer valer el As 1")
            sumaJugador += 1
          } else {
            console.log(">Ha elejido hacer valer el As 11")
            sumaJugador += 11
          }
          break;

        case 2:
          console.log(">Carta 2")
          sumaJugador += 2
          break;

        case 3:
          console.log(">Carta 3")
          sumaJugador += 3
          break;

        case 4:
          console.log(">Carta 4")
          sumaJugador += 4
          break;

        case 5:
          console.log(">Carta 5")
          sumaJugador += 5
          break;

        case 6:
          console.log(">Carta 6")
          sumaJugador += 6
          break;

        case 7:
          console.log(">Carta 7")
          sumaJugador += 7
          break;

        case 8:
          console.log(">Carta 8")
          sumaJugador += 8
          break;

        case 9:
          console.log(">Carta 9")
          sumaJugador += 9
          break;

        case 10:
          console.log(">Carta 10")
          sumaJugador += 10
          break;

        case 11:
          console.log(">Carta J (vale 10)")
          sumaJugador += 10
          break;

        case 12:
          console.log(">Carta Q (vale 10)")
          sumaJugador += 10
          break;

        case 13:
          console.log(">Carta K (vale 10)")
          sumaJugador += 10
          break;
      }

      if (sumaJugador > 21) {
        console.log(`-->La sumaJugador total es: ${sumaJugador}`)
        console.log(">Usted ha perdido!")
        pJugador.modificarSaldoJugador(-100)
        console.log("-->Al finalizar esta ronda su saldo de jugador ha quedado asi: " + pJugador.getSaldoJugador())
        continuar = false;
      } else {
        console.log(`-->La sumaJugador total es: ${sumaJugador}`)

        if (readlineSync.keyInYN('Presione Y para continuar, o N para quedarse')) {
          continuar = true;
        } else {
          continuar = false;
        }
      }
    } //-------------------------fin jugador


    // --------------------------juega el Casino

    let sumaCasino: number = 0;
    continuar = true;


    if (sumaJugador > 21) {
      continuar = false;
    } else {
      console.log("------------------------------------------------------------------------------------")
      console.log(">Inicia la mano Casino")
      console.log("------------------------------------------------------------------------------------")
    }


    while (continuar === true) {

      switch (getRandomInt(1, 14)) {
        case 1:
          console.log(">Ha salido el As")
          if (sumaCasino + 11 <= 21) {
            console.log("-->El Casino ha elejido hacer valer el As 11")
            sumaCasino += 11
          } else {
            console.log("-->El Casino ha elejido hacer valer el As 1")
            sumaCasino += 1
          }
          break;

        case 2:
          console.log(">Carta 2")
          sumaCasino += 2
          break;

        case 3:
          console.log(">Carta 3")
          sumaCasino += 3
          break;

        case 4:
          console.log(">Carta 4")
          sumaCasino += 4
          break;

        case 5:
          console.log(">Carta 5")
          sumaCasino += 5
          break;

        case 6:
          console.log(">Carta 6")
          sumaCasino += 6
          break;

        case 7:
          console.log(">Carta 7")
          sumaCasino += 7
          break;

        case 8:
          console.log(">Carta 8")
          sumaCasino += 8
          break;

        case 9:
          console.log(">Carta 9")
          sumaCasino += 9
          break;

        case 10:
          console.log(">Carta 10")
          sumaCasino += 10
          break;

        case 11:
          console.log(">Carta J (vale 10)")
          sumaCasino += 10
          break;

        case 12:
          console.log(">Carta Q (vale 10)")
          sumaCasino += 10
          break;

        case 13:
          console.log(">Carta K (vale 10)")
          sumaCasino += 10
          break;
      }
      console.log("-->En esta mano el casino suma " + sumaCasino)
      if (sumaCasino > 21) {
        console.log(">El casino se paso, y usted gana!")
        pJugador.modificarSaldoJugador(100)
        console.log("-->Al finalizar esta ronda su saldo de jugador ha quedado asi: " + pJugador.getSaldoJugador())
        continuar = false;
      } else if (sumaCasino <= 21 && sumaCasino > sumaJugador) {
        console.log(">El casino gano, lo lamento!")
        pJugador.modificarSaldoJugador(-100)
        console.log("-->Al finalizar esta ronda su saldo de jugador ha quedado asi: " + pJugador.getSaldoJugador())
        continuar = false;
      } else {
        continuar = true
      }
    }
  }
}

//Bj21();