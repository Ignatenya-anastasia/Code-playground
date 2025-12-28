const table = document.getElementById('products-table');

let selectRow = null;

table.addEventListener('click', (event) => {
    const row = event.target.closest('tr');
    if (selectRow) {
        selectRow.classList.remove('selected');
    }
    row.classList.add('selected');
    selectRow = row;
})