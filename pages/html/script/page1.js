

function firstPageSubmit(){
    let result=0;
    for(let i=1;i<=document.querySelectorAll('.question').length;i++){

        if(document.getElementById(`q${i}Ans`).checked){
            result++
        }
        
    }
    alert(result)
    
    console.log("Qualify to next round: ",result>=7);
    if(result>=7){
        history.forward('/html_quiz/page2')
    }
}

