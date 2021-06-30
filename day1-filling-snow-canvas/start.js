(() => {
  const setup = () => {
      const canvas = document.getElementById('filling-snow-canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      return {
          canvas,
          convasContext : canvas.getContext('2d'),
          numberOfSnowballs : 250
      }
  }

  const random = (min, max) => {
       return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const createSnowBalls = (canvas, numberOfSnowballs) => {
      return [...Array(numberOfSnowballs)].map(() => {
          return {
              x : random(0, canvas.width),
              y : random(0, canvas.height),
              opacity : random(0.5, 1),
              redius : random(2, 4),
              speedX : random(-5, 5),
              speedY : random(1, 3)
          }
      });
  }

  const drawSnowBalls = (convasContext, snowBalls) => {
    convasContext.beginPath();
    convasContext.arc(snowBalls.x, snowBalls.y, snowBalls.redius, 0, Math.PI * 2);
    convasContext.fillStyle = `rgba(255, 255, 255, ${snowBalls.opacity})`;
    convasContext.fill();
  }

  const moveSnowBall = (canvas, snowBall) => {
    snowBall.x += snowBall.speedX;
    snowBall.y += snowBall.speedY;

    if (snowBall.x > canvas.width) {
        snowBall.x = 0;
    } else if (snowBall.x < 0){
        snowBall.x = canvas.width;
    }

    if (snowBall.y > canvas.height) {
        snowBall.y = 0;
    }
  }

  const run = () => {
      const {canvas, convasContext, numberOfSnowballs} = setup();
      const snowBalls = createSnowBalls(canvas, numberOfSnowballs);

      setInterval(() => {
        convasContext.clearRect(0, 0, canvas.width, canvas.height);  
        snowBalls.forEach((snowBall) => drawSnowBalls(convasContext, snowBall));
        snowBalls.forEach((snowBall) => moveSnowBall(canvas, snowBall));
      }, 50);
  }

  run();
})();