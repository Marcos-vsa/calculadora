const prompt = require ("prompt-sync")();


class Calculadora {
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    soma(){
        return this.num1 + this.num2 ;
    }
    subtracao(){
        return this.num1 - this.num2 ; 
    }
    multiplicacao(){
        return this.num1 * this.num2 ;
    }
    divisao(){
        return this.num1 /this.num2 ; 
    }
}

do{
    console.log("\nMenu:\n1- soma\n2- subtração\n3- multiplicação\n4- Divisão");
    var operacoes = Number(prompt("Qual operação você deseja executar ?"));
    if(operacoes != 0){
        var num1 = Number(prompt("Digite um número: "));
        var num2 = Number(prompt("Digite mais um número: ")); 
    
    const calculadora1 = new Calculadora(num1,num2)
    switch(operacoes){
        case 1 : 
            console.log (calculadora1.soma(num1,num2)) 
            break
        case 2 : 
            console.log(calculadora1.subtracao(num1,num2))
            break
        case 3 : 
            console.log(calculadora1.multiplicacao(num1,num2))
            break
        case 4 : 
            console.log(calculadora1.divisao(num1,num2))
            break
        default:
            console.log("ERROR")
            break
        }
    }
    
}while(operacoes!=0)







