"use strict"; // Aktiverer JS-strikt mode, hvilket hjælper med at finde fejl

let currentPopupIndex = null;
  
function showPopup(index) {
  // Luk alle åbne popups
  document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
  const popup = document.getElementById(`popup-${index}`);
  if (popup) {
    popup.style.display = 'block';
    currentPopupIndex = index;
  }
}

// Klik på tidslinje-row viser popup
document.querySelectorAll('.timeline-row').forEach((row, index) => {
  row.addEventListener('click', () => showPopup(index + 1));
});

// Klik på kryds lukker popup
document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => {
    const popupId = btn.getAttribute('data-popup');
    document.getElementById(popupId).style.display = 'none';
  });
});

// Klik udenfor popup lukker popup
window.addEventListener('click', (e) => {
  document.querySelectorAll('.popup').forEach(popup => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});

// Frem og tilbage knapper + redirect til forside
document.addEventListener('click', function(e) {
if (e.target.id === 'next-btn') {
if (currentPopupIndex < 6) {
  showPopup(currentPopupIndex + 1);
} else {
  window.location.href = 'forside.html'; // Gå til forside fra sidste popup
}
}
if (e.target.id === 'back-btn') {
if (currentPopupIndex > 1) {
  showPopup(currentPopupIndex - 1);
} else {
  window.location.href = 'forside.html'; // Gå til forside fra første popup
}
}
});
