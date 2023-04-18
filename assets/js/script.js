const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameBoard = document.querySelector('.game-board');
const clouds = document.querySelector('.clouds');
const restartButton = document.querySelector('.gameover');
const gameItself = document.querySelector('.gameitself')
const startGameButton = document.querySelector('.startButton')
let skin = 'mario';

function startGame() {
    const playBtn = document.querySelector('.playbtn');
    const gameOver = document.querySelector('.gameover');
    const tryAgain = document.querySelector('.tryagain');

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
    pipe.style.visibility = 'visible';
    gameOver.style.visibility = 'hidden';
    tryAgain.style.visibility = 'hidden';
    clouds.style.animation = '';
    pipe.style.left = '';
    pipe.style.right = '';
    mario.style.bottom = '';
    mario.style.marginLeft = '';
    mario.style.marginBottom = '0';
    if (skin === 'mario'){
        mario.src = 'assets/images/mario.webp';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        if (window.matchMedia("(max-width: 850px)").matches) {
            mario.style.width = '90px'
          } else {
            mario.style.width = '150px'
          };

        mario.style.bottom = '0px'
        pipe.src = 'assets/images/pipe.png';
        if (window.matchMedia("(max-width: 850px)").matches) {
            pipe.style.width = '100px'
          } else {
            pipe.style.width = '170px'
          };
        mario.style.bottom = '-15px'
    }else if(skin === 'pikachu'){
        mario.src = 'assets/images/pikachu.webp';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        if (window.matchMedia("(max-width: 850px)").matches) {
            mario.style.width = '90px'
          } else {
            mario.style.width = '180px'
          };
        mario.style.bottom = '0px'
        pipe.src = 'assets/images/pikachupipe.png';
        if (window.matchMedia("(max-width: 850px)").matches) {
            pipe.style.width = '140px';
            pipe.style.marginBottom = '-19px'
          } else {
            pipe.style.width = '230px';
          };
        
    }else if (skin === 'sonic'){
        mario.src = 'assets/images/sonic.webp';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        if (window.matchMedia("(max-width: 850px)").matches) {
            mario.style.width = '80px';
          } else {
            mario.style.width = '150px'
          };
        mario.style.bottom = '0px'
        pipe.src = 'assets/images/sonicpipe.png';
        if (window.matchMedia("(max-width: 850px)").matches) {
            pipe.style.width = '75px'
          } else {
            pipe.style.width = '130px';
          };
        pipe.style.marginBottom = '-30px'
    }else if (skin === 'homer'){
        mario.src = 'assets/images/homer.gif';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        if (window.matchMedia("(max-width: 850px)").matches) {
            mario.style.width = '100px'
          } else {
            mario.style.width = '150px'
          };
        mario.style.bottom = '0px'
        skin = 'homer';
        pipe.src = 'assets/images/homerpipe.webp';
        if (window.matchMedia("(max-width: 850px)").matches) {
            pipe.style.width = '80px'
          } else {
            pipe.style.width = '130px';
          };
        pipe.style.marginBottom = '-7px'
    }else if (skin === 'mistery'){
        mario.src = 'assets/images/mistery.gif';
        clouds.src = 'assets/images/misterycloud.png';
        gameBoard.style.backgroundImage = 'url(assets/images/misterybg.png)'
        if (window.matchMedia("(max-width: 850px)").matches) {
            mario.style.width = '100px'
            mario.style.marginBottom = '-5px';
          } else {
            mario.style.width = '150px'
            mario.style.marginBottom = '-10px';
          };
        mario.style.bottom = '0px'
        pipe.src = 'assets/images/misterypipe.png';
        clouds.src = 'assets/images/misterycloud.png';
        if (window.matchMedia("(max-width: 850px)").matches) {
            pipe.style.width = '60px'
          } else {
            pipe.style.width = '90px';
          };
    }
    mario.style.animation = '';
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
        const newCoins = currentCoins + 3;
        coinsSpan.textContent = newCoins.toString();
    }, 800);

   const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(clouds).right.replace('px', '');

        if (window.matchMedia("(min-width: 1000px)").matches) {
            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;
                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;
                clouds.style.animation = 'none';
                clouds.style.right = `${cloudPosition}px`;
                if (skin === 'mario') {
                    mario.src = 'assets/images/gameover.png'
                    mario.style.width = '75px';
                    mario.style.bottom = `${marioPosition}px`;
                    mario.style.marginLeft = '50px';
                    mario.style.marginBottom = '0px'
                } else if (skin === 'pikachu') {
                    mario.src = 'assets/images/pikaover.png'
                    mario.style.width = '150px';
                    mario.style.marginLeft = '50px';
                    mario.style.bottom = `${marioPosition}px`;
                } else if (skin === 'sonic') {
                    mario.src = 'assets/images/sonicover.png';
                } else if (skin === 'homer') {
                    mario.src = 'assets/images/homerover.png';
                } else if (skin === 'mistery') {
                    mario.src = 'assets/images/misteryover.png';
    
                }
                gameOver.style.visibility = 'visible';
                tryAgain.style.visibility = 'visible';
                const scoreSpan = document.querySelector('.score');
                const currentScore = parseInt(scoreSpan.textContent);
                const bestScore = currentScore;
                const bestScoreSpan = document.querySelector('.bestScore');
                if (bestScoreSpan.textContent < currentScore) {
                    bestScoreSpan.textContent = bestScore.toString();
                }
                clearInterval(loop);
                clearInterval(scoreLoop);
                clearInterval(coinsLoop);
                scoreSpan.textContent = '0';
            }
          } else {
            if (pipePosition <= 50 && pipePosition > 0 && marioPosition < 40) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;
                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;
                clouds.style.animation = 'none';
                clouds.style.right = `${cloudPosition}px`;
                if (skin === 'mario') {
                    mario.src = 'assets/images/gameover.png'
                    mario.style.width = '45px';
                    mario.style.bottom = `${marioPosition + 10}px`;
                } else if (skin === 'pikachu') {
                    mario.src = 'assets/images/pikaover.png'
                    mario.style.width = '75px';
                    mario.style.marginLeft = '10px';
                    mario.style.bottom = `${marioPosition}px`;
                } else if (skin === 'sonic') {
                    mario.src = 'assets/images/sonicover.png';
                } else if (skin === 'homer') {
                    mario.src = 'assets/images/homerover.png';
                } else if (skin === 'mistery') {
                    mario.src = 'assets/images/misteryover.png';
    
                }
                gameOver.style.visibility = 'visible';
                tryAgain.style.visibility = 'visible';
                const scoreSpan = document.querySelector('.score');
                const currentScore = parseInt(scoreSpan.textContent);
                const bestScore = currentScore;
                const bestScoreSpan = document.querySelector('.bestScore');
                if (bestScoreSpan.textContent < currentScore) {
                    bestScoreSpan.textContent = bestScore.toString();
                }
                clearInterval(loop);
                clearInterval(scoreLoop);
                clearInterval(coinsLoop);
                scoreSpan.textContent = '0';
            }
          }
        }, 10)}


