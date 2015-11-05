var person = {
  name: 'albert',
  city: 'singapore',
  age: 29,
  hobbies: ['swim', 'bike', 'run', 'photography'],
  addres: {
    city: 'singapore'
  },
  greeting: function (name) {
    console.log('hello ' + name)
    return {
      luckyNumber: Math.random()
    }
  }
}
console.log(person['name'])
console.log(person.city)
person.greeting('charlie') // hello dave
console.log(person.greeting('mike'))

var atlas = {
  'singapore': {
    population: 'too many'
  },
  'kaohsiung': {
    population: 'not too many'
  }
}

atlas[person.city]

var names = ['bob', 'alice']
var names2 = {
  0: 'bob',
  1: 'alice'
}
console.log(names[0])
console.log(names2[1])

// Constructor
function Person () {
  this.luckyNumber = Math.random()
}
Person.prototype.greeting = function (name) {
  console.log('hello ' + name)
  console.log(this.luckyNumber)
}

var albert = new Person()
var shawn = new Person()
albert.greeting()
shawn.greeting()
