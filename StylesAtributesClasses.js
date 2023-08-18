

const mainWrapper = document.querySelector('.mainWrapper');


mainWrapper.style.backgroundColor = '090909';
mainWrapper.style.width = "600px";

console.log(getComputedStyle(mainWrapper).height);
console.log(typeof(getComputedStyle(mainWrapper).height));
mainWrapper.style.height = Number.parseFloat(getComputedStyle(mainWrapper).height) + 150 + 'px';


















