'use strict'

const socket = io();

const nickName = document.querySelector('#nickName');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');

sendButton.addEventListener('click', () => {
  const param = {
    name : nickName.value,
    msg : chatInput.value
  }

  socket.emit("chatting", param)
})

socket.on("chatting", (data) => {
  const li = document.createElement('li');
  li.innerText = `${data.name}님이 - ${data.msg}`;
  chatList.appendChild(li);
})

console.log(socket);