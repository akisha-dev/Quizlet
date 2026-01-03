import { QuesOptions,correct } from "./data.js";
let saved = localStorage.getItem('addedQuestions');
if(saved) {
    let added = JSON.parse(saved);
    for(let i = 0; i < added.question.length; i++) {
        QuesOptions.question.push(added.question[i]);
        QuesOptions.a.push(added.a[i]);
        QuesOptions.b.push(added.b[i]);
        QuesOptions.c.push(added.c[i]);
        QuesOptions.d.push(added.d[i]);
        correct.push(added.correct[i]);
    }
    
    console.log(`Loaded ${added.question.length} added questions`);
}

          
          let i =0;
            let quOpdisplay='';
            for(i=0;i<QuesOptions.question.length;i++){        
         quOpdisplay+=`<p class="question${i}-js">${QuesOptions.question[i]}</p>
            <input type="radio" id="option-a${i}" name="option${i}" value="${QuesOptions.a[i]}">
            <label for = "option-a">${QuesOptions.a[i]}</label> <br>
            <input type="radio" id="option-b${i}" name="option${i}" value="${QuesOptions.b[i]}">
            <label for="option-b">${QuesOptions.b[i]}</label><br>
            <input type="radio" id="option-c${i}" name="option${i}" value="${QuesOptions.c[i]}">
            <label for="option-c">${QuesOptions.c[i]}</label><br>
            <input type="radio" id="option-d${i}" name="option${i}" value="${QuesOptions.d[i]}">
            <label for="option-d">${QuesOptions.d[i]}</label><br>`}


    window.QDisplay = function() {
    document.querySelector('.question-display').innerHTML = quOpdisplay;
}

        let CurrentTime = 900000;//15mins in milliseconds

           document.querySelector('.timer-js')
           .innerHTML=(CurrentTime/60000).toFixed(2);
           
        window.updateTimer = function() {
           let Interval= setInterval(()=>{
            CurrentTime-=1000;
            let mins = Math.floor(CurrentTime/60000);
            let secs = Math.floor((CurrentTime%60000)/1000);
            document.querySelector('.timer-js')
            .innerHTML = mins + ':' + secs.toString().padStart(2, '0');
               if(CurrentTime<=0){
                clearInterval(Interval);
                document.querySelector('.timer-js')
                .innerHTML= 'TEST OVER';
                
               displayScore(true);


               } 
            },1000)}

 


 window.displayScore = function(isAutoSubmit = false) {
    let totalAttempted = 0;
    let correctAns = 0;
    for(let i = 0; i < correct.length; i++) {
let checkedOption = document.querySelector(`input[name="option${i}"]:checked`);
     if(checkedOption) {
       totalAttempted++;
           localStorage.setItem(`userAns${i}`,checkedOption.value);

    if(checkedOption.value === correct[i]) {
      correctAns++;
            }
        }
    }
if(isAutoSubmit || totalAttempted === correct.length) {
localStorage.setItem('quizScore', correctAns);
localStorage.setItem('totalQuestions', correct.length);
localStorage.setItem('totalAttempted', totalAttempted);
localStorage.setItem('quizCompleted', 'true');
 window.location.href = 'Results.html';
    } else {
        alert(`Please attempt all questions! (${totalAttempted}/${correct.length} answered)`);
        return false;
    }
}

       
        
        