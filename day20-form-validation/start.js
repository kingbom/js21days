(() => {

  const formElem = document.querySelector("form");

  const displayError = (elem, message) => {
    const smallElem = elem.parentElement.querySelector("small");
    smallElem.innerText = message;
    elem.classList.add('invalid');
    formElem.classList.add('invalid');
  }

  const displaySuccess = () => {
     document.body.innerHTML = '';
     const pElem = document.createElement("p");
     pElem.innerText = 'You have been logged in successfully';
     pElem.classList.add("success");
     document.body.appendChild(pElem);
  }

  const resetState = (elem) => {
    const smallElem = elem.parentElement.querySelector("small");
    smallElem.innerText = '';
    elem.classList.remove('invalid');
    formElem.classList.remove('invalid');
  }

  const validateLengthAndRequiredValue = (elem, min, max) => {
    const val = elem.value;
    const elemName = elem.getAttribute("name");
    if (!val) { // val == null || val == ''
       displayError(elem, `${elemName} is required`)
    } else if (val.length < min || val.length > max) {
        displayError(elem, `${elemName} length must be between ${min} and ${max}`);
    }
  }

  const validateEmail = (elem) => {
    const val = elem.value;
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(val) && val) {
        displayError(elem, "Email must be valid")
    }
  }

  const validateFrom = (event) => {
    event.preventDefault();

    const emailElem = document.getElementById("email");
    const passwordElem = document.getElementById("password");

    resetState(emailElem);
    resetState(passwordElem);


    validateLengthAndRequiredValue(emailElem, 10, 50);
    validateLengthAndRequiredValue(passwordElem, 8, 20);

    validateEmail(emailElem);

    const isValidForm = !formElem.classList.contains("invalid");
    if (isValidForm) {
       displaySuccess()
    }
  }


  const run = () => {
    formElem.addEventListener("submit", validateFrom);
  }

  run();
})();