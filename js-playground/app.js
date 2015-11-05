function concatenate (greeting, name) {
  if (typeof greeting === 'undefined') { greeting = 'hello' }
  if (typeof name === 'undefined') { name = 'stranger' }
  return greeting + ' ' + name
}

console.log(concatenate('hello', 'albert') === 'hello albert')
console.log(concatenate() === 'hello stranger')
console.log(concatenate('hallo') === 'hallo stranger')
