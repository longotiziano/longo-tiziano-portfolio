const waving = '../static/clippy/clippy-waving.gif';
const scratching = '../clippy-waving.gif';
const looking = '../clippy-waving.gif';
const pointingRight = '../clippy-waving.gif';

const clippy = document.querySelector('clippy');
const text = document.querySelector('clippy-text');

window.addEventListener('load', () => {
    clippy.src = waving;
    text.textContent = "Oh hi! Seems like you are looking into Tiziano's portfolio. "
});