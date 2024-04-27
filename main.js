const container = document.querySelector('.container');

function gridCreation(numOfCells) {
    for(let i = 0; i < numOfCells; i++) {
        for(let j = 0; j < numOfCells; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
        }
    }
}
gridCreation(4);