const container = document.querySelector('.container');
const body = document.querySelector('body');
const button = document.createElement('button');

button.innerText = 'Create a new grid';
button.setAttribute('style', 'margin-bottom: 10px;')
body.appendChild(button);

button.addEventListener('click', () => {
    container.innerHTML = '';
    let numberOfDivs = prompt('Choose number of blocks that is lower than 100');
    if(numberOfDivs > 100) {
        do {
            numberOfDivs = prompt('Enter number less than 101 to avoid glitches');
        } while (numberOfDivs > 100);
    };
    createGrid(numberOfDivs);
});

function createGrid(numOfCells) {
    for(let i = 0; i < numOfCells; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        for(let j = 0; j < numOfCells; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            column.appendChild(cell);
            
            cell.addEventListener('mouseover', function() {
                let randomNumber = Math.floor(Math.random() * 16777215);
                let randomColor =  '#' + randomNumber.toString(16);
                cell.style.backgroundColor = randomColor;
            });
        }
        container.appendChild(column);
    }
}
createGrid(16);

