const balloon = document.querySelector(".balloon");
const win = document.getElementById('win');
const score = document.getElementById('score');
const start = Date.now();

let best = localStorage.getItem("best");

function moveBalloon() {
    let randomX = Math.random() * (window.innerWidth - 100);
    let randomY = Math.random() * (window.innerHeight - 130);

    balloon.style.left = randomX + "px";
    balloon.style.top = randomY + "px";
}

function popBalloon() {
    const time = Date.now() - start;
    clearInterval(movement);
    balloon.style.display = 'none';
    win.textContent = "🎉 Happy Birthday Anna!!! 🎉";
    win.style.display = 'block';
    cycleBackgroundColors(300);
    score.style.display = 'block';
    if (!best || time < best) {
      best = time;
      localStorage.setItem('best', time)
    }
    document.getElementById('yours').textContent = `Your time: ${time}ms`;
    document.getElementById('best').textContent = `Best time: ${best}ms`;
}

function generateRandomColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    return `rgb(${randomR},${randomG},${randomB})`;
}

function cycleBackgroundColors(intervalTime = 2000) {
    setInterval(() => {
        document.body.style.backgroundColor = generateRandomColor();
    }, intervalTime);
}


let movement = setInterval(moveBalloon, 666);
