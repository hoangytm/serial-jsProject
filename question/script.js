let plus = document.getElementById("plus")
let minus = document.getElementById('minus')

function changeStatus(currentNode) {
    let question = currentNode.parentElement.parentElement
    console.log('change status',question);
    question.classList.toggle("minus");
    setButton(currentNode)
}

function setButton(currentNode) {
    console.log(currentNode)
    currentNode.classList.toggle('show-text')
}