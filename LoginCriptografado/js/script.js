const campo_senha = document.querySelector("#senha");
const campo_user = document.querySelector("#user");
const btn = document.querySelector("#logar");
const aviso = document.querySelector("#aviso");
let alvo;
let user_ativo;
const dicionario = {
    user1 : {
        "user" : "Daniel",
        "senha" : "1967465279c2acb6ab99af0fc23e8d25",
        "img" : ""
    },
    user2 : {
        "user" : "João",
        "senha" : "1967465279c2acb6ab99af0fc23e8d25"
    }
}
const sal = "oi"
btn.addEventListener("click", (e) => {
    const entrada_user = campo_user.value;

    // Variável para controlar se o usuário foi encontrado
    let usuarioEncontrado = false;

    // Itera sobre as chaves do dicionário
    for (const key in dicionario) {
        if (dicionario.hasOwnProperty(key) && dicionario[key].user === entrada_user) {
            // O usuário foi encontrado
            usuarioEncontrado = true;
            console.log("Usuário encontrado:", dicionario[key].user);
            user_ativo = key;
            alvo = dicionario[key].senha;
            break; // Interrompe o loop, já que encontramos o usuário
        }
    }

    const entrada_senha = campo_senha.value;
    const senha_hash = hex_md5(entrada_senha + sal);

    if (senha_hash === alvo && usuarioEncontrado) {
        aviso.innerText = "";
        localStorage.setItem("user", user_ativo);
        localStorage.setItem("logado", "true");  // Armazena o estado de login no localStorage
        window.location.href = "protegida.html";
    } else {
        aviso.innerText = "Senha Incorreta!";
    }
});
