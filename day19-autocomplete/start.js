(() => {
  const carBrands = [
    'BMW',
    'Maserati',
    'Mercedes Benz',
    'Ferrari',
    'Honda',
    'Toyota',
    'Hyundai'
  ];

  const searchElem = document.querySelector('.search');

  const clearResults = () => {
    const ulElem = document.querySelector('ul');
    if (ulElem) {
        document.body.removeChild(ulElem);
    }
  }

  const selectCarBrand = (event) => {
    searchElem.value = event.target.innerText;
    clearResults();
  }

  const onInput = (event) => {
    const textInput = event.target.value.toLowerCase();
    const matchedCarBrands = carBrands.filter(carBrand => carBrand.toLocaleLowerCase().startsWith(textInput));
    if (matchedCarBrands.length > 0) {
        clearResults();
        const ulElem = document.createElement('ul');
        ulElem.classList.add('results');

        matchedCarBrands.forEach(carBrand => {
          const liElem = document.createElement('li');
          liElem.innerText = carBrand;
          liElem.onclick = selectCarBrand;
          ulElem.appendChild(liElem);
        });

        document.body.appendChild(ulElem);
    } else {
      clearResults();
    }
  }

  const run = () => {
    searchElem.addEventListener('input', onInput);
    document.addEventListener('click', clearResults);
  }

  run();
})();