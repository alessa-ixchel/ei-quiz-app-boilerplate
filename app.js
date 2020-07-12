/* eslint-disable no-undef */
'use strict';
/*******Necessary Changes*********/ 
//show correct answer when wrong choice is selected




//declares the content of the questions, choices, and answers
const store = {
  questions: [{
    question: 'What is 2 + 2?',
    answers: [
      '1',
      '4',
      '2',
      '6'
    ],
    correctAnswer: '4'
  },
  {
    question: 'What is 50 / 5?',
    answers: [
      '20',
      '15',
      '10',
      '5'
    ],
    correctAnswer: '10'
  },
  {
    question: 'What is 3 * 12?',
    answers: [
      '24',
      '36',
      '42',
      '30'
    ],
    correctAnswer: '36'
  },
  {
    question: 'What is 200 / 20?',
    answers: [
      '20',
      '2',
      '12',
      '10'
    ],
    correctAnswer: '10'
  },
  {
    question: 'What is 75 - 13?',
    answers: [
      '60',
      '51',
      '52',
      '62'
    ],
    correctAnswer: '62'
  },
  {
    question: 'What is 75 * 13?',
    answers: [
      '975',
      '512',
      '852',
      '620'
    ],
    correctAnswer: '975'
  }
  ],
  questionNumber: 1,
  numberCorrect: 0,
  numberIncorrect: 0,
  correct:'That\'s right, good job!',
  incorrect: 'Sorry, that\'s incorrect!',
  resultsPass: 'Congratulations, You Passed!',
  resultsFail: 'Sorry, You failed. Try again!'
};
//starts all of the questions on the first one
let index=0;

//delares content of main page
const startTemplate = 
`<section class="page-1">
  <h1>Let's get started!</h1>
  <button class="start">Start</button>
</section>`;

//initiates main page
function startRender() {
  $('main').append(startTemplate); 
}

//creates template for questions
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
    <span>${obj.numberCorrect} correct | ${obj.numberIncorrect} incorrect </span>
    </div>
    <div class="progress">
        <span class="current-number">Question ${obj.questionNumber} out of ${obj.questions.length}</span>
    </div>
    <button class="submit">Submit</button>
  </section>`;
}

//tells screen to show the question template when called
function startQuiz(){
  return questionTemplate(store,index);
}

//changes page to quiz template when start button is clicked
function quizRender() {
  $('main').on('click','button.start',event=>{
    $('section').replaceWith(startQuiz(store));
  });
}

//creates response pages
function responseTemplate(obj,key) {
  return `<section>
    <h2>${obj[key]}</h2>
    <h3>The correct answer was ${obj.questions[index].correctAnswer}</h3>
    <h4> ${obj.numberCorrect} correct | ${obj.numberIncorrect} incorrect </h4>
    <button class = "next">Next</button>
  </section>`;
}

//checks users choice and gives a response based on if user was correct
function responseRender(obj,index) {
  const answerValue = $('input[name="answer"]:checked' ).val();
  if (answerValue === obj.questions[index].correctAnswer){
    obj.numberCorrect ++;
    return responseTemplate(store,'correct');    //(numberCorrect/obj.questions.length*100);
  }
  else {
    obj.numberIncorrect ++;
    
    return responseTemplate(store,'incorrect');
  } 
}

//changes page to response page upon submit if user has selected an answer. if they haven't, user is alerted they must select an answer
function checkAnswer() {
  $('main').on('click','button.submit',event=>{
    const answerValue = $('input[name="answer"]:checked' ).val();
    if (answerValue){
      store.questionNumber ++;
      $('section').replaceWith(responseRender(store,index));
    }
    else {
      alert('Please choose an answer!');
    }
  });
}

//when next button is clicked, response page is either brought to the next question, or shows final results
function nextQuestion(){
  $('main').on('click','button.next',event=>{
    index++;
    if (store.questionNumber <= store.questions.length){
      $('section').replaceWith(startQuiz(store));
    }else{
      $('section').replaceWith(rendersResults(store));
    }
  });
}

//creates results template
function resultsTemplate(obj,key) {
  return `<section>
    <h1>Here are your results!</h1>
    <h2>${obj[key]}</h2>
    <h4>You received ${obj.numberCorrect} correct and ${obj.numberIncorrect} incorrect </h4>
    <button class="restart">Restart</button>
  </section>`;
}

//checks to see how many correct answers and either tells user they passed or failed 
function rendersResults() {
  if (store.numberCorrect > store.numberIncorrect) {
    return resultsTemplate(store,'resultsPass');
  }
  else {
    return resultsTemplate(store,'resultsFail');
  }
}

//restarts quiz when restart button is clicked
function restartQuiz() {
  $('main').on('click','button.restart', event=>{
    index=0;
    store.questionNumber=1;
    store.numberCorrect=0;
    store.numberIncorrect=0;
    $('section').replaceWith(startRender());
  });
}

// consolidates the necessary functions to run the page in order
function runFunctions(){
  startRender();
  quizRender();
  checkAnswer(); 
  nextQuestion();
  restartQuiz(store);
}

//runs the page
$(runFunctions);


















/* if (store.questionNumber === store.questions.length){
    store.quizStarted = false;
    scoreQuiz();
  }
  else{ 
    nextQuestion();
  }
 */ 
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

s