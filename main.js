const container = document.querySelector('.container');

function gridCreation(numOfCells) {
    for(let i = 0; i < numOfCells; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        for(let j = 0; j < numOfCells; j++) {
            const row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        }
        container.appendChild(column)
    }
}
gridCreation(16);