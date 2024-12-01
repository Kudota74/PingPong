

document.addEventListener('DOMContentLoaded', function() {
   const can = document.querySelector("#canid");    
   // поле
const data = can.getContext('2d');
const grid = 15;
const racket = grid * 5;
// координаты

data.filStyle = ("black");
const MaxRacketY = can.height - grid - racket;
const Lracket = {x: grid * 2, y: can.height / 2 - racket, width: grid, height: racket, dy: 0 ,};
const Rracket = {x: can.width - grid * 3, y: can.height / 2 - racket.height / 2, width: grid, height: racket, dy: 0};
// координаты ракеток

   
  });


  const BallSP = 7; //скорость мяча 
  const ball = {x: can.width / 2, y: can.height / 2,
   width: grid, height: grid, x: BallSP, dy: -BallSP, 
   // исрес -  это значение которое указывает был ли мяч сброшен 
   isres: false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  }
// харакеристика мяча

function render() {
   data.fillRect(0, 0, can.width, grid);
   data.fillRect(0, can.height - grid, can.width, grid);
    for(let i = grid; i < can.height - grid; i = i + grid * 2){
      data.fillRect(can.width / 2, i, grid, grid)
   };

}
// рендеринг карты


function clear () {
   data.clearRect(0, 0, can.width, can.height);
};
// функция очистки кана


function drawL () {
data.fillRect(Lracket.x, Lracket.y, Lracket.width, Lracket.height);
}
// отрисовка левой ракетки


function drawR () {
   data.fillRect(Rracket.x, Rracket.y, Rracket.width, Rracket.height);
}
// отрисовка правой ракетки


function moveRacket () {
   Lracket.y += Lracket.dy;
   Rracket.y += Rracket.dy;
}
// движение ракеток


function drawBall () {
   data.fillRect(ball.x, ball.y, ball.width, ball.height);
}
// функция отрисовки мяча


function moveBall () {
   ball.y += ball.dy;
   ball.x += ball.dx
}
// движение мяча


function reset () {
   if((ball.x < 0 || ball.x > can.width) && !ball.isResertted){
      ball.isResertted = true //для мяча чтобы небыло второго сброса 
      setTimeout(() => {ball.x = can.width / 2;
         ball.y = can.height / 2;   // смещение мяча в центр после ресета
         ball.isResertted = false; 
      }, 1000) 
   }
}