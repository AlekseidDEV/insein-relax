"use strict"

const getData = () => {
    return fetch("../../db.json")
    .then((r) => r.json())
}

const authorizationUser = (form) => {
    const inputName = form.querySelector('input[type="text"]')
    const inputPass = form.querySelector('input[type="password"]')
    const errorText = form.querySelectorAll('.text-warning')

    getData()
    .then((data) => {
        if(inputName.value === '' || inputPass === ''){
            alert('заполните поля!')
        } else if(inputName.value !== data.admin[0].login ||
             inputPass.value !== data.admin[0].password){
                errorText[0].style.display = 'flex'
                errorText[1].style.display = 'flex'
                inputName.value = ''
                inputPass.value = ''
        } else if(inputName.value === data.admin[0].login &&
            inputPass.value === data.admin[0].password){
                document.cookie = 'statusUser=Authorized; path=/;'
                window.location.href = '/layout/admin/table.html'
        }
    })
}


document.addEventListener("submit", (e) => {
    e.preventDefault()

    authorizationUser(e.target)
})
