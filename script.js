/*const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
localStorage.setItem("myname", name);
appendMessage('You joined')
socket.emit('new-user', name)

socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`)
})

socket.on('kigyo-message', data => {
    //appendMessage(`${data.name}: ${data.message}`);
    //console.log(data.name + "-" + name);
    console.log(socket.id);
    if (data.name != name) {
        var chely = [];
        var splitmsg = data.message.split(",");
        for (var i = 0; i < splitmsg.length; i++) {
            chely.push(splitmsg[i]);
        }
        console.log(data.name + " " + chely);
    }

    //console.log(localStorage.getItem("chely2"));
})

socket.on('user-connected', name => {
    appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)
})

einterval = setInterval(function() {
    socket.emit('kigyohely', localStorage.getItem("chely"));
}, 1000);

/*messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}*/