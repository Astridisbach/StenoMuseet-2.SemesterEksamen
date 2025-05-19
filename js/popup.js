"use strict"; // Aktiverer JS-strikt mode, hvilket hjælper med at finde fejl

const images = [
  'img/tidslinje/popup1.png',
  'img/tidslinje/popup2.png',
  'img/tidslinje/popup3.png',
  'img/tidslinje/popup4.png',
  'img/tidslinje/popup5.png',
  'img/tidslinje/popup6.png'
];

let currentIndex = null;

const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const timelineClose = document.getElementById('timeline-close');

// Klik på tidslinjerækker åbner popup og skjuler luk-knap
document.querySelectorAll('.timeline-row').forEach((row, index) => {
  row.addEventListener('click', () => {
    currentIndex = index;
    popupImg.src = images[currentIndex];
    popup.style.display = 'block';
    timelineClose.classList.add('hidden'); // Skjul øverste luk-knap
  });
});

// Luk popup (klik på kryds)
document.getElementById('image-close').addEventListener('click', () => {
  popup.style.display = 'none';
  timelineClose.classList.remove('hidden'); // Vis luk-knap igen
});

// Frem-knap
document.querySelector('.next-btn').addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    popupImg.src = images[currentIndex];
  } else {
    window.location.href = 'forside.html';
  }
});

// Tilbage-knap
document.querySelector('.back-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    popupImg.src = images[currentIndex];
  } else {
    window.location.href = 'forside.html';
  }
});

// Luk popup ved klik udenfor billede
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    timelineClose.classList.remove('hidden');
  }
});
