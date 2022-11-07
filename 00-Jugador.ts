  export class Jugador{
  protected jugador: string;
  protected saldoJugador: number;

  public constructor(pJugador: string, pSaldoJugador: number){
      this.jugador = pJugador;
      this.saldoJugador = pSaldoJugador;
  }

  public comprarSaldo(pSaldoJugador: number) {
      this.saldoJugador = this.saldoJugador+ pSaldoJugador;
  }

  public modificarSaldoJugador(pSaldoJugador: number) {
      this.saldoJugador = this.saldoJugador+ pSaldoJugador;
  }

  public getSaldoJugador(): number {
      return this.saldoJugador
  }

        
  }