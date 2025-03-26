function operacaoAssincrona(callback) {
  setTimeout(() => {
    console.log('Operação assíncrona finalizada');
    callback();
  }, 4000);
}

function proximaoperacao() {
  console.log('Callback executado');
}

operacaoAssincrona(proximaoperacao);