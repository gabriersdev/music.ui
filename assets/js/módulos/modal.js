function escutaClickInteracaoModalCompartilha(){
  try{
    document.querySelector('#link-compartilhamento').onclick = () => {
      copiarLinkAT();
    }
    
    document.querySelector('#button-addon-link-copy').onclick = () => {
      copiarLinkAT();
    }
  }catch(error){
    
  }
}

function copiarLinkAT(){
  const feedback = document.querySelector("#feedback-message");
  try{
    const linkE = document.querySelector('#link-compartilhamento');
    linkE.select();
    document.execCommand("copy");
    feedback.style.display = 'block';
    feedback.setAttribute("class", "feedback-message success");
    feedback.textContent = "Copiado!";
  }catch(error){
    feedback.style.display = 'block';
    feedback.setAttribute("class", "feedback-message error");
    feedback.textContent = "Opa! Não foi possível copiar";
  }
  
  setTimeout(() => {
    feedback.style.display = 'none';
    feedback.setAttribute("class", "feedback-message");
    feedback.textContent = "";
  }, 2000);
}

export{
  escutaClickInteracaoModalCompartilha
}