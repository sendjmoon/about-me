alert('Hi! Let\'s play a guessing game about me!');

var prompt1 = prompt('is james allergic to cats? y/n').toUpperCase();
if (prompt1 === 'YES' || prompt1 === 'Y') {
  alert('yeah it really sucks');
  console.log('yes james is allergic');
} else {
  alert('nah you\'re wrong');
  console.log('actually james is allergic');
}

var prompt2 = prompt('does james believe in aliens? y/n').toUpperCase();
if (prompt2 === 'YES' || prompt2 === 'Y') {
  alert('sure and so is the matrix. we\'re in it right now');
  console.log('independence day made james a believer');
} else {
  alert('wait til independence day and you\'ll start to believe');
  console.log('go watch independence day');
}

var prompt3 = prompt('is james color blind? y/n').toUpperCase();
if (prompt3 === 'YES' || prompt3 === 'Y') {
  alert('yeah, that \'brown\' page yesterday was definitely black');
  console.log('yeah, sometimes james questions himself');
} else {
  alert('i sure hope not');
  console.log('say it ain\'t so');
}

var prompt4 = prompt('finally, would james answer an unknown question with a yes or no?').toUpperCase();
if (prompt4 === 'YES' || prompt4 === 'Y') {
  alert('i guess you guessed right');
  console.log('yes james would answer yes');
} else {
  alert('i guess you guessed no');
  console.log('no, james would answer yes');
}
