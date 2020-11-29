let input = 0;

function crease() {
  console.log(input)
  input++
  document.getElementById("label").innerHTML = input
}

function decrease() {
  console.log(input)
  input--
  document.getElementById("label").innerHTML = input
}

function reset() {
  input = 0
  document.getElementById("label").innerHTML = input
}


document.getElementById('bnt-crease').addEventListener('click', crease)
document.getElementById('bnt-decrease').addEventListener('click', decrease)
document.getElementById('bnt-reset').addEventListener('click', reset)