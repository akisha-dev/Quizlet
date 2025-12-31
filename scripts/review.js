import {QuesOptions, correct } from "../v1/data.js";
let i=0;
let reviewHtml = '';
if(localStorage.getItem('quizCompleted')==='true'){
for(i=0;i<QuesOptions.question.length;i++){
    reviewHtml+=`
    <p class="question-js">${QuesOptions.question[i]}</p>
    <p class="option-a">${QuesOptions.a[i]}</p>
    <p class="option-a">${QuesOptions.b[i]}</p>
    <p class="option-a">${QuesOptions.c[i]}</p>
    <p class="option-a">${QuesOptions.d[i]}</p>
    <p>CORRECT ANSWER =${correct[i]}</p>
    <p> YOUR ANSWER = ${localStorage.getItem(`userAns${i}`)}</p>
            `
}
  document.querySelector('.answers-review')
    .innerHTML=reviewHtml;
localStorage.removeItem('quizCompleted');
    localStorage.removeItem('quizScore');
    localStorage.removeItem('totalQuestions');
    localStorage.removeItem('totalAttempted')
}else{
    document.querySelector('.answers-review')
    .innerHTML='Attempt the Quiz to review Your Answers';

}
