const canvas = document.querySelector('#snake');
const context = canvas.getContext('2d');
const box = 32;

function criarCenario(){
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16*box, 16*box);
}