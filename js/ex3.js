//01-
    document.getElementById("converter").onclick = function() {
        var temp = document.getElementById("temp_celsius").value;
        var tem = (9 * temp / 5) + 32; 
        document.getElementById("temp_fahr").innerHTML = tem;
        
    }
//02

/*for (var a = 1930; a <= 2018 ; a++) {
    console.log(a);
}

document.getElementById("anos_copa").innerHTML = a;  */

//03
//O aluno para ser aprovado precisa ter, no mínimo 70% de presença (o total de aulas é 20)
//O aluno para ser aprovado precisa ter média maior ou igual a 6.5
//Caso o aluno não seja aprovado, o programa precisa dizer se foi por motivo de média insuficiente, por faltas ou pelos dois motivos.

document.getElementById("calcular").onclick = function() {
var N1 = document.getElementById("nota1").value;
var N2 = document.getElementById("nota2").value;
var faltas = document.getElementById("n_faltas").value;
var media = (parseInt(N1) + parseInt(N2))/2;
if (media < 6.5 && faltas > 6) {
    var resposta = 'Aluno(a) reprovado por média insuficiente e por faltas';
    document.getElementById("result").innerHTML = resposta;
} else {
    console.log( 'O aluno foi reprovado' );
}

}