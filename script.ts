// class Smartphone {
//   utente: string;
//   carica: number;
//   numeroChiamate: number;
//   ricarica?: any;
//   minutiChiamata?: any;

//   constructor(
//     _utente: string,
//     _carica: number,
//     _numeroChiamate: number,
//     _ricarica?: any,
//     _minutiChiamata?: any
//   ) {
//     this.utente = _utente;
//     this.carica = _carica;
//     this.numeroChiamate = 0;
//     this.ricarica = _ricarica;
//     this.minutiChiamata = _minutiChiamata;
//   }

//   unaRicarica(): number {
//     let creditoRicarica = this.carica + this.ricarica;
//     return creditoRicarica;
//   }

//   minutiDurata(): number {
//     const costoChiamata = this.minutiChiamata * 0.2;
//     if (this.carica >= costoChiamata) {
//       this.carica -= costoChiamata;
//       this.numeroChiamate++;
//     } else {
//       console.log("Saldo insufficiente per effettuare la chiamata.");
//     }
//     return this.minutiChiamata;
//   }

//   numero404(): number {
//     //valore della carica disponibile
//     return this.carica;
//   }

//   getNumeroChiamate() {
//     return this.numeroChiamate;
//   }

//   azzeraChiamate(): number {
//     this.numeroChiamate = 0;
//     return this.getNumeroChiamate();
//   }
// }

// let telefono = new Smartphone("Laura", 15, 1, 10);
// console.log(`Dati del piano tariffa di ${telefono.utente}:`);
// console.log(`Credito di ${telefono.carica}`);

// console.log(`Durata chiamata: ${telefono.minutiChiamata}`);

// console.log(`${telefono.getNumeroChiamate()} chiamate effettuate`);
// console.log(`Ricarica di ${telefono.ricarica}€`);
// console.log(`Credito di ${telefono.unaRicarica()}€`);
// console.log(telefono.azzeraChiamate());
// console.log(`${telefono.getNumeroChiamate()} chiamate effettuate`);

interface Smartphone {
  utente: string;
  carica: number;
  numeroChiamate: number;

  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class PrimoUtente implements Smartphone {
  utente: string;
  carica: number;
  numeroChiamate: number;
  constructor(_utente: string, _carica: number, _numeroChiamate: number) {
    this.utente = _utente;
    this.carica = _carica;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
    console.log(this.carica);
  }

  chiamata(minutiDurata: number): void {
    const costo = minutiDurata * 0.2;
    if (this.carica >= minutiDurata) {
      this.carica -= costo;
      this.numeroChiamate++;
      console.log(`Costo chiamata ${costo}€`);
      console.log(`credito residuo ${this.carica}€`);
    } else if (this.carica < minutiDurata) {
      console.log("Saldo insufficiente, ricaricare per effettuare la chiamata");
    } else if ((this.carica = 0)) {
      console.log("Saldo esaurito, ricaricare per effettuare la chiamata");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const FirstUtente = new PrimoUtente("Laura", 15, 0);
FirstUtente.ricarica(0);
FirstUtente.chiamata(3.0);
FirstUtente.chiamata(2.0);
FirstUtente.chiamata(1.0);
console.log(`Dati del piano tariffa di ${FirstUtente.utente}:`);
console.log(`Credito ${FirstUtente.numero404()}€:`);
console.log(`Numero chiamate effettuate ${FirstUtente.numeroChiamate}:`);
// console.log(`Credito residuo ${FirstUtente.}:`);
FirstUtente.azzeraChiamate();

const divP = document.querySelector(".divP") as HTMLBodyElement;
const h6 = document.querySelector("#nomeUtente") as HTMLBodyElement;
h6.innerText = `Ciao ${FirstUtente.utente}!`;

divP!.appendChild(h6);

// const hMain = document.querySelector("#hMain") as HTMLBodyElement;
// const pSaldo = document.querySelector("#pSaldo") as HTMLBodyElement;
// pSaldo.innerText = `${FirstUtente.numero404()}€`;

// hMain!.appendChild(pSaldo);
const hMain = document.querySelector("#hMain") as HTMLBodyElement;
const hSaldo = document.querySelector("#hSaldo") as HTMLBodyElement;
const pSaldo = document.querySelector("#pSaldo") as HTMLBodyElement;

hSaldo.innerText = `Credito:`;
pSaldo.innerText = `${FirstUtente.numero404()}€`;

hMain!.appendChild(hSaldo);
hMain!.appendChild(pSaldo);
