


// quiz class
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }

    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}



//question class

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

//Function to display question

const displayQuestion = () => {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //show question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    //show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById(`choice${i}`);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
};

//Guess function
const guess = (id, guess) => {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
};

//show quiz progress

const showProgress = () => {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById("progress");
  progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

//SHOW SCORE
const showScores = () => {
  let quizEndHtml = `
        <h1>Quiz completed</h1>
        <h2 id='score'>You scored: ${quiz.score} of  ${quiz.questions.length}</h2>
        <div class='quiz-repeat'>
            <a href='index.html'>Take Quiz again</a>
        </div>


      `;

  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHtml;
};


//CREAT QUIZ QUESTIONS
let questions = [
  new Question(
    "what does sapa mean to you?",
    ["hunger", "broke", "party", "poverty"],
    "broke"
  ),
  new Question(
    "what is the problem of Nigeria?",
    ["Hunger and Bokoharam", "Buhari", "Corrupt politicians", "All"],
    "All"
  ),
  new Question(
    "when did Lekki massacre happen?",
    ["20th Oct 2020", "20th Aug 2020", "20th June 1996", "Oga swerve"],
    "20th Oct 2020"
  ),
  new Question(
    "Yusuf Buhari's wedding happened on?",
    ["Friday 20 Aug", "Friday 20 Sep", "css", "Monday 14 Aug"],
    "Friday 20 Aug"
  ),
  new Question(
    "Lagos is most synonymous with?",
    ["food", "beauty", "traffic", "Buhari"],
    "traffic"
  ),
  new Question(
    "Garri is important to Nigerians, why?",
    ["Nutritious", "cheap", "spicy", "delicious"],
    "cheap"
  ),
  new Question(
    "Food basket of the nation is ?",
    ["Benue", "Katsina", "Enugu", "Sambisa"],
    "Benue"
  ),
  new Question(
    "Buhari's hobby is?",
    ["Taekwondo", "presiding", "traveling", "rearing cows"],
    "rearing cows"
  ),
  new Question(
    "Most popular animal in nigeria?",
    ["Kangaroo", "cow", "snake", "elephant"],
    "cow"
  ),
  new Question(
    "Sambisa is known for?",
    ["owambe", "agriculture", "terrorism", "Nnamdi Kanu"],
    "terrorism"
  ),
];

let quiz = new Quiz(questions); 


// DISPLAY QUESTION
displayQuestion();

// Add a countdown

let time = 5;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById('countdown');

const startCountDown = () =>{
  let quizTimer = setInterval(function(){
    if(quizTime <= 0){
      clearInterval(quizTimer);
      showScores();
    } else{
      quizTime --;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime/60) % 60;
      counting.innerHTML= `TIME: ${min} : ${sec}`

    }
  },1000)
}

startCountDown();
