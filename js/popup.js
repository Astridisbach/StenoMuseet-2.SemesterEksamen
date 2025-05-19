"use strict"; // Aktiverer strict mode – hjælper med at fange fejl og forbyder brug af visse usikre funktioner

// Array med stier til billeder, som skal vises i popup'en
>>>>>>> 00072be0be5bd89a8e5a0ce68fe627c88684f4f7
const images = [
  'img/tidslinje/popup1.png',
  'img/tidslinje/popup2.png',
  'img/tidslinje/popup3.png',
  'img/tidslinje/popup4.png',
  'img/tidslinje/popup5.png',
  'img/tidslinje/popup6.png'
];

let currentIndex = null; // Holder styr på hvilket billede der vises i øjeblikket

// Referencer til DOM-elementer
const popup = document.getElementById('image-popup');        // Selve popup-containeren
const popupImg = document.getElementById('popup-img');       // Billedet i popup'en
const timelineClose = document.getElementById('timeline-close'); // Den øverste luk-knap

// Når man klikker på en række i tidslinjen...
document.querySelectorAll('.timeline-row').forEach((row, index) => {
  row.addEventListener('click', () => {
    currentIndex = index;                           // Sæt index til den række der blev klikket på
    popupImg.src = images[currentIndex];            // Skift billedet i popup'en
    popup.style.display = 'block';                  // Vis popup'en
    timelineClose.classList.add('hidden');          // Skjul øverste luk-knap, så kun krydset i popup'en bruges
  });
});

// Når man klikker på krydset i popup'en
document.getElementById('image-close').addEventListener('click', () => {
  popup.style.display = 'none';                     // Skjul popup'en
  timelineClose.classList.remove('hidden');         // Vis den øverste luk-knap igen
});

// Når man klikker på frem-knappen
document.querySelector('.next-btn').addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;                                 // Gå til næste billede
    popupImg.src = images[currentIndex];            // Opdater billedet i popup'en
  } else {
    window.location.href = 'forside.html';          // Hvis der ikke er flere billeder, gå til forside
  }
});

// Når man klikker på tilbage-knappen
document.querySelector('.back-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;                                 // Gå til forrige billede
    popupImg.src = images[currentIndex];            // Opdater billedet i popup'en
  } else {
    window.location.href = 'forside.html';          // Hvis man er ved første billede, gå til forside
  }
});

// Hvis man klikker uden for selve billedet (på baggrunden), lukkes popup'en
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';                   // Skjul popup'en
    timelineClose.classList.remove('hidden');       // Vis den øverste luk-knap igen
  }
});