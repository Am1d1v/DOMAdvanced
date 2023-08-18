

const mainWrapper = document.querySelector('.mainWrapper');
const newWrapper = document.querySelector('.newWrapper');


mainWrapper.style.backgroundColor = 'black';
mainWrapper.style.width = "600px";
mainWrapper.style.borderRadius = '15px';

newWrapper.style.height = '300px';
console.log((mainWrapper.classList)[0]);
console.log(newWrapper.dataset.versionNumber);


console.log(getComputedStyle(mainWrapper).height);
console.log(typeof(getComputedStyle(mainWrapper).height));
mainWrapper.style.height = Number.parseFloat(getComputedStyle(mainWrapper).height) + 150 + 'px';


















