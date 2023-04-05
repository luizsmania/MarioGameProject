const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameBoard = document.querySelector('.game-board');
const clouds = document.querySelector('.clouds');
let skin = 'mario'

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 550);
};



  


let loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(clouds).right.replace('px', '');
    const gameOver = document.querySelector('.gameover');
    const tryAgain = document.querySelector('.tryagain');

    if (pipePosition <= 200 && pipePosition > 0 && marioPosition < 50) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        if (skin === 'mario') {
            mario.src = 'assets/images/gameover.png'
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
            mario.style.bottom = `${marioPosition}px`;
        }else if (skin === 'pikachu'){
            mario.src = 'assets/images/pikaover.png'
            mario.style.width = '130px';
            mario.style.marginLeft = '50px';
            mario.style.bottom = `${marioPosition}px`;
        }

        clouds.style.animation = 'none';
        clouds.style.right = `${cloudPosition}px`;
        clouds.style.clear = 'both';

        gameOver.style.visibility = 'visible';
        tryAgain.style.visibility = 'visible';

        clearInterval(loop);
        clearInterval(scoreLoop);
        clearInterval(coinsLoop);
        clearInterval(pipeAnimationInterval);
    }
}, 100);

const pipeAnimationInterval = setInterval(() => {
    const pipeAnimationTime = parseFloat(getComputedStyle(pipe).animationDuration.replace('s', ''));
    const speedSpan = document.querySelector('.speed');
    const pipeRight = getComputedStyle(pipe).right;
  
    console.log('Pipe computed style:', getComputedStyle(pipe));
  
    if (pipeAnimationTime > 0.9 && pipeRight === '100%') {
      pipe.style.animationDuration = `${pipeAnimationTime - 0.1}s`;
      speedSpan.textContent = parseInt(speedSpan.textContent) + 1;
      pipe.style.animation = 'none';
      setTimeout(() => {
        pipe.style.animation = `pipe-animation ${pipeAnimationTime - 0.1}s infinite linear`;
      }, 500);
    }
  }, 10000);
  
  
  

let scoreLoop = setInterval(() => {
    const scoreSpan = document.querySelector('.score');
    const currentScore = parseInt(scoreSpan.textContent);
    const newScore = currentScore + 15;
    scoreSpan.textContent = newScore.toString();
}, 500);

let coinsLoop = setInterval(() => {
    const coinsSpan = document.querySelector('.coins');
    const currentCoins = parseInt(coinsSpan.textContent);
    const newCoins = currentCoins + 5;
    coinsSpan.textContent = newCoins.toString();
}, 500);

function restart() {
    location.reload();
}

function skinPika() {
    const coinsSpan = document.querySelector('.coins');
    const currentCoins = parseInt(coinsSpan.textContent);
    const newCoins = currentCoins - 30;
    if (currentCoins >= 30) {
        mario.src = 'assets/images/pikachu.webp';
        mario.style.width = '180px'
        mario.style.bottom = '0px'
        coinsSpan.textContent = newCoins.toString();
        skin = 'pikachu';
    }

}

document.addEventListener('keydown', jump);
gameBoard.addEventListener('mousedown', jump);
