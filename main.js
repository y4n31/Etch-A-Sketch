const container = document.querySelector('.container');
const body = document.querySelector('body');
const button = document.createElement('button');

button.innerText = 'Create a new grid';
button.setAttribute('style', 'margin-bottom: 10px;')
body.appendChild(button);

button.addEventListener('click', () => {
    container.innerHTML = '';
    gridCreation(prompt('Choose number of blocks'));
});

function gridCreation(numOfCells) {
    for(let i = 0; i < numOfCells; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        for(let j = 0; j < numOfCells; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            column.appendChild(cell);
            
            cell.addEventListener('mouseover', function() {
                cell.style.backgroundColor = 'red';
            });
        }
        container.appendChild(column);
    }
}
gridCreation(16);

