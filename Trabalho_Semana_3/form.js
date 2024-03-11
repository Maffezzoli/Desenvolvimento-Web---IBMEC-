function get(){
        document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Obter os valores do formulário
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
    
        // Simulação de validação de login
        if (username === 'user' && password === 'password') {
            // Redirecionar para outra página
            window.location.href = 'semana3.html';
        } else {
            alert('Credenciais inválidas.');
        }
    });
    
}
