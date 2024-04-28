const container = document.querySelector('.container');

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