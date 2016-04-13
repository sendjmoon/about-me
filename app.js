alert('Hi! Let\'s play a guessing game about me!');

var prompt1 = prompt('does james snowboard? y/n').toLowerCase();
if (prompt1 === 'yes' || prompt1 === 'y') {
  alert('yep sure do!');
  console.log('james snowboards');
} else {
  alert('nah you\'re wrong');
  console.log('uhhh james snowboards');
}

var prompt2 = prompt('has james played an instrument? y/n').toLowerCase();
if (prompt2 === 'yes' || prompt2 === 'y') {
  alert('right. he played the violin for 13 years');
  console.log('james played the violin');
} else {
  alert('wrong answer');
  console.log('uhhh james played the violin');
}

var prompt3 = prompt('is james good at golf? y/n').toLowerCase();
if (prompt3 === 'yes' || prompt3 === 'y') {
  alert('thanks, but only good enough to get by');
  console.log('james plays golf');
} else {
  alert('geez no faith');
  console.log('uhhh james plays golf');
}

var prompt4 = prompt('can james eat mexican food all day? y/n').toLowerCase();
if (prompt4 === 'yes' || prompt4 === 'y') {
  alert('sure can!');
  console.log('james can eat mexican food all day');
} else {
  alert('challenge accepted');
  console.log('uhhh wrong. james loves mexican food');
}

var prompt5 = prompt('has james lived anywhere other than seattle? y/n').toLowerCase();
if (prompt5 === 'yes' || prompt5 === 'y') {
  alert('you\'re wrong!');
  console.log('james has never lived anywhere else');
} else {
  alert('you\'re right! i\'ve lived in seattle my whole life');
  console.log('james hasn\'t lived anywhere else');
}

var chances = 4;
var isRight = false;
while (isRight === false) {
  for (var i = 0; i < chances; i++) {
    var prompt6 = prompt('I\'m thinking of a number between 1-10. What is it?');
    if (isNaN(prompt6) === false) {
      if (prompt6 == 5) {
        alert('you guessed right!');
        isRight = true;
        i = chances;
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
