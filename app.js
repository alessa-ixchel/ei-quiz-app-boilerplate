'use strict';
$ {store.questions[0]};
/**
 * Example store structure
 */
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
$('main').html('Lets Start a Quiz!');

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

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


//USER REQUIREMENTS
//one at a time
//Display which question number user is on
//Display number correct with jQuery
//If answer is correct, move forward, otherwise ask to correct with if/else statementS
//Show results at end

//TECHNICAL REQUIREMENTS
//Create a function