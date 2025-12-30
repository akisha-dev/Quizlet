if(localStorage.getItem('quizCompleted') === 'true') {
    let score = localStorage.getItem('quizScore');
    let total = localStorage.getItem('totalQuestions');
    let attempted = localStorage.getItem('totalAttempted');
    let percentage = Math.round((score / total) * 100);
    
    let resultHTML = `
        <h2>Quiz Results</h2>
        <p class="score">YOU SCORED ${score} OUT OF ${total}!</p>
        <p>Questions Attempted: ${attempted}/${total}</p>
        <p>Percentage: ${percentage}%</p>
        <button onclick="retakeQuiz()">Retake Quiz</button>
    `;
    
    document.querySelector('.result-display').innerHTML = resultHTML;
    localStorage.removeItem('quizCompleted');
    localStorage.removeItem('quizScore');
    localStorage.removeItem('totalQuestions');
    localStorage.removeItem('totalAttempted');
    
} else{
    document.querySelector('.result-display').innerHTML = 
        '<p>No quiz data found. Please take the quiz first.</p><button onclick="goToQuiz()">Go to Quiz</button>';
}

function retakeQuiz() {
    window.location.href = 'questionnaire.html';
}

function goToQuiz() {
    window.location.href = 'questionnaire.html';
}

