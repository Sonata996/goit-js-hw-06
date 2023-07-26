let counterValue = 0
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const sizeCounter = document.querySelector('#value')


// decrementBtn.addEventListener('click', () => {
//     counterValue -= 1
//     sizeCounter.textContent = counterValue
//     console.log(sizeCounter)
// })
// incrementBtn.addEventListener('click', () => {
//     counterValue += 1
//     sizeCounter.textContent = counterValue
// })
function onDecrementButtonClick() {
    counterValue -= 1
    sizeCounter.textContent = counterValue
    console.log(sizeCounter)
}

function onIncrementButtonClick() {
    counterValue += 1
    sizeCounter.textContent = counterValue
    console.log(sizeCounter)
}

decrementBtn.addEventListener('click', onDecrementButtonClick);
incrementBtn.addEventListener('click', onIncrementButtonClick);
