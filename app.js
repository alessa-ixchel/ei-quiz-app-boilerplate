
'use strict';




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
      <button>'1'</button>,
      <button>'4'</button>,
      <button>'2'</button>,
      <button>'6'</button>
    ],
    correctAnswer: '4'
  },
  {
    question: 'Divide 50 / 5',
    answers: [
      <button>'20'</button>,
      <button>'15'</button>,
      <button>'10'</button>,
      <button>'5'</button>
    ],
    correctAnswer: '10'
  },
  {
    question: 'Multiply 3 * 12',
    answers: [
      <button>'24'</button>,
      <button>'36'</button>,
      <button>'42'</button>,
      <button>'30'</button>
    ],
    correctAnswer: '36'
  },
  {
    question: 'Divide 200 / 20',
    answers: [
      <button>'20'</button>,
      <button>'2'</button>,
      <button>'12'</button>,
      <button>'10'</button>
    ],
    correctAnswer: '10'
  },
  {
    question: 'Subtract 75 - 13',
    answers: [
      <button>60</button>,
      <button>51</button>,
      <button>52</button>,
      <button>62</button>
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
const mainPage =`<section class="page-1">  <h1>Let's start a Math Quiz</h1>  <button>Start</button></section>`;//Declares starting content

/********** RENDER FUNCTION(S) **********/

// || This function conditionally replaces the contents of the <main> tag based on the state of the store

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

/*function practice() {
  initialPage();
  changePage();
}

$(practice);*/
const firstPage = //original idea to present questions (works)
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

//USER REQUIREMENTS
//one at a time
//Display which question number user is on
//Display number correct with jQuery
//If answer is correct, move forward, otherwise ask to correct with if/else statementS
//Show results at end

//TECHNICAL REQUIREMENTS
//Create a function