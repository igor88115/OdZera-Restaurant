
fetch('footer.html')
  .then(response => response.text())
  .then(data => document.getElementById('footer-container').innerHTML = data)
  .catch(error => console.error('Error loading footer:', error));

fetch('header.html')
  .then(response => response.text())
  .then(data => document.getElementById('header-container').innerHTML = data)
  .catch(error => console.error('Error loading header:', error));

fetch('application-menu.html')
  .then(response => response.text())
  .then(data => document.getElementById('application-menu-container').innerHTML = data)
  .catch(error => console.error('Error loading application-menu:', error));



