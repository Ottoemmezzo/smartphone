var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SmartPhoneAb = /** @class */ (function () {
    function SmartPhoneAb(_entita, _num) {
        this.credito = _entita;
        this.numeroChiamate = _num;
    }
    SmartPhoneAb.prototype.ricarica = function (credito) {
        this.credito = this.credito + credito;
        console.log("Hai ricaricato:", credito, "Credito rsiduo:", this.credito);
    };
    SmartPhoneAb.prototype.chiamata = function (durata) {
        this.numeroChiamate++;
        this.credito = this.credito - (durata * 0.2);
    };
    SmartPhoneAb.prototype.numero404 = function () {
        console.log("Credito residuo:", this.credito);
        return this.credito;
    };
    SmartPhoneAb.prototype.getNumeroChiamate = function () {
        console.log("Ha effetuato:", this.numeroChiamate);
        return this.numeroChiamate;
    };
    SmartPhoneAb.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SmartPhoneAb;
}());
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(_entita, _num) {
        var _this = _super.call(this, _entita, _num) || this;
        _this.credito = _entita;
        _this.numeroChiamate = _num;
        return _this;
    }
    return SmartPhone;
}(SmartPhoneAb));
var primo = new SmartPhone(10, 3);
var secondo = new SmartPhone(15, 6);
var terzo = new SmartPhone(20, 1);
primo.numero404();
primo.ricarica(5);
primo.chiamata(50);
primo.numero404();
console.log("Seconda chiamata");
primo.ricarica(20);
primo.chiamata(30);
primo.numero404();
primo.getNumeroChiamate();
console.log("Azzero chiamate");
primo.azzeraChiamate();
console.log("Chiamate azzerate.", primo.getNumeroChiamate());
console.log("Secondo utente");
secondo.numero404();
secondo.ricarica(5);
secondo.chiamata(50);
secondo.numero404();
console.log("Seconda chiamata");
secondo.ricarica(20);
secondo.chiamata(30);
secondo.numero404();
secondo.getNumeroChiamate();
console.log("Azzero chiamate");
secondo.azzeraChiamate();
console.log("Chiamate azzerate.", secondo.getNumeroChiamate());
console.log("Terzo utente");
terzo.numero404();
terzo.ricarica(5);
terzo.chiamata(50);
terzo.numero404();
console.log("Seconda chiamata");
terzo.ricarica(20);
terzo.chiamata(30);
terzo.numero404();
terzo.getNumeroChiamate();
console.log("Azzero chiamate");
terzo.azzeraChiamate();
console.log("Chiamate azzerate.", terzo.getNumeroChiamate());
