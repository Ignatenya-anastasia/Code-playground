const tasks = [
    'Изучить DOM',
    'Сделать слайдер',
    'Реализовать project',
    'Потренировать toggle',
    'Добавить form',
    'Поработать с модалками'
];

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const modalList = document.getElementById('modalList');


openModalBtn.addEventListener('click', () => {
    modalList.innerHTML = tasks.map(task => `<li>${task}</li>`).join('');
    modal.classList.toggle('hidden')
})

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
})