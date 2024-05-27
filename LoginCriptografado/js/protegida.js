document.addEventListener('DOMContentLoaded', () => {
    const logado = localStorage.getItem("logado");
    const msg = document.querySelector("#msg");
    const logout = document.querySelector("#logout");
    const img = document.querySelector("#imagem");
    const btnEnviar = document.querySelector("#send");
    const link = document.querySelector("#link_img");

    if (logado === "true") {
        msg.innerText = "Você está logado!";
    } else {
        console.log("oi")
        deslogado();
    }

    function deslogado() {
        msg.style.color = "red";
        msg.innerText = "Você não está logado!";
        logout.style.display = "none";
    }
    logout.addEventListener("click", (e) => {
        localStorage.setItem("logado", "false");
        deslogado();
        window.location.href = "index.html"; 
    });
});
btnEnviar.addEventListener("click", (e)=>{
    
})
