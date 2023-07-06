let menu = document.getElementById("menu");
let showSidebar = false;


function animationC(){
    showSidebar = !showSidebar; /*Toda vez que eu chamar a função AnimationC alternaremos de true para false e vice versa*/
    if(showSidebar){/*Quando a função for chamada pela primeira vez , ela alternou o valor de showSidebar para true e se for true:(Linha de baixo)*/
        menu.style.marginLeft = "-3vw";/*Faça com que o Margin left dele tenha 3vw fazendo com que ele fique exatamente encostado*/
        menu.style.animationName = "AnimationMenu";/*Assim que o meu menu aparecer , eu quero que ele aparace com essa animação*/
        document.body.style.overflow="hidden";
     }
     else{/*Como a nossa função será chamada novamente ela alternará de true para false fazendo com que o else seja chamado*/
        menu.style.marginLeft = "-100vw";/*Como a nossa animação será chamada pela segunda vez apenas pelo botão de voltar, fazemos o nosso menu ter um margin left de -100vw, assim ele se esconderá*/
        menu.style.animationName = "AnimationExit";/*Após ele ser chamado para voltar, volte com a animação "AnimationExit" definida lá no nosso CSS*/
       
    }
    }


function closeSiderbar(){
    if(showSidebar){
        animationC();
    }
}    
/*Nada exige nascer um genio , basta ter paciencia para compreender*/
function idade(){
let p = document.getElementById("escrita-sobre"); 
let Data = new Date();
let anoAtual = Data.getFullYear();
let dataNascimento = 2008;
let idade = anoAtual - dataNascimento;
p.textContent =`Olá, eu me chamo Lucas Montel Costa, tenho ${idade} anos de idade, trabalho com desenvolvimento de Sites e sou Autônomo. Já desenvolvi vários Sites com WordPress e pequenos projetos com JavaScript, HTML, CSS, React e Bootstrap.`
}
idade()