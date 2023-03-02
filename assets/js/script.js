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

  const download_capture = document.querySelector('a[data-acao="download-capture"]');

  html2canvas(document.querySelector("#capture")).then(canvas => {
    const img = canvas;
    download_capture.href = img.toDataURL('image/png').replace("image/png", "image/octet-stream");
  });

  document.querySelector('.botao-baixar').addEventListener('click', () => {
    if(download_capture.href !== null){
      download_capture.click();
    }
  })

})();