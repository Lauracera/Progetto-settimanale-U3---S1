// class Smartphone {
//   utente: string;
//   carica: number;
//   numeroChiamate: number;
//   ricarica?: any;
//   minutiChiamata?: any;
var PrimoUtente = /** @class */ (function () {
    function PrimoUtente(_utente, _carica, _numeroChiamate) {
        this.utente = _utente;
        this.carica = _carica;
        this.numeroChiamate = 0;
    }
    PrimoUtente.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
        console.log(this.carica);
    };
    PrimoUtente.prototype.chiamata = function (minutiDurata) {
        var costo = minutiDurata * 0.2;
        if (this.carica >= minutiDurata) {
            this.carica -= costo;
            this.numeroChiamate++;
            console.log("Costo chiamata ".concat(costo, "\u20AC"));
            console.log("credito residuo ".concat(this.carica, "\u20AC"));
        }
        else if (this.carica < minutiDurata) {
            console.log("Saldo insufficiente, ricaricare per effettuare la chiamata");
        }
        else if ((this.carica = 0)) {
            console.log("Saldo esaurito, ricaricare per effettuare la chiamata");
        }
    };
    PrimoUtente.prototype.numero404 = function () {
        return this.carica;
    };
    PrimoUtente.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    PrimoUtente.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return PrimoUtente;
}());
var FirstUtente = new PrimoUtente("Laura", 15, 0);
FirstUtente.ricarica(0);
FirstUtente.chiamata(3.0);
FirstUtente.chiamata(2.0);
FirstUtente.chiamata(1.0);
console.log("Dati del piano tariffa di ".concat(FirstUtente.utente, ":"));
console.log("Credito ".concat(FirstUtente.numero404(), "\u20AC:"));
console.log("Numero chiamate effettuate ".concat(FirstUtente.numeroChiamate, ":"));
// console.log(`Credito residuo ${FirstUtente.}:`);
FirstUtente.azzeraChiamate();
