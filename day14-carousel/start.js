(() => {
  let currentIndex = 0;

  function displayImage(imageElems, newIndex) {
    const lastIndex = imageElems.length - 1;
     if (newIndex < 0) {
         newIndex = lastIndex;
     } else if (newIndex > lastIndex) {
        newIndex = 0;
     }

     const newImge = imageElems[newIndex];
     newImge.scrollIntoView({ behavior: 'smooth'});
     currentIndex = newIndex;
  }

  const run = () => {
    const imgeElems = document.querySelectorAll('img');
    const previousButtonElems = document.querySelector('.previous');
    const nextButtonElems = document.querySelector('.next');

    previousButtonElems.addEventListener('click', () => displayImage(imgeElems, currentIndex - 1));
    nextButtonElems.addEventListener('click', () => displayImage(imgeElems, currentIndex + 1));

  }

  run();
})();