const work = document.getElementById("work");
const workHover = document.getElementById("workHover");
const barraDeAcoes = document.getElementById("barra-de-acoes")
var on = false
function setOn(){
    on = true;
    console.log(on)
}
work.addEventListener("mouseenter", function(){
    workHover.style.visibility = "visible"
    workHover.style.zIndex = 100
    setTimeout(setOn, 1000)
});
workHover.addEventListener("mouseout", function(){
    if (on == true){
        workHover.style.visibility = "hidden"
    }  
});


projects.addEventListener("mouseenter", function(){
    projectsHover.style.visibility = "visible"
    projects.style.height = "170px"
});

projects.addEventListener("mouseleave", function(){
    projectsHover.style.visibility = "hidden"
    projects.style.height = "17px"
});

window.addEventListener("scroll", function() {
    // Verifica se a posição de rolagem vertical é igual à posição superior da barra de ações
    if (window.scrollY === 0) {
        // Se estiver no topo, muda a cor de fundo para vermelho
        barraDeAcoes.style.backgroundColor = "black";
        console.log("A barra de ações está no topo.");
    } 
    else{
        // Se não estiver no topo, muda a cor de fundo para preto
        barraDeAcoes.style.backgroundColor = "red";
        console.log("A barra de ações não está no topo.");
    }
});