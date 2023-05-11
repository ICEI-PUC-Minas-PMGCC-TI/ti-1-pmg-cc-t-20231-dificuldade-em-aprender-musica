 // variaveis
 let searchBtn = document.querySelector('.searchBtn');
 let closeBtn = document.querySelector('.closeBtn');
 let searchBox = document.querySelector('.searchBox');
 let navigation = document.querySelector('.navigation');
 let menuToggle = document.querySelector('.menuToggle');
 let header = document.querySelector('header');

// função para barra de pesquisa aparecer e sumir da navbar
 searchBtn.onclick = function() {
   searchBox.classList.add('active');
   closeBtn.classList.add('active');
   searchBtn.classList.add('hidden'); // Adiciona a classe 'hidden' para ocultar o botão de pesquisa
 }

 closeBtn.onclick = function() {
   searchBox.classList.remove('active');
   closeBtn.classList.remove('active');
   searchBtn.classList.remove('hidden'); // Remove a classe 'hidden' para exibir o botão de pesquisa novamente
 }

 // responsividade da navbar
 menuToggle.onclick = function(){
     header.classList.toggle('open');

 }