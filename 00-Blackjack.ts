//-------Funcion Aleatorio para generar los numeros------

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//-------Interactuador de lineas de comando por terminal------
let readlineSync = require('readline-sync');

//-------------Comienzo de la clase Tragamonedas----------
export class Blackjack {



}




function Bj21() {
  let continuar: boolean = true;
  let suma: number = 0;

  while (continuar === true) {

    switch (getRandomInt(1, 14)) {
      case 1:
        console.log("Ha salido el As (Puede valer 1 u 11)")
        if (readlineSync.keyInYN('Presione Y para aceptar el valor de 1, o N para hacerlo valer 11')) {
          // 'Y' key was pressed.
          console.log("Ha elejido hacer valer el As 1")
          suma += 1
          // Do something...
        } else {
          // Another key was pressed.
          console.log("Ha elejido hacer valer el As 11")
          suma += 11
          // Do something...
        }
        break;

      case 2:
        console.log("Carta 2")
        suma += 2
        break;

      case 3:
        console.log("Carta 3")
        suma += 3
        break;

      case 4:
        console.log("Carta 4")
        suma += 4
        break;

      case 5:
        console.log("Carta 5")
        suma += 5
        break;

      case 6:
        console.log("Carta 6")
        suma += 6
        break;

      case 7:
        console.log("Carta 7")
        suma += 7
        break;

      case 8:
        console.log("Carta 8")
        suma += 8
        break;

      case 9:
        console.log("Carta 9")
        suma += 9
        break;

      case 10:
        console.log("Carta 10")
        suma += 10
        break;

      case 11:
        console.log("Carta J (vale 10)")
        suma += 10
        break;

      case 12:
        console.log("Carta Q (vale 10)")
        suma += 10
        break;

      case 13:
        console.log("Carta K (vale 10)")
        suma += 10
        break;
    }

    if (suma > 21) {
      console.log(`>La suma total es: ${suma}`)
      console.log("ha perdido esta mano")
      continuar = false;
    } else {
      console.log(`>La suma total es: ${suma}`)
      if (readlineSync.keyInYN('Presione Y para continuar, o N para quedarse')) {
        // 'Y' key was pressed.

        // Do something...
      } else {
        // Another key was pressed.
        continuar = false
        // Do something...
      }

    }
  }

}

Bj21();