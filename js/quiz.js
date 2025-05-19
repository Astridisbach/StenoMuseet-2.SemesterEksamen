"use strict"; // Aktiverer JS-strikt mode, hvilket hjælper med at finde fejl

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

window.onload = () => {
  updateContent();
};

function answer(userChoice) {
  currentIndex++;
  updateContent();
}

function updateContent() {
  const quizImage = document.getElementById('quiz-image');
  const svarKnapper = document.querySelectorAll('.btn-img');
  const fremKnap = document.querySelector('.frem-btn');

  if (currentIndex < questions.length) {
    quizImage.src = questions[currentIndex].image;

    const isQuestion = currentIndex % 2 === 0;

    // Vis eller skjul sandt/falsk knapper
    svarKnapper.forEach(btn => {
      btn.style.display = isQuestion ? 'block' : 'none';
    });

    // Vis frem-knappen kun på svar
    if (!isQuestion) {
      fremKnap.classList.add('vis');
    } else {
      fremKnap.classList.remove('vis');
    }
  }
}





function goBack() {
  if (currentIndex === 0) {
    window.location.href = "forside.html"; // Første billede: gå til forside
  } else {
    currentIndex--;
    updateContent();
  }
}

function goForward() {
  if (currentIndex >= questions.length - 1) {
    window.location.href = "slut.html"; // Sidste billede: gå til slutside
  } else {
    currentIndex++;
    updateContent();
  }
}
