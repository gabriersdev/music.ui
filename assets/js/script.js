"use strict";

import { isEmpty } from './módulos/utilitarios.js';

(() => {
  
  document.querySelectorAll('[data-recarrega-pagina]').forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload;
    })
  })
  
  document.querySelector('.botao-carregar-img').addEventListener('click', () => {
    document.querySelector('.input-file').click();
  })
  
  const input_file = document.querySelector('.input-file');
  input_file.addEventListener('change', function(){
    const imagem = input_file.files[0];
    //Verificar se a imagem foi definida
    
    const image_lida = new FileReader();
    
    if(!isEmpty(imagem) && tipoValido(imagem)){
      //Verificar tipo de arquivos PNG ou JPG

      image_lida.readAsDataURL(imagem);
      
      //Atualizar nome do botão...
      //Atualizar tamanho do arquivo...
      
      image_lida.addEventListener('loadend', function(evento){
        document.querySelectorAll('.imagem').forEach(imagem => {
          imagem.src = evento.target.result
          imagem.classList.value = 'imagem';
        });
      }) 
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Arquivo inválido',
        text: 'O formato do arquivo não é uma imagem PNG ou JPG ou está corrompido.'
      })
    }
    
  });

  function tipoValido(arquivo){
    const tipo = arquivo.type.toString().split('/')[1].toLowerCase();
    return tipo == 'png' || tipo == 'jpg';
  }
  
  document.querySelectorAll('form.formulario').forEach(form => {
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => {
        switch(input.classList.value){
          case 'input-color':
          atualizarCores(input);
          break;
          
          case 'input-texto':
          atualizarTextos(input);
          break;
          
          case 'input-file':
          //
          break;

          default:
          console.log('Há um erro na atribuição de classe para este elemento.');
          break;
        }
      })
    })
  })
  
  function atualizarCores(input){
    //Atualiza a cor do ícone (label) do input:color
    const valor = input.value.toUpperCase()
    input.parentElement.querySelector('label.label-input-color').style.color = valor;
    const datasetInputTexto = input.parentElement.querySelector('input.input-texto').dataset.input;
    
    switch(datasetInputTexto){
      case 'verso':        
      case 'autor':
      case 'nome':
      atualizarTodosCardsGeracao(valor, datasetInputTexto, input.closest('form'), 'cores');
      break;
      
      default:
      console.log('Há um erro na filtragem do dataset classe para este elemento.');
      break;
    }
  }
  
  function atualizarTextos(input){
    //!isEmpty
    const dataset = input.dataset.input.toLowerCase();
    const valor = input.value;
    
    switch(dataset){
      case 'verso':        
      case 'autor':
      case 'nome':
      atualizarTodosCardsGeracao(valor, dataset, input.closest('form'), 'textos');
      break;
      
      default:
      console.log('Há um erro na filtragem do dataset classe para este elemento.');
      break;
    }
  }
  
  function atualizarTodosCardsGeracao(valor, dataset, formulario, tipo){
    const secoes = formulario.closest('body').querySelectorAll('section.gerando-card');
    tipo = tipo.toLowerCase();
    
    if(tipo == 'textos'){
      secoes.forEach(secao => {
        secao.querySelector(`[data-info=${dataset.toLowerCase()}]`).textContent = valor;
      })
    }
    
    else if(tipo == 'cores'){
      secoes.forEach(secao => {
        secao.querySelector(`[data-info=${dataset.toLowerCase()}]`).style.color = valor;
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