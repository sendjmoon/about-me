alert('Hi! Let\'s play a guessing game about me!');

var countRight = 0;
var questions = ['does james snowboard? y/n', 'has james played an instrument? y/n', 'is james good at golf? y/n', 'can james eat mexican food all day? y/n', 'has james only lived in washington? y/n', 'I\'m thinking of a number between 1-10. What is it?', 'Where\'s a city in Washington I have lived in?'];
var correctAns = ['y', 'y', 'n', 'y', 'n', 5, ['seattle', 'renton', 'bellevue']];
var corrResponses = ['yep sure do!', 'right. he played the violin for 13 years.', 'geez no faith. but you\'re kinda right.', 'sure can!', 'you\'re right! i\'ve also lived in oregon', 'you guessed right', 'congrats. you\'re right. here are all the possibilities: ' + correctAns[6]];
var wrongResponses = ['nah you\'re wrong', 'wrong answer', 'thanks, but you\'re wrong', 'challenge accepted', 'you\'re wrong!', ['you guessed too low. try again', 'you guessed too high. try again', 'you didn\'t choose a number. try again'], 'okay you\'re done. here were the possible answers: ' + correctAns[6]];

questionYN = function(q) {
  var answer = prompt(questions[q].toLowerCase());
  if (answer === correctAns[q]){
    alert(corrResponses[q]);
    countRight++;
  } else if (answer !== 'y' && answer !== 'n') {
    alert('stop breaking the rules, no points for you');
  } else {
    alert(wrongResponses[q]);
  }
};

questionGuessNum = function(q) {
  var numChances = 4;
  var isRight = false;
  while(isRight === false) {
    for(var i = 0; i < numChances; i++) {
      var answer = prompt(questions[q]);
      if (isNaN(answer) === false) {
        if (answer == 5) {
          alert(corrResponses[q]);
          isRight = true;
          i = numChances;
          countRight++;
        } else if (answer < 5) {
          alert (wrongResponses[q][0]);
        } else if (answer > 5) {
          alert (wrongResponses[q][1]);
        }
      } else {
        alert(wrongResponses[q][2]);
      }
    }
  }
  isRight = true;
};

questionCities = function(q) {
  var cityChances = 6;
  var wrong = true;
  while (wrong === true) {
    console.log('while loop ran');
    for (var i = 0; i < cityChances; i++) {
      console.log('outside for loop ran');
      var answer = prompt(questions[q]).toLowerCase();
      for (var j = 0; j < correctAns[q].length; j++) {
        console.log('inside for loop ran');
        if (answer == correctAns[q][j]) {
          alert(corrResponses[q]);
          wrong = false;
          j = correctAns[q].length;
          i = cityChances;
          countRight++;
        }
      }
    }
    if (wrong === true) {
      alert(wrongResponses[6]);
    }
    wrong = false;
  }
};

questionYN(0);
questionYN(1);
questionYN(2);
questionYN(3);
questionYN(4);
questionGuessNum(5);
questionCities(6);

alert('You got ' + countRight + ' out of 7 questions correct!');
