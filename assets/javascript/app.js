var q_set = [];
var a_set = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0; 
const submitButton = document.getElementById('submit'); 
const buttonClicked = document.getElementById('btn-begin'); 
var time = 10;
var intervalID;
var myQuestions = [

    {
        q: "Who was the actor that played Superman in Man of Steel?",
        anwsers: {
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

      
  const output = []; 
for( var i = 0; i < answer_space.length; i++){  
document.getElementById("q1").append(answer_space) 
answer_space.innerHTML = answers
document.getElementById("q2").append(answer_space) 
answer_space.innerHTML = answers 
document.getElementById("q3").append(answer_space)
answer_space.innerHTML = answers

    // console.log(answers[i]) 
}  

$("#btn-begin").click(function(){
    // console.log("buttonClicked") 
    // console.log("question_space")
}) 
function showQuestions(){ 
    for(var i = 0; i < myQuestions.length; i++){

        console.log(myQuestions[i])

    //    var question =  myQuestions[i].q;
    //    var answerA = myQuestions[i].a;
    //    var answerB = myQuestions[i].b;
    //    var answerC = myQuestions[i].C;
    //    var answerD = myQuestions[i].D;


      var questionContainer = document.createElement("div");



        for (key in myQuestions[i].answer) {
            console.log(myQuestions[i].answer[key])
        }

    //   var answers = "<button>"+ myQuestions[i].a.b.c.d +"</button>"
    //   var answers = "<button>"+ myQuestions[i].a.b.c.d +"</button>"
    //   var answers = "<button>"+ myQuestions[i].a.b.c.d +"</button>" 
    //   var answers = "<button>"+ myQuestions[i].a +"</button>"
    //   questionContainer.innerHTML = question
    //   questionContainer.innerHTML += answers; 
    //   questionContainer.innerHTML = question 
    //   questionContainer.innerHTML += answers; 
    //   questionContainer.innerHTML = question  
    //   questionContainer.innerHTML += answers; 
    //   questionContainer.innerHTML = question
    //   uestionContainer.innerHTML += answers; 
      document.getElementById("question_space").append(questionContainer)
    } 
    




    // function answersSet(){
    //     for(var i = 0; i < myAnswers.length; i++){
    //         var answer =   myAnswers[i].a.b.c.d   
                
    //         var answerContainer = document.createElement("div") 
    //         answerContainer.innerHTML = answer 
    //         document.getElementById("answer_space").append(answerContainer)
    //     }

    // }






};

function buildQuiz(){

        //    function showQuestions(questions, quizContainer){

        //    }
}
function showResults(){
//    for(var i = 0; i < showResults.length; i++) { 
//       var results = results[i].correct

//       var resultContainer = document.createElement("div") 
//       resultContainer.innerHTML = results  
//       document.getElementById("results").append(resultContainer) 
}       
submitButton.onclick = function(){
    showResults(submitButton);  
    correct = b = "Henry Cavill", c = "Ben Affleck", a = "Ezra Miller"
}


$("#btn-begin").click(function(){
   showQuestions();
});

$("#submit").click(function() { 
    for(var i = 0; i < showResults.length; i++) { 
        var results = results[i].correct
  
        var resultContainer = document.createElement("div") 
        resultContainer.innerHTML = results  
        document.getElementById("results").append(resultContainer) 
    }
});

        










buildQuiz.innerHTML = output.join('')