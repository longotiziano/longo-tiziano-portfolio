const waving = './static/clippy/clippy-waving.gif';
const scratching = './static/clippy/clippy-head-scratch.gif';
const looking = './static/clippy/clippy-looking.gif';
const pointingRight = './static/clippy/clippy-pointing-right.gif';
const motoArrive = './static/clippy/moto-reverse.gif'
const clippyIntroduction = './static/clippy/clippy-introduction.gif'
const staticClippyImg = './static/clippy/static.png'

const clippy = document.querySelector('.clippy');
const clippyImage = clippy.querySelector('img')
const textBlock = document.querySelector('.clippy-text-visible');
const bubble = document.querySelector('.clippy-bubble');
const sizer = document.querySelector('.clippy-text-sizer');
const desktop = document.getElementById('desktop')

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/*
Receives a text and the time that will be speaking and makes clippy say sum. Could be with suspense...
*/
const saySum = async (text, msSpeaking = 4000, suspense = false) => {
    const end = Date.now() + msSpeaking;
    bubble.classList.add('visible');
    sizer.textContent = text;
    textBlock.textContent = "";
    
    for (const word of text.split(" ")) {
        await sleep(200);
        textBlock.textContent += ` ${word}`;
    }

    const remaining = end - Date.now();
    if (remaining > 0) {
        if (suspense) await addSuspense(text, remaining);
        else await sleep(remaining);
    }
    shutUp();
}

const addSuspense = async (text, ms) => { 
    const end = Date.now() + ms;
    while (Date.now() < end) {
        for (let i = 0; i <= 3; i++) {
            if (Date.now() >= end) break;
            await sleep(400);
            textBlock.textContent = `${text.slice(0, -3)}${'.'.repeat(i)}`;
        }
    }
}

const shutUp = () => {
    textBlock.textContent = "";
    bubble.classList.remove('visible');
}

const resetGif = (src) => {
    clippyImage.src = `${src}?t=${Date.now()}`;

}

/*
introductions' gif lasts 21 seconds
*/
const introduction = async () => {
    resetGif(clippyIntroduction);
    await sleep(3900);
    await saySum("Oh hi! Seems like you are looking into Tiziano's portfolio...", 5000, true);
    await saySum("If you are looking for a Software Developer, take a look to his profile! Maybe it catch your eye :) ...", 9000, true);
    await sleep(4000);
    clippyImage.src = staticClippyImg;
}

window.addEventListener('load', async () => {
    await introduction();
})