const inp = document.querySelector('input');
const ul = document.querySelector('.user-list');
const li = document.querySelectorAll('li');


const names = Array.from(li).map(li => li.textContent.trim()); //возвращает в настоящий массив для дальнейшего использования

inp.addEventListener('input', () => {
    const query = inp.value.trim().toLowerCase();

    li.forEach((li, index) => {
        const name = names[index].toLowerCase();
        if(name.includes(query)){
            li.classList.remove('show');
        } else{
            li.classList.add('show');
        }
    })
})