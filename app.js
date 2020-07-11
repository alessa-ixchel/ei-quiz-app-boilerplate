/* eslint-disable no-undef */
'use strict';



//Example store structure
// 5 or more questions are required
const store = {
  questions: [{
    question: 'Add 2 + 2',
    answers: [
      '1',
      '4',
      '2',
      '6'
    ],
    correctAnswer: '4'
  },
  {
    question: 'Divide 50 / 5',
    answers: [
      '20',
      '15',
      '10',
      '5'
    ],
    correctAnswer: '10'
  },
  {
    question: 'Multiply 3 * 12',
    answers: [
      '24',
      '36',
      '42',
      '30'
    ],
    correctAnswer: '36'
  },
  {
    question: 'Divide 200 / 20',
    answers: [
      '20',
      '2',
      '12',
      '10'
    ],
    correctAnswer: '10'
  },
  {
    question: 'Subtract 75 - 13',
    answers: [
      '60',
      '51',
      '52',
      '62'
    ],
    correctAnswer: '62'
  }
  ],
  quizStarted: false,
  questionNumber: 1,
  numberCorrect: 0,
  score: 0,
  correct:'Good job!',
  incorrect: 'Nope, sorry!'
  
};
//create a sentence template that can be reused when declaring the score later
let scoreSentence= `Current score = `

//delares content of main page
const startTemplate = 
`<section class="page-1">
  <h1>Let's start a Math Quiz</h1>
  <button class="start">Start</button>
</section>`;


//creates template for question pages
function questionTemplate(obj, index) {
  return `<section class="qTemp">
    <h3>${obj.questions[index].question}</h3>
    <form class="choices">
      <label><input type="radio" name="answer" value= "${obj.questions[index].answers[0]}">${obj.questions[index].answers[0]}</label>
      <label><input type="radio" name="answer" value= "${obj.questions[index].answers[1]}">${obj.questions[index].answers[1]}</label>
      <label><input type="radio" name="answer" value= "${obj.questions[index].answers[2]}">${obj.questions[index].answers[2]}</label>
      <label><input type="radio" name="answer" value= "${obj.questions[index].answers[3]}">${obj.questions[index].answers[3]}</label>
    </form>
    <div class="score">
       ${scoreSentence}${obj.score}
    </div>
    <div class="progress">
        <span class="current-number">Question ${obj.questionNumber} out of ${obj.questions.length}</span>
    </div>
    <button class="submit">Submit</button>
  </section>`;
}
//creates response pages
function responseTemplate(obj,key) {
  return `<section>
    <h3>${obj[key]}</h3>
    <h4>${scoreSentence}${obj.score}</h4>
    <button class = "next">Next</button>
  </section>`;
}

//initiates first page
function startRender() {
  $('main').append(startTemplate); 
}

//renders template function
function startQuiz(obj){
  if (obj.quizStarted === true){
    return questionTemplate(store,0);
  }
}
//generates question pages/event listener
function quizRender() {
  $('main').on('click','button.start',event=>{
    store.quizStarted= true;
    $('section').replaceWith(startQuiz(store));
  });
}


//renders response pages
function responseRender(obj,index,) {
  const answerValue = $('input[name="answer"]:checked' ).val();
  if (answerValue === obj.questions[index].correctAnswer){
    obj.numberCorrect ++;
    obj.score += (obj.numberCorrect/obj.questions.length*100);
    return responseTemplate(store,'correct');
  }
  else{
    return responseTemplate(store,'incorrect');
  }
}

//generates response pages
function checkAnswer() {
  $('main').on('click','button.submit',event=>{
    const answerValue = $('input[name="answer"]:checked' ).val();
    if (answerValue){
      $('section').replaceWith(responseRender(store,0));
    }
    else {
      $('section').append('<p>Please choose an answer!</p>');
    }
  });
}

function runFunctions(){
  startRender();
  quizRender();
  checkAnswer();
  //nextQuestion();
  //scoreQuiz();
}

$(runFunctions);

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

//const rightPage = '<section class="correctPage"><h1>Yay, you were correct!</h1><button>Next</button></section>';
//const wrongPage = '<section class="wrongPage"><h1>Oh no, you were wrong!</h1><button>Next</button></section>' ;
//const questionPlacement= //declares which question we are on

/********** RENDER FUNCTION(S) **********/
//render should read from store, generates html, replaces html (use.html() function)
// || This function conditionally replaces the contents of the <main> tag based on the state of the store

//function isCorrect ();//finds out if answer is correct 

//function changePage(item,somethingThatDeclaresWhereToGo){}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
// || adjust below to call from store object instead
/*function changePage() {
  $('section').click('button', event => {
    $('section').replaceWith(firstPage);
  });
}

/*function practice() {
  startRender();
  changePage();
}

$(practice);*/





/****practice that worked ****/
/*const firstPage = //original idea to present questions (works)
  `<section class="page=2">
<h2>Question One</h2>
<h3>What is 2 + 2?</h3>
<ul>
    <li>5</li>
    <li>10</li>
    <li>4</li>
    <li>235</li>
</ul>
<div class="score">
    <span class="dot 1"></span>
    <span class="dot 2"></span>
    <span class="dot 3"></span>
    <span class="dot 4"></span>
    <span class="dot 5"></dspan>
</div>
<div class="progress">
    <span class="current-number"></span>
</div>
<button>Submit</button>
</section>`;*/

