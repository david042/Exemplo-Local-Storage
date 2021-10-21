var valor = 0;

$(document).on("click", "#salvar", function(){
  var dados = {nome: $("#nome").val(), end: $("#endereco").val()};
  localStorage.setItem(valor, JSON.stringify(dados));
  valor++;
  $("#nome").val("");
  $("#endereco").val("");
})

$(document).on("click", "#buscar", function(){
  var pessoa = JSON.parse(localStorage.getItem($("#identificador").val()));
  $("#nomeBusca").val(pessoa.nome);
  $("#enderecoBusca").val(pessoa.end);
})

$(document).on("click", "#limpar", function(){
  localStorage.clear();
  limparCampos();
  valor = 0;
})

$(document).on("click", "#remover", function(){
  localStorage.removeItem($("#identificador").val());
  limparCampos();
})

function limparCampos(){
  $("#nome").val("");
  $("#endereco").val("");
  $("#identificador").val("");
  $("#nomeBusca").val("");
  $("#enderecoBusca").val("");
}