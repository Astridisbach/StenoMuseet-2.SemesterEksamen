"use strict"; // Aktiverer JS-strikt mode, hvilket hjælper med at finde fejl

function startVideo() {
  const video = document.getElementById('myVideo');
  video.play();
  document.querySelector('.play-button').style.display = 'none';
}