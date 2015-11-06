var player = true
var body = document.querySelector('body')
var moves = 1
var winner = ''

body.addEventListener('click', function (event) {
  var tile = event.target
  if (tile.className !== 'tile') return
  if (tile.textContent) return
  player ? mark(tile, 'X') : mark(tile, 'O')
  findWinner()
  changePlayer()
})

function mark (tile, mark) {
  tile.textContent = mark
}
function changePlayer () {
  player = !player
}

function findWinner () {
  var tiles = document.querySelectorAll('.tile')
  // tiles layout by index
  // [0] [1] [2]
  // [3] [4] [5]
  // [6] [7] [8]

  // check for 3 in a row
  checkTiles(tiles[0], tiles[1], tiles[2])
  checkTiles(tiles[3], tiles[4], tiles[5])
  checkTiles(tiles[6], tiles[7], tiles[8])
  // check for 3 in a column
  checkTiles(tiles[0], tiles[3], tiles[6])
  checkTiles(tiles[1], tiles[4], tiles[7])
  checkTiles(tiles[2], tiles[5], tiles[8])
  // check for 3 diagonal
  checkTiles(tiles[0], tiles[4], tiles[8])
  checkTiles(tiles[2], tiles[4], tiles[6])
  if (winner && moves === 9) {
    alert('It\'s a tie!')
  } else {
    moves = moves + 1
  }
}

function checkTiles (a, b, c) {
  if (a.textContent && b.textContent && c.textContent) {
    if ((a.textContent === b.textContent) && (a.textContent === c.textContent)) {
      winner = a.textContent
      alert('Winner is: ' + winner)
    } else {
      return false
    }
  }
}

// function checkMark (tile) {
//   console.log(tile.textContent)
//   return tile.textContent
// }
