const form = document.getElementById('name-input')
const nameOutput = document.getElementById('name-output')

// const onResultInput = () => {
//     nameOutput.textContent = form
// }
console.dir(form)
const onResultInputValue = (event) =>{
    nameOutput.textContent = form.value
}

form.addEventListener('input', onResultInputValue)