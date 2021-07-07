(() => {

  const onScroll = () => {
    const moonElem = document.querySelector(".moon");
    const wishElem = document.querySelector(".wish");
    const windowScrollY = window.scrollY;
    moonElem.style.transform = `translate(${windowScrollY * 0.7}%, ${windowScrollY * -0.7}%)`;
    wishElem.style.transform = `translateY(${windowScrollY * -1.2}%)`;
  }

  const run = () => {
    document.addEventListener('scroll', onScroll);
  }

  run();
})();