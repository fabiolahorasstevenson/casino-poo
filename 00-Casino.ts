import { Tragamonedas } from "./00-Tragamonedas";
import { Jugador } from './00-Jugador';
import { Blackjack } from "./00-Blackjack";
import { Dados } from "./00-Dados";
import { Tragamoneda3Slots } from './00-Tragamonedas3Slots';
import { Tragamoneda5Slots } from './00-Tragamonedas5Slots';

//-------Interactuador de lineas de comando por terminal------
let readlineSync = require('readline-sync');

export class Casino {
  protected tragamonedas1: Tragamoneda3Slots;
  protected tragamonedas2: Tragamoneda5Slots;
  protected blackjack: Blackjack;
  protected dados: Dados;
  protected jugador: Jugador;


  public constructor(paramTragamonedas1: Tragamonedas, paramTragamonedas2: Tragamonedas, paramBlackjack: Blackjack, paramDados: Dados, pJugador: Jugador) {
    this.tragamonedas1 = paramTragamonedas1;
    this.tragamonedas2 = paramTragamonedas2;
    this.blackjack = paramBlackjack;
    this.dados = paramDados;
    this.jugador = pJugador;
  }

  public jugarTragamonedas1(pJugador: Jugador) {
    this.tragamonedas1.jugarTragamonedas(pJugador);
    this.interaccionCasino();//le agregue esta linea para no salir del casino
  }

  public jugarTragamonedas2(pJugador: Jugador) {
    this.tragamonedas2.jugarTragamonedas(pJugador);
    this.interaccionCasino();//le agregue esta linea para no salir del casino
  }

  public jugarBlackjack(pJugador: Jugador) {
    this.blackjack.jugarBlackjack(pJugador);
    //this.interaccionCasino(); le agregue esta linea para no salir del casino
  }

  public jugarDados(pJugador: Jugador) {
    this.dados.jugarDados(pJugador);
    //this.interaccionCasino(); le agregue esta linea para no salir del casino
  }

  public interaccionCasino() {

    let salidaCasino: boolean = false;

    while (salidaCasino === false) {

      let juegos = ['Tragamonedas de 3 Slots', 'Tragamonedas de 5 Slots', 'Dados', 'Blackjack', 'Consultar saldo de jugador', 'Cargar saldo de jugador'], index = readlineSync.keyInSelect(juegos, 'Elija la opcion, juego, o cero para salir');

      console.log("------------------------------------------------------------------------------------")

      switch (juegos[index]) {
        case 'Tragamonedas de 3 Slots':
          if (this.jugador.getSaldoJugador() < 100 || this.jugador.getSaldoJugador() === undefined || this.jugador.getSaldoJugador() === null) {
            console.log("No posee saldo suficiente para jugar al Tragamonedas de 3 Slots, cargue saldo y vuelva a intentar!")
            console.log("------------------------------------------------------------------------------------")
            this.interaccionCasino();
          } else {
            console.log("<Bienvenido al juego de Tragamonedas de 3 Slots>")
            console.log("------------------------------------------------------------------------------------")
            this.jugarTragamonedas1(this.jugador);
          }
          break;

        case 'Tragamonedas de 5 Slots':
          if (this.jugador.getSaldoJugador() < 100 || this.jugador.getSaldoJugador() === undefined || this.jugador.getSaldoJugador() === null) {
            console.log("No posee saldo suficiente para jugar al Tragamonedas de 5 Slots, cargue saldo y vuelva a intentar!")
            console.log("------------------------------------------------------------------------------------")
            this.interaccionCasino();
          } else {
            console.log("<Bienvenido al juego de Tragamonedas de 5 Slots>")
            console.log("------------------------------------------------------------------------------------")
            this.jugarTragamonedas2(this.jugador);
          }
          break;

        case 'Dados':
          if (this.jugador.getSaldoJugador() < 100 || this.jugador.getSaldoJugador() === undefined || this.jugador.getSaldoJugador() === null) {
            console.log("No posee saldo suficiente para jugar a los Dados, cargue saldo y vuelva a intentar!")
            console.log("------------------------------------------------------------------------------------")
            this.interaccionCasino();
          } else {
            this.jugarDados(this.jugador);
          }
          break;

        case 'Blackjack':
          if (this.jugador.getSaldoJugador() < 100 || this.jugador.getSaldoJugador() === undefined || this.jugador.getSaldoJugador() === null) {
            console.log("No posee saldo suficiente para jugar al Blackjack, cargue saldo y vuelva a intentar!")
            console.log("------------------------------------------------------------------------------------")
            this.interaccionCasino();
          } else {
            this.jugarBlackjack(this.jugador);
          }
          break;

        case 'Consultar saldo de jugador':
          console.log(this.jugador.getSaldoJugador());
          break;

        case 'Cargar saldo de jugador':
          let cargarSaldo: number = readlineSync.questionInt("Ingrese la cantidad para agregar al saldo: ");
          this.jugador.comprarSaldo(cargarSaldo);
          console.log("<Se han agregado " + cargarSaldo + " al saldo del jugador!");
          console.log("<El saldo actual es de " + this.jugador.getSaldoJugador());
          break;

        case 'CANCEL':
          console.log("Gracias vuelva pronto!!");
          console.log("------------------------------------------------------------------------------------")
          salidaCasino = true;
          break;
        default:
          index = 0;
          console.log("Gracias vuelva pronto!!")
          console.log("------------------------------------------------------------------------------------")
          salidaCasino = true;
          break;
      }
      
    }
  }
}

// Dejamos acá por ahora
// Definir clase jugador 

let maquina1 = new Tragamoneda3Slots(3, 100);
let maquina2 = new Tragamoneda5Slots(5, 300);
let blackjack1 = new Blackjack(100)
let dados1 = new Dados(100)
let jugador1: Jugador = new Jugador('Pepe', 0);

let CasinoUshuaia = new Casino(maquina1, maquina2, blackjack1, dados1, jugador1);

let nombreJugador = readlineSync.question('Ingrese su nombre: ');
jugador1.setJugador(nombreJugador);
CasinoUshuaia.interaccionCasino();