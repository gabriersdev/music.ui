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

  document.querySelectorAll('.input-color').forEach(input => {
    input.addEventListener('input', () => {
      input.parentElement.querySelector('label.label-input-color').style.color = input.value.toUpperCase();
    })
  })

})();