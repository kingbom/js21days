(() => {
    const canvas = document.getElementById('painting');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext('2d');
    let previousPoint = { x : 0, y: 0 };

    const getDistance = (previousPoint, currentPoint) => {
        return Math.sqrt((previousPoint.x - currentPoint.x) ** 2 + (previousPoint.y - currentPoint.y) ** 2);
    }

    const onMousemove = ({ pageX, pageY }) => {
        const currentPoint = { x: pageX, y: pageY };

        context.beginPath();

        context.lineCap = 'round';
        context.lineJoin = 'round';
        const distance = getDistance(previousPoint, currentPoint);
        context.lineWidth = Math.random() / distance * 40;

        const opacity = Math.min(0.5, 1/ distance);
        context.strokeStyle = `rgba(222, 10, 109, ${opacity})`;

        context.moveTo(previousPoint.x, previousPoint.y);
        context.lineTo(currentPoint.x, currentPoint.y);

        context.stroke();
        context.closePath();

        previousPoint = currentPoint;
    }

    const onMouseEnter = ({ pageX, pageY }) => {
        previousPoint.x = pageX;
        previousPoint.y = pageY;
    }

    const run = () => {
        canvas.addEventListener('mousemove', onMousemove);
        canvas.addEventListener('mouseenter', onMouseEnter);
    }
    run();
})();