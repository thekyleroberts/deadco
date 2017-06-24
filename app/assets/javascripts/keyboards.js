// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop function running all together
    audio.currentTime = 0; //rewind to start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
}
  
 const keys = Array.from(document.querySelectorAll('.key'));
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 window.addEventListener('keydown', playSound);