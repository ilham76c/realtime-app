const chatFrom = document.getElementById('chat-form');
const socket = io();

socket.on('message', message => {
  console.log(message);
});

// Message submit
chatFrom.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  const msg = e.target.elements.msg.value;

  // Exit message to server
  socket.emit('chatMessage', msg);
});