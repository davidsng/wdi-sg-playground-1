var direction = 1

window.requestAnimationFrame(function step () {
  // body...
  var logo = document.querySelector('div')
  var distance = parseInt(logo.style.top || 0, 10)
  if (distance > 200 || distance < 0) {
    direction = direction * -1
  }
  logo.style.top =
    logo.style.left =
    distance + direction * 1 + 'px'
  window.requestAnimationFrame(step)
})
