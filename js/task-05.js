const form = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

// const onResultInput = () => {
//     nameOutput.textContent = form
// }
console.dir(form)
const onResultInputValue = (event) => {
    if (form.value === '') {
        return nameOutput.textContent ='Anonymous'
    }
   return nameOutput.textContent = form.value
}

form.addEventListener('input', onResultInputValue)