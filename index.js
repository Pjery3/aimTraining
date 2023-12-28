document.addEventListener('DOMContentLoaded', function (e) {
    let circles = document.querySelectorAll('.circle');
    let score = document.querySelector('.counter span');
    let scoreCount = 0;
    let createCircle = null;
    circles.forEach((item, idx) => {

        // item.addEventListener('click', function (e) {
        //     this.remove();
        //     scoreCount++;
        // })
        score.innerHTML(scoreCount);
    })
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('circle')) {
            e.target.remove();
            scoreCount++;
            score.innerHTML = scoreCount;
        }
    })

    let gameStart = document.querySelector('.start-gaming');
    gameStart.addEventListener('click', function (e) {
        this.classList.add('hidden');
        startGame();
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

    createCircle = setInterval(() => {
        let leftPosition = randomInteger(15, getMaxLeftPosition);
        let topPosition = randomInteger(15, getMaxTopPosition);
        let div = document.createElement('div');
        div.className = "circle";
        div.style.cssText = `
            top: ${topPosition}px;
            left: ${leftPosition}px;
            z-index: ${circleIndex++};
        `;
        circlesContainer.append(div);
    }, 500)
}

function stopGame() {
    let circlesContainer = document.querySelector('.circles');
    circlesContainer.innerHTML = "";
    clearInterval(createCircle);

    let gameStart = document.querySelector('.start-gaming');
    gameStart.classList.remove('hidden');
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}