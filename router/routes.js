
const route=(event)=>{
    event=event || window.event;
    event.preventDefault();
    window.history.pushState({},"", event.target.href)
    handleLocation();
}
const routes={
    "/": "../../pages/Home.html",
    "/html_quiz" : "../../pages/html/html_quiz_start.html",
    "/html_quiz/page1":"../../pages/html/page1.html",
    "/html_quiz/page2":"../../pages/html/page2.html"
}

const handleLocation=async ()=>{

    const path=window.location.pathname
    const route=routes[path]
    const html= await fetch(route).then((data)=>data.text());
    document.getElementById('main_page').innerHTML=html
}

function firstPageSubmit(path){
    let result=0;
    for(let i=1;i<=document.querySelectorAll('.question').length;i++){

        if(document.getElementById(`q${i}Ans`).checked){
            result++
        }
        
    }
    alert(result)
    
    console.log("Qualify to next round: ",result>=7);
    if(result>=1){
        window.history.pushState({},"", path)
        handleLocation();
    }
}
function secondPageSubmit(path){
    let result=0;
    for(let i=1;i<=document.querySelectorAll('.question').length;i++){

        if(document.getElementById(`q${i}Ans`).checked){
            result++
        }
        
    }
    alert(result)
    
    console.log("Qualify to next round: ",result>=8);
    if(result>=1){
        window.history.pushState({},"", path)
        handleLocation();
    }
}

window.route=route;
window.firstPageSubmit=firstPageSubmit
handleLocation();