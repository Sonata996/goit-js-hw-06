
const form = document.querySelector('.login-form')
form.addEventListener('submit', onFormInputs)

function onFormInputs(event) {
    console.dir(event)
    event.preventDefault()
    const { email, password } = event.currentTarget.elements
    
    if (email.value === '' || password.value === '') {
      return  alert('Всі поля повинні бути заповнені.')
    } else {
        const registeredUsers = {
                email: email.value,
                password: email.value
            }
        
        console.log(registeredUsers)
    }
    
    event.currentTarget.reset()
}
