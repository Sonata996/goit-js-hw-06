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

buttonCreate.addEventListener('click', onButtonClickCreate)
buttonDestroy.addEventListener('click', onButtonClickDestroy)

let inputValue = 0
function onButtonClickCreate(event) {
  inputValue = event.currentTarget.value
}

function createBoxes(amount){
  let arrDiv = []
  let startSizaDiv = 30
  for (let i = 0; i < amount; i+= 1) {
    startSizaDiv += 10
    const divElem = document.createElement('div')
    
  }
}