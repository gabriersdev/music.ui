export const conteudo_music_txt = `
<main class="main music-txt" data-conteudo="apresentacao">
<section class="esquerda informacoes-apresentacao">
<h1 class="titulo-app">
music.txt
</h1>

<p class="descricao-titulo-app">Crie cards com seus versos preferidos das suas músicas favoritas</p>
<button class="botao botao-comecar" data-acao="comecar">Começar -></button>
</section>

<section class="direita exemplo-apresentacao">
<div class="card">
<span class="card--logo-app">music.txt</span>
<div class="card--informacoes">
<p class="card--informacoes--versos">
Na internet ele é barril, na vida real ele é quieto
</p>
<p class="card--informacoes--autoria">
<span class="autor">Leviano -</span>
<span class="nome-musica">Quieto</span>
</p>
</div>
</div>
</section>
</main>

<main class="main music-txt" data-conteudo="secao-1">
<section class="esquerda dados-geracao-card">

<form action="#" method="POST" class="formulario">

<div>
<h2 class="titulo-secao">
Passo 1 de 2
</h2>
<div class="form-grupo">
<label class="label" for="input-texto-verso">
<span class="label-principal">Verso da música</span>
<span class="label-informacoes">Texto obrigatório. Até 50 caracteres.</span>
</label>
<div class="input-grupo">
<input placeholder="Verso da música" type="text" class="input-texto" data-input="verso" name="input-texto-verso" id="input-texto-verso" required maxlength="50">
</div>

<label for="input-color-1" class="label-input-color"><i class="bi bi-palette-fill"></i></label>
<input type="color" class="input-color" name="input-color-1" id="input-color-1">
</div>

<div class="form-grupo">
<label class="label" for="input-texto-autor">
<span class="label-principal">Autor da música</span>
<span class="label-informacoes">Texto opcional. Até 20 caracteres.</span>
</label>
<div class="input-grupo">
<input placeholder="Autor da música" type="text" class="input-texto" data-input="autor" name="input-texto-autor" id="input-texto-autor" maxlength="20">
</div>

<label for="input-color-2" class="label-input-color"><i class="bi bi-palette-fill"></i></label>
<input type="color" class="input-color" name="input-color-2" id="input-color-2">
</div>

<div class="form-grupo">
<label class="label" for="">
<span class="label-principal">Nome da música</span>
<span class="label-informacoes">Texto opcional. Até 20 caracteres.</span>
</label>
<div class="input-grupo">
<input placeholder="Nome da música" type="text" class="input-texto" data-input="nome" name="" id="" maxlength="20">
</div>

<label for="input-color-3" class="label-input-color"><i class="bi bi-palette-fill"></i></label>
<input type="color" class="input-color" name="input-color-3" id="input-color-3">
</div>
</div>

<button type="submit" class="botao botao-proximo" data-acao="ir-para-secao-2">Próximo -></button>
</form>
</section>

<section class="direita gerando-card">
<div class="card">
<span class="card--logo-app">music.txt</span>
<div class="card--informacoes">
<p class="card--informacoes--versos" data-info="verso">
O verso da música aparecerá aqui
</p>
<p class="card--informacoes--autoria">
<span class="autor" data-info="autor">Autor -</span>
<span class="nome-musica" data-info="nome">Nome da música</span>
</p>
</div>
</div>
</section>
</main>

<main class="main music-txt" data-conteudo="secao-2">
<section class="esquerda dados-geracao-card">

<form action="#" method="POST" class="formulario">
<div>
<h2 class="titulo-secao">
Passo 2 de 2
</h2>
<div class="form-grupo">
<div class="label" for="">
<span class="label-principal">Cor do card</span>
<span class="label-informacoes">Seleção obrigatória.</span>
</div>
<div class="cor-selecionada" data-acao="selecao-cor-bckg-card">
<span class="cor-selecionada--span">#00000033</span>
<label for="input-color-4" class="label-input-cor-selecionada"><i class="bi bi-palette-fill"></i></label>
<input type="color" class="input-cor-selecionada" name="input-color-4" id="input-color-4" required>
</div>
</div>
</div>

<button type="submit" class="botao botao-proximo" data-acao="ir-para-secao-encerramento">Próximo -></button>
</form>
</section>

<section class="direita gerando-card">
<div class="card">
<span class="card--logo-app">music.txt</span>
<div class="card--informacoes">
<p class="card--informacoes--versos" data-info="verso">
O verso da música aparecerá aqui
</p>
<p class="card--informacoes--autoria">
<span class="autor" data-info="autor">Autor -</span>
<span class="nome-musica" data-info="nome">Nome da música</span>
</p>
</div>
</div>
</section>
</main>

<main class="main music-txt" data-conteudo="secao-encerramento">
<section class="esquerda dados-geracao-card">

<div>
<div class="grupo-encerramento">
<h2 class="titulo-secao">
Tudo certo :)
</h2>
<div class="div-grupo">
<div class="label" for="">
<span class="label-principal" data-info="nome-apresentacao">Card</span>
<span class="label-informacoes">Tamanho aproximado: <span data-info="tamanho-arquivo">Undefined</span></span>
</div>
<a href="" download="download.png" data-acao="download-capture"></a>
<button type="button" class="botao botao-baixar">Baixar <i class="bi bi-arrow-down-square"></i></button>
</div>
</div>

<div class="grupo-encerramento">
<div class="div-grupo">
<h2 class="titulo-destaque">
Conheça outros projetos do desenvolvedor
</h2>
<a href="" class="botao botao-portfolio">Ver o portfólio</a>
</div>
</div>

<footer class="rodape">
<p class="rodape--informacoes--app"><i class="bi bi-c-circle"></i> 2023 - <time data-ano-atual>2023</time> music.txt</p>
<address class="rodape--informacoes-dev">Desenvolvido por Gabriel Ribeiro</address>
</footer>
</div>
</section>

<section class="direita gerando-card card-final">
<div class="card" id="capture">
<span class="card--logo-app">music.txt</span>
<div class="card--informacoes">
<p class="card--informacoes--versos" data-info="verso">
O verso da música aparecerá aqui
</p>
<p class="card--informacoes--autoria">
<span class="autor" data-info="autor"></span>
<span class="nome-musica" data-info="nome"></span>
</p>
</div>
</div>
</section>
</main>
`