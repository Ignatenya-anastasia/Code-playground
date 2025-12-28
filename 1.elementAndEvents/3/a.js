const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2')
const par = document.querySelector('.par');
const counter = document.querySelector('.count');


let countInd = 0;


btn1.addEventListener('click', () => {
    countInd++

    counter.textContent = countInd;
})

btn2.addEventListener('click', () => {
    countInd--

    counter.textContent = countInd;
})