function restart() {
    location.reload();
}

function skinMario() {
    const coinsSpan = document.querySelector('.coins');
    const currentCoins = parseInt(coinsSpan.textContent);
    const newCoins = currentCoins - 0;
    if (currentCoins >= 0) {
        mario.src = 'assets/images/mario.webp';
        clouds.src = 'assets/images/clouds.png';
        if (window.matchMedia("(max-width: 850px)").matches) {
            mario.style.width = '100px'
            mario.style.marginBottom = '-5px';
          } else {
            mario.style.width = '150px'
            mario.style.marginBottom = '-10px';
          };
        coinsSpan.textContent = newCoins.toString();
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        skin = 'mario';
        pipe.src = 'assets/images/pipe.png';
        pipe.style.marginBottom = '0px'
        
        if (window.matchMedia("(max-width: 850px)").matches) {
            pipe.style.width = '100px'
          } else {
            pipe.style.width = '180px'
          };
    } else {
        const notEnough = document.querySelector('.notEnough')
        notEnough.style.visibility = 'visible'
        const coinsNeededSpan = document.querySelector('.coinsNeeded');
        const shortCoins = 0 - currentCoins
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
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        if (window.matchMedia("(max-width: 850px)").matches) {
            mario.style.width = '80px';
          } else {
            mario.style.width = '150px'
          };
        mario.style.bottom = '0px'
        coinsSpan.textContent = newCoins.toString();
        skin = 'sonic';
        pipe.src = 'assets/images/sonicpipe.png';
        if (window.matchMedia("(max-width: 850px)").matches) {
            pipe.style.width = '75px'
          } else {
            pipe.style.width = '130px';
          };
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
    const newCoins = currentCoins - 150;
    if (currentCoins >= 150) {
        mario.src = 'assets/images/homer.gif';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        if (window.matchMedia("(max-width: 850px)").matches) {
            mario.style.width = '100px'
          } else {
            mario.style.width = '150px'
          };
        mario.style.bottom = '0px'
        coinsSpan.textContent = newCoins.toString();
        skin = 'homer';
        pipe.src = 'assets/images/homerpipe.webp';
        if (window.matchMedia("(max-width: 850px)").matches) {
            pipe.style.width = '80px'
          } else {
            pipe.style.width = '130px';
          };
        pipe.style.marginBottom = '-7px'
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
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        if (window.matchMedia("(max-width: 850px)").matches) {
            mario.style.width = '90px'
          } else {
            mario.style.width = '180px'
          };
        mario.style.bottom = '0px'
        coinsSpan.textContent = newCoins.toString();
        skin = 'pikachu';
        pipe.src = 'assets/images/pikachupipe.png';
        mario.style.marginBottom = '0px';
        if (window.matchMedia("(max-width: 850px)").matches) {
            pipe.style.width = '140px';
            pipe.style.marginBottom = '-19px'
          } else {
            pipe.style.width = '230px';
            pipe.style.marginBottom = '-30px'
          };

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

function skinMistery() {
    const coinsSpan = document.querySelector('.coins');
    const currentCoins = parseInt(coinsSpan.textContent);
    const newCoins = currentCoins - 999;
    if (currentCoins >= 999) {
        mario.src = 'assets/images/mistery.gif';
        gameBoard.style.background = 'url(assets/images/misterybg.png) center center'
        gameBoard.style.backgroundSize = 'contain'
        if (window.matchMedia("(max-width: 850px)").matches) {
            mario.style.width = '100px'
            mario.style.marginBottom = '-5px';
          } else {
            mario.style.width = '150px';
            mario.style.marginBottom = '-10px';
          };
        coinsSpan.textContent = newCoins.toString();
        skin = 'mistery';
        pipe.src = 'assets/images/misterypipe.png';
        pipe.style.marginBottom = '-10px'
        clouds.src = 'assets/images/misterycloud.png';
        if (window.matchMedia("(max-width: 850px)").matches) {
            pipe.style.width = '60px'
          } else {
            pipe.style.width = '90px';
          };

    } else {
        const notEnough = document.querySelector('.notEnough')
        notEnough.style.visibility = 'visible'
        const coinsNeededSpan = document.querySelector('.coinsNeeded');
        const shortCoins = 999 - currentCoins
        coinsNeededSpan.textContent = shortCoins.toString();
        setTimeout(() => {
            notEnough.style.visibility = 'hidden'
        }, 3000)
    }
}
