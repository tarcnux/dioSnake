const canvas = document.querySelector('#snake');
const context = canvas.getContext('2d');
const box = 32;
const snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}


function criarCenario() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha() {
    for(let i=0; i<snake.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarCenario();
criarCobrinha();