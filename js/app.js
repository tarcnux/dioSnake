const canvas = document.querySelector('#snake');
const context = canvas.getContext('2d');
const box = 32;
const snake = [];
const direction = 'right';

//inicializa a cobrinha com 1 quadrado
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

function iniciarJogo() {
    criarCenario();
    criarCobrinha();    

    //Ponto de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Movimento adiciona uma nova caixa nas direções
    if(direction === 'right') snakeX += box;
    if(direction === 'left') snakeX -= box;
    if(direction === 'up') snakeY += box;
    if(direction === 'down') snakeY -= box;
    
    //Remove o último elemento
    snake.pop();

    const newHead = {
        x: snakeX,
        y: snakeY
    }
    //Adiciona a nova cabeça
    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
