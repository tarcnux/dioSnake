const canvas = document.querySelector('#snake');
const context = canvas.getContext('2d');
const box = 32;
const snake = [];

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

document.addEventListener('keydown', update);

function update(evento) {
    //https://keycode.info/
    //37 seta para a esquerda - Ir para a direção da esquerda
    if(evento.keyCode === 37 && direction !== 'right') direction = 'left';
    //38 seta para cima - Ir para a direção de cima
    if(evento.keyCode === 38 && direction !== 'down') direction = 'up';
    //39 seta para a direita - Ir para a direção da direita
    if(evento.keyCode === 39 && direction !== 'left') direction = 'right';
    //40 seta para baixo - Ir para a direção debaixo
    if(evento.keyCode === 40 && direction !== 'up') direction = 'down';
}

let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function desenharComida() {
    context.fillStyle = 'red';
    context.fillRect(comida.x, comida.y, box, box);
}

let direction = 'right';

function desenharJogo() {
    //Ao chegar no fim, iniciar do outro lado
    if(snake[0].x > 15 * box && direction === 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direction === 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction === 'down') snake[0].y = 0;
    if(snake[0].y < 0 && direction === 'up') snake[0].y = 16 * box;
    
    criarCenario();
    criarCobrinha();
    desenharComida();

    //Coordenadas das cabeça da cobra
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Movimento adiciona uma nova caixa nas direções
    if(direction === 'right') snakeX += box;
    if(direction === 'left') snakeX -= box;
    if(direction === 'up') snakeY -= box;
    if(direction === 'down') snakeY += box;
    
    //Remove o último elemento da calda da cobra (do vetor)
    snake.pop();

    //Criação da nova cabeça para ser adicionada à cobra (ao vetor)
    const newHead = {
        x: snakeX,
        y: snakeY
    }
    //Adiciona a nova cabeça ao início da cobra (do vetor)
    snake.unshift(newHead);

}

let jogo = setInterval(desenharJogo, 100);
