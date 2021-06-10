//Menu
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {  
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
              
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)
        
    });
}
const titulo = document.querySelector('.maquina-escrever');
typeWrite(titulo);

//Scroll TOP
$(document).ready(function () {
    var scrollTop = $('.scrollTop');

    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        //Quantidade Y que o botão de scroll vai aparecer
        if (topPos > 500) {
            $(scrollTop).css('opacity', '1');
        }else {
            $(scrollTop).css('opacity', '0');
        }
    });

    //Velocidade a animação
    $(scrollTop).click(function () {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            100
        );
        return false;
    });
});

//Revelar animação
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

//Home delay
sr.reveal('.button',{delay: 200})
sr.reveal('.linguagensProjeto',{delay: 400})
sr.reveal('.imagem-espaco-delay',{delay: 200})
sr.reveal('.imagem-iuri-delay',{delay: 600})
//Sobre mim delay
sr.reveal('.imagem-delay',{})
sr.reveal('.titulo-delay',{delay: 200})
sr.reveal('.descricao-delay',{delay: 400})
sr.reveal('.cards-interval',{interval: 400})


    var sairCaixa = document.getElementsByClassName('sairCaixa')

    for (i = 0; i < sairCaixa.length; i++) {
      sairCaixa[i].addEventListener('mouseout', function mudarTextoNormal(){
        texto1.innerHTML = `Estou convencido de que juntos alcançaremos coisas incríveis.💜<br><br>*passe o mouse no card para ler sobre*`
      })
    }



