const images = ["01.jpg", "02.jpg", "03.jpg"];

const body = document.body;

function changeBackground() {
  body.style.background = `url('../img/${
    images[randomNumber()]
  }') top right repeat`;
}

function randomNumber() {
  const index = Math.floor(Math.random() * images.length);
  return index;
}

changeBackground();
