const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameBoard = document.querySelector('.game-board');
const clouds = document.querySelector('.clouds');
const restartButton = document.querySelector('.gameover');
const gameItself = document.querySelector('.gameitself')
const startGameButton = document.querySelector('.startButton')
let skin = 'mario'

// document.addEventListener('click', startGame())




function startGame() {
    const playBtn = document.querySelector('.playbtn')
    const gameOver = document.querySelector('.gameover');
    const tryAgain = document.querySelector('.tryagain');
    let isGameOver = false;
    // clouds.style.animation = 'clouds 18s infinite linear';
    
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    // mario.style.animation = 'none';
    // mario.style.bottom = `${marioPosition}px`;

    const jump = () => {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 550);
    };

    document.addEventListener('keydown', jump);
    gameBoard.addEventListener('mousedown', jump);
    
    gameItself.style.visibility = 'visible';
    playBtn.style.visibility = 'hidden'
    startGameButton.style.visibility = 'hidden';
    pipe.style.visibility = 'hidden';
    gameOver.style.visibility = 'hidden';
    tryAgain.style.visibility = 'hidden';
    mario.src = 'assets/images/mario.webp'
    mario.style.animation = '';
    mario.style.width = '150px';
    pipe.style.animation = '';
    clouds.style.animation = '';
    pipe.style.left = '';
    pipe.style.right = '';
    mario.style.bottom = '';
    skin = 'mario';
    pipe.src = 'assets/images/pipe.png';
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';

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

    const pipeAnimationInterval = setInterval(() => {
        const pipe = document.querySelector('.pipe');
        const pipeAnimationTime = parseFloat(getComputedStyle(pipe).animationDuration.replace('s', ''));
        const speedSpan = document.querySelector('.speed');
        const speedCounter = document.querySelector('.speedCount')
      
        console.log('Pipe computed style:', getComputedStyle(pipe));
      
        if (pipeAnimationTime > 0.7) {
          speedSpan.textContent = parseInt(speedSpan.textContent) + 1;
          speedCounter.style.visibility = 'visible';
          pipe.style.visibility = 'hidden';
          pipe.style.right = '-500px';
          pipe.style.animation = 'none';
          
          setTimeout(() => {
            pipe.style.right = '';
            pipe.style.visibility = 'visible';
            pipe.style.animation = `pipe-animation ${pipeAnimationTime - 0.1}s infinite linear`;
            speedCounter.style.visibility = 'hidden';
            
            
          }, 500);
        }
      }, 12000);

    setTimeout(() => {
    let loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(clouds).right.replace('px', '');
        

        pipe.style.visibility = 'visible'

        

        if (pipePosition <= 210 && pipePosition > 20 && marioPosition < 100 && !isGameOver) {
            isGameOver = true;
            if(isGameOver){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            if (skin === 'mario') {
                mario.src = 'assets/images/gameover.png'
                mario.style.width = '75px';
                mario.style.bottom = `${marioPosition}px`;
            } else if (skin === 'pikachu') {
                mario.src = 'assets/images/pikaover.png'
                mario.style.width = '130px';
                mario.style.marginLeft = '50px';
                mario.style.bottom = `${marioPosition}px`;
            } else if (skin === 'sonic') {
                mario.src = 'assets/images/sonicover.png';
            } else if (skin === 'homer') {
                mario.src = 'assets/images/homerover.png'
            }

            clouds.style.animation = 'none';
            clouds.style.right = `${cloudPosition}px`;
            clouds.style.clear = 'both';

            gameOver.style.visibility = 'visible';
            tryAgain.style.visibility = 'visible';

            const scoreSpan = document.querySelector('.score');
            const currentScore = parseInt(scoreSpan.textContent);
            const bestScore = currentScore;
            const bestScoreSpan = document.querySelector('.bestScore');
            if (bestScoreSpan.textContent < currentScore){
                bestScoreSpan.textContent = bestScore.toString();
            }
            
            scoreSpan.textContent = '0';
            const coinsSpan = document.querySelector('.coins');
            coinsSpan.textContent = '0';
            const speedSpan = document.querySelector('.speed');
            speedSpan.textContent = '0';
            clearInterval(loop);
            clearInterval(scoreLoop);
            clearInterval(coinsLoop);
            clearInterval(pipeAnimationInterval);
        }}
    }, 100);}, 1);} // 5 seconds delay before starting the loop

    


function restart() {
    location.reload();
}

document.addEventListener('keydown', jump);
gameBoard.addEventListener('mousedown', jump);




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
    } else {
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

