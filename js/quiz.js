"use strict"; 
// Aktiverer strict mode – hjælper med at fange fejl og forbyder brug af visse usikre funktioner

// Array med quizindhold – skiftevis spørgsmål (sp) og svar (sv)
const questions = [
  { image: "img/quiz/sp1.png" },
  { image: "img/quiz/sv1.png" },
  { image: "img/quiz/sp2.png" },
  { image: "img/quiz/sv2.png" },
  { image: "img/quiz/sp3.png" },
  { image: "img/quiz/sv3.png" },
  { image: "img/quiz/sp4.png" },
  { image: "img/quiz/sv4.png" }
];

let currentIndex = 0; 
// Holder styr på hvilket billede (spørgsmål/svar) der vises

window.onload = () => {
  updateContent(); 
  // Når siden er indlæst, vises første billede i quizzen
};

function answer(userChoice) {
  currentIndex++; 
  // Går videre til næste billede (svarbillede)
  updateContent(); 
  // Opdaterer billedet og interface
}

function updateContent() {
  const quizImage = document.getElementById('quiz-image'); // Finder quiz-billedet
  const svarKnapper = document.querySelectorAll('.btn-img'); // Finder alle svarknapper
  const fremKnap = document.querySelector('.frem-btn'); // Finder frem-knappen

  if (currentIndex < questions.length) {
    quizImage.src = questions[currentIndex].image; 
    // Viser næste billede i rækken

    const isQuestion = currentIndex % 2 === 0; 
    // Tjekker om det er et spørgsmål (lige indeks)

    // Viser eller skjuler svarknapper afhængigt af om det er spørgsmål eller svar
    svarKnapper.forEach(btn => {
      btn.style.display = isQuestion ? 'block' : 'none';
    });

    // Frem-knappen vises kun på svarbilleder
    if (!isQuestion) {
      fremKnap.classList.add('vis');
    } else {
      fremKnap.classList.remove('vis');
    }
  }
}

function goBack() {
  if (currentIndex === 0) {
    window.location.href = "forside.html"; 
    // Hvis brugeren trykker tilbage fra første billede, sendes de til forsiden
  } else {
    currentIndex--; 
    // Går ét billede tilbage
    updateContent(); 
    // Opdaterer visningen
  }
}

function goForward() {
  if (currentIndex >= questions.length - 1) {
    window.location.href = "slut.html"; 
    // Hvis brugeren er nået til sidste billede, sendes de til slutskærm
  } else {
    currentIndex++; 
    // Går ét billede frem
    updateContent(); 
    // Opdaterer visningen
  }
}