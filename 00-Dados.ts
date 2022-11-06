import { Jugador } from './00-Jugador';


//-------Funcion Aleatorio para generar los numeros------
function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
}

class Dados {
    private cantDados: number;
    private sumaDados: number;
    private pozoDados: number;
    private apuestaMinimaDados: number;

    constructor(pCantDados: number, pSumaDados: number, pPozoDados: number, pApuestaMinimaDados: number){
        this.cantDados= pCantDados;
        this.sumaDados= pSumaDados;
        this.pozoDados= pPozoDados;
        this.apuestaMinimaDados = pApuestaMinimaDados;
    }

    public getCantDados(): number {
        return this.cantDados;
    }

    public setCantDados(cantDados: number): void {
        this.cantDados = cantDados;
    }

    public getSumaDados(): number {
        return this.sumaDados;
    }

    public setSumaDados(sumaDados: number): void {
        this.sumaDados = sumaDados;
    }

    public getPozoDados(): number {
        return this.pozoDados;
    }

    public setPozoDados(pozoDados: number): void {
        this.pozoDados = pozoDados;
    }

    public getApuestaMinimaDados(): number {
        return this.apuestaMinimaDados;
    }

    public setApuestaMinimaDados(apuestaMinimaDados: number): void {
        this.apuestaMinimaDados = apuestaMinimaDados;
    }

    public lanzarDados(): number{
        let dado: number = getRandomInt(1,6);
        return dado; 
    }

    public jugarDados(){
        let dado1: number= 0;
        let dado2: number =0;
        let suma: number= 0;


    }
}