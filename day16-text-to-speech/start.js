(() => {

  const message = new SpeechSynthesisUtterance()

  const onVoicesChanged = () => {
    const voices = speechSynthesis.getVoices();
    const thVoices = voices.find(voice => voice.lang === 'th-TH');
    message.voice = thVoices;
  }

  const onClick = (event) => {
    message.text = event.target.getAttribute('alt');
    speechSynthesis.speak(message);
  }

  const run = () => {
     speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
     const imageElems = Array.from(document.querySelectorAll('img'));
     imageElems.forEach(imageElem => imageElem.addEventListener('click', onClick));
  }

  run();
})();