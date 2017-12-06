function exercicio5() {
    /* Faça um programa que receba a medida em centímetros e exiba esse
número em polegadas. OBS: Uma polegada equivale a 2.5
centímetros. */
    //Entrada
    var centimetros = parseFloat(prompt("Digite o valor em centimetros para converter em polegadas"));
    // processamento
    var result = centimetros / 2.5;
    //saida
    alert("O valor em polegadas é " + result);
}

function exercicio6() {
    /** Faça um programa que receba a medida em polegadas e exiba esse
    número em centímetros. */
    //Entrada
    var polegadas = parseFloat(prompt("Digite o valor em polegadas para converter em centimetros"));
    //Processamento
    var result = polegadas * 2.5;
    //SAida
    alert("O valor em centimetros é: " + result);
}

function exercicio11() {
    /* .Faça um programa que receba um número inteiro do usuário e informe
    se este número é positivo ou negativo.*/
    //Entrada
    var numero = parseInt(prompt("Digite um valor"));
    //Processamento
    var positivo = numero >= 0;
    //SAida
    alert("O numero é: " + (positivo ? "Positivo" : "Negativo"));
}

function exercicio12() {
    /* .Faça um programa que receba um número do usuário e informe se
    este número é par ou ímpar. */
    //Entrada
    var numero = parseInt(prompt("Digite um valor"));
    //Processamento
    var par = numero % 2 != 1;
    //SAida
    if (numero == 0) {
        alert("O numero é neutro");
    } else {
        alert("O numero é: " + (par ? "Par" : "Impar"));
    }
}

function exercicio13() {
    /* Faça um programa que receba um número de usuário e exiba este
    número, apenas se for par */
    //Entrada
    var numero = parseInt(prompt("Digite um numero"));
    //Processamento
    var par = numero % 2 != 1;
    //SAida
    alert("Só exibe se o numero for par: " + (par ? numero : "é Impar"));
}

function exercicio14() {
    /* Faça um programa que receba o preço de um produto e o seu código
    de origem e imprima a sua procedência, utilizando uma estrutura IF
    sem o ELSE, para cada item abaixo. A procedência obedece a seguinte
    tabela:
    Código de Origem Procedência
    1 Sul
    2 Norte
    3 Leste
    4 Oeste
    5 ou 6 Nordeste
    7, 8 ou 9 Sudeste
    10 até 20 Centro-Oeste
    21 até 30 Sem definição */
    //Entrada
    var valorProduto = parseFloat(prompt("Digite o valor do Produto:"));
    var codigoProcedencia = parseInt(prompt("Digite o codigo de Procedencia:"));

    //Processamento
    console.time("ifSimples");
    var procedencia
    if (codigoProcedencia == 1) {
        procedencia = "Sul";
    }
    if (codigoProcedencia == 2) {
        procedencia = "Norte";
    }
    if (codigoProcedencia == 3) {
        procedencia = "Leste";
    }
    if (codigoProcedencia == 4) {
        procedencia = "Oeste";
    }
    if (codigoProcedencia == 5 || codigoProcedencia == 6) {
        procedencia = "Nordeste";
    }
    if (codigoProcedencia == 7 || codigoProcedencia == 8 || codigoProcedencia == 9) {
        procedencia = "Sudeste";
    }
    if (codigoProcedencia >= 10 && codigoProcedencia <= 20) {
        procedencia = "Centro-Oeste";
    }
    if (codigoProcedencia >= 21 && codigoProcedencia <= 30) {
        procedencia = "Sem definição";
    }
    console.timeEnd("ifSimples");
    console.time("ifConcatenado");
    if (codigoProcedencia == 1) {
        procedencia = "Sul";
    } else if (codigoProcedencia == 2) {
        procedencia = "Norte";
    } else if (codigoProcedencia == 3) {
        procedencia = "Leste";
    } else if (codigoProcedencia == 4) {
        procedencia = "Oeste";
    } else if (codigoProcedencia == 5 || codigoProcedencia == 6) {
        procedencia = "Nordeste";
    } else if (codigoProcedencia == 7 || codigoProcedencia == 8 || codigoProcedencia == 9) {
        procedencia = "Sudeste";
    } else if (codigoProcedencia >= 10 && codigoProcedencia <= 20) {
        procedencia = "Centro-Oeste";
    } else if (codigoProcedencia >= 21 && codigoProcedencia <= 30) {
        procedencia = "Sem definição";
    }
    console.timeEnd("ifConcatenado");
    console.time("Switch");
    switch (codigoProcedencia) {
        case 1:
            procedencia = "Sul";
            break;
        case 2:
            procedencia = "Norte";
            break;
        case 3:
            procedencia = "Leste";
            break;
        case 4:
            procedencia = "Oeste";
            break;
        case 5,
            6:
            procedencia = "Nordeste";
            break;
        case 7,
            8,
            9:
            procedencia = "Sudeste";
            break;
        default:
            if (codigoProcedencia >= 10 && codigoProcedencia <= 20) {
                procedencia = "Centro-Oeste";
            } else if (codigoProcedencia >= 21 && codigoProcedencia <= 30) {
                procedencia = "Sem definição";
            }
            break;
    }
    console.timeEnd("Switch");

    //SAida
    alert("o valor do produto é: " + valorProduto + " e sua procedencia é: " + procedencia);
}

