let balloon = document.querySelector(".balloon");
let win = document.getElementById('win');

function moveBalloon() {
    let randomX = Math.random() * (window.innerWidth - 100);
    let randomY = Math.random() * (window.innerHeight - 130);

    balloon.style.left = randomX + "px";
    balloon.style.top = randomY + "px";
}

function popBalloon() {
    clearInterval(movement);
    balloon.style.display = 'none';
    win.textContent = "🎉 Happy Birthday Anna!!! 🎉";
    win.style.display = 'block';
    cycleBackgroundColors(300);
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


let movement = setInterval(moveBalloon, 750);
