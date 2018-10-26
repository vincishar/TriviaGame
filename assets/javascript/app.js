var q_set = [];
var a_set = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 10;
var intervalID;
const myQuestions = [
    {
        q: "Who was the actor that played Superman in Man of Steel?",
        a: "Brandon Routh",
        b: "Henry Cavill",
        c: "Christopher Reeve",
        d: "Tyler Hoechlin" 
    }
        
    {
        q: "Who was the actor that played Batman in Justice League?", 
        a: "Christian Bale"
        b: "ezra Miller"
        c: "Ben Affleck" 
        d: "Micheal Keaton"
    }
       
    {
        q: "Who was the actor that played the Flash in Justice League?"
        a: "Ezra Miller"
        b: "Grant Gustin"
        c: "John Shipp"
        d: "Keiynan Lonsdale"
      
    }      

];


  function buildQuiz(){
      
  const output = []; 

myQuestions.forEach( 
    
   (currentQuestion, question) => {

   const answers = []; 

   for(letter in currentQuestion.answers) {

   } 

); 
   output.push(
       <div id= "question"> ${currentQuestion.question}
    </div> 
      
          <div id="answers"> ${answers.join('')}  </div>
   );
   }
); 

quizContainer.innerHTML = output.join('');
  }

// console.log(question)
// document.getElementsByClassName(".row")   


const submitButton = document.getElementById('submit');
myQuestions.forEach( (currentQuestion, questionNumber))    

for(letter in currentQuestion.answers) {

output.push(

   <div id="question_space"> ${currentQuestion.question} </div>
   <div id="answer_space">${answers.join('')}   </div>
);

quizContainer.innerHTML = output.join('');
}








