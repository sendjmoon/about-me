alert('Hi! Let\'s play a guessing game about me!');

var countRight = 0;
var numOfQuestions = 5;
var questions = ['does james snowboard? y/n', 'has james played an instrument? y/n', 'is james good at golf? y/n', 'can james eat mexican food all day? y/n', 'has james only lived in washington? y/n'];
var correctAns = ['y', 'y', 'n', 'y', 'n'];
var corrResponses = ['yep sure do!', 'right. he played the violin for 13 years.', 'geez no faith. but you\'re kinda right.', 'sure can!', 'you\'re right! i\'ve also lived in oregon'];
var wrongResponses = ['nah you\'re wrong', 'wrong answer', 'thanks, but you\'re wrong', 'challenge accepted', 'you\'re wrong!'];

for (var i = 0; i < numOfQuestions; i++) {
  var answer = prompt(questions[i].toLowerCase());
  if (answer === correctAns[i]) {
    alert(corrResponses[i]);
    countRight++;
  } else if (answer !== 'y' && answer !== 'n') {
    alert('stop breaking rules, no points for you');
  } else {
    alert(wrongResponses[i]);
  }
}

// var prompt1 = prompt('does james snowboard? y/n').toLowerCase();
// if (prompt1 === 'yes' || prompt1 === 'y') {
//   alert('yep sure do!');
//   console.log('james snowboards');
//   countRight++;
// } else {
//   alert('nah you\'re wrong');
//   console.log('uhhh james snowboards');
// }
//
// var prompt2 = prompt('has james played an instrument? y/n').toLowerCase();
// if (prompt2 === 'yes' || prompt2 === 'y') {
//   alert('right. he played the violin for 13 years');
//   console.log('james played the violin');
//   countRight++;
// } else {
//   alert('wrong answer');
//   console.log('uhhh james played the violin');
// }
//
// var prompt3 = prompt('is james good at golf? y/n').toLowerCase();
// if (prompt3 === 'yes' || prompt3 === 'y') {
//   alert('thanks, but you\'re wrong');
//   console.log('james plays golf');
// } else {
//   alert('geez no faith. but you\'re kinda right');
//   console.log('uhhh james plays golf');
//   countRight++;
// }
//
// var prompt4 = prompt('can james eat mexican food all day? y/n').toLowerCase();
// if (prompt4 === 'yes' || prompt4 === 'y') {
//   alert('sure can!');
//   console.log('james can eat mexican food all day');
//   countRight++;
// } else {
//   alert('challenge accepted');
//   console.log('uhhh wrong. james loves mexican food');
// }
//
// var prompt5 = prompt('has james only lived in washington? y/n').toLowerCase();
// if (prompt5 === 'yes' || prompt5 === 'y') {
//   alert('you\'re wrong!');
//   console.log('oregon');
// } else {
//   alert('you\'re right! i\'ve also lived in oregon');
//   console.log('james lived in oregon');
//   countRight++;
// }

var numChances = 4;
var isRight = false;
while (isRight === false) {
  for (var i = 0; i < numChances; i++) {
    var prompt6 = prompt('I\'m thinking of a number between 1-10. What is it?');
    if (isNaN(prompt6) === false) {
      if (prompt6 == 5) {
        alert('you guessed right!');
        isRight = true;
        i = numChances;
        countRight++;
      } else if (prompt6 <= 4) {
        alert('you guessed too low. try again.');
      } else if (prompt6 >= 6) {
        alert('you guessed too high. try again.');
      }
    } else {
      alert('you didn\'t choose a number! try again.');
    }
  }
  isRight = true;
}

var answers = ['seattle', 'renton', 'bellevue'];
var cityChances = 6;
var wrong = true;
while (wrong === true) {
  for (var i = 0; i < cityChances; i++) {
    var prompt7 = prompt('Where\'s a city in Washington that I\'ve lived in?').toLowerCase();
    for (var j = 0; j < answers.length; j++) {
      if (prompt7 == answers[j]) {
        alert('Congrats you\'re right! Here\'s all the possibilities: ' + answers);
        wrong = false;
        j = answers.length;
        i = cityChances;
        countRight++;
      }
    }
    if (i > 6) {
      alert('okay you\'re done. here were the possible answers: ' + answers);
    }
  }
  wrong = false;
}

alert('You got ' + countRight + ' out of 7 questions correct!');
