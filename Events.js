

const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');

btnOne.addEventListener('click',(e) => {
    
});

/*
btn.onclick = () => {
    alert('Clicked');
}
*/

function getRandomInt(min, max){
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min);
}
//const res =  getRandomInt(0, 255);

const getRandomColor = () => `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;

console.log(getRandomColor());





