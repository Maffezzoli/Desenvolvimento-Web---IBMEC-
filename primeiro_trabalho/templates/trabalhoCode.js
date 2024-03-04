function botao(){
    var imagem = document.getElementById("bulbaPng")
    var imgs = ["bulba.png", "bulbadrog.png","bulbareal.jpg","bulbassauro.png"]
    var aleatorio = imgs[Math.floor(Math.random()*imgs.length)]
    var imgAtual = imagem.src
    do{
        aleatorio = "C:/Users/202308507702/Trabalhos/primeiro_trabalho/static/" + imgs[Math.floor(Math.random()*imgs.length)]
    }
    while(aleatorio == imgAtual)
    imagem.src = aleatorio
}
