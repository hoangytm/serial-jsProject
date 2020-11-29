let bn = document.getElementById('bnt')
let color = ['red','violet','blue']
bn.addEventListener('click', changeBackground)

function changeBackground() {
  let body = document.getElementById('main-menu')
  console.log(body)
  random= getRandomInt(0,3)
  body.style.backgroundColor=color[random]
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}