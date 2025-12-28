const inp = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');


btn.addEventListener('click', () => {
    const text = inp.value.trim();

    const li = document.createElement('li');
    li.textContent = text;

    ul.appendChild(li);

    inp.value = '';


    const deleteBtn = document.createElement('button');
deleteBtn.textContent = '×';
deleteBtn.style.marginLeft = '10px';
deleteBtn.addEventListener('click', () => li.remove());
li.appendChild(deleteBtn);

})


