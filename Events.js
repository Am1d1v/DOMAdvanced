

const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');
const wrapper = document.querySelector('.mainWrapper');
const textWrapper1 = document.querySelector('.wrapperText1')
const textWrapper2 = document.querySelector('.wrapperText2')
const textWrapper3 = document.querySelector('.wrapperText3')
const navigation = document.querySelector('.navigation');
const cancelFixed = document.querySelector('#cancelFixed');




/*
btn.onclick = () => {
    alert('Clicked');
}
*/

/*
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
*/

/*
const intervalColorChanger = function(){
    randomColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    wrapper.style.backgroundColor = randomColor;
}
setInterval(intervalColorChanger, 1000);
*/

btnOne.addEventListener('click', () => {
    textWrapper1.classList.remove('hidden');
    textWrapper2.classList.add('hidden');
    textWrapper3.classList.add('hidden');
});

btnTwo.addEventListener('click', () => {
    textWrapper1.classList.add('hidden');
    textWrapper2.classList.remove('hidden');
    textWrapper3.classList.add('hidden');
});

btnThree.addEventListener('click', () => {
    textWrapper1.classList.add('hidden');
    textWrapper2.classList.add('hidden');
    textWrapper3.classList.remove('hidden');
});

window.addEventListener('scroll', function(e){
    console.log(window.pageYOffset);
    if (window.pageYOffset > 0){
        navigation.classList.add('fixed');
    }

    if (window.pageYOffset < 50){
        navigation.classList.remove('fixed');
    }

});






