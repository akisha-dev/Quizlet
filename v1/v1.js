          import { QuesOptions,correct } from "./data.js";
          
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

            function QDisplay(){
                document.querySelector('.question-display')
                .innerHTML =quOpdisplay;
            }
           let CurrentTime = 900000;//1mins in milliseconds
           document.querySelector('.timer-js')
           .innerHTML=CurrentTime/1000;
           
        window.updateTimer = function() {
           let Interval= setInterval(()=>{
                CurrentTime-=1000;
                document.querySelector('.timer-js')
                .innerHTML=CurrentTime/1000

               if(CurrentTime<=0){
                clearInterval(Interval);
                document.querySelector('.timer-js')
                .innerHTML= 'TEST OVER';

               } 
            },1000)}

        let correctAns = 0;
        function CheckforCorrect(){
        for(let i=0;i<correct.length;i++){
        let checkedOption=document.querySelector(`input[name="option${i}]:checked`);
            if(checkedOption&&checkedOption.value===correct[i]){
                correctAns++;
                  console.log(correctAns);
            }}
        }
        