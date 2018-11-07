var q_set = [];
var a_set = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
const submitButton = document.getElementById('submit');
const buttonClicked = document.getElementById('btn-begin');
var time = 10;
var intervalID; 
var answers
var myQuestions = [

    {
        q: "Who was the actor that played Superman in Man of Steel?",
        answers: {
            a: "Brandon Routh",
            b: "Henry Cavill",
            c: "Christopher Reeve",
            d: "Tyler Hoechlin", 
            correctAnswer: "b"
        }, 
        
    },

    {
        q: "Who was the actor that played Batman in Justice League?",
        answers: {
            a: "Christian Bale",
            b: "Ezra Miller",
            c: "Ben Affleck",
            d: "Micheal Keaton",  
            correctAnswer: "c"    
        },   
        
    },

    {
        q: "Who was the actor that played the Flash in Justice League?",
        answers: {
            a: "Ezra Miller",
            b: "Grant Gustin",
            c: "John Shipp",
            d: "Keiynan Lonsdale",
            correctAnswer: "a"
        },  
       
    }

];
var seconds = 10
function showCountdown(){
    
    $('#timeLeft').html('<h3>Time Remaining:' + seconds + '</h3>')
    if(seconds < 1){  
        alert("Time is up!")
        clearInterval(time); 
        answered = false;
    }
else if ( seconds == 10 ) 

{
time = setInterval(function() {
  showCountdown()
  },1000)  


}
seconds--; 

}  

const output = []; 
for (var i = 0; i < answer_space.length; i++) {
    document.getElementById("q").append(answer_space)
    answer_space.innerHTML = answers
    document.getElementById("q").append(answer_space)
    answer_space.innerHTML = answers
    document.getElementById("q").append(answer_space)
    answer_space.innerHTML = answers

    // console.log(answers[i]) 
}

$("#btn-begin").click(function () {
    // console.log("buttonClicked") 
    // console.log("question_space")
})
function showQuestions() {
    for (var i = 0; i < myQuestions.length; i++) {

        // console.log(myQuestions[i])


        var questionContainer = document.createElement("div");
        questionContainer.innerHTML = myQuestions[i].q
        questionContainer.id = "q" + (i + 1)
        
    
        document.getElementById("question_space").append(questionContainer) 
        questionContainer.innerHTML += "<br>"  
        showAnswers(myQuestions[i].answers, "q" + (i + 1 ) ) 
    }
};

function showAnswers(answers, questionId) {
    console.log(answers)  
    var label = document.createElement("label")  
    if (answers.correctAnswer == "a")  
    label.className = "correct" 
    label.innerHTML = answers.a
    document.getElementById(questionId).append(label)
    var radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("value", answers.a) 
    radio.setAttribute("name", questionId + "-answer") 
    document.getElementById(questionId).append(radio)  

    var label = document.createElement("label") 
    label.innerHTML = answers.b 

    document.getElementById(questionId).append(label)
    var radio = document.createElement("input");  
    if (answers.correctAnswer == "b")  
    label.className = "correct"
    radio.setAttribute("type", "radio");
    radio.setAttribute("value", answers.b) 
    radio.setAttribute("name", questionId + "-answer")  
    document.getElementById(questionId).append(radio)  
     
    var label = document.createElement("label") 
    label.innerHTML = answers.c 
    if (answers.correctAnswer == "c")  
    label.className = "correct" 
    document.getElementById(questionId).append(label)
    var radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("value", answers.c) 
    radio.setAttribute("name", questionId + "-answer")   
    document.getElementById(questionId).append(radio)  

    var label = document.createElement("label") 
    label.innerHTML = answers.d   
    if (answers.correctAnswer == "d")  
    label.className = "correct" 
    document.getElementById(questionId).append(label)
    var radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("value", answers.d)  
    radio.setAttribute("name", questionId + "-answer")  
    document.getElementById(questionId).append(radio)  

}
    








function buildQuiz() {

    //    function showQuestions(questions, quizContainer){

    //    }
}
function showResults() {
    $( ".correct" ).css( "border", "3px solid green" );
}
submitButton.onclick = function () {
    showResults(submitButton);
    
}      




$("#btn-begin").click(function () {
    showQuestions();
    showCountdown()
});

$("#submit").click(function () {
    for (var i = 0; i < showResults.length; i++) {
        var results = results[i].correct

        var resultContainer = document.createElement("div")
        resultContainer.innerHTML = results
        document.getElementById("correct").append(resultContainer)
    }
});












buildQuiz.innerHTML = output.join('')