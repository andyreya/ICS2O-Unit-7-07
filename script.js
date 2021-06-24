// makes action occur when button is clicked

document.getElementById('button').addEventListener('click', calculate)

// creates variables

let first = 0
let second = 0
let answer = 0
let counter = 0
let negative = false

// creates the function and sets what will happen when the button is clicked

function calculate () {
  first = document.getElementById('input1').value
  second = document.getElementById('input2').value
  first = parseInt(first)
  second = parseInt(second)
  answer = 0
  negative = false

  if (first < 0) {
    negative = !negative
    first = Math.abs(first)
  }
  if (second < 0) {
    negative = !negative
    second = Math.abs(second)
  }

  for (counter = 0; counter < first; counter++) {
    answer = answer + second
  }

  if (negative) {
    answer = 0 - answer
  }

  document.getElementById('answer').innerHTML = 'Answer = ' + answer
}
