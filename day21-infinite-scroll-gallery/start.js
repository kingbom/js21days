(() => {

  const KEY = 'key on unsplash.com';
  let page = 1;
  const loaderElem = document.querySelector(".loader");

  const showLoader = () => {
    loaderElem.classList.add('visible');
  }

  const hideLoader = () => {
    loaderElem.classList.remove('visible');
  }

  const displayImages = async () => {
    showLoader();
    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`);
    const images = await result.json();
    const galleryElem = document.querySelector('.gallery');
    images.forEach(image => {
       const imgElem = document.createElement('img');
       imgElem.src = image.urls.small;
       galleryElem.appendChild(imgElem);
    });

    hideLoader();

    page += 1;
  }

  function onScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    console.log(scrollTop, clientHeight, scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight - 10) {
        displayImages();
    }
  }

  const run = async () => {
     document.addEventListener('scroll', onScroll);
     displayImages();
  }

  run();
})();