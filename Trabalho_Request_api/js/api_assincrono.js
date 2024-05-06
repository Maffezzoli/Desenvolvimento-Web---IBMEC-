const img_container = document.querySelector(".img-container")

const getData = async () =>{
    try {
        const response = await axios.get(
            "https://botafogo-atletas.mange.li/masculino"
        );
        response.data.forEach(element => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            const nome = document.createElement("p");
            const posicao = document.createElement("p");
            posicao.innerText = element.posicao;
            nome.innerText = element.nome;
            div.appendChild(nome)
            div.appendChild(posicao)
            img.setAttribute("src", element.imagem)
            div.classList.add("box-img")
            div.appendChild(img)
            img_container.appendChild(div)
        });
        return response.data;
    }
    catch(error){
        console.log(error);
    }
};

getData();
