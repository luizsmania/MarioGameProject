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
    mario.style.animation = '';
    mario.style.width = '150px';
    pipe.style.animation = '';
    clouds.style.animation = '';
    pipe.style.left = '';
    pipe.style.right = '';
    mario.style.bottom = '';
    if (skin === 'mario'){
        mario.src = 'assets/images/mario.webp';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        mario.style.width = '150px'
        mario.style.bottom = '0px'
        pipe.src = 'assets/images/pipe.png';
        pipe.style.width = '170px';
        mario.style.bottom = '-15px'
    }else if(skin === 'pikachu'){
        mario.src = 'assets/images/pikachu.webp';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        mario.style.width = '180px'
        mario.style.bottom = '0px'
        pipe.src = 'assets/images/pikachupipe.png';
        pipe.style.width = '230px';
        pipe.style.marginBottom = '-35px'
    }else if (skin === 'sonic'){
        mario.src = 'assets/images/sonic.webp';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        mario.style.width = '150px'
        mario.style.bottom = '0px'
        pipe.src = 'assets/images/sonicpipe.png';
        pipe.style.width = '130px';
        pipe.style.marginBottom = '-30px'
    }else if (skin === 'homer'){
        mario.src = 'assets/images/homer.gif';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        mario.style.width = '180px'
        mario.style.bottom = '0px'
        skin = 'homer';
        pipe.src = 'assets/images/homerpipe.webp';
        pipe.style.width = '130px'
        pipe.style.marginBottom = '-7px'
    }else if (skin === 'mistery'){
        mario.src = 'assets/images/mistery.gif';
        clouds.src = 'assets/images/misterycloud.png';
        gameBoard.style.backgroundImage = 'url(assets/images/misterybg.png)'
        mario.style.width = '180px'
        mario.style.bottom = '0px'
        pipe.src = 'assets/images/misterypipe.png';
        clouds.src = 'assets/images/misterycloud.png';
        pipe.style.width = '100px';
        pipe.style.marginBottom = '-35px'
    }
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
        const newCoins = currentCoins + 2;
        coinsSpan.textContent = newCoins.toString();
    }, 800);

    // const pipeAnimationInterval = setInterval(() => {
    //     const pipe = document.querySelector('.pipe');
    //     const pipeAnimationTime = parseFloat(getComputedStyle(pipe).animationDuration.replace('s', ''));
    //     const speedSpan = document.querySelector('.speed');
    //     const speedCounter = document.querySelector('.speedCount')
      
    //     console.log('Pipe computed style:', getComputedStyle(pipe));
      
    //     if (pipeAnimationTime > 0.7) {
    //       speedSpan.textContent = parseInt(speedSpan.textContent) + 1;
    //       speedCounter.style.visibility = 'visible';
    //       pipe.style.visibility = 'hidden';
    //       pipe.style.right = '-500px';
    //       pipe.style.animation = 'none';
          
    //       setTimeout(() => {
    //         pipe.style.right = '';
    //         pipe.style.visibility = 'visible';
    //         pipe.style.animation = `pipe-animation ${pipeAnimationTime - 0.1}s infinite linear`;
    //         speedCounter.style.visibility = 'hidden';
            
    //       }, 2000);
    
    //     }
    //   }, 12000);

    setTimeout(() => {
    let loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(clouds).right.replace('px', '');
        

        pipe.style.visibility = 'visible'

        

        if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80 && !isGameOver) {
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
                mario.style.bottom = `${marioPosition}px`;
            } else if (skin === 'sonic') {
                mario.src = 'assets/images/sonicover.png';
            } else if (skin === 'homer') {
                mario.src = 'assets/images/homerover.png';
            } else if (skin === 'mistery') {
                mario.src = 'assets/images/misteryover.png';

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
            const speedSpan = document.querySelector('.speed');
            speedSpan.textContent = '1';
            clearInterval(loop);
            clearInterval(scoreLoop);
            clearInterval(coinsLoop);
            clearInterval(increaseCoinsLoop);
            clearInterval(pipeAnimationInterval);
        }}
    }, 100);}, 1);}

    


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
        mario.style.width = '150px'
        mario.style.bottom = '-15px'
        coinsSpan.textContent = newCoins.toString();
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        skin = 'mario';
        pipe.src = 'assets/images/pipe.png';
        pipe.style.width = '180px'
        pipe.style.marginBottom = '';
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

function skinSonic() {
    const coinsSpan = document.querySelector('.coins');
    const currentCoins = parseInt(coinsSpan.textContent);
    const newCoins = currentCoins - 1;
    if (currentCoins >= 1) {
        mario.src = 'assets/images/sonic.webp';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        mario.style.width = '150px'
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
    const newCoins = currentCoins - 1;
    if (currentCoins >= 1) {
        mario.src = 'assets/images/homer.gif';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        mario.style.width = '180px'
        mario.style.bottom = '0px'
        coinsSpan.textContent = newCoins.toString();
        skin = 'homer';
        pipe.src = 'assets/images/homerpipe.webp';
        pipe.style.width = '130px'
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
    const newCoins = currentCoins - 1;
    if (currentCoins >= 1) {
        mario.src = 'assets/images/pikachu.webp';
        clouds.src = 'assets/images/clouds.png';
        gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB, #E0F6FF)'
        mario.style.width = '180px'
        mario.style.bottom = '0px'
        coinsSpan.textContent = newCoins.toString();
        skin = 'pikachu';
        pipe.src = 'assets/images/pikachupipe.png';
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

function skinMistery() {
    const coinsSpan = document.querySelector('.coins');
    const currentCoins = parseInt(coinsSpan.textContent);
    const newCoins = currentCoins - 1;
    if (currentCoins >= 1) {
        mario.src = 'assets/images/mistery.gif';
        gameBoard.style.backgroundImage = 'url(assets/images/misterybg.png)'
        mario.style.width = '180px'
        mario.style.bottom = '0px'
        coinsSpan.textContent = newCoins.toString();
        skin = 'mistery';
        pipe.src = 'assets/images/misterypipe.png';
        clouds.src = 'assets/images/misterycloud.png';
        pipe.style.width = '100px';
        pipe.style.marginBottom = '-35px'

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

