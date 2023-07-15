const form = document.getElementById('form-contato');
const contatos = [];
const numeros = [];

form.addEventListener('submit', function(e){
  e.preventDefault();
  adicionaContato();
  atualizaTabela();
})

let linhas = '';

function adicionaContato(){
  const nomeContato = document.getElementById('contato');
  const numeroContato = document.getElementById('numero');

  if(contatos.includes(nomeContato.value)){
    alert('O contato já está cadastrado')
  } else{
    contatos.push(nomeContato.value);
    numeros.push(numeroContato.value);

    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha

    nomeContato.value = '';
    numeroContato.value = '';
  }
}

function atualizaTabela(){
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}