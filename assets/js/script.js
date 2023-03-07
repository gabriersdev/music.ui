"use strict";

import { atualizarDatas, controleFechamentoModal } from './módulos/utilitarios.js';
import { escutaClickInteracaoModalCompartilha } from './módulos/modal.js';
import { acionarFuncoesMusicIMG, acionarFuncoesMusicTXT, escutaSelecaoAPP } from './módulos/funcoes.js';

(() => {
  const param = new URLSearchParams(window.location.search).get('app');
  switch(param.toLowerCase().trim()){
    case 'music-txt':
      acionarFuncoesMusicTXT();
    break;
    case 'music-img':
      acionarFuncoesMusicIMG();
    break;
    default:
      console.log('Não foi definida ação para o parâmetro informado.');
    break;
  }
})();

(() => {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  document.querySelectorAll('[data-recarrega-pagina]').forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload;
    })
  })

  escutaSelecaoAPP();
  atualizarDatas();
  escutaClickInteracaoModalCompartilha();
  controleFechamentoModal();
})();