(() => {
  const refs = {
    prevSlickBtn: document.querySelector('.prev'),
    nextSlickBtn: document.querySelector('.next'),
    secondSlider: document.querySelector('.second'),
    firstSlider: document.querySelector('.first'),
  };

  refs.prevSlickBtn.addEventListener('click', switchNumbers);
  refs.nextSlickBtn.addEventListener('click', switchNumbers);

  function switchNumbers() {
    if (refs.firstSlider.classList.contains('active')) {
      refs.firstSlider.classList.remove('active');
      refs.secondSlider.classList.add('active');
    } else {
      refs.firstSlider.classList.add('active');
      refs.secondSlider.classList.remove('active');
    }
  }
})();
