"use strict";

import { atualizarDatas, capitalize, isEmpty } from './módulos/utilitarios.js';
import { escutaClickInteracaoModalCompartilha } from './módulos/modal.js';
import { conteudo_music_img } from './módulos/conteudo-music-img.js';

(() => {
  
  document.querySelectorAll('[data-recarrega-pagina]').forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload;
    })
  })

  function escutaSelecaoAPP(){
    document.querySelectorAll('[data-app]').forEach(app => {
      app.addEventListener('click', () => {

        switch(app.dataset.app.toLowerCase()){
          case 'music-img':
            acionarFuncoesMusicIMG();
          break;

          case 'music-txt':
            console.log('Implementação de ação para esta aplicação em construção.')
          break;

          default:
            console.log('Não foi implementada nenhuma ação para esse botão.')
          break;
        }
      });
    })
  }

  escutaSelecaoAPP();
  
  function acionarFuncoesMusicIMG(){
    controlarMainPrincipal('hide');
    carregarConteudosAPP(conteudo_music_img);

    escutaClickCarregarImagem();
    escutaUploadImagem();
    escutaEventoFormularios();
    escutaClickBotaoBaixar();

    escutaClickBotoesProximaSecao();
  }

  acionarFuncoesMusicIMG();

  function escutaClickBotoesProximaSecao(){
    const secao1 = document.querySelector('[data-conteudo="secao-1"]');
    const secao2 = document.querySelector('[data-conteudo="secao-2"]');
    const secaoEncerramento = document.querySelector('[data-conteudo="secao-encerramento"]');

    document.querySelector('[data-acao="comecar"]').addEventListener('click', () => {
      secao1.classList.contains('none') ? secao1.classList.remove('none') : '';
      //Descer a página
    });

    secao1.querySelector('form.formulario').addEventListener('submit' , (evento) => {
      evento.preventDefault();
      secao2.classList.contains('none') ? secao2.classList.remove('none') : '';
      //Descer a página
    });

    secao2.querySelector('form.formulario').addEventListener('submit' , (evento) => {
      evento.preventDefault();
      secaoEncerramento.classList.contains('none') ? secaoEncerramento.classList.remove('none') : '';
      //Descer a página
    });

  }


  function controlarMainPrincipal(condicao){
    condicao = condicao.toLowerCase().trim();
    const main_principal = document.querySelector('[data-conteudo="main-principal"]')
    if(condicao == 'show'){
      main_principal.classList.value = 'main'
    }else{
      main_principal.classList.add('none');
    }
  }

  function carregarConteudosAPP(conteudo_add){
    document.querySelector('body').innerHTML += conteudo_add;
  }

  function escutaClickCarregarImagem(){
    document.querySelector('.botao-carregar-img').addEventListener('click', () => {
      document.querySelector('.input-file').click();
    });
  }
  
  function escutaUploadImagem(){
    const input_file = document.querySelector('.input-file');
      input_file.addEventListener('change', function(){
    const imagem = input_file.files[0];    
    const image_lida = new FileReader();
    
    if(!isEmpty(imagem)){
      if(tipoValido(imagem)){
        image_lida.readAsDataURL(imagem);
        
        atualizarTamanhoArquivo(imagem.size);
        atualizarNomeArquivo();
        
        image_lida.addEventListener('loadend', function(evento){
          
          exibirFeedbackUploadConcluido(evento.target.result, imagem);

          document.querySelectorAll('.imagem').forEach(imagem => {
            imagem.src = evento.target.result
            imagem.classList.value = 'imagem';
          });
        }) 
      }
      
      else{
        Swal.fire({
          icon: 'error',
          title: 'Arquivo inválido',
          text: 'O formato do arquivo não é uma imagem (nos formatos PNG ou JPG) ou está corrompido.'
        })
      }
    }
    
    });
  }

  function exibirFeedbackUploadConcluido(imagem, dados){
    const div = document.querySelector('.feedback-upload');
    div.querySelector('img').src = imagem;
    div.querySelector('[data-info="nome-arquivo-upload"]').textContent = `${dados.name}`;
    div.classList.value = 'feedback-upload';
  }

  function atualizarNomeArquivo(){
    const nome = capitalize(document.querySelector('[data-input="nome"]').value.trim());
    const autor = capitalize(document.querySelector('[data-input="autor"]').value.trim());
    const aps = document.querySelector('[data-info="nome-apresentacao"]');
    const a = document.querySelector('[data-acao="download-capture"]');

    let nome_arquivo = 'Card';

    if(!isEmpty(nome) && !isEmpty(autor)){
      nome_arquivo = `Card de ${nome} - ${autor}`;
    }

    else if(!isEmpty(nome)){
      nome_arquivo = `Card de ${nome}`
    }

    aps.textContent = `${nome_arquivo}`;
    a.setAttribute('download', `${nome_arquivo} - music.ui.png`);
  }

  function atualizarTamanhoArquivo(tamanho){
    const txt = document.querySelector('[data-info="tamanho-arquivo"]');
    if(!isEmpty(tamanho)){
      txt.textContent = `${(tamanho / 1024 / 1024 * 4.5).toFixed(2)}MB`;
    }else{
      txt.textContent = 'Undefined';
    }
  }

  function tipoValido(arquivo){
    const tipo = arquivo.type.toString().split('/')[1].toLowerCase();
    return tipo == 'png' || tipo == 'jpg';
  }
  
  function escutaEventoFormularios(){
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
  }
  
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
      atualizarNomeArquivo();
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
        secao.querySelector(`[data-info=${dataset.toLowerCase()}]`).textContent = valor.trim();
      })
    }
    
    else if(tipo == 'cores'){
      secoes.forEach(secao => {
        secao.querySelector(`[data-info=${dataset.toLowerCase()}]`).style.color = valor.trim();
      })
    }
  }
  
  function escutaClickBotaoBaixar(){
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
      $('#modal-compartilha').modal('show');
    });
  }
  
  atualizarDatas();
  escutaClickInteracaoModalCompartilha();
})();