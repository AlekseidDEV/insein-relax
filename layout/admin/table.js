'use strict'

const tbodyTable = document.querySelector('.tbody')
const selectType = document.querySelector('#typeItem')
const sortZone = document.querySelector('.sotr_zone')
const container = document.querySelector('.container')
const modalOverlay = document.querySelector('.modal__overlay')
const formOverlay = modalOverlay.querySelector('form')
const allInputs = formOverlay.querySelectorAll('input')
const titleForm = modalOverlay.querySelector('h3')
const btnForm = modalOverlay.querySelector('.button-ui_firm')

class RequestBack{
    getRequest(url){
        return fetch(url)
            .then((resp) => resp.json())
            .catch(() => alert("ошибка, упс"))
    }

    fillterRequest(url){
        return fetch(url)
            .then((resp) => resp.json())
            .catch(() => alert("ошибка, упс"))
    }

    sortRequest(url){
        return fetch(url)
            .then((resp) => resp.json())
            .catch(() => alert("ошибка, упс"))
    }

    addRequest(url, service){
        return fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(service),
        }).then((r) => r.json())
            .catch(() => alert('упс, ошибка'))
    }

    removeRequest(url){
        return fetch(url, {
            method: "DELETE"
        }).then((res) => res.json())
        .catch(() => alert('упс ошибка'))
    }

    changeRequest(url, obj){
        return fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        }).then((res) => res.json())
        .catch(() => alert('упс ошибка'))
    }
}

const requestInstance = new RequestBack()

let changeId = ''

const changeContent = (data) => {
    tbodyTable.innerHTML = ''

    data.forEach((obj) => {
        tbodyTable.insertAdjacentHTML("beforeend", 
            `
             <tr class="table__row">
                        <td class="table__id table__cell">${obj.id}</td>
                        <td class="table-type table__cell">${obj.type}</td>
                        <td class="table-name table__cell">
                            ${obj.name}
                        </td>
                        <td class="table-units table__cell">
                        ${obj.units}
                        </td>
                        <td class="table-cost table__cell">
                        ${obj.cost} руб
                        </td>
                        <td>
                            <div class="table__actions table__cell">
                                <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                                </button>
                                <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                                </button>
                            </div>
                        </td>
                    </tr>
            `
        )
    })
}

const changeService = () => {
    const bodyChanged = {}
    
    allInputs.forEach((input) => {
        bodyChanged[input.id] = input.value
    })

    requestInstance.changeRequest(`http://localhost:4545/dataService/${changeId}`, bodyChanged).then(() => {
        requestInstance.getRequest('http://localhost:4545/dataService').then((data) => {
                changeContent(data)
                btnForm.classList.remove('button-ui_edit')
                btnForm.classList.add('button-ui_firm')
                modalOverlay.querySelector('form').reset()
                modalOverlay.style.display = 'none'
                selectType.value = 'Все услуги'
            })
    })
}

const formChangeService = (changedServ) => {
    const allFields = changedServ.querySelectorAll('td')

    titleForm.textContent = "Изменение услуги"
    allInputs[0].value = allFields[1].innerText
    allInputs[1].value = allFields[2].innerText
    allInputs[2].value = allFields[3].innerText
    allInputs[3].value = allFields[4].innerText

    changeId = allFields[0].innerText

    btnForm.classList.remove('button-ui_firm')
    btnForm.classList.add('button-ui_edit')

    modalOverlay.style.display = 'flex'
}

const removeService = (tr) => {
    const searchIdService = tr.querySelector('.table__id')
    requestInstance.removeRequest(`http://localhost:4545/dataService/${searchIdService.innerText}`).then(() => {
        requestInstance.getRequest('http://localhost:4545/dataService').then((data) => {
            changeContent(data)
            selectType.value = 'Все услуги'
        })
    })
    alert(`услуга с id: ${searchIdService.innerText} успешно удалена`)
}

const addService = () => {
    const inputs = modalOverlay.querySelectorAll('input')
    const bodyService = {}

    const randomId = Math.floor(Math.random() * 10000000000);

    let succes = false

    inputs.forEach((input) => {
        if(input.value === ""){
            succes = false
        } else{
            succes = true
            bodyService[input.id] = input.value
            bodyService["id"] = `${randomId}`
        }
    })

    if(succes){
        requestInstance.addRequest('http://localhost:4545/dataService', bodyService).then(() => {
            requestInstance.getRequest('http://localhost:4545/dataService').then((data) => {
                changeContent(data)
                modalOverlay.querySelector('form').reset()
                modalOverlay.style.display = 'none'
                selectType.value = 'Все услуги'
            })
        })
        alert("услуга успешно добавлена")
    } else{
        alert('заполните поля')
    }
}

const sortableData = (sortStr) => {
    requestInstance.fillterRequest(`http://localhost:4545/dataService?_sort=${sortStr}`).then((data) => {
        changeContent(data)
    })
}

const filterData = (typeService) => {
    requestInstance.fillterRequest(`http://localhost:4545/dataService?type=${typeService}`).then((data) => {
        changeContent(data)
    })
}

const startRenderTable = () => {
    tbodyTable.innerHTML = ''

    requestInstance.getRequest('http://localhost:4545/dataService').then((data) => {
        data.forEach((obj) => {
            tbodyTable.insertAdjacentHTML("beforeend", 
                `
                 <tr class="table__row">
							<td class="table__id table__cell">${obj.id}</td>
							<td class="table-type table__cell">${obj.type}</td>
							<td class="table-name table__cell">
                                ${obj.name}
							</td>
							<td class="table-units table__cell">
                            ${obj.units}
							</td>
							<td class="table-cost table__cell">
                            ${obj.cost} руб
							</td>
							<td>
								<div class="table__actions table__cell">
									<button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
									</button>
									<button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
									</button>
								</div>
							</td>
						</tr>
                `
            )
        })
    })
}

const authorizationCheck = () => {

    const userStatus = document.cookie.split('=').slice(1)

    if(userStatus[0] === "notAuthorized"){
        window.location.href = '/layout/index.html'
    } else if(userStatus[0] === "Authorized"){
        startRenderTable()
    }
}

authorizationCheck()



selectType.addEventListener('change', (e) => {
    if(e.target.value === 'Все услуги'){
        startRenderTable()
    } else{
        filterData(e.target.value)
    }
})

sortZone.addEventListener('click', (e) => {
    if(e.target.matches('th') && e.target.innerText !== 'Действия'){
        sortableData(e.target.classList[1].slice(3))
    }
})

container.addEventListener('click', (e) => {
    if(e.target.closest('.btn-addItem')){
        modalOverlay.style.display = 'flex'
    } else if(e.target.closest('.action-change')){
        formChangeService(e.target.closest('tr'))
    } else if(e.target.closest('.action-remove')){
        removeService(e.target.closest('tr'))
    }
})

modalOverlay.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(e.target === modalOverlay || e.target.closest('.button__close') || e.target.closest('.cancel-button')){
        modalOverlay.style.display = 'none'
    } else if(e.target.closest('.button-ui_firm')){
        addService()
    } else if(e.target.closest('.button-ui_edit')){
        changeService()
    }
})