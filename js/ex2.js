var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4
}


var total_aval = curso.n_aval_1_estrela + curso.n_aval_2_estrelas + curso.n_aval_3_estrelas + curso.n_aval_4_estrelas + curso.n_aval_5_estrelas;
var aval1 = curso.n_aval_1_estrela * 1;
var aval2 = curso.n_aval_2_estrelas * 2;
var aval3 = curso.n_aval_3_estrelas * 3;
var aval4 = curso.n_aval_4_estrelas * 4;
var aval5 = curso.n_aval_5_estrelas * 5;
var media_aval = ((aval1 + aval2 + aval3 + aval4 + aval5)/total_aval).toFixed(1);

document.getElementById("categoria_principal").innerHTML = curso.categoria[0];
document.getElementById("total_aval").innerHTML = total_aval;
document.getElementById("media_aval").innerHTML = media_aval;

var guardaNome={
    'nome':'Robson',
    'sobrenome':'Carneiro',
    'email':'robson@exem.com',
    'nome_completo': function() {
        var nomeCompleto = this.nome + '' + this.sobrenome;
        return nomeCompleto;   
    }

}
    var Ncompleto = guardaNome.nome_completo;
   


function html(){
    var Email = guardaNome.email;
    var Nome = guardaNome.nome;
    var Sobrenome = guardaNome.sobrenome;
    var html = "<div class='tableBox'>"+
    "<table>"+
    "<tr>"+
    "<th>Nome Completo</th>"+
    "<th>Email</th>"+
    "</tr>"+
        "<tr>"+
            "<td>"+Nome +' '+Sobrenome +"</td>"+
            "<td>"+Email+"</td>"+
        "</tr>"+
    "</table>"+
    
"</div>"
return html;

}
document.getElementById("tabela").innerHTML = html();
