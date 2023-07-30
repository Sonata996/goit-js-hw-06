const form = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')


console.dir(form)
const onResultInputValue = () => {
    if (form.value === '') {
        return nameOutput.textContent ='Anonymous'
    }
   return nameOutput.textContent = form.value
}

form.addEventListener('input', onResultInputValue)