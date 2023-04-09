const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameBoard = document.querySelector('.game-board');
const clouds = document.querySelector('.clouds');
const restartButton = document.querySelector('.gameover')
let isGameOver = false
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

    if (pipePosition <= 210 && pipePosition > 20 && marioPosition < 100) {
        isGameOver = true
        if (isGameOver){
            document.addEventListener('keydown', restart);
        }
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
        }else if (skin === 'sonic'){
            mario.src = 'assets/images/sonicover.png';
        }else if (skin === 'homer'){
            mario.src = 'assets/images/homerover.png'
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
    const speedCounter = document.querySelector('.speedCount')
    const pipeRight = getComputedStyle(pipe).right;
  
    console.log('Pipe computed style:', getComputedStyle(pipe));
  
    if (pipeAnimationTime > 0.8) {
      pipe.style.animationDuration = `${pipeAnimationTime - 0.1}s`;
      speedSpan.textContent = parseInt(speedSpan.textContent) + 1;
      pipe.style.visibility = 'hidden';
      speedCounter.style.visibility = 'visible';
      pipe.style.animation = 'none';
      setTimeout(() => {
        pipe.style.visibility = 'visible'
        speedCounter.style.visibility = 'hidden';
        pipe.style.animation = `pipe-animation ${pipeAnimationTime - 0.1}s infinite linear`;
      }, 700);
    }
  }, 12000);

  
  
  

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
    const newCoins = currentCoins - 50;
    if (currentCoins >= 50) {
        mario.src = 'assets/images/pikachu.webp';
        mario.style.width = '180px'
        mario.style.bottom = '0px'
        coinsSpan.textContent = newCoins.toString();
        skin = 'pikachu';
        pipe.src = 'assets/images/pikachupipe.png'
        pipe.style.width = '230px';
        pipe.style.marginBottom = '-35px'
        
    } else {
        const notEnough = document.querySelector('.notEnough')
        notEnough.style.visibility = 'visible'
        const coinsNeededSpan = document.querySelector('.coinsNeeded');
        const shortCoins = 50 - currentCoins
        coinsNeededSpan.textContent = shortCoins.toString();
        setTimeout(() => {
            notEnough.style.visibility = 'hidden'
        }, 3000)
    }
}

function skinSonic() {
    const coinsSpan = document.querySelector('.coins');
    const currentCoins = parseInt(coinsSpan.textContent);
    const newCoins = currentCoins - 80;
    if (currentCoins >= 80) {
        mario.src = 'assets/images/sonic.webp';
        mario.style.width = '180px'
        mario.style.bottom = '0px'
        coinsSpan.textContent = newCoins.toString();
        skin = 'sonic';
        pipe.src = 'assets/images/sonicpipe.png';
        pipe.style.width = '130px';
        pipe.style.marginBottom = '-30px'
    } else {
        const notEnough = document.querySelector('.notEnough')
        notEnough.style.visibility = 'visible'
        const coinsNeededSpan = document.querySelector('.coinsNeeded');
        const shortCoins = 80 - currentCoins
        coinsNeededSpan.textContent = shortCoins.toString();
        setTimeout(() => {
            notEnough.style.visibility = 'hidden'
        }, 3000)
    }
}

function skinHomer() {
    const coinsSpan = document.querySelector('.coins');
    const currentCoins = parseInt(coinsSpan.textContent);
    if (currentCoins >= 150) {
        mario.src = 'assets/images/homer.gif';
        mario.style.width = '180px'
        mario.style.bottom = '0px'
        coinsSpan.textContent = newCoins.toString();
        skin = 'homer';
        pipe.src = 'assets/images/homerpipe.webp';
        pipe.style.width = '130px'
    }else {
        const notEnough = document.querySelector('.notEnough')
        notEnough.style.visibility = 'visible'
        const coinsNeededSpan = document.querySelector('.coinsNeeded');
        const shortCoins = 150 - currentCoins
        coinsNeededSpan.textContent = shortCoins.toString();
        setTimeout(() => {
            notEnough.style.visibility = 'hidden'
        }, 3000)
    }
}

document.addEventListener('keydown', jump);
gameBoard.addEventListener('mousedown', jump);
