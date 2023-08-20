

const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');
const wrapper = document.querySelector('.mainWrapper');


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

const getRandomColor = () => `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;

// Random color for clicked Button One

btnOne.addEventListener('click',function(e){
    this.style.backgroundColor = getRandomColor();
    e.stopPropagation();
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.currentTarget === this);
    //console.log(this);
});

wrapper.addEventListener('click', function(){
    wrapper.style.backgroundColor = getRandomColor();
})

/*
const intervalColorChanger = function(){
    randomColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    wrapper.style.backgroundColor = randomColor;
}
setInterval(intervalColorChanger, 1000);
*/