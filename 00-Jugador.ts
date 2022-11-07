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

  // Repensar - si tiene sentido o reutilizamos el comprar fichas
  public ganarSaldo( pSaldoJugador: number): void{
      this.saldoJugador = this.saldoJugador+ pSaldoJugador;
  }

  public cobrarSaldo(pSaldoJugador:number): void{
      // Ir al casino a cambiar las fichas
      // Dinero ganado ? mostrar?
      console.log("Usted ha ganado $ ");  
  }

        
  }