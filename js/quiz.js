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
  const btns = document.querySelectorAll('.btn-img');

  // Skift billede
  if (currentIndex < questions.length) {
    quizImage.src = questions[currentIndex].image;

    // Vis knapper kun på spørgsmål (lige index)
    const isQuestion = currentIndex % 2 === 0;
    btns.forEach(btn => {
      btn.style.display = isQuestion ? 'block' : 'none';
    });
  } else {
    alert('Quiz færdig!');
    document.querySelector('.popup').style.display = 'none';
  }
}