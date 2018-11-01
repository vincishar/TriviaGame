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
            d: "Tyler Hoechlin"   
        }
    },

    {
        q: "Who was the actor that played Batman in Justice League?",
        answers: {
            a: "Christian Bale",
            b: "Ezra Miller",
            c: "Ben Affleck",
            d: "Micheal Keaton"     
        }
    },

    {
        q: "Who was the actor that played the Flash in Justice League?",
        answers: {
            a: "Ezra Miller",
            b: "Grant Gustin",
            c: "John Shipp",
            d: "Keiynan Lonsdale"  
        }
    }

];

function showCountdown(){
    seconds--;
    $('#timeLeft').html('<h3Time Remaining:' + seconds + '</h3>')
    if(seconds < 1){ 
        clearInterval(time); 
        answered = false;
    }

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
        showAnswers(myQuestions[i].answers)

        
        document.getElementById("question_space").append(questionContainer)
    }
};

function showAnswers(answers) {
    console.log(answers)
    var answerContainer = document.createElement("input");
    answerContainer.setAttribute("type", "radio");
    answerContainer.setAttribute("value", answers)  
    


    var answerArray = answers.a.split(" ")
    var firstWord = answerArray[0].toLowerCase()
    console.log(firstWord)
    var secondWord = answerArray[1].toLowerCase()
     var name = firstWord + secondWord
     console.log(name)
    answerContainer.setAttribute("id", name)
    document.getElementById("answer_space").append(answerContainer)   


   if (i == 0) {document.getElementById('question_space').className = "q1";} 
   if (i == 0) {document.getElementById('answer_space').className = "q1"; }
   if (i == 1) {document.getElementById('question_space').className = "q2";} 
   if (i == 1) {document.getElementById('answer_space').className = "q2";}
   if (i == 2) {document.getElementById('question_space').className = "q3";} 
   if ( i == 2) {document.getElementById('answer_space').className = "q3";}
   





    // document.getElementById
    // $('input').val(answers)
    // $('input:radio[name=cols]').val(['Site']);

        // for (var i = 0; i < myQuestions.length; i++){ 
        //     var answerContainer = document.createElement("INPUT") 
        //     answerContainer.setAttribute("type", "radio"); 
        //     answerContainer.setAttribute("value", myQuestions[i].answers)
        //     document.getElementById("answer_space").append(answerContainer)
        //     console.log(myQuestions[i].answers)
        // }
          
}


    // function answersSet(){
    //     for(var i = 0; i < myAnswers.length; i++){
    //         var answer =   myAnswers[i].a.b.c.d   

    //         var answerContainer = document.createElement("div") 
    //         answerContainer.innerHTML = answer 
    //         document.getElementById("answer_space").append(answerContainer)
    //     }

    // }








function buildQuiz() {

    //    function showQuestions(questions, quizContainer){

    //    }
}
function showResults() {
    //    for(var i = 0; i < showResults.length; i++) { 
    //       var results = results[i].correct

    //       var resultContainer = document.createElement("div") 
    //       resultContainer.innerHTML = results  
    //       document.getElementById("results").append(resultContainer) 
}
submitButton.onclick = function () {
    showResults(submitButton);
    
}      




$("#btn-begin").click(function () {
    showQuestions();
    
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