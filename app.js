alert('Hi! Let\'s play a guessing game about me!');

var countRight = 0;

//index 0 holds questions, index 1 holds correct answers, index 2 holds responses if correct, index 3 holds responses if wrong
var cities = ['seattle', 'renton', 'bellevue'];
var questions = [['does james snowboard?', 'has james played an instrument?', 'is james good at golf?', 'can james eat mexican food all day?', 'has james only lived in washington?', 'I\'m thinking of a number between 1-10. What is it?', 'Where\'s a city in Washington I have lived in?'],
['y', 'y', 'n', 'y', 'n', 5, ['seattle', 'renton', 'bellevue']],
['yep sure do!', 'right. he played the violin for 13 years.', 'geez no faith. but you\'re kinda right.', 'sure can!', 'you\'re right! I\'ve also lived in oregon', 'you guessed right', 'congrats. you\'re right. here are all the possibilities: seattle, renton, and bellevue'],
['nah you\'re wrong', 'wrong answer', 'thanks, but you\'re wrong', 'challenge accepted', 'you\'re wrong!', ['you guessed too low. try again', 'you guessed too high. try again', 'you didn\'t choose a number. try again'], 'okay you\'re done. here were the possible answers: seattle, renton, and bellevue']];


console.log(questions[0][0]);
function questionYN(q) {
  var answer = prompt(questions[0][q].toLowerCase());
  if (answer === questions[1][q]){
    alert(questions[2][q]);
    countRight++;
  } else if (answer !== 'y' && answer !== 'n') {
    alert('stop breaking the rules, no points for you');
  } else {
    alert(questions[3][q]);
  }
}

function questionGuessNum(q) {
  var numChances = 4;
  var isRight = false;
  while(isRight === false) {
    for(var i = 0; i < numChances; i++) {
      var answer = prompt(questions[0][q]);
      if (isNaN(answer) === false) {
        if (answer == 5) {
          alert(questions[2][q]);
          isRight = true;
          i = numChances;
          countRight++;
        } else if (answer < 5) {
          alert (questions[3][q][0]);
        } else if (answer > 5) {
          alert (questions[3][q][1]);
        }
      } else {
        alert(questions[3][q][2]);
      }
    }
  }
  isRight = true;
}

function questionCities(q) {
  var cityChances = 6;
  var wrong = true;
  while (wrong) {
    for (var i = 0; i < cityChances; i++) {
      var answer = prompt(questions[0][q]).toLowerCase();
      for (var j = 0; j < questions[1][6].length; j++) {
        if (answer == questions[1][6][j]) {
          alert(questions[2][q]);
          wrong = false;
          j = cities.length;
          i = cityChances;
          countRight++;
        }
      }
    }
    if (wrong) {
      alert(questions[3][6]);
    }
    wrong = false;
  }
}

function askQuestions() {
  for (var i = 0; i < 5; i++) {
    questionYN(i);
  }
}

askQuestions();
questionGuessNum(5);
questionCities(6);

alert('You got ' + countRight + ' out of 7 questions correct!');
