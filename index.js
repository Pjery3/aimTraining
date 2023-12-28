let score = document.querySelector('.counter span');
document.addEventListener('DOMContentLoaded', function (e) {
    let circles = document.querySelectorAll('.circle');

    let scoreCount = 0;
    circles.forEach((item, idx) => {
        score.innerHTML(scoreCount);
    })
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('circle')) {
            e.target.remove();
            scoreCount++;
            score.innerHTML = scoreCount;
        }
    })



    document.addEventListener('keydown', function (e) {
        if (e.code == 'Escape') stopGame();
    })
})

function startGame() {
    let circlesContainer = document.querySelector('.circles');
    let getMaxLeftPosition = circlesContainer.clientWidth - 30;
    let getMaxTopPosition = circlesContainer.clientHeight - 30;
    let circleIndex = 0;
}

function stopGame() {
    
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
const GAME_WINDOW = document.querySelector('.game-window');
const CIRCLES_CONTAINER = document.querySelector('.circles');
let cre
const gameSetting = {
    targetSize: 30,
    rectangleSize: {
        width: GAME_WINDOW.clientWidth,
        height: GAME_WINDOW.clientHeight
    },
    spawnArea: {
        top: randomInteger(gameSetting.targetSize, gameSetting.rectangleSize.height - gameSetting.targetSize),
        left: randomInteger(gameSetting.targetSize, gameSetting.rectangleSize.width - gameSetting.targetSize),
    }
}

class Game {
    constructor() { 
        let createCircle;
     }
    start(timeInterval) {
        let gamePreview = document.querySelector('.start-gaming');
        gamePreview.addEventListener('click', function (e) {
            this.classList.add('hidden');
        });

        createCircle = setInterval(() => {
            let div = document.createElement('div');
            div.className = "circle";
            div.style.cssText = `
            top: ${topPosition}px;
            left: ${leftPosition}px;
            z-index: ${circleIndex++};
        `;
            circlesContainer.append(div);
        }, timeInterval)
    }

    end(){
        circlesContainer.innerHTML = "";
        clearInterval(createCircle);
        
        let gameStart = document.querySelector('.start-gaming');
        gameStart.classList.remove('hidden');
        score.innerHTML = 0;
    }
}