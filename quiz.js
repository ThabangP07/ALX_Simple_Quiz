function checkAnswer() {
    
    let correctAnswer = 4;

    const userAnswer = parseInt(document.querySelector('[name=quiz]:checked').value);
    const feedbackVal = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedbackVal.textContent = 'Correct! Well done.';
    } else {
        feedbackVal.textContent = "That's incorrect. Try again!";
    }
}

const submitBtn = document.getElementById('submit-answer');

submitBtn.addEventListener('click', checkAnswer);