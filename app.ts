interface SmartPhoneIn{
    credito:number;
    numeroChiamate:number;
    ricarica(entita:number):void;
    chiamata(durata:number):void;
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamate():void;
}

 class SmartPhone implements SmartPhoneIn{
    credito: number;
    numeroChiamate: number;
    constructor(_entita:number,_num:number)
    {
        this.credito=_entita;
        this.numeroChiamate=_num;
           
    }
    public ricarica(credito: number): void {
        this.credito= this.credito+credito;
        console.log("Hai ricaricato:",credito,"Credito residuo:",this.credito);
        
    }
    public chiamata(durata: number): void {
        this.numeroChiamate++;
        this.credito=this.credito-(durata*0.2);
    }
    public numero404(): number {
        console.log("Credito residuo:",this.credito);
        return this.credito;
    }
    public getNumeroChiamate(): number {
        console.log("Ha effetuato:",this.numeroChiamate);
        return this.numeroChiamate;
        
    }
    public azzeraChiamate(): void {
        this.numeroChiamate=0;
    }
    
}



let primo= new SmartPhone(10,3);
let secondo= new SmartPhone(15,6);
let terzo= new SmartPhone(20,1);

primo.numero404();
primo.ricarica(5);
primo.chiamata(50);
primo.numero404();
console.log("Seconda chiamata")
primo.ricarica(20);
primo.chiamata(30);
primo.numero404();
primo.getNumeroChiamate();
console.log("Azzero chiamate");

primo.azzeraChiamate();
console.log("Chiamate azzerate.",primo.getNumeroChiamate());
console.log("Secondo utente");

secondo.numero404();
secondo.ricarica(5);
secondo.chiamata(50);
secondo.numero404();
console.log("Seconda chiamata")
secondo.ricarica(20);
secondo.chiamata(30);
secondo.numero404();
secondo.getNumeroChiamate();
console.log("Azzero chiamate");

secondo.azzeraChiamate();
console.log("Chiamate azzerate.",secondo.getNumeroChiamate());

console.log("Terzo utente");

terzo.numero404();
terzo.ricarica(5);
terzo.chiamata(50);
terzo.numero404();
console.log("Seconda chiamata")
terzo.ricarica(20);
terzo.chiamata(30);
terzo.numero404();
terzo.getNumeroChiamate();
console.log("Azzero chiamate");

terzo.azzeraChiamate();
console.log("Chiamate azzerate.",terzo.getNumeroChiamate());
