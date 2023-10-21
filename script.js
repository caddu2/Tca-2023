document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const chat = document.querySelector('.chat');

    sendButton.addEventListener('click', function () {
        const messageText = messageInput.value;
        if (messageText.trim() === '') {
            return;
        }

        // Create a sent message element
        const sentMessage = document.createElement('div');
        sentMessage.className = 'message sent';
        sentMessage.textContent = messageText;

        // Create a received message element
        const receivedMessage = document.createElement('div');
        receivedMessage.className = 'message received';
        receivedMessage.textContent = 'Oii cadu tudo bemm??';

        // Add messages to the chat
        chat.appendChild(sentMessage);
        chat.appendChild(receivedMessage);

        // Clear the input field
        messageInput.value = '';
    });
});

