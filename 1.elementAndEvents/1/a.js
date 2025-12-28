const divBlock = document.querySelector('.block');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    divBlock.classList.toggle('show');
})