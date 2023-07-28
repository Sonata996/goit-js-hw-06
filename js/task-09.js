const randomButtonColor = document.querySelector('.change-color')
const nameRandomColor = document.querySelector('.color')
const body = document.body

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    }`;
}

function onBackgroundColorRandomClick() {
  nameRandomColor.textContent = getRandomHexColor()
  body.style.backgroundColor = getRandomHexColor()

}



randomButtonColor.addEventListener('click', onBackgroundColorRandomClick)