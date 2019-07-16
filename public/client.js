const socket = io('http://localhost:3030');

// Listen to new messages being created



socket.on('messages created', message => {
  console.log('Someone created a message', message);
  var div = document.createElement('div');
  div.textContent = message.text;
  document.querySelector('.container').appendChild(div);

  // newM.append(`<p>${message.text}</p>`);
});


socket.emit('find', 'messages', (error, messageList) => {
  if (error) throw error
  messageList.data.forEach(element => {
    var div = document.createElement('div');
    div.textContent = element.text;
    document.querySelector('.container').appendChild(div);
    console.log(element);
  });
});


function send() {
  var text = document.getElementById('message');

  console.log();
  socket.emit('create', 'messages', {
    text: text.value
  })
}