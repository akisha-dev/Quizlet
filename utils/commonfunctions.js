export function QDisplay(){
                document.querySelector('.question-display')
                .innerHTML =quOpdisplay;
            }
           let CurrentTime = 60000;//1mins in milliseconds
           document.querySelector('.timer-js')
           .innerHTML=CurrentTime/1000;
           
           function updateTimer(){
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

        
    export  function CheckforCorrect(){
            let correctAns = 0;
        for(let i=0;i<correct.length;i++){
        let checkedOption=document.querySelector(`input[name="option${i}]:checked`);
            if(checkedOption&&checkedOption.value===correct[i]){
                correctAns++;
                  console.log(correctAns);
            }}
        }
        