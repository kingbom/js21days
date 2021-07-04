(() => {

    const random = (min, max) => {
        return Math.floor(Math.random() * (max- min + 1) + min);
    }

    const createDucks = () => {
        return [...Array(5)].map(() => {
            return {
                x: random(0, window.innerWidth),
                y: window.innerHeight,
                speedX : random(-50, 50),
                speedY : random(5, 10)
            }
        });
    }

    const setupDuckElement = (duck) => {
        const duckElem = document.createElement('div');
        duckElem.className = 'duck';
        duckElem.style.left = `${duck.x}px`;
        duckElem.style.top = `${duck.y}px`;
        console.log(duckElem);
    }

    const run = () => {
        const ducks = createDucks();
        ducks.map(setupDuckElement);
    }
    run();
})();