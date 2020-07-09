/* eslint-disable no-undef */
'use strict';



const firstPage =
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

</section>`;
// initiates page with first page
function initialPage() {
  $('main').append(mainPage);
}


const questionPlacement= 
function createTemplate(item, i) {
  return `<'question number'+${store.questions.indexof()}+'out of 5'>
  <h2>${item.questions.question}</h2> 
    <ul>
        <li>store.questions[i.answers[0]]</li>
        <li>10</li>
        <li>4</li>
        <li>235</li>
    </ul>
    <div class="score">[
        <span class="dot 1"></span>
        <span class="dot 2"></span>
        <span class="dot 3"></span>
        <span class="dot 4"></span>
        <span class="dot 5"></span>
    ]
    </div>
    <div class="progress">
        <span class="current-number"></span>
    </div>
    <button>Submit</button>
    
    </section>`;
}

/*function practice() {
  initialPage();
  changePage();
}

$(practice);*/
/*IDEA TO ACCESS QUESTION NAME
store.questions[i]{
  return questions.question
}
/**
Example store structure
store.questions.question[i]*/
const store = {
  // 5 or more questions are required
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
  questionNumber: 0,
  score: 0
};

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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

const mainPage =`<section class="page-1">  <h1>Let's start a Math Quiz</h1>  <button>Start</button></section>`;//Declares starting content

function isCorrect ();//finds out if answer is correct

function renderItems(item){ //loops through qustions and adds to array
  let template= [];
  for (let i = 0; i < item.questions; i++){
    template.push(createTemplate(item[i],i));
    pull()//remove question answer so it does not display
  }
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
// || adjust below to call from store object instead
function changePage() {
  $('section').click('button', event => {
    $('section').replaceWith(firstPage);
  });
}




//USER REQUIREMENTS
//one at a time
//Display which question number user is on
//Display number correct with jQuery
//If answer is correct, move forward, otherwise ask to correct with if/else statementS
//Show results at end

//TECHNICAL REQUIREMENTS
//Create a function