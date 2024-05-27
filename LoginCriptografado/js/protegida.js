document.addEventListener('DOMContentLoaded', () => {
    const logado = localStorage.getItem("logado");
    const msg = document.querySelector("#msg");
    const logout = document.querySelector("#logout");

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
