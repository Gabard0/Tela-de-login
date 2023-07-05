document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Credenciais salvas
    var savedCredentials = [
      { email: 'matheus@gmail.com', password: '12345' },
      // Adicione outras credenciais salvas aqui, se necessário
    ];
  
    // Verifica se as informações correspondem às credenciais salvas
    var matchedCredentials = savedCredentials.find(function(credential) {
      return credential.email === email && credential.password === password;
    });
  
    if (matchedCredentials) {
      alert('Login bem-sucedido!');
      // Aqui você pode redirecionar o usuário para outra página
    } else {
      document.getElementById('error-message').textContent = 'Credenciais inválidas';
    }
  });
  