(() => {
  const audioElem = document.querySelector('audio');
  const playElem = document.querySelector('.play');
  const progressBarElem = document.querySelector('.progress-bar');
  const startTimeElem = document.querySelector('.start-time');
  const endTimeElem = document.querySelector('.end-time');


  const onclick = () => {
    if (audioElem.paused) {
        audioElem.play();
        playElem.className = 'pause';
    } else {
        audioElem.pause();
        playElem.className = 'play';
    }
  }

  const onTimeupdate = () => {
    const currentTime = getDuration(audioElem.currentTime);
    startTimeElem.innerHTML = currentTime;
    progressBarElem.value = audioElem.currentTime;
  }

  const getDuration = (time) => {
    const minutes = Math.floor(time / 60 % 60).toString();
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  const onLoadedData = () => {
    endTimeElem.innerHTML = getDuration(audioElem.duration);
    progressBarElem.max = audioElem.duration;
  }

  const onInput = () => {
    audioElem.currentTime = progressBarElem.value;
  }

  const onEnded = () => {
    playElem.className = 'play';
    audioElem.currentTime = 0;
  }

  const run = () => {
    playElem.addEventListener('click', onclick);
    audioElem.addEventListener('timeupdate', onTimeupdate);
    audioElem.addEventListener('loadeddata', onLoadedData);
    audioElem.addEventListener('ended', onEnded);
    progressBarElem.addEventListener('input', onInput);
  }

  run();
})();