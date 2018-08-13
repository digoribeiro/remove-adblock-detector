function removeAdblock() {
  document.querySelector('body').style.overflow = 'scroll';
  document.getElementById('detecta-adblock').style.display ='none';
}

window.onload = function() {
  removeAdblock();
};