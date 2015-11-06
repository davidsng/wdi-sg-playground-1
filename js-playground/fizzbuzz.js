// fizzbuzz
function fizbuzzSwitch (array) {
  array.forEach(function (number) {
    switch (number % 15) {
      case 3: case 9: case 12:
        console.log('fizz') // divisible by 3
        break
      case 5: case 10:
        console.log('buzz') // divisible by 5
        break
      case 0:
        console.log('fizzbuzz') // divisible by 15
        break
      default:
        console.log(number)
    }
  })
}
function fizbuzzIfElse (array) {
  array.forEach(function (number) {
    if (number % 3 === 0) {
      if (number % 5 === 0) {
        console.log('fizzbuzz')
      } else {
        console.log('fizz')
      }
    } else {
      if (number % 5 === 0) {
        console.log('buzz')
      } else {
        console.log(number)
      }
    }
  })
}
function fizzbuzzNoFizzBuzz (array) {
  array.forEach(function (number) {
    var message = ''
    if (number % 3 === 0) message = message + 'fizz'
    if (number % 5 === 0) message = message + 'buzz'
    console.log(message || number)
  })
}
function fizzbuzzRecursive (num, max) {
  var message = ''
  if (num % 3 === 0) message = message + 'fizz'
  if (num % 5 === 0) message = message + 'buzz'
  console.log(message || num)
  if (num < max) {
    var newNum = num + 1
    fizzbuzzRecursive(newNum, max)
  }
}


// console.log(fizbuzzSwitch(numbers) === fizbuzzIfElse(numbers))
