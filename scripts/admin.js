

 

window.AddQ = function(){
    let AllFilled=true;
    let Check= document.querySelectorAll('input') 
     for(let i=0;i<Check.length;i++){
        if(Check[i].value==='')
            AllFilled=false;
     }
    
    if(AllFilled===true){
    let newQ = document.querySelector('.question-input').value;
    let newA = document.querySelector('.optionA-input').value;
    let newB= document.querySelector('.optionB-input').value;
    let newC = document.querySelector('.optionC-input').value;
    let newD= document.querySelector('.optionD-input').value;
    let newCorrect= document.querySelector('.correct-input').value;
let saved = localStorage.getItem('addedQuestions');
 let addedQuestions = saved? JSON.parse(saved) : {
          question: [],
        a: [],
        b: [],
        c: [],
        d: [],
        correct: []
 };
 addedQuestions.question.push(newQ);
    addedQuestions.a.push(newA);
    addedQuestions.b.push(newB);
    addedQuestions.c.push(newC);
    addedQuestions.d.push(newD);
    addedQuestions.correct.push(newCorrect);



 localStorage.setItem('addedQuestions',JSON.stringify(addedQuestions));
  
document.querySelector('.result').innerHTML = 
        `Question added! Total: ${addedQuestions.question.length}`;

    
Check.forEach(input => input.value = ''); 


    }else{
        document.querySelector('.result').innerHTML=`Pls input all the fields`
        
    }
}