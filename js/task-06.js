const form = document.getElementById('validation-input')

function onInputFormІymbol() {

  const inputDataLength = Number(form.dataset.length)
  const inputValueLength = Number(form.value.length)

  if (inputValueLength === inputDataLength) {
      form.classList.add('valid')
      form.classList.remove('invalid')
    } else {
      form.classList.add('invalid')
      form.classList.remove('valid')
    }
}
form.addEventListener('blur', onInputFormІymbol)
// console.dir(form)