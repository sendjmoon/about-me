alert('Hi! Let\'s play a guessing game about me!');

var prompt1 = prompt('is james allergic to cats? y/n').toUpperCase();
if (prompt1 === 'YES' || prompt1 === 'Y') {
  alert('yeah it really sucks');
} else {
  alert('nah you\'re wrong');
}

var prompt2 = prompt('does james believe in aliens? y/n').toUpperCase();
if (prompt2 === 'YES' || prompt2 === 'Y') {
  alert('not really, but probability might say...');
} else {
  alert('wait til independence day and you\'ll start to believe');
}

var prompt3 = prompt('is james color blind? y/n').toUpperCase();
if (prompt3 === 'YES' || prompt3 === 'Y') {
  alert('yeah, that \'brown\' page yesterday was definitely black');
} else {
  alert('i sure hope not');
}

var prompt4 = prompt('finally, would james answer an unknown question with a yes or no?').toUpperCase();
if (prompt4 === 'YES' || prompt4 === 'Y') {
  alert('i guess you guessed right');
} else {
  alert('i guess you guessed no');
}
