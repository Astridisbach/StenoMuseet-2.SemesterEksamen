"use strict"; // Aktiverer strict mode, hvilket fanger almindelige fejl og forhindrer brug af usikre funktioner

function startVideo() {
  const video = document.getElementById('myVideo'); // Henter video-elementet med ID'et 'myVideo' fra DOM'en
  video.play(); // Afspiller videoen

  document.querySelector('.play-button').style.display = 'none'; 
  // Skjuler knappen med klassen 'play-button', så den forsvinder efter afspilning starter
}