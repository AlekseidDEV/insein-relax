'use strict'

const tbodyTable = document.querySelector('.tbody')
const selectType = document.querySelector('#typeItem')
const sortZone = document.querySelector('.sotr_zone')
const container = document.querySelector('.container')
const modalOverlay = document.querySelector('.modal__overlay')

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

    addRequest(){

    }

    removeRequest(){

    }

    changeRequest(){

    }
}

const requestInstance = new RequestBack()

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

const addService = () => {
    const inputs = modalOverlay.querySelectorAll('input')
    const bodyService = {}

    let succes = false

    inputs.forEach((input) => {
        if(input.value === ""){
            succes = false
        } else{
            succes = true
            bodyService[input.id] = input.value
        }
    })

    if(succes){
        console.log(bodyService);
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
        console.log('chage service');
    } else if(e.target.closest('.action-remove')){
        console.log('remove service');
    }
})

modalOverlay.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(e.target === modalOverlay || e.target.closest('.button__close')){
        modalOverlay.style.display = 'none'
    } else if(e.target.closest('.button-ui_firm')){
        addService()
    }
})