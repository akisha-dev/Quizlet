import { QuesOptions,correct } from "../questions/jsqbank";  
import { CheckforCorrect,updateTimer } from "../utils/commonfunctions";                 
            
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
