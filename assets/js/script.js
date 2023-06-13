let header = document.getElementById("header");
let menu = document.getElementById("menu");
let container = document.getElementById("conteudo");
let showSidebar = false;


function animationC(){
    showSidebar = !showSidebar; /*Toda vez que eu chamar a função AnimationC alternaremos de true para false e vice versa*/
    if(showSidebar){/*Quando a função for chamada pela primeira vez , ela alternou o valor de showSidebar para true e se for true:(Linha de baixo)*/
        menu.style.marginLeft = "-3vw";/*Faça com que o Margin left dele tenha 3vw fazendo com que ele fique exatamente encostado*/
        menu.style.animationName = "AnimationMenu";/*Assim que o meu menu aparecer , eu quero que ele aparace com essa animação*/
        container.style.filter = "blur(2px)"/*Após o meu menu aparecer no canto esquerdo com animação , desejo que ele deixe o fundo desfocado*/
     }
     else{/*Como a nossa função será chamada novamente ela alternará de true para false fazendo com que o else seja chamado*/
        menu.style.marginLeft = "-100vw";/*Como a nossa animação será chamada pela segunda vez apenas pelo botão de voltar, fazemos o nosso menu ter um margin left de -100vw, assim ele se esconderá*/
        menu.style.animationName = "AnimationExit";/*Após ele ser chamado para voltar, volte com a animação "AnimationExit" definida lá no nosso CSS*/
    }
    }
/*Nada exige nascer um genio , basta ter paciencia para compreender*/