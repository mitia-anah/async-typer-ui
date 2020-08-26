function wait(ms = 0) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


function getRandombetween(min = 20, max = 150, randomNumber = Math.random()) {
    return Math.floor(randomNumber * (max - min) + min);
}

async function draw(el) {
    const text = el.textContent;
    let soFar = '';
    for (const letter of text) {
        console.log(letter);
        soFar += letter;
        el.textContent = soFar;
        const { typeMin, typeMax } = el.dataset;
        const amountOfTimeToWait = getRandombetween();
        await wait(amountOfTimeToWait);
    }
}

document.querySelectorAll('[data-type]').forEach(draw);