function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divForm = document.querySelector('#controls')
const divBoxes = document.querySelector('#boxes')
const buttonCreate = document.querySelector('[data-create]')
const buttonDestroy = document.querySelector('[data-destroy]')
const inputNumber = document.querySelector('[type="number"]')

inputNumber.addEventListener('input', onValueNumber)
let inputValue = 0
function onValueNumber(event) {
 return inputValue = event.currentTarget.value
}

buttonCreate.addEventListener('click', onButtonClickCreate)

function onButtonClickCreate() {
  divBoxes.innerHTML = ''
  createBoxes(inputValue)
}



function createBoxes(amount){
  const arrDiv = []
  let startSizaDiv = 30
  for (let i = 0; i < amount; i+= 1) {
    startSizaDiv += 10
    const divElem = document.createElement('div')
    divElem.style.width = `${startSizaDiv}px`
    divElem.style.height = `${startSizaDiv}px`
    divElem.style.backgroundColor = getRandomHexColor()
    arrDiv.push(divElem)
  }
  return divBoxes.append(...arrDiv)
}

buttonDestroy.addEventListener('click', onButtonClickDestroy)
function onButtonClickDestroy() {
  divBoxes.innerHTML = ''
  inputNumber.value = ''
}
divBoxes.style.display = 'flex';
divBoxes.style.flexWrap = 'Wrap'