function exercicio15() {
    /*.Faça um programa que receba 4 notas de um aluno, calcule e imprima
        a média aritmética das notas e a mensagem de APROVADO para média
        superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a
        mensagem de REPROVADO para média inferior a 5,0.
    */
    var qtd = 4;
    var notas = 0;
    for (var c = 1; c <= 4; c++) {
        notas += parseFloat(prompt("Digite a Nota" + c))
    }
    var media = notas / qtd;
    alert("Você " + (media < 5 ? "foi REPROVADO" : media >= 7 ? "foi APROVADO" : "ficou de RECUPERAÇÃO") + " sua media foi de: " + media);
}

function exercicioExtra() {
    /* Elabore um programa que solicite um numero entre 1 e 12.
     Você deve validar com if simples.
     Exiba o mês correspondente por Extenso,utilizando a estrutura if composto
    */

    var numero = parseInt(prompt("Digite um numero entre 1 e 12"))
    if (numero > 12 || numero < 1) {
        alert("Eu disse de 1 a 12!!");
    } else {
        var mes;
        if (numero == 1) {
            mes = "Janeiro";
        } else if (numero == 2) {
            mes = "Fevereiro";
        } else if (numero == 3) {
            mes = "Março";
        } else if (numero == 4) {
            mes = "Abril";
        } else if (numero == 5) {
            mes = "Maio";
        } else if (numero == 6) {
            mes = "Junho";
        } else if (numero == 7) {
            mes = "Julho";
        } else if (numero == 8) {
            mes = "Agosto";
        } else if (numero == 9) {
            mes = "Setembro";
        } else if (numero == 10) {
            mes = "Outubro";
        } else if (numero == 11) {
            mes = "Novembro";
        } else if (numero == 12) {
            mes = "Dezembro";
        }
        alert("O mês correspondente é: " + mes);
    }
}

function exercicioExtraComSwitch() {
    /* Elabore um programa que solicite um numero entre 1 e 12.
     Você deve validar com if simples.
     Exiba o mês correspondente por Extenso,utilizando a estrutura if composto
    */

    var numero = parseInt(prompt("Digite um numero entre 1 e 12"))
    var mes;
    switch (numero) {
        case 1:
            mes = "Janeiro";
            break;
        case 2:
            mes = "Fevereiro";
            break;
        case 3:
            mes = "Março";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Maio";
            break;
        case 6:
            mes = "Junho";
            break;
        case 7:
            mes = "Julho";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Setembro";
            break;
        case 10:
            mes = "Outubro";
            break;
        case 11:
            mes = "Novembro";
            break;
        case 12:
            mes = "Dezembro";
            break;
        default:
            alert("Eu disse de 1 a 12!!");
            break;
    }
    if (mes) {
        alert("O mês correspondente é: " + mes);
    }

}

function exercicioLoopNumeroPar() {
    var numero = 1;
    var tentativas = 0;
    while (numero % 2 == 1) {
        numero = parseInt(prompt("Digite um numero!"))
        if (isNaN(numero)) {
            numero = 1;
            alert("Digite apenas numeros pares; tentativas: " + ++tentativas);
            continue;
        }
        if (numero % 2 == 1) {
            alert("Digite apenas numeros pares; tentativas: " + (++tentativas));
        } else {
            alert("Numero Par: " + numero);
        }
    }
}

function exercicioLoopSomatoria() {
    /*    Faça um programa que receba 15 números inteiros e imprima na tela a somatória dos 15 números.     */
    var somatoria = 0;
    var qtd = parseInt(prompt("Digite a quantidade de numeros que deseja somar!"))
    var contador = 1;
    while (contador <= qtd) {
        var numero;
        do
        {
            numero = parseInt(prompt("Digite o " + contador + "° numero!"));
            if (isNaN(numero)) {
                alert("Digite um numero inteiro valido!!");
            }
        }
        while (isNaN(numero)) 
            somatoria += numero;
        contador++;
    }
    alert("A soma de todos os numeros é: " + somatoria);
}

function exercicioImprimirNumerosImpares(numero) {
    var text = "";
    var c = 0;
    while (numero >= c) {
        text += (c % 2 == 1
            ? c
            : "\n");
        c++;
    }
    alert(text);
}

