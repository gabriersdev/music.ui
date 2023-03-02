// "use strict";

(() => {
  
  document.querySelectorAll('[data-recarrega-pagina]').forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload;
    })
  })
  
  document.querySelector('.botao-carregar-img').addEventListener('click', () => {
    document.querySelector('.input-file').click();
  })
  
  document.querySelectorAll('form.formulario').forEach(form => {
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => {
        switch(input.classList.value){
          case 'input-color':
            input.parentElement.querySelector('label.label-input-color').style.color = input.value.toUpperCase();
          break;

          case 'input-texto':
            const dataset = input.dataset.input;
            atualizarTextos(input.value, dataset, input.closest('form'));
          break;

          default:
            console.log('Há um erro na atribuição de classe para este elemento.');
          break;
        }
      })
    })
  })
  
  function atualizarTextos(valor, dataset, formulario){
    //!isEmpty
    switch(dataset.toLowerCase()){
      case 'verso':        
      case 'autor':
      case 'nome':
        atualizarTodosCardsGeracao(valor, dataset);
      break;

      default:
        console.log('Há um erro na filtragem do dataset classe para este elemento.');
      break;
    }

    function atualizarTodosCardsGeracao(valor, dataset){
      const secoes = formulario.closest('body').querySelectorAll('section.gerando-card');
      secoes.forEach(secao => {
        secao.querySelector(`[data-info=${dataset}]`).textContent = valor;
      })
    }
  }
  
  const download_capture = document.querySelector('a[data-acao="download-capture"]');
  const card = document.querySelector('#capture');
  
  document.querySelector('.botao-baixar').addEventListener('click', () => {
    card.style.borderRadius = '0';
    html2canvas(card).then(canvas => {
      const img = canvas;
      download_capture.href = img.toDataURL('image/png').replace("image/png", "image/octet-stream");
      download_capture.click();
    });
    card.style.borderRadius = '15px';
  })
  
})();