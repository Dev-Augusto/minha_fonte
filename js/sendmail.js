function escapeHtml(unsafe) {
    return unsafe
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function sendWhatsApp() {
    const name = escapeHtml(document.getElementById("name").value);
    const message = escapeHtml(document.getElementById("message").value);

    // Substitua o número de telefone abaixo com o número desejado para o WhatsApp
    const phoneNumber = "+244953186891";
    const encodedMessage = encodeURIComponent(`Olá, sou ${name}. ${message}`);

    // Crie um link para enviar a mensagem pelo WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abra o WhatsApp no navegador ou no aplicativo, se instalado
    window.location.href = whatsappLink;
}