function exercicioImprimirTabuada(numero) {
    var text = "";
    var c = 0;
    while (10 >= c) {
        text += numero + ' X ' + c + ' = ' + (numero * c) + '\n';
        c++;
    }
    alert(text);
}

function exercicioImprimirTabuadaDe1a10() {
    var text = "<div style='text-align:center;'>COM WHILE</div><div style='border:1px solid'>";
    var c = 1;
    while (10 >= c) {
        var c2 = 1;
        while (10 >= c2) {
            text += '<div style="display:inline-block; width:100px;">' + c2 + ' X ' + c + ' = ' + (c2 * c) + '</div>'
            c2++
        }
        text += '\n<br>';
        c++;
    }
    //window.open(text)
    document
        .getElementById("tabuadaDe1a10")
        .innerHTML = text + "</div>";
    document
        .getElementById("tabuadaDe1a10Link")
        .click();
    //document.write(text); alert(text);
}

function exercicioImprimirTabuadaDe1a10For() {
    var text = "<div style='text-align:center;'>COM FOR</div><div style='border:1px solid'>";
    for (var c = 1; 10 >= c; c++) {
        for (var c2 = 1; 10 >= c2; c2++) {
            text += '<div style="display:inline-block; width:100px;">' + c2 + ' X ' + c + ' = ' + (c2 * c) + '</div>'
        }
        text += '\n<br>';
    }
    //window.open(text)
    document
        .getElementById("tabuadaDe1a10")
        .innerHTML = text + "</div>";
    document
        .getElementById("tabuadaDe1a10Link")
        .click();
    //document.write(text); alert(text);
}

function exercicioImprimirTabuadaDe1a10DoWhile() {
    var text = "<div style='text-align:center;'>COM DO While</div><div style='border:1px solid'>";
    var c = 1;
    do
    {
        var c2 = 1;
        do
        {
            text += '<div style="display:inline-block; width:100px;">' + c2 + ' X ' + c + ' = ' + (c2 * c) + '</div>';
            c2++
        }
        while (10 >= c2) 
            text += '\n<br>';
        c++
    }
    while (10 >= c) 
        //window.open(text)
        document.getElementById("tabuadaDe1a10").innerHTML = text + "</div>";
    var heightPage = document.body.scrollHeight;
    window.scrollTo(0, heightPage);
    //document.write(text); alert(text);
}

function exercicioFuncoes() {
    var obj = {
        'somar': function (a, b) {
            return a + b;
        },
        'subtrair': function (a, b) {
            return a - b;
        },
        'multiplicar': function (a, b) {
            return a * b;
        },
        'dividir': function (a, b) {
            if (b == 0) {
                return "Nâo pode ter zero na divisão";
            }
            return a / b;
        }
    }
    var a = parseFloat(prompt("Digite o primeiro numero"))
    var b = parseFloat(prompt("Digite o segundo numero"))
    var o = prompt("Digite a operação numero")
    alert("Resultado da operação é : " + obj[o](a, b))
}

function exercicioObjeto(){
    obj = {
        resultado: null,
        a:null,
        b:null,
        somar:function(){
            this.resultado = this.a + this.b
            return this.result
        },
        iniciarValores:function(a,b){
            this.a = a,
            this.b = b
        }
    }
    obj.iniciarValores(1,2);
    alert("A Soma" + obj.somar());
}

function exercicioArray(){
    var teste = [];
    console.time("teste");
    while(teste.length < 100000000){
        teste.push("NOVO + " + teste.length);        
    }
    console.log(teste);
    console.timeEnd("teste");
}

function exercicioArrayComNumeros(){
    /* Faça um programa que solicite 5 numeros . 
    se for par multiplique por 2 e se for impar apenas guarde no array */
    var array = [];
    for(var c = 0; c <= 5 ; c++){
        var aux = parseFloat(prompt("Digite um numero: "));
        array.push(aux % 2 != 1 ? aux * 2 : aux) 
    }
    alert(array);
}

function exercicioArray37(){
    /** 37. Faça um programa que contenha um vetor de 10 elementos. 
     * Solicite ao usuário que digite números pares, inteiros, e os guarde no vetor. 
     * Para isso utilize a estrutura de repetição ENQUANTO. Ao final, 
     * exiba todos os valores com a estrutura de repetição PARA.  */

     var vt = [];
     var qtd = 10;     
     while(vt.length < qtd){
        vt.push(parseFloat(prompt("Digite o "+ (vt.length+1) + "° numero.")))
     }
     var text = "Numeros digitados: ";
     for(var c2 = 0; c2 < vt.length ; c2++){
        text += vt[c2] + " ";
     }
     alert(text);
}