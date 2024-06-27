// script.js
let slideIndex = 0;
showSlides();




function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Muda de imagem a cada 2 segundos
}




function plusSlides(n) {
  showSlidesManual(slideIndex += n);
}




function currentSlide(n) {
  showSlidesManual(slideIndex = n);
}




function showSlidesManual(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}  
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}








function mudarIdioma(idioma) {
  var elementosPt = document.querySelectorAll('.idioma#conteudo-pt');
  var elementosJp = document.querySelectorAll('.idioma#conteudo-jp');
   if (idioma === 'jp') {
    elementosPt.forEach(function(elemento) {
      elemento.style.display = 'none';
    });
    elementosJp.forEach(function(elemento) {
      elemento.style.display = 'block';
    });
  } else if (idioma === 'pt') {
    elementosJp.forEach(function(elemento) {
      elemento.style.display = 'none';
    });
    elementosPt.forEach(function(elemento) {
      elemento.style.display = 'block';
    });
  }
}






function changeBackground() {
 var body = document.querySelector('body');
 var currentColor = body.style.backgroundColor;


 // Verifica a cor atual e muda para outra cor
 if (currentColor === 'rgb(255, 255, 255)') {
     body.style.backgroundColor = '#93cfc6'; // Nova cor de fundo
 } else {
     body.style.backgroundColor = '#fff'; // Retorna para a cor original
 }
}
