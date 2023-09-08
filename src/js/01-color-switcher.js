
const elements = {
    btnStart: document.querySelector("[data-start]"),
    btnStop: document.querySelector("[data-stop]"),
}

elements.btnStart.addEventListener('click', handlerStart)
elements.btnStop.addEventListener('click', handlerStop)
elements.btnStop.setAttribute('disabled', '')
let bgcTimer = null;

function handlerStart() {
    elements.btnStart.setAttribute('disabled', '');
    elements.btnStop.removeAttribute('disabled');
    bgcTimer = setInterval(() => {
        document.body.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000)
}

function handlerStop() {
    clearInterval(bgcTimer);
    elements.btnStart.removeAttribute('disabled');
    elements.btnStop.setAttribute('disabled', '');
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
