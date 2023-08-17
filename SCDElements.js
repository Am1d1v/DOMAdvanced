

//console.log(document.documentElement);
//console.log(document.head);
//console.log(document.body);
//console.log(document.querySelectorAll('.wrapper'));

const sections = document.querySelectorAll('.wrapper');
const mainWrapper = document.querySelector('.mainWrapper');
const body = document.querySelector('body');
//console.log(sections);

//console.log(document.getElementsByTagName('button'));
//const buttons = document.getElementsByTagName('button');
//console.log(buttons);

const message = document.createElement('div');
message.classList.add('message');
message.textContent = 'Message Text';
mainWrapper.prepend(message);
mainWrapper.append(message.cloneNode(true));











