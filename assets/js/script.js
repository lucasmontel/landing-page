let header = document.getElementById("header");
let menu = document.getElementById("menu");
let container = document.getElementById("conteudo");
let showSidebar = false;


function animationC(){
    showSidebar = !showSidebar;
    if(showSidebar){
        menu.style.marginLeft = "-3vw";
        menu.style.animationName = "AnimationMenu";
        container.style.filter = "blur(2px)"
     }
     else{
        menu.style.marginLeft = "-100vw";
        menu.style.animationName = "AnimationExit";
    }
    }
/*Quando a função for chamadada o showSidebar mudará de true para false ou de false para true*/