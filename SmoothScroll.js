

const sectionOne = document.querySelector('.sectionOneWrapper');
const sectionTwo = document.querySelector('.sectionTwoWrapper');
const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');


btnOne.addEventListener('click',(e) => {
   const sectionOneCoords = sectionOne.getBoundingClientRect();
    console.log(sectionOneCoords.y);
    window.scrollTo(0, 2091);
});

window.addEventListener('scroll', (e) => {
    //console.log(window.pageYOffset);
    //console.log(document.documentElement.clientHeight);
    //console.log(document.documentElement.clientWidth);
})
















