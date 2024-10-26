// Formulário de Contato - Envio de e-mail com EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recarregar a página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const params = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    emailjs.send('seu_service_id', 'seu_template_id', params)
    .then(function(response) {
        alert('Mensagem enviada com sucesso!');
    }, function(error) {
        alert('Erro ao enviar a mensagem.');
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão
    
        // Aqui você pode adicionar a lógica para enviar o formulário, como um POST para o servidor
    
        alert('Mensagem enviada com sucesso!'); // Mostra uma mensagem de sucesso
        this.reset(); // Reseta o formulário após o envio
    });
    
});
