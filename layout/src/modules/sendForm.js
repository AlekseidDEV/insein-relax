import {
  closeThanks
} from "./closethanks"

export const sendForm = (form) => {
  const inputs = form.querySelectorAll('input[type="text"]')
  const ckeckBox = form.querySelector('input[type="checkbox"]')

  const formData = new FormData(form)
  const formBody = {}

  formData.forEach((value, key) => {
    formBody[key] = value
  })

  const inputValid = (inputs) => {
    let succes = false

    inputs.forEach((input) => {
      if (input.value === '') {
        succes = false
      } else {
        succes = true
      }
    })

    return succes
  }


  const sendFormSever = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((r) => r.json())
  }

  if (inputValid(inputs) && ckeckBox.checked) {
    sendFormSever(formBody)
      .then(() => {
        closeThanks()
        inputs.forEach((input) =>
          input.value = ''
        )
        ckeckBox.checked = false
        document.querySelector('.popup-consultation').style.visibility = 'hidden'
      })
      .catch(() => alert('форма не отравлена, на сервере временные неполадки'))
  } else if (inputValid(inputs) && !ckeckBox.checked) {
    alert('Поставьте галочку, на согласие обработки данных')
  } else {
    alert('Заполните поля')
  }
}
