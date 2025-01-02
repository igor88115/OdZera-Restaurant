function loadImages() {
  const imgFolder = 'img/menu/';
  const imgNames = ['1.svg', '2.svg', '3.svg'];
  const container = document.getElementById('menu-image-container');


  imgNames.forEach(imageName => {
    const img = document.createElement('img');
    img.src = imgFolder + imageName;
    img.classList.add('menu-image')

    container.appendChild(img);
  });
}

function loadMobileImage() {
  const imgFolder = 'img/menu/mobile/';
  const imgNames = ['1.svg'];
  const container = document.getElementById('menu-image-container');


  imgNames.forEach(imageName => {
    const img = document.createElement('img');
    img.src = imgFolder + imageName;
    img.classList.add('menu-image-mobile')

    container.appendChild(img);
  });
}

window.onload = function() {
  loadImages();
  loadMobileImage();
};
