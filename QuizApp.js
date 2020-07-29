
 //FOR TEXTBOX///

 function nameField(){
    sessionStorage.clear();
    var input = document.getElementById("userName");
    if(input.value == "" || input.value == 0){
        alert("User Name Required!");
    }
    else {
        sessionStorage.setItem("name",input.value);
        startQuiz();
    }
}

///FOR NAME///

function showName(){
    var intro=document.getElementById("intro");
   var NAME= sessionStorage.getItem("name");
    intro.innerHTML="Welcome" + ", " + NAME;
}

/// FOR TIME////

function Timer(){
    var startMin=2;
    var time=startMin*60;
    var timerGet=document.getElementById("timer");

    function updateCountDown(){
        var minutes = Math.floor(time / 60)
        var seconds = time % 60;
        
        if(seconds < 10){
            seconds = "0"+seconds;
        }
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        
        timerGet.innerHTML = minutes + ":" + seconds;
        time--;

        if(minutes == 00 && seconds == 00){
            alert("Oopps!! Time Up");
            window.location.href = "result.html";
        }
    }
    setInterval(updateCountDown, 1000);
}

//START BUTTON//
function startQuiz(){
    window.location.href = "index.html";
}




var questionsArray = [
    {
        question: "Full Form of RAM is?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
    {
        question: "Full Form of CPU is?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "Full Form of LCD is?",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
    {
        question: "Full Form of SEO is?",
        answer: "none of the above",
        options: [
            "safe engine optimization",
            "secure engine optimization",
            "secret engine optimization",
            "none of the above",
        ]
    },
];

//FOR DISPLAY QUESTIONS FROM ARRAY//
function DispQues(e){

    var question=document.getElementById("ques");
    question.innerHTML=questionsArray[e].question;

    var Option=document.getElementsByClassName("option");
    for(var i=0; i< Option.length; i++){
    Option[i].innerHTML=questionsArray[e].options[i]
    }
}
var qCount = 0;
var score = 0;

//NEXT BUTTON//
function ShowNext(){
//var next=document.getElementById("next")
compare(qCount);

qCount++;
if(qCount <= questionsArray.length-1){
 DispQues(qCount);
}
removeActiveClass();
setResult();
}

//PREVIOUS BUTTON//
// function previous(e){
//     var prev=document.getElementById("previous")
//      qCount--;
//     DispQues(qCount);
//     removeActiveClass();
//     setResult();

//      }


function putActiveClass(e){
    removeActiveClass()
    e.classList.add("active")
}
function removeActiveClass(){
    var active= document.getElementsByClassName("active")
    for(var i=0; i<active.length; i++){
        active[i].classList.remove("active")
        }
     }
//FOR COMPARING THE SELECTED ANS WITH CORRECT ANS//
function compare(e){
    var ans= document.getElementsByClassName("active")
    if(ans[0].innerHTML.toLocaleLowerCase() == questionsArray[e].answer){
        score += 10;
 console.log(score);
    }
}

//TRY AGAIN BUTTON//
function tryAgain(){
    window.location.href = "mainPage.html";
}

//RESULT OF USER ON EVERY QUESTION//

function showResult(){
    document.getElementById("result") = sessionStorage.getItem("userscore");
}


 //TO SET THE RESULT WHEN ALL QUESTIONS FINISH///


function setResult(){
    if(qCount == questionsArray.length){
        window.location.href = "result.html";
    }
    var result = document.getElementById("result");
    sessionStorage.setItem("userscore", score);
}

//FOR SHOWING THE RESULT ON RSULT PAGE//
function renderResult(){
    var cs = sessionStorage.getItem("userscore");
    result.innerHTML = "You scored "+ cs +" out of 50";

}


