# Music.ui

Music.ui é um projeto que permite aos usuários criar cards com versos de suas músicas favoritas. 

Você pode [acessar o music.ui aqui][musicUI] ou ver o [protótipo na Behance aqui][prototipo-img] e [aqui][prototipo-txt]

## Funcionalidades

- **Controlar exibição de seções e carragemento de aplicação** <br>
  Conforme o usuário vai preenchendo os formulários corretamente, as seções passam a serem exibidas.

- **Monitorar preenchimento de textos pelos usuários** <br>
  Os textos de versos, nome do autor e nome da música são atualizados de acordo com o usuário vai escrevendo. Um evento `input` de escuta faz essa verificação em todos os `<input>` da página.

- **Upload de imagem e uso da imagem na aplicação** <br>
  Quando uma imagem é enviada, a função `escutaUploadImagem()` instancia um novo `FileReader`. Através da função `readAsDataURL()`, a imagem enviada é passada como argumento e permite ser renderezida quando o carregamento da imagem estiver concluído. <br> A renderização é aplicada na tag `<img>` dos cards.

- **Gerar PNG através de um card** <br>
  A ferramenta `html2canvas` tem a capacidade de renderizar uma imagem a partir de um elemento HTML. No Music.ui, o `html2canvas` transforma o card criado pelo usuário em imagem do tipo PNG.

- **Baixar PNG gerado** <br>
  O botão "Baixar", na última seção do projeto, aciona a função `escutaClickBotaoBaixar()` que renderiza o card para um PNG através do `html2canvas` e depois aciona o click em uma tag `<a>` para baixar.


## Ferramentas

- [html2canvas - versão 1.4.1][html2canvas]
- [Bootstrap Icons - versão 1.10][bootstrap_icons]
- [Bootstrap - versão 5.3.0-alpha1][bootstrap]
- [jQuery - versão 3.6.3][jQuery]
- [Google Fonts][fonts_google] (fontes usadas: Inter, Inter Tight e Sora)

[musicUI]:https://github.com/gabriersdev/music.ui
[prototipo-img]:https://www.behance.net/gallery/165339249/musicimg
[prototipo-txt]:https://www.behance.net/gallery/165338959/musictxt
[html2canvas]:https://html2canvas.hertzen.com
[bootstrap_icons]:https://icons.getbootstrap.com
[bootstrap]:https://getbootstrap.com
[jQuery]:https://releases.jquery.com
[fonts_google]:https://fonts.google.com
