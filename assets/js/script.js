"use strict";

import { atualizarDatas, controleFechamentoModal } from './módulos/utilitarios.js';
import { escutaClickInteracaoModalCompartilha } from './módulos/modal.js';
import { escutaSelecaoAPP } from './módulos/funcoes.js';

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