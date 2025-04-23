function abrirWhatsapp() {
    window.open("https://wa.me/5561982736018?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!", "_blank"); // <- troque pelo número real
  }  


// Exibir a segunda parte quando rolar a página
window.addEventListener('scroll', function() {
    var secondPage = document.querySelector('.second-page');
    var secondPagePosition = secondPage.getBoundingClientRect().top;

    if (secondPagePosition <= window.innerHeight * 0.75) {
        secondPage.style.display = "flex";
        secondPage.classList.add('fade-in');
    }
